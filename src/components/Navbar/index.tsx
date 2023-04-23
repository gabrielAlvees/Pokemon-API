//React
import { useState } from "react";

// Styles
import { Container, Title, LinksContainer, Links } from "./styles";

export const Navbar = () => {
  // Função para mudar o background da navbar
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Container active={navbar}>
      <Title>Pokard</Title>

      <LinksContainer>
        <Links>Buy Pack</Links>
        <Links>Marketplace</Links>
      </LinksContainer>
    </Container>
  );
};
