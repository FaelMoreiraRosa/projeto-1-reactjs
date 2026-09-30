import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

function MovieList({ filmes }) {
  return (
    <Grid
      container
      spacing={3}
    >
      {filmes.map((filme) => (
        <Grid
          key={filme.id}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
        >
          <MovieCard filme={filme} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;