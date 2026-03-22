import { lazy, Suspense } from "react";
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

const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const GlassCursor = lazy(() => import("./components/GlassCursor"));
const SmoothScroll = lazy(() => import("./components/SmoothScroll"));

/* ✅ Move logic here */
function AppContent() {
  const isDesktop = useIsDesktop();
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  const content = (
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

      {!isContactPage && <Footer />}
    </>
  );

  return isDesktop ? (
    <Suspense fallback={null}>
      <SmoothScroll>{content}</SmoothScroll>
    </Suspense>
  ) : (
    content
  );
}

/* Root */
const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppContent />
    </Router>
  );
};

export default App;