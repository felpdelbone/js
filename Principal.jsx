
import "./Principal.css";
// import imagem from "../assets/123.png"
import MostrarMais from "./MostrarMais";
import ImagemInterativa from "./ImagemInterativa";

const Principal = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-content px-4">
                        <div className="flex items-center justify-center flex-col text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                                Aventuras de Pesca
                            </h1>
                            <p className="text-xl text-gray-200 max-w-2xl">
                                Descubra os melhores lugares para pescar e viva experiências únicas em contato com a natureza
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima laboriosam aliquid hic quia placeat distinctio a voluptas earum, obcaecati iste explicabo iusto eaque, nostrum corrupti praesentium esse, cumque autem asperiores?
                            </p>
                            <MostrarMais />
                        </div>
                        <ImagemInterativa />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Principal;
