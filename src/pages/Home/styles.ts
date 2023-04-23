import styled from "styled-components";

export const Container = styled.div`
  background-color: #212121;
  height: 100vh;
  padding: 0px 70px;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`;

export const BlockText = styled.div``;

export const ContentPokemon = styled.div`
  position: relative;
`;

export const ImagePokemon = styled.img`
  height: 490px;
  width: 500px;
  position: absolute;
  z-index: 10;
  bottom: 110px;
  right: 40px;
`;

export const ImageBackground = styled.img`
  height: 500px;
  width: 460px;
  border-radius: 0 20% 0 0;
`;

export const BoxAbout = styled.div`
`;

export const Title = styled.p`
  font-size: 1rem;
  color: #FCFCFC;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: #FCFCFC;
  font-size: 3rem;
  width: 450px;
  margin-bottom: 8px;
  font-family: Bebas Neue, sans-serif;
`;

export const SubText = styled.p`
  color: #4A4A4A;
  margin-bottom: 10px;
`;

export const ButtonGet = styled.button`
  background-color: #C4CF53;
  border: none;
  height: 50px;
  width: 140px;
  color: white;
  font-weight: bolder;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const AboutPokemon = styled.div`
  position: absolute;
  z-index: 1;
  right: 150px;
  bottom: 5px;
  width: 400px;
  height: 140px;
  background-color: #F3EEEA;
  border-radius: 0 0 0 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Type = styled.p`
  transform: rotate(270deg);
  font-size: 1.5rem;
  background-color: #E95A5A;
  padding: 4px;
`;

export const BoxText = styled.div`
  width: 80%;
`;

export const Date = styled.p`
  font-size: 0.8rem;
`;

export const NamePokemon = styled.p`
  color: black;
  font-family: Gruppo, sans-serif;
  letter-spacing: 5px;
  font-size: 2rem;
`;

export const SectionValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-size: 2rem;
  font-family: Bebas Neue, sans-serif;

`;

export const ButtonLink = styled.button`
  background-color: #C4CF53;
  border: none;
  height: 50px;
  width: 140px;
  color: white;
  font-weight: bolder;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerButtons = styled.div`
  position: absolute;
  z-index: 1;
  right: -30px;
  bottom: 5px;
`;

export const Buttons = styled.button`
  width: 65px;
  height: 65px;
  border: none;
  margin-left: 10px;
  font-size: 1.5rem;
  background-color: #F3EEEA;
  color: #A69D9A;
  opacity: 0.9;
`;