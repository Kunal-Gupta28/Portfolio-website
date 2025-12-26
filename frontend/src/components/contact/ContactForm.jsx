import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

// importing component
import useContactForm from "../../hooks/useContactForm";

export default function ContactForm() {
  // context api
  const {
    formData,
    errors,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <Paper
      sx={{
        p: {xs:2,md:4},
        borderRadius: "20px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* heading  */}
      <Typography variant="h5" sx={{ mb: {xs:2,md:3},fontSize: {xs:20,md:28}, fontWeight: 600, color: "#fa5a29" }}>
        Send Message
      </Typography>

      {/* form */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={{xs:0.7,md:2}}>

          {/* name , email , subject field */}
          {["name", "email", "subject"].map((field) => (
            <Grid item xs={12} key={field}>
              <TextField
                fullWidth
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                error={Boolean(errors[field])}
                helperText={errors[field]}
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={inputStyles}
              />
            </Grid>
          ))}

          {/* message text area */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={Boolean(errors.message)}
              helperText={errors.message}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={inputStyles}
            />
          </Grid>

          {/* notification : for success */}
          {success && (
            <Grid item xs={12}>
              <Typography sx={{ color: "#4caf50" }}>{success}</Typography>
            </Grid>
          )}

          {/* notificaiton : for error */}
          {error && (
            <Grid item xs={12}>
              <Typography sx={{ color: "#f44336" }}>{error}</Typography>
            </Grid>
          )}

          {/* send message button + loader  */}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              size="large"
              disabled={loading}
              sx={{
                mt: 2,
                py: 1.4,
                borderRadius: "999px",
                border: "1px solid #fa5a29",
                color: "#fa5a29",
                "&:hover": { background: "rgba(250,90,41,0.12)" },
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "#fa5a29" }} />
              ) : (
                "Send Message"
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

// input styleing
const inputStyles = {
  input: { color: "#fff" },
  textarea: { color: "#fff" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
    "&:hover fieldset": { borderColor: "#fa5a29" },
    "&.Mui-focused fieldset": { borderColor: "#fa5a29" },
  },
};
