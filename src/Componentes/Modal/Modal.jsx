import React, { useState } from 'react';
import { styled } from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
  visibility: hidden;

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

const ModalContainer = styled.div`
  background-color: black;
  width: 574px;
  height: 560px;
  border-radius: 15px;
  border: 2px solid #6BD1FF;
  display: flex;
  flex-direction: column;  
  justify-content: center;  
  position: relative;
  padding: 40px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 30px;
  background: none;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const ModalTitle = styled.h2`
  color: #2271D1;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: white;
  margin-left: 60px;
`;

const InputField = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #2271D1;
  background-color: #03122F;
  color: #A5A5A5;
  text-align: left;
  box-sizing: border-box;
  margin-left: 60px;

  &:focus {
    outline: none;
    border-color: #F5F5F5;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  width: 80%;
  margin-top: 10px;
  margin-left: 60px;
`;

const ActionButton = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 15px;
  background-color: #03122F;
  color: #F5F5F5;
  border: 1px solid #F5F5F5;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;  

  &:hover {
    opacity: 0.8;
    background-color: #000000E5;
    color: #2271D1;
    border-color: #2271D1;
    box-shadow: 0 0 8px 2px #2271D1;
  }
`;

const Modal = ({ video, onSave, onClose }) => {
  const [titulo, setTitulo] = useState(video?.titulo || '');
  const [capa, setCapa] = useState(video?.capa || '');
  const [link, setLink] = useState(video?.videoLink || '');

  const handleSave = () => {
    const updatedVideo = { ...video, titulo, capa, link };
    onSave(updatedVideo);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalBackground className="show"> {/* Adicionei a classe 'show' para exibir o modal */}
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <ModalTitle>Editar Vídeo</ModalTitle>
        <FormLabel>Título</FormLabel>
        <InputField
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <FormLabel>Link da Capa</FormLabel>
        <InputField
          type="text"
          value={capa}
          onChange={(e) => setCapa(e.target.value)}
        />
        <FormLabel>Link do Vídeo</FormLabel>
        <InputField
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />       
        {/* Categoria removida para voltar ao estado anterior */}
        <ActionButtons>
          <ActionButton onClick={handleSave}>Salvar</ActionButton>
          <ActionButton onClick={handleClose}>Cancelar</ActionButton>
        </ActionButtons>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;