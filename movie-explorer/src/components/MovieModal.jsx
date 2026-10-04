import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

function MovieModal({ filme, aberto, onFechar }) {
  if (!filme) {
    return null;
  }

  return (
    <Dialog
      open={aberto}
      onClose={onFechar}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>{filme.title}</DialogTitle>

      <DialogContent>
        <Typography>⭐ {filme.vote_average}</Typography>

        <Typography sx={{ mt: 2 }}>
          {filme.overview}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onFechar}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default MovieModal;
