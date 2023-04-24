import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(123,200,208,1) 0%, rgba(147,205,154,1) 50%, rgba(171,210,93,1) 100%);
`;

export const ContainerPokemon = styled.div`
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  position: relative;
  margin-bottom: 80px;
  margin-right: 30px;
`;

export const ImgPokemon = styled.img`
  width: 135px;
  height: 135px;
  position: relative;
  z-index: 10;
`;

export const AboutPokemon = styled.div`
  position: absolute;
  top: 80px;
  left: 0px;
  width: 140px;
  height: 130px;
  background-color: #E3E4E8;
  border-radius: 10px;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Order = styled.p`
  margin-bottom: 10px;
  font-size: 0.8rem;
  color: #a7a8ad;
`;

export const Name = styled.p`

`;

export const Type = styled.p`
  font-size: 0.8rem;
  margin-top: 10px;
`;