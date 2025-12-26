import { useState, useEffect, lazy, Suspense } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

// importing components
import useDocumentTitle from "../hooks/useDocumentTitle";
import ContactLayout from "../components/contact/ContactLayout";
import ContactActions from "../components/contact/ContactActions";

// Lazy load Spline
const Spline = lazy(() =>
  import("../components/Spline")
);

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useDocumentTitle("Contact | Kunal Gupta");

  useEffect(() => {
    if (showForm) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showForm]);

  return (

    // layout
    <ContactLayout
      left={
        isDesktop ? (
          <Suspense fallback={null}>
            <Spline />
          </Suspense>
        ) : null
      }
      
      // contact form
      right={
        <ContactActions
          showForm={showForm}
          onShowForm={() => setShowForm(true)}
          onHideForm={() => setShowForm(false)}
        />
      }
    />
  );
}
