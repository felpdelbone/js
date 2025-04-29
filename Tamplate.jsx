import React from 'react'
import imagem from "../assets/slaa.jpg";

const Tamplate = () => {

    let nome = "Daniel";
    let numero = 5;
  return (
    <div>
        <img src={imagem} alt="cozinha" />
        <h2>Onome é: {nome}</h2>
        <h2>O resultado é: {numero *2}</h2>
    </div>
  )
}

export default Tamplate