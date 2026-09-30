import { useEffect, useState } from "react";
import {
  Container,
  Box,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import { buscarFilmes } from "./services/api";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Filters from "./components/Filters";

function App() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const dados = await buscarFilmes();

        setFilmes(dados);
      } catch (error) {
        setErro("Não foi possível carregar os filmes.");
      } finally {
        setCarregando(false);
      }
    }

    carregarFilmes();
  }, []);
if (carregando) {
  return (
    <>
      <Header />

      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 8,
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    </>
  );
}

  if (erro) {
  return (
    <>
      <Header />

      <Container sx={{ py: 4 }}>
        <Alert severity="error">
          {erro}
        </Alert>
      </Container>
    </>
  );
}

if (filmes.length === 0) {
  return (
    <>
      <Header />

      <Container sx={{ py: 4 }}>
        <Typography variant="h6">
          Nenhum filme encontrado.
        </Typography>
      </Container>
    </>
  );
}

  return (
    <Box>
      <Header />

      <Container maxWidth="xl">
  <Box sx={{ py: 4 }}>
    <Typography
      variant="h4"
      component="h1"
      gutterBottom
    >
      Encontre seus filmes
    </Typography>

    <SearchBar />
    <Filters />
  </Box>

  <MovieList filmes={filmes} />
</Container>
    </Box>
  );
}

export default App;