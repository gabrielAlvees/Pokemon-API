// React
import { useEffect, useState } from "react";

// Import API
import axios from "axios";

// Import Types
import { IPokemon } from "../../types/Pokemon";

// Styles
import {
  Main,
  Content,
  ContainerPokemon,
  Box,
  ImgPokemon,
  AboutPokemon,
  Order,
  Name,
  Type,
} from "./styles";

export const Pokemons = () => {
  const [listPokemon, setListPokemon] = useState<IPokemon[]>([]);

  const getPokemons = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=800&offset=0`
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
    <Main>
      <Content>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {pokemon?.types[0].type.name === "grass" && (
                <Box>
                  <ImgPokemon
                    src={
                      pokemon?.sprites?.versions["generation-vii"][
                        "ultra-sun-ultra-moon"
                      ].front_default
                    }
                  />
                  <AboutPokemon>
                    <Order>{`#${pokemon.order}`}</Order>
                    <Name>{pokemon.name}</Name>
                    {pokemon.types[1] ? (
                      <Type>{`Type: ${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`}</Type>
                    ) : (
                      <Type>{`Type: ${pokemon.types[0].type.name}`}</Type>
                    )}
                  </AboutPokemon>
                </Box>
              )}
            </>
          ))}
        </ContainerPokemon>
      </Content>

      {/* {pokemon?.types[0].type.name === "fire" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )}

          {pokemon?.types[0].type.name === "water" ||
            (pokemon?.types[0].type.name === "ice" && (
              <ImgPokemon
                src={
                  pokemon?.sprites?.versions["generation-vii"][
                    "ultra-sun-ultra-moon"
                  ].front_default
                }
              />
            ))}

          {pokemon?.types[0].type.name === "bug" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )}

          {pokemon?.types[0].type.name === "normal" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )}

          {pokemon?.types[0].type.name === "poison" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )}

          {pokemon?.types[0].type.name === "ghost" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )}

          {pokemon?.types[0].type.name === "eletric" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )}

          {pokemon?.types[0].type.name === "ground" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )}

          {pokemon?.types[0].type.name === "psychic" ||
            (pokemon?.types[0].type.name === "fairy" && (
              <ImgPokemon
                src={
                  pokemon?.sprites?.versions["generation-vii"][
                    "ultra-sun-ultra-moon"
                  ].front_default
                }
              />
            ))}

          {pokemon?.types[0].type.name === "rock" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )}

          {pokemon?.types[0].type.name === "fighting" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )}

          {pokemon?.types[0].type.name === "dragon" && (
            <ImgPokemon
              src={
                pokemon?.sprites?.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default
              }
            />
          )} */}
    </Main>
  );
};
