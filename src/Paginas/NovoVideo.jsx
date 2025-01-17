import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    width: 1360px;
    height: 1192px;
    background-color: #191919;
`;

const Title = styled.h2`
    font-size: 35px;
    font-weight: bold;
    color: #F5F5F5;
    margin-bottom: 15px;
    text-align: center;
`;

const Description = styled.p`
    color: #ccc;
    font-size: 12px;
    margin-bottom: 60px;
    text-align: center;
`;

const CardTitle = styled.h3`
    font-size: 25px;
    color: #FFFFFF;
    margin-bottom: 20px;
    text-align: left;
    width: 100%;
    max-width: 830px;
    padding-left: 0;
    margin: 0 auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 873px;
    background-color: #191919;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px; /*espaço entre os campos do formulário na mesma linha */
    margin-bottom: 15px; /* espaço entre as linhas dos campos do formulário */
`;

const InputGroup = styled.div`
    width: 48%;
`;

const Label = styled.label`
    font-size: 1rem;
    color: #FFFFFF;
    margin-bottom: 5px;
    display: block;
`;

const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
    background-color: #191919;    

    &:focus {
        border-color: #2271D1;
        outline: none;
    }
`;

const Select = styled.select`
    background-color: #191919;
    color: #FFFFFF; /* Garantindo que as opções tenham a mesma cor */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
    width: 100%;
`;

const ActionButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SaveButton = styled.button`
    width: 130px;
    height: 44px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #191919;
    color: #FFFFFF;
    border: 2px solid #F5F5F5;
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out; /* Adicionando transição suave */

    &:hover {
        opacity: 0.8;
        color: #FFFFFF;
        border-color: #2271D1;
    }
`;

const ClearButton = styled.button`
    width: 130px;
    height: 44px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #191919;
    color: #FFFFFF;
    border: 2px solid #F5F5F5;
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out; /* Adicionando transição suave */

    &:hover {
        opacity: 0.8;
        color: #FFFFFF;
        border-color: #2271D1;
    }
`;

function NovoVideo({ onAdd, onClose }) {
    console.log('NovoVideo foi chamado')
    const [newVideo, setNewVideo] = useState({
        titulo: "",
        capa: "",
        categoria: "",
        videoLink: "",
    });

    const navigate = useNavigate(); // Hook para navegação

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewVideo((prevVideo) => ({
            ...prevVideo,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setNewVideo({
            titulo: "",
            capa: "",
            categoria: "",
            videoLink: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newVideo.titulo && newVideo.capa && newVideo.categoria && newVideo.videoLink) {
            try {
                const response = await fetch('https://my-json-server.typicode.com/tetsguitar/API-aluraflix/videos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newVideo),
                });

                if (response.ok) {
                    const data = await response.json();
                    onAdd(data);
                    alert('Vídeo criado com sucesso!');
                    handleClear();
                    onClose();  // Fecha o formulário
                    navigate("/");  // Redireciona para a página inicial após o sucesso
                } else {
                    alert('Erro ao criar vídeo. Tente novamente.');
                }
            } catch (error) {
                console.error('Erro ao enviar requisição:', error);
                alert('Ocorreu um erro. Verifique sua conexão e tente novamente.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <Container>
            <Title>NOVO VÍDEO</Title>
            <Description>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</Description>
            <CardTitle>Criar Card</CardTitle>
            <Form onSubmit={handleSubmit}>
                <div>
                    <FormRow>
                        <InputGroup>
                            <Label htmlFor="titulo">Título:</Label>
                            <InputField
                                type="text"
                                id="titulo"
                                name="titulo"
                                value={newVideo.titulo}
                                onChange={handleInputChange}
                                placeholder="Digite o título do vídeo"
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="categoria">Categoria:</Label>
                            <Select
                                id="categoria"
                                name="categoria"
                                value={newVideo.categoria}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecione a categoria</option>
                                <option value="front">FRONT END</option>
                                <option value="back">BACK END</option>
                                <option value="mobile">MOBILE</option>
                            </Select>
                        </InputGroup>
                    </FormRow>
                </div>
                <div>
                    <FormRow>
                        <InputGroup>
                            <Label htmlFor="capa">Imagem (URL):</Label>
                            <InputField
                                type="text"
                                id="capa"
                                name="capa"
                                value={newVideo.capa}
                                onChange={handleInputChange}
                                placeholder="Insira o link da capa do vídeo"
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="videoLink">Link do Vídeo:</Label>
                            <InputField
                                type="text"
                                id="videoLink"
                                name="videoLink"
                                value={newVideo.videoLink}
                                onChange={handleInputChange}
                                placeholder="Insira o link do vídeo"
                            />
                        </InputGroup>
                    </FormRow>
                </div>
                <ActionButtons>
                    <SaveButton type="submit">SALVAR</SaveButton>
                    <ClearButton type="button" onClick={handleClear}>LIMPAR</ClearButton>
                </ActionButtons>
            </Form>
        </Container>
    );
}

export default NovoVideo;
