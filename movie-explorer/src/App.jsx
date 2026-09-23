import { useEffect, useState } from "react";
import { buscarFilmes } from "./services/api";

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
      } finally{
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
      <h1>Movie Explorer</h1>

      {filmes.map((filme) => (
        <p key={filme.id}>{filme.title}</p>
      ))}
    </div>
  );
}

export default App;
