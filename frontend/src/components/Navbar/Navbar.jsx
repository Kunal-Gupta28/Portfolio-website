import { lazy, Suspense } from "react";
import useIsDesktop from "../../hooks/useIsDesktop";

// Lazy load
const DesktopNavbar = lazy(() => import("./desktopView/DesktopNavbar"));
const MobileNavbar = lazy(() => import("./mobileView/MobileNavbar"));

const NavbarSkeleton = () => (
  <div className="h-16 w-full bg-black/50 backdrop-blur-md fixed top-0 z-50 pointer-events-none" />
);

export default function Navbar({ pathname }) {
  const isDesktop = useIsDesktop();
  const Component = isDesktop ? DesktopNavbar : MobileNavbar;

  return (
    <Suspense fallback={<NavbarSkeleton />}>
      <Component pathname={pathname} />
    </Suspense>
  );
}
