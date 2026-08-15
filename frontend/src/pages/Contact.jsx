import { useState, useEffect, lazy, Suspense, useCallback } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useIsDesktop from "../hooks/useIsDesktop";
import ContactActions from "../components/contact/ContactActions";

const SplineScene = lazy(() => import("../components/SplineScene"));

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const isDesktop = useIsDesktop();

  useDocumentTitle("Contact | Kunal Gupta");

  const handleShowForm = useCallback(() => setShowForm(true), []);
  const handleHideForm = useCallback(() => setShowForm(false), []);

  useEffect(() => {
    if (showForm) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showForm]);

  return (
    <main
      className="
        flex
        min-h-svh
        w-full
        items-center
        bg-black
        bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.04),transparent_40%)]
        py-12
      "
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* LEFT: Spline */}
          {isDesktop && (
            <div className="w-full">
              <Suspense fallback={<div className="aspect-square w-full" />}>
                <SplineScene />
              </Suspense>
            </div>
          )}

          {/* RIGHT: Contact */}
          <div className="w-full">
            <ContactActions
              showForm={showForm}
              onShowForm={handleShowForm}
              onHideForm={handleHideForm}
            />
          </div>
        </div>
      </div>
    </main>
  );
}