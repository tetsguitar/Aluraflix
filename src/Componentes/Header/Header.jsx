import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

// Estilos para o Header
const HeaderContainer = styled.header`
  width: 100%;
  height: 80px; /* Ajuste o valor conforme necessário */
  background-color: #111; /* Altere a cor de fundo se necessário */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed; /* Fixa o header no topo */
  z-index: 10; /* ou um valor maior */
  top: 0;
  left: 0;
  box-sizing: border-box;  
`;

// Estilo para o Logo
const Logo = styled.img`
  height: 40px;
`;

// Estilos para o Nav
const Nav = styled.nav``;

// Estilos para a lista de navegação
const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

// Estilos para os itens da lista
const NavItem = styled.li``;

// Estilos para os botões
const BotaoHome = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  font-size: 18px;

  &:hover {
    background-color: white;
    color: #03122F;
  }
`;

const BotaoNovoVideo = styled.button`
  background-color: #03122F;
  color: white;
  border: 1px solid white;  
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  font-size: 18px;

  &:hover {
    background-color: white;
    color: #03122F;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* Logo com link para a Home */}
      <Link to="/">
        <Logo src="/imagens/logo.svg" alt="Logo Aluraflix"/>
      </Link>

      {/* Navegação */}
      <Nav>
        <NavList>
          <NavItem>
            <Link to="/">
              <BotaoHome>Home</BotaoHome>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/novo-video">
              <BotaoNovoVideo>Novo Vídeo</BotaoNovoVideo>
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
