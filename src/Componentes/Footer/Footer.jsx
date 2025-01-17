import React from 'react'; 
import { styled } from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000000;
  border-top: 2px solid #2271D1;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  
  width: 100%;
  bottom: 0;  
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 12px;
`;

const FooterImage = styled.img`
  width: 100px; // Ajuste conforme necessário
  height: auto;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage src="/imagens/logo.svg" alt="Logo Aluraflix" />
      <FooterText>Desenvolvido por Maria Esther - 2025</FooterText>
    </FooterContainer>
  );
};

export default Footer;
