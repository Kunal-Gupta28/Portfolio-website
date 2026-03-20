import { useState, useCallback, useRef, useEffect } from "react";
import axiosInstance from "../config/axios";

// client data
const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// regex
const emailRegex =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export default function useContactForm() {

  // state variables and refs
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef(formData);

  useEffect(() => {
    formRef.current = formData;
  }, [formData]);

  // data change handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) =>
      prev[name] ? { ...prev, [name]: "" } : prev
    );
  }, []);

  const validateForm = useCallback((data) => {
    const newErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!data.subject.trim()) newErrors.subject = "Subject is required";
    if (!data.message.trim()) newErrors.message = "Message is required";

    setErrors((prev) =>
      JSON.stringify(prev) === JSON.stringify(newErrors)
        ? prev
        : newErrors
    );

    return Object.keys(newErrors).length === 0;
  }, []);

  // form submit handler
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const data = formRef.current;

    if (!validateForm(data)) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const { status } = await axiosInstance.post("/contact", data);

      if (status === 201) {
        setSuccess("Message sent successfully!");
        setFormData(initialState);
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, [validateForm]);

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setSuccess("");
    setError("");
  }, []);

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.subject &&
    formData.message;

  return {
    formData,
    errors,
    loading,
    success,
    error,
    isFormValid,
    handleChange,
    handleSubmit,
    resetForm,
  };
}