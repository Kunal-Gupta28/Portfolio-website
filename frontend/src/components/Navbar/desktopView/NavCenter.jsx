import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { navItems } from "../../../data/navData";
import NavItem from "./NavItem";
import { useLoader } from "../../../context/LoaderContext";

const NavCenter = memo(({ showExpanded, pathname }) => {
  const { setLoading } = useLoader();
  const navigate = useNavigate();

  // handle nav link click
  const handleNavClick = useCallback(
    (item) => {
      if (item.external) {
        window.open(item.url, "_blank", "noopener,noreferrer");
      } else {
        setLoading(true);
        navigate(item.path);
      }
    },
    [navigate, setLoading],
  );

  return (
    <div className="flex flex-1 justify-center">
      <div className="flex items-center gap-2">
        {navItems.filter((item) => item.key !== "contact").map((item) => {
          const active =
            pathname === item.path ||
            (item.path !== "/" && pathname.startsWith(item.path));

          return (
            <NavItem
              key={item.key}
              item={item}
              active={active}
              showExpanded={showExpanded}
              onClick={() => handleNavClick(item)}
            />
          );
        })}
      </div>
    </div>
  );
});

export default NavCenter;
