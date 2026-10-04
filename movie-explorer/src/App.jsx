import { useEffect, useMemo, useState } from "react";
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
  const [pesquisa, setPesquisa] = useState("");
  const [ordenacao, setOrdenacao] = useState("maiorNota");
  const [, setFilmeSelecionado] = useState(null);

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

  const filmesFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();
    let resultado = [...filmes];

    if (termo) {
      resultado = resultado.filter((filme) =>
        filme.title.toLowerCase().includes(termo),
      );
    }

    if (ordenacao === "maiorNota") {
      resultado.sort((a, b) => b.vote_average - a.vote_average);
    }

    if (ordenacao === "menorNota") {
      resultado.sort((a, b) => a.vote_average - b.vote_average);
    }

    if (ordenacao === "nome") {
      resultado.sort((a, b) => a.title.localeCompare(b.title));
    }

    return resultado;
  }, [filmes, pesquisa, ordenacao]);

  function abrirDetalhes(filme) {
    setFilmeSelecionado(filme);
  }

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

    <SearchBar pesquisa={pesquisa} onPesquisa={setPesquisa} />
    <Filters ordenacao={ordenacao} onOrdenacao={setOrdenacao} />
  </Box>

  {filmesFiltrados.length === 0 ? (
    <Typography variant="h6">Nenhum filme encontrado.</Typography>
  ) : (
    <MovieList filmes={filmesFiltrados} onDetalhes={abrirDetalhes} />
  )}
</Container>
    </Box>
  );
}

export default App;
