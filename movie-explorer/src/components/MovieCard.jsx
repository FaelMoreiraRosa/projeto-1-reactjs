import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

function MovieCard({ filme }) {
  const poster = filme.poster_path
    ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
    : "";

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
          ⭐ {filme.vote_average}
        </Typography>
      </CardContent>

      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
        >
          Ver detalhes
        </Button>
      </Box>
    </Card>
  );
}

export default MovieCard;