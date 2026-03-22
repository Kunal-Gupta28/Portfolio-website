import { lazy, Suspense, useCallback } from "react";
import { useLocation } from "react-router-dom";
import useIsDesktop from "../../hooks/useIsDesktop";
import Loader from "../PageLoader";

// Lazy load (outside component)
const DesktopNavbar = lazy(() => import("./desktopView/DesktopNavbar"));
const MobileNavbar = lazy(() => import("./mobileView/MobileNavbar"));

export default function Navbar() {
  const isDesktop = useIsDesktop();
  const location = useLocation();

  // Active route checker
  const isActive = useCallback(
    (path) =>
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path)),
    [location.pathname]
  );

  // Select component
  const Component = isDesktop ? DesktopNavbar : MobileNavbar;

  return (
    <Suspense fallback={<Loader />}>
      <Component isActive={isActive} />
    </Suspense>
  );
}