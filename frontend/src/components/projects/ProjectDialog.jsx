import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ProjectDialog({ project, onClose }) {
  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.95), rgba(0,0,0,0.95))",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff",
        },
      }}
    >
      {project && (
        <>
          <DialogTitle sx={{ fontWeight: 600 }}>
            {project.title}
            <IconButton
              onClick={onClose}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            {project.hasApiDependency && (
              <Alert severity="info" sx={{ mb: 2 }}>
                This project uses external APIs. Demo may stop working if
                free tier expires.
              </Alert>
            )}

            <Typography sx={{ whiteSpace: "pre-line", color: "rgba(255,255,255,0.75)" }}>
              {project.longDescription}
            </Typography>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}
