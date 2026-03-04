import { lazy, Suspense, useCallback } from "react";
import useIsDesktop from "../../hooks/useIsDesktop";
import Loader from "../Loader";

export default function Navbar() {
  //  hooks
  const isDesktop = useIsDesktop();

  // finding current route
  const isActive = useCallback(
    (path) =>
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path)),
    [location.pathname],
  );

  // lazy load based on condition
  const NavbarComponent = lazy(() =>
    isDesktop ? import("./desktopView/DesktopNavbar") : import("./mobileView/MobileNavbar"),
  );

  return (
    <Suspense fallback={<Loader />}>
      <NavbarComponent
        isActive={isActive}
      />
    </Suspense>
  );
}
