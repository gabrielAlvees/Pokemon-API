import styled from "styled-components";

interface NavbarProps {
  active: boolean;
}

export const Container = styled.div<NavbarProps>`
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;

  background-color: ${Props => Props.active ? '#000' : 'transparent'};
  transition:   ${Props => Props.active ? '500ms' : '500ms'};
`;

export const Title = styled.p`
  color: #FCFCFC;
`;

export const LinksContainer = styled.div``;

export const Links = styled.a`
  color: #FCFCFC;
  margin: 0 40px;
`;