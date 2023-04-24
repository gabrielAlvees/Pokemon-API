// React icons
import { BsArrowRight, BsArrowLeft, BsArrowUpRight } from "react-icons/bs";

// Import Images
import Charizard from "../../assets/charizardHome.png";
import background from "../../assets/background3.jpg";

// Styles
import {
  Container,
  Main,
  BlockText,
  ContentPokemon,
  ImagePokemon,
  ImageBackground,
  BoxAbout,
  Title,
  Text,
  SubText,
  ButtonGet,
  AboutPokemon,
  Type,
  BoxText,
  Date,
  NamePokemon,
  SectionValue,
  Price,
  ButtonLink,
  ContainerButtons,
  Buttons,
} from "./styles";

export const Home = () => {
  return (
    <Container>
      <Main>
        <BlockText>
          <Title>Pokémon Cards</Title>
          <Text>Catch em! Collect your Strongest and Rarest Pokémon</Text>
          <SubText>Catch all of the Pokemon Cards Officially Licensed</SubText>
          <ButtonGet>
            Get Started <BsArrowUpRight />
          </ButtonGet>
        </BlockText>
        <ContentPokemon>
          <ImagePokemon src={Charizard} alt="Charizard" />
          <ImageBackground src={background} />
          <BoxAbout>
            <AboutPokemon>
              <Type>Rare</Type>

              <BoxText>
                <Date>June 12.2021</Date>
                <NamePokemon>Charizard</NamePokemon>

                <SectionValue>
                  <Price>$754.00</Price>
                  <ButtonLink>
                    Catch <BsArrowUpRight />
                  </ButtonLink>
                </SectionValue>
              </BoxText>
            </AboutPokemon>

            <ContainerButtons>
              <Buttons>
                <BsArrowLeft />
              </Buttons>
              <Buttons>
                <BsArrowRight />
              </Buttons>
            </ContainerButtons>
          </BoxAbout>
        </ContentPokemon>
      </Main>
    </Container>
  );
};
