import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing components
import Navbar from "./components/Navbar/Navbar";
import BallFollower from "./components/BallFollower";
import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/Loader";

/* Lazy-loaded pages */
const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  // timer for loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) return <Loader />;

  return (
    <SmoothScroll>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        {/* Always visible */}
        <BallFollower />
        <Navbar />

        {/* Lazy-loaded routes */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </SmoothScroll>
  );
};

export default App;
