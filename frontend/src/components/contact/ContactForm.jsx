import { useEffect, useRef, memo } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";

// custom hook
import useContactForm from "../../hooks/useContactForm";

const fieldConfig = [
  { name: "name", label: "Who’s reaching out?" },
  { name: "email", label: "Drop your email" },
  { name: "subject", label: "What brings you here?" },
];

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function ContactForm() {
  const {
    formData,
    errors,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const isDisabled =
    loading ||
    !formData.name ||
    !isValidEmail(formData.email) || 
    !formData.subject ||
    !formData.message;

  return (
    <Paper sx={paperStyles}>
      {/* Heading */}
      <Typography sx={headingStyles}>Get in Touch</Typography>

      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2.5}>
          {fieldConfig.map((field, index) => (
            <Grid item xs={12} key={field.name}>
              <TextField
                fullWidth
                inputRef={index === 0 ? firstInputRef : null}
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                error={Boolean(errors[field.name])}
                helperText={errors[field.name]}
                autoComplete={field.name}
                InputLabelProps={labelProps}
                sx={inputStyles}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Let’s build something amazing…"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={Boolean(errors.message)}
              helperText={errors.message}
              InputLabelProps={labelProps}
              sx={inputStyles}
            />
          </Grid>

          <Grid item xs={12}>
            <Fade in={Boolean(success || error)}>
              <Typography sx={success ? successText : errorText}>
                {success || error}
              </Typography>
            </Fade>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              disabled={isDisabled}
              sx={submitBtn}
              aria-busy={loading}
            >
              {loading ? (
                <CircularProgress size={22} sx={{ color: "#fff" }} />
              ) : (
                "Let’s Talk"
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default memo(ContactForm);

// ---------------- STYLES ----------------

const labelProps = {
  style: {
    color: "#bbb",
    fontSize: "14px",
  },
};

const paperStyles = {
  p: { xs: 2.5, md: 4 },
  borderRadius: "24px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  backdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
};

const headingStyles = {
  mb: 3,
  fontSize: { xs: 22, md: 28 },
  fontWeight: 600,
  color: "#fa5a29",
  textAlign: "center",
};

const inputStyles = {
  input: { color: "#fff" },
  textarea: { color: "#fff" },

  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    transition: "all 0.25s ease",

    "& fieldset": {
      borderColor: "rgba(255,255,255,0.2)",
    },

    "&:hover fieldset": {
      borderColor: "#fa5a29",
    },

    "&.Mui-focused": {
      boxShadow: "0 0 0 2px rgba(250,90,41,0.25)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#fa5a29",
    },
  },
};

const submitBtn = {
  mt: 2,
  py: 1.5,
  borderRadius: "999px",
  background: "linear-gradient(135deg, #fa5a29, #ff7a50)",
  color: "#fff",
  fontWeight: 600,
  letterSpacing: "0.5px",
  transition: "all 0.25s ease",
  boxShadow: "0 6px 20px rgba(250,90,41,0.35)",

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 30px rgba(250,90,41,0.5)",
    background: "linear-gradient(135deg, #ff7a50, #fa5a29)",
  },

  "&:active": {
    transform: "scale(0.98)",
  },

  "&.Mui-disabled": {
    background: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.4)",
    boxShadow: "none",
  },
};

const successText = {
  color: "#4caf50",
  fontSize: 14,
  textAlign: "center",
  mt: 1,
};

const errorText = {
  color: "#f44336",
  fontSize: 14,
  textAlign: "center",
  mt: 1,
};
