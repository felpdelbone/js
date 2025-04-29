import { useState } from 'react'

import imagem1 from "../assets/care.jpg"

import imagem2 from "../assets/jacare.jpg"

const ImagemInterativa = () => {
    const [ImagemAtual, setImagemAtual] = useState(imagem1);

    const trocarImagem = () => {
        setImagemAtual(ImagemAtual === imagem1 ? imagem2 : imagem1)
    }
    return (
        <div>
            <img src={ImagemAtual} alt="" onClick={trocarImagem} />
        </div>
    )
}

export default ImagemInterativa