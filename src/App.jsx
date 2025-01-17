import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Paginas/Home.jsx'; 
import Header from './Componentes/Header/Header'; 
import Footer from './Componentes/Footer/Footer';
import SessaoCategoria from './Componentes/SessaoCategorias/SessaoCategorias';
import NovoVideo from './Paginas/NovoVideo';
import Modal from './Componentes/Modal/Modal'; 
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal
  const [selectedVideo, setSelectedVideo] = useState(null); // Vídeo selecionado

  const handleEditClick = (video) => {
    setSelectedVideo(video); // Define o vídeo selecionado
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
    setSelectedVideo(null); // Limpa o vídeo selecionado
  };

  const handleSaveVideo = (updatedVideo) => {
    console.log("Vídeo atualizado:", updatedVideo); // Simula a ação de salvar
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div className="app-container">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home onEditClick={handleEditClick} /> // Passa a função para o Home
              } 
            />
            <Route path="/sessao-categorias" element={<SessaoCategoria />} />
            <Route path="/novo-video" element={<NovoVideo />} /> 
          </Routes>
        </main>
        <Footer />
      </Router>
      {isModalOpen && (
        <Modal
          video={selectedVideo}
          onSave={handleSaveVideo}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
