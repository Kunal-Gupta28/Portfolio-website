import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";

const paperStyle = {
  background:
    "linear-gradient(180deg, rgba(10,10,10,0.95), rgba(0,0,0,0.95))",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
};

export default function ProjectDialog({ project, onClose }) {
  if (!project) return null;

  const { title, longDescription, hasApiDependency } = project;

  return (
    <Dialog open onClose={onClose} maxWidth="md" fullWidth PaperProps={{ sx: paperStyle }}>
      <DialogTitle sx={{ fontWeight: 600 }}>
        {title}

        <IconButton
          aria-label="close dialog"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {hasApiDependency && (
          <Alert severity="info" sx={{ mb: { md: 2 } }}>
            This project uses external APIs. Demo may stop working if free tier expires.
          </Alert>
        )}

        <Typography sx={{ whiteSpace: "pre-line", color: "rgba(255,255,255,0.75)" }}>
          {longDescription}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}