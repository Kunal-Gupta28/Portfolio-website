import { memo } from "react";

const NavItem = memo(({ item, active, showExpanded, onClick }) => {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        text-xs
        font-medium
        transition-all
        duration-200
        cursor-pointer
        px-2
        py-1
        flex
        items-center
        justify-center
        ${
          active
            ? "text-[#fa5a29] opacity-100 scale-105 font-semibold"
            : "text-white opacity-60 hover:opacity-100 hover:scale-105"
        }
      `}
    >
      {showExpanded ? item.label : <Icon />}
    </button>
  );
});

export default NavItem;