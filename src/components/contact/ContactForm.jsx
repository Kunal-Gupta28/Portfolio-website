import { useEffect, useRef, memo } from "react";
import useContactForm from "../../hooks/useContactForm";

const fieldConfig = [
  { name: "name", label: "Who’s reaching out?", placeholder: "John Doe" },
  { name: "email", label: "Drop your email", placeholder: "john@example.com" },
  { name: "subject", label: "What brings you here?", placeholder: "Project Inquiry / Collaboration" },
];

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function ContactForm() {
  const {
    formData,
    errors,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const isDisabled =
    loading ||
    !formData.name ||
    !isValidEmail(formData.email) || 
    !formData.subject ||
    !formData.message;

  return (
    <div className="
      rounded-3xl
      border
      border-white/15
      bg-gradient-to-br
      from-white/10
      to-white/5
      p-6
      md:p-10
      shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      backdrop-blur-xl
    ">
      {/* Heading */}
      <h3 className="mb-6 text-center text-2xl md:text-3xl font-bold text-[#fa5a29]">
        Get in Touch
      </h3>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {fieldConfig.map((field, index) => (
          <div key={field.name} className="space-y-1.5">
            <label htmlFor={field.name} className="block text-xs font-medium text-white/70">
              {field.label}
            </label>
            <input
              id={field.name}
              ref={index === 0 ? firstInputRef : null}
              type={field.name === "email" ? "email" : "text"}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              autoComplete={field.name}
              className={`
                w-full
                rounded-xl
                border
                bg-black/40
                px-4
                py-3
                text-sm
                text-white
                placeholder-white/30
                outline-none
                transition-all
                duration-200
                focus:border-[#fa5a29]
                focus:ring-2
                focus:ring-[#fa5a29]/25
                ${errors[field.name] ? "border-red-500" : "border-white/20 hover:border-[#fa5a29]/50"}
              `}
            />
            {errors[field.name] && (
              <p className="text-xs text-red-400 mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-xs font-medium text-white/70">
            Let’s build something amazing…
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell me about your project or idea..."
            value={formData.message}
            onChange={handleChange}
            className={`
              w-full
              rounded-xl
              border
              bg-black/40
              px-4
              py-3
              text-sm
              text-white
              placeholder-white/30
              outline-none
              transition-all
              duration-200
              resize-none
              focus:border-[#fa5a29]
              focus:ring-2
              focus:ring-[#fa5a29]/25
              ${errors.message ? "border-red-500" : "border-white/20 hover:border-[#fa5a29]/50"}
            `}
          />
          {errors.message && (
            <p className="text-xs text-red-400 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Success / Error Messages */}
        {(success || error) && (
          <div className={`mt-2 text-center text-sm font-medium ${success ? "text-emerald-400" : "text-rose-400"}`}>
            {success || error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isDisabled}
          className={`
            mt-4
            flex
            w-full
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-[#fa5a29]
            to-[#ff7a50]
            py-3.5
            px-6
            text-sm
            font-bold
            tracking-wide
            text-white
            shadow-[0_6px_20px_rgba(250,90,41,0.35)]
            transition-all
            duration-200
            cursor-pointer
            hover:-translate-y-0.5
            hover:shadow-[0_10px_30px_rgba(250,90,41,0.5)]
            active:scale-[0.98]
            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:translate-y-0
            disabled:hover:shadow-none
          `}
        >
          {loading ? (
            <svg className="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Let’s Talk"
          )}
        </button>
      </form>
    </div>
  );
}

export default memo(ContactForm);
