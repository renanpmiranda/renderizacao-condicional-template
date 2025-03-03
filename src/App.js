import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import React, { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState(1)

  const mudarTela = (n) => setTela(n)

  switch(tela){
    case 1:
    return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin mudarTela={mudarTela}/>
        </MainContainer>
      );
    case 2:
    return (
        <MainContainer >
          <GlobalStyled />
          <TelaCadastro mudarTela={mudarTela}/>
        </MainContainer>
      );
    case 3:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaUsuarioCadastrado />
      </MainContainer>
      )
    default:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin />
        </MainContainer>
      );
  }

  // return (
  //   <MainContainer >
  //     <GlobalStyled />
  //     {tela === 1 ? <TelaLogin /> : <TelaCadastro />}    
  //     {(tela && <TelaLogin />) || <TelaCadastro />}  
  //   </MainContainer>
  // )
}

export default App;