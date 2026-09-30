import { useEffect, useState } from "react";
import { buscarFilmes } from "./services/api";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

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
    return <p>Carregando filmes...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div>
      <Header />

      <SearchBar />

      <MovieList filmes={filmes} />
    </div>
  );
}

export default App;