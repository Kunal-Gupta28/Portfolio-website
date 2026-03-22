import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function ContactLayout({ left, right }) {
  return (
    <Box
      sx={{
        minHeight: "100svh",
        display: "flex",
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,106,0,0.08), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.04), transparent 40%),
          #000
        `,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center", 
          justifyContent: "center",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
        >
          {/* left part ( Spline – visible only on desktop ) */}
          <Grid item xs={12} md={6}>
            {left}
          </Grid>

          {/* right part (Cards) */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {right}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
