import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

function MovieCard({ filme, onDetalhes }) {
  const poster = filme.poster_path
    ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
    : "";

  const dataLancamento = filme.release_date
    ? new Date(filme.release_date).toLocaleDateString("pt-BR")
    : "Data não informada";

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={poster}
        alt={filme.title}
      />

      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
        >
          {filme.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          ⭐ {filme.vote_average.toFixed(1)}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Lançamento: {dataLancamento}
        </Typography>
      </CardContent>

      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => onDetalhes(filme)}
        >
          Ver detalhes
        </Button>
      </Box>
    </Card>
  );
}

export default MovieCard;
