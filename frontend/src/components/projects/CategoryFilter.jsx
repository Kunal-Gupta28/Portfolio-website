import { memo } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { categories } from "../../data/projectsData";

const chipBaseStyle = {
  py: 1,
  fontWeight: 500,
  borderRadius: "999px",
  transition: "all 0.25s ease",
  "&:hover": {
    borderColor: "#fa5a29",
    color: "#fa5a29",
    transform: "translateY(-2px)",
  },
};

const getChipStyle = (selected) => ({
  ...chipBaseStyle,
  px: { xs: 0.1, md: 2 },
  background: selected
    ? "rgba(250,90,41,0.15)"
    : "rgba(255,255,255,0.06)",
  border: selected
    ? "1px solid rgba(250,90,41,0.6)"
    : "1px solid rgba(255,255,255,0.15)",
  color: selected ? "#fa5a29" : "rgba(255,255,255,0.7)",
});

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <Box
      sx={{
        mb: { xs: 4, md: 6, lg: 8 },
        display: "flex",
        justifyContent: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {categories.map((cat) => (
        <Chip
          key={cat}
          label={cat}
          onClick={() => setSelectedCategory(cat)}
          sx={getChipStyle(selectedCategory === cat)}
        />
      ))}
    </Box>
  );
}

export default memo(CategoryFilter);
