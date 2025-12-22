import { Box, Chip } from "@mui/material";
import { categories } from "../../data/projectsData";

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <Box
      sx={{
        mb: 8,
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
          sx={{
            px: 2,
            py: 1,
            fontWeight: 500,
            borderRadius: "999px",
            background:
              selectedCategory === cat
                ? "rgba(250,90,41,0.15)"
                : "rgba(255,255,255,0.06)",
            border:
              selectedCategory === cat
                ? "1px solid rgba(250,90,41,0.6)"
                : "1px solid rgba(255,255,255,0.15)",
            color:
              selectedCategory === cat
                ? "#fa5a29"
                : "rgba(255,255,255,0.7)",
            transition: "all 0.25s ease",
            "&:hover": {
              borderColor: "#fa5a29",
              color: "#fa5a29",
              transform: "translateY(-2px)",
            },
          }}
        />
      ))}
    </Box>
  );
}
