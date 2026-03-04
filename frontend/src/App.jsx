import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader";
import useIsDesktop from "./hooks/useIsDesktop";

/* Lazy-loaded pages */
const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

/* Lazy-loaded desktop-only effects */
const GlassCursor = lazy(() => import("./components/GlassCursor"));
const SmoothScroll = lazy(() => import("./components/SmoothScroll"));

const App = () => {
  const isDesktop = useIsDesktop();

  const AppContent = (
    <>
      {isDesktop && (
        <Suspense fallback={null}>
          <GlassCursor />
        </Suspense>
      )}

      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {isDesktop ? (
        <Suspense fallback={null}>
          <SmoothScroll>{AppContent}</SmoothScroll>
        </Suspense>
      ) : (
        AppContent
      )}
    </Router>
  );
};

export default App;