import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ContactSection from "../components/contact/ContactSection";

export default function Contact() {
  useDocumentTitle("Contact | Kunal Gupta — Software Engineer");

  return (
    <main className="w-full bg-[#050505] pt-16">
      <ContactSection />
    </main>
  );
}