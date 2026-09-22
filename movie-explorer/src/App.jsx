import { useEffect } from "react";
import { buscarFilmes } from "./services/api";

function App() {

    useEffect(() => {
        async function testarAPI() {
            try {
                const filmes = await buscarFilmes("Batman");

                console.log(filmes);
            } catch (error) {
                console.error(error);
            }
        }

        testarAPI();
    }, []);

    return (
        <h1>Movie Explorer</h1>
    );
}

export default App;