import { useState, useEffect, lazy, Suspense, useCallback } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import useDocumentTitle from "../hooks/useDocumentTitle";
import useIsDesktop from "../hooks/useIsDesktop";
import ContactActions from "../components/contact/ContactActions";

const SplineScene = lazy(() => import("../components/SplineScene"));

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const isDesktop = useIsDesktop();

  useDocumentTitle("Contact | Kunal Gupta");

  const handleShowForm = useCallback(() => setShowForm(true), []);
  const handleHideForm = useCallback(() => setShowForm(false), []);

  useEffect(() => {
    if (showForm) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showForm]);

  return (
    <Box
      sx={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,106,0,0.08), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.04), transparent 40%),
          #000
        `,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          
          {/* LEFT: Spline */}
          {isDesktop && (
            <Grid item md={6}>
              <Suspense fallback={<div />}>
                <SplineScene />
              </Suspense>
            </Grid>
          )}

          {/* RIGHT: Contact */}
          <Grid item xs={12} md={isDesktop ? 6 : 12}>
            <ContactActions
              showForm={showForm}
              onShowForm={handleShowForm}
              onHideForm={handleHideForm}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}