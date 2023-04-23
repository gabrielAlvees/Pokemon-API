// React
import { useEffect, useState } from "react";

// Import components
import { Navbar } from "../../components/Navbar";

// Import API
import axios from "axios";

// Import Types
import { IPokemon } from "../../types/Pokemon";

// Styles
import {
  Container,
  Main,
  ContainerPokemon,
  Button,
  ImgPokemon,
} from "./styles";

export const Pokemons = () => {
  const [listPokemon, setListPokemon] = useState<IPokemon[]>([]);

  const getPokemons = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
      );
      const pokemons = await Promise.all(
        response.data.results.map(async (pokemon: IPokemon) => {
          const detailsResponse = await axios.get(pokemon.url);
          return detailsResponse.data;
        })
      );
      setListPokemon(pokemons);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container>
      <Navbar />
      <Main>
        {listPokemon.map((pokemon: IPokemon) => (
          <ContainerPokemon>
            <Button>
              {pokemon?.sprites?.versions["generation-vii"][
                "ultra-sun-ultra-moon"
              ].front_default === null ? (
                <ImgPokemon src={pokemon?.sprites?.front_default} />
              ) : (
                <ImgPokemon
                  src={
                    pokemon?.sprites?.versions["generation-vii"][
                      "ultra-sun-ultra-moon"
                    ].front_default
                  }
                />
              )}
            </Button>
            a
          </ContainerPokemon>
        ))}
      </Main>
    </Container>
  );
};
