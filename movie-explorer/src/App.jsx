import { useEffect, useState } from "react";
import { Container, Box, CircularProgress } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

  if (erro) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
      }}
    >
      <p>{erro}</p>
    </Box>
  );
}

if (filmes.length === 0) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
      }}
    >
      <p>Nenhum filme encontrado.</p>
    </Box>
  );
}

  return (
    <Box>
      <Header />

      <Container sx={{ py: 4 }}>
  <SearchBar />
  <Filters />
  <MovieList filmes={filmes} />
</Container>
    </Box>
  );
}

export default App;