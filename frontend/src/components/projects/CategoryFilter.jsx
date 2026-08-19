import { memo } from "react";
import { categories } from "../../data/projectsData";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3 md:mb-12 lg:mb-16">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`
              rounded-full
              px-4
              py-2
              text-sm
              font-medium
              transition-all
              duration-250
              cursor-pointer
              ${isSelected
                ? "border border-[#fa5a29]/60 bg-[#fa5a29]/15 text-[#fa5a29] shadow-[0_0_15px_rgba(250,90,41,0.25)]"
                : "border border-white/15 bg-white/5 text-white/70 hover:-translate-y-0.5 hover:border-[#fa5a29] hover:text-[#fa5a29]"
              }
            `}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default memo(CategoryFilter);
