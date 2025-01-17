import React from 'react';
import { styled } from 'styled-components';
import iconeDeletar from './icone_deletar.png';
import iconeEditar from './icone_editar.png';

// Adicionando configuração para evitar que a prop 'categoria' seja passada para o DOM
const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'categoria', // Filtra a prop 'categoria'
})`
  width: 412px;  
  display: flex;  
  flex-direction: column;
  border-radius: 5px 5px 15px 15px;
  overflow: hidden;
  margin: 5px;
  position: relative;
  margin-left: 20px;
  width: 470px;
  box-sizing: border-box;
  border: 3px solid;
  font-family: "Roboto", sans-serif;
  z-index: 1;
  overflow: hidden; 
  ${({ categoria }) =>
    categoria === "front"
      ? "#6BD1FF"
      : categoria === "back"
      ? "#00C86F"
      : categoria === "mobile"
      ? "#FFBA05"
      : "gray"}; /* Cor padrão para categorias não especificadas */    
`;

const CapaWrapper = styled.div`
  width:  470px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;  
  z-index: 1;
  overflow: hidden; 
  transform: scale(1.1);
  
`;

const Capa = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  overflow: hidden;  
`;

const Icones = styled.div`
  display: flex;
  justify-content: space-around;  
  align-items: center;
  padding: 0 20px;
  background-color: #000;
  width: 100%;
  height: 59px;
  margin-top: 0;
  z-index: 1;
  overflow: hidden;   
`;

const IconeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
  margin-left: -40px;
  
`;

const Icone = styled.img`
  width: 24px;
  height: 28px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const Texto = styled.span`
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const VideoCard = ({ id, capa, videoLink, titulo, categoria, onEdit, onDelete }) => {
  return (
    <Container categoria={categoria}>
      {/* Link apenas em volta da capa */}
      <Link href={videoLink} target="_blank" rel="noopener noreferrer">
        <CapaWrapper>
          <Capa src={capa} alt="Capa do vídeo" />
        </CapaWrapper>
      </Link>

      {/* Ícones de ação */}
      <Icones>
        <IconeContainer>
          <Icone
            src={iconeEditar}
            alt="Editar"
            onClick={() => 
              onEdit({ id, capa, videoLink, titulo, categoria }) // Passando todos os dados relevantes para o vídeo
            }
          />
          <Texto>Editar</Texto>
        </IconeContainer>
        <IconeContainer>
          <Icone
            src={iconeDeletar}
            alt="Deletar"
            onClick={() => onDelete(id)} // Função para deletar o vídeo
          />
          <Texto>Deletar</Texto>
        </IconeContainer>
      </Icones>
    </Container>
  );
};

export default VideoCard;
