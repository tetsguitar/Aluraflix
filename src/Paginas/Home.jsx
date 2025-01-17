import React, { useState } from 'react';
import SessaoCategoria from '../Componentes/SessaoCategorias/SessaoCategorias';
import Banner from '../Componentes/Banner/Banner';
import Modal from '../Componentes/Modal/Modal'; // Importando o Modal

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal
  const [selectedVideo, setSelectedVideo] = useState(null); // Estado para o vídeo selecionado

  const handleEditClick = (video) => {
    setSelectedVideo(video); // Define o vídeo que será editado
    setIsModalOpen(true); // Abre o modal
  };

  const handleSave = (updatedVideo) => {
    console.log('Vídeo atualizado:', updatedVideo); // Aqui você pode implementar a lógica para salvar o vídeo
    setIsModalOpen(false); // Fecha o modal após salvar
  };

  const handleClose = () => {
    setIsModalOpen(false); // Fecha o modal sem salvar
  };

  return (
    <div>
      <Banner />
      <SessaoCategoria onEditClick={handleEditClick} /> {/* Passando a função para SessaoCategoria */}
      
      {/* Exibição condicional do Modal */}
      {isModalOpen && (
        <Modal
          video={selectedVideo}
          onSave={handleSave}
          onClose={handleClose}
          categorias={['FRONTEND', 'BACKEND', 'MOBILE']}
        />
      )}
    </div>
  );
};

export default Home;

