import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/PageLoader";
import useIsDesktop from "./hooks/useIsDesktop";
import Footer from "./components/Footer/Footer";
import GlassCursor from "./components/GlassCursor";
import SmoothScroll from "./components/SmoothScroll";
import { LoaderProvider, useLoader } from "./context/LoaderContext";

// lazy loading
const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AppContent() {
  const isDesktop = useIsDesktop();
  const location = useLocation();
  const { loading, setLoading } = useLoader();

  const isContactPage = location.pathname === "/contact";

  //  Stop loader after navigation completes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 350); // smooth timing

    return () => clearTimeout(timeout);
  }, [location.pathname, setLoading]);

  const content = (
    <>
      {isDesktop && <GlassCursor />}

      <Navbar pathname={location.pathname} />

      {/* Instant loader */}
      {loading && <Loader />}

      {/*  Lazy loading fallback */}
      <Suspense fallback={<Loader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {!isContactPage && <Footer />}
    </>
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