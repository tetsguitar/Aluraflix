import React from 'react';
import { styled } from 'styled-components';
import VideoDestaque from '../VideoDestaque/VideoDestaque';
import bgImage from '../../assets/banner-bg.png'

const DestacadoSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;  
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  height: 544px;
  overflow: hidden;
  padding-top: 60px;  
`;

const BannerBackground = styled.div`
  position: absolute;  
  height: 100%;
  width: 100%;
  opacity: 0.5;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 1);
  background-image: url(${bgImage});
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  
  z-index: -1;  // Garantir que o conteúdo fique acima do fundo
`;

const DescricaoContainer = styled.div`
  max-width: 60%;
  flex-shrink: 0;
  margin-left: 20px;
  font-family: 'Roboto', serif;  
`;

const Categoria = styled.p`
  background-color: #6bd1ff;
  width: 30%;
  font-family: 'Roboto', serif;
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 10px;  
`;

const TituloVideo = styled.h1`
  color: #f5f5f5;
  font-size: 46px;
  font-family: 'Roboto', serif;
  font-weight: 400;
  text-align: left;
  margin-bottom: 10px;  
`;

const DescricaoVideo = styled.p`
  color: #f5f5f5;
  font-size: 18px;
  font-family: 'Roboto', serif;
  font-size: 24px;
  font-weight: 300;
  text-align: left;
`;

const Banner = () => {
    return (
      <DestacadoSection>
        <BannerBackground />
        <DescricaoContainer>
          <Categoria>Front</Categoria>
          <TituloVideo>SEO com React</TituloVideo>
          <DescricaoVideo>
            Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho 
            Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma 
            sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho 
            do mundo.
          </DescricaoVideo>
        </DescricaoContainer>
        <VideoDestaque link="https://youtu.be/c8mVlakBESE" />
      </DestacadoSection>
    );
  };
  

export default Banner;
