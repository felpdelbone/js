import "./Cabecalho.css"
const Cabecalho = () => {
    return (
        <div className="page-container">
        <header className="header">
          <nav className="nav">
            <div className="nav-container">
              <div className="nav-items">
              <i class="fa-solid fa-fish"></i>
                <li className="nav-link">Inicio</li>
                <li className="nav-link">Sobre</li>
                <li className="nav-link">Produtos</li>
                <li className="nav-link">Contatos</li>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
}

export default Cabecalho