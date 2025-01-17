import React from 'react';
import { styled } from 'styled-components';

const VideoContainer = styled.div`
  flex: 1;
  max-width: 40%;
  padding-left: 20px;
  margin-top: 80px;
  margin-right: 20px;  
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 315px; /* Ajuste conforme necessário */
  border-radius: 16px;
  border: solid #6bd1ff;
  box-shadow: 0 0 20px rgba(107, 209, 255, 1);
  border: none;
`;

const VideoDestaque = ({ link }) => {
  const convertToEmbedLink = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'www.youtube.com' && urlObj.pathname === '/watch') {
      const videoId = urlObj.searchParams.get('v');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0`;
      }
    } else if (urlObj.hostname === 'youtu.be') {
      const videoId = urlObj.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0`;
    }
    return url; // Retorna o link original se não puder ser convertido
  };

  return (
    <VideoContainer>
      <VideoFrame
        src={convertToEmbedLink(link)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Vídeo Destaque"
      />
    </VideoContainer>
  );
};

export default VideoDestaque;

