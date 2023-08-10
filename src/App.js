import React from "react";
import styled from "styled-components";
import porcoLogo from "./componentes/Assets/porcologo.jpg";
import pocoLogoUm from "./componentes/Assets/EcoChiqueiro-removebg-preview.png";
import porkin from "./componentes/Assets/porkin.png";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;

  }
`;
export const Container = styled.section`
  background-color: #239960;
  width: 580px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid black;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;
export const LogoContainer = styled.section`
  background-color: #239960;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: solid blue;
`;
export const RegistroFormulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  border: solid red;
  text-align: center;
  align-items: center;
`;
export const LogoTexto = styled.h1`
font-family: 'Creepster', cursive;
font-family: 'Secular One', sans-serif;
font-size: 42px;
color: #FFFFFF;
`
export const ImputRegistro = styled.input`
border-radius: 15px;
background: #F8F8FF;
width:300px;
height:45px;
`
export const BotaoRegistro = styled.button`
border-radius: 15px;
background: #FF85B6;
color: #FFFFFF;
width: 220px;
height: 60px;
font-family: 'Creepster', cursive;
font-family: 'Secular One', sans-serif;
font-size: 20px;
border:solid black;
cursor: pointer;
`
export default function porco() {
  return (
    <Container>
      <LogoContainer>
        <img
          src={porkin}
          width={"200vw"}
        ></img>
        <LogoTexto>EcoChiqueiro</LogoTexto>
      </LogoContainer>
      <RegistroFormulario>
        <label for="name"></label>
        <ImputRegistro id="name" type="text" name="name" placeholder="Nome:"></ImputRegistro>
        <label for="email"></label>
        <ImputRegistro
          id="email"
          type="email"
          name="email"
          placeholder="Email:"
        ></ImputRegistro>
        <label for="password"></label>
        <ImputRegistro
          id="password"
          type="password"
          name="password"
          placeholder="Senha:"
        ></ImputRegistro>
        <label for="password"></label>
        <ImputRegistro
          id="password"
          type="password"
          name="password"
          placeholder="Confirmar senha:"
        ></ImputRegistro>
        <BotaoRegistro type="submit">Criar Conta</BotaoRegistro>
      </RegistroFormulario>
      <GlobalStyle />
    </Container>
  );
}
