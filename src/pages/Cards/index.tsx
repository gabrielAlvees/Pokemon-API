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
  ContentFire,
  ContentWater,
  ContentBug,
  ContentNormal,
  ContentPoison,
  ContentEletric,
  ContentGround,
  ContentPsy,
  ContentRock,
  ContentFight,
  ContentDragon,
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

      <ContentFire>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {pokemon?.types[0].type.name === "fire" && (
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
      </ContentFire>

      <ContentWater>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {(pokemon?.types[0].type.name === "water" ||
                pokemon?.types[0].type.name === "ice") && (
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
      </ContentWater>

      <ContentBug>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {pokemon?.types[0].type.name === "bug" && (
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
      </ContentBug>

      <ContentNormal>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {pokemon?.types[0].type.name === "normal" && (
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
      </ContentNormal>

      <ContentPoison>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {(pokemon?.types[0].type.name === "poison" ||
                pokemon?.types[0].type.name === "ghost") && (
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
      </ContentPoison>

      <ContentEletric>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {pokemon?.types[0].type.name === "electric" && (
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
      </ContentEletric>

      <ContentGround>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {pokemon?.types[0].type.name === "ground" && (
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
      </ContentGround>

      <ContentPsy>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {(pokemon?.types[0].type.name === "psychic" ||
                pokemon?.types[0].type.name === "fairy") && (
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
      </ContentPsy>

      <ContentRock>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {pokemon?.types[0].type.name === "rock" && (
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
      </ContentRock>

      <ContentFight>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {pokemon?.types[0].type.name === "fighting" && (
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
      </ContentFight>

      <ContentDragon>
        <ContainerPokemon>
          {listPokemon.map((pokemon: IPokemon) => (
            <>
              {pokemon?.types[0].type.name === "dragon" && (
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
      </ContentDragon>
    </Main>
  );
};
