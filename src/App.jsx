import { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Loader from "./components/PageLoader";
import useIsDesktop from "./hooks/useIsDesktop";
import Footer from "./components/Footer/Footer";
import GlassCursor from "./components/GlassCursor";
import SmoothScroll from "./components/SmoothScroll";
import TorchGlow from "./components/shared/TorchGlow";
import CommandPalette from "./components/shared/CommandPalette";
import { LoaderProvider, useLoader } from "./context/LoaderContext";

// Lazy loaded page components for multi-route setup
const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AppContent() {
  const isDesktop = useIsDesktop();
  const location = useLocation();
  const { loading, setLoading } = useLoader();
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Stop loader after navigation completes & scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.pathname, setLoading]);

  const content = (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f3ef] selection:bg-[#ff5a1f] selection:text-white">
      {isDesktop && <GlassCursor />}
      {isDesktop && <TorchGlow />}

      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />

      {loading && <Loader />}

      <Suspense fallback={<Loader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );

  return isDesktop ? <SmoothScroll>{content}</SmoothScroll> : content;
}

const App = () => {
  return (
    <LoaderProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppContent />
      </Router>
    </LoaderProvider>
  );
};

export default App;