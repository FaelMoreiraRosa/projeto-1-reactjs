const API_URL = "https://api.themoviedb.org/3";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function buscarFilmes(pesquisa = "") {
    const url = pesquisa
        ? `${API_URL}/search/movie?query=${encodeURIComponent(pesquisa)}&language=pt-BR`
        : `${API_URL}/discover/movie?language=pt-BR&sort_by=popularity.desc`;

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar filmes.");
    }

    const data = await response.json();

    return data.results;
}