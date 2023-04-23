import styled from "styled-components";

export const Container = styled.div`
  background-color: #212121;
  padding: 0px 70px;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`;

export const ContainerPokemon = styled.div`
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  background-color: #f7b4b4;
`;

export const Button = styled.button`
  border: none;
  background-color: #eae4e1;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 300ms;

  :hover {
    transition: 300ms;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const ImgPokemon = styled.img`
  width: 130px;
  height: 130px;
`;