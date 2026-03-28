import { lazy, Suspense } from "react";
import useIsDesktop from "../../hooks/useIsDesktop";
import Loader from "../PageLoader";

// Lazy load
const DesktopNavbar = lazy(() => import("./desktopView/DesktopNavbar"));
const MobileNavbar = lazy(() => import("./mobileView/MobileNavbar"));

export default function Navbar({pathname}) {
  const isDesktop = useIsDesktop();
  const Component = isDesktop ? DesktopNavbar : MobileNavbar;

  return (
    <Suspense fallback={<Loader />}>
      <Component pathname={pathname} />
    </Suspense>
  );
}
