import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import VideoCard from '../VideoCard/VideoCard';
import Modal from '../Modal/Modal';  // Importando o Modal

const SecaoCategoria = styled.div`
  padding: 20px;
  &.front {
    background-color: #333;    
  }
  &.back {
    background-color: #333;
  }
  &.mobile {
    background-color: #333;
  }
  z-index: 1;
  overflow: hidden; 
`;

const CategoriaTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;
  color: #333;  
  &.front {
    background-color: #6bd1ff;
    width: 20%;
    border: none;
    padding: 8px 10px;
    border-radius: 15px;
    font-family: 'Roboto', serif;    
    font-size: 40px;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 20px;
    overflow: hidden; 
  }
  &.back {
    background-color: #00c86f;
    width: 20%;
    border: none;
    padding: 8px 10px;
    border-radius: 15px;
    font-family: 'Roboto', serif;
    font-size: 40px;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 20px;
    
  }
  &.mobile {
    background-color: #ffba05;
    width: 20%;
    border: none;
    padding: 8px 10px;
    border-radius: 15px;
    font-family: 'Roboto', serif;
    font-size: 40px;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 20px;
    
  }
`;

const CategoriaContainer = styled.div`
  display: flex;  
  width: 100%;
  justify-content: flex-start;  
  overflow-x: auto;   
  z-index: 1;
  flex-wrap: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Capa = styled.img`
  width: 420px;
  height: 260px;  
  object-fit: cover; // Ajusta a imagem para cobrir todo o container
  object-position: center; // Centraliza a imagem dentro do container
  z-index: 1; 
  overflow: hidden;    
`;

const SessaoCategoria = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const categorias = ['Front', 'Back', 'Mobile'];

  const handleEdit = (video) => {
    setCurrentVideo(video); // Define o vídeo atual para edição
    setModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Fecha o modal
    setCurrentVideo(null); // Reseta o vídeo atual
  };

  const handleSave = (updatedVideo) => {
    // Atualiza o estado com o vídeo editado
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
    setModalOpen(false); // Fecha o modal após salvar
  };

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/tetsguitar/API-Aluraflix/videos')
      .then((response) => response.json())
      .then((data) => {
        console.log('Dados recebidos:', data);
        setVideos(data);
      })
      .catch((error) => console.error('Erro ao buscar vídeos:', error));
  }, []);

  if (!videos || videos.length === 0) {
    return <p>Carregando vídeos...</p>;
  }

  return (
    <div>
      {categorias.map((categoria) => (
        <SecaoCategoria key={categoria} className={categoria.toLowerCase()}>
          <CategoriaTitle className={categoria.toLowerCase()}>
            {categoria}
          </CategoriaTitle>
          <CategoriaContainer>
            {videos
              .filter((video) => video?.categoria?.toLowerCase() === categoria.toLowerCase())
              .map((video) => (
                <VideoCard
                  key={video.id}
                  id={video.id}
                  titulo={video.titulo}
                  capa={video.capa}
                  videoLink={video.link}
                  categoria={video.categoria}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
          </CategoriaContainer>
        </SecaoCategoria>
      ))}

      {isModalOpen && (
        <Modal
          video={currentVideo}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SessaoCategoria;
