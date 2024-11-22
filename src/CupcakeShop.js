import React from 'react';
import './Estilo.css';
import icone from './assets/icone.png'
import iconeCuke from './assets/image.png'
import iconeCuke2 from './assets/dream1.png'
import iconeCuke3 from './assets/cuckechocolate.png'
import iconeCuke4 from './assets/cuckemorango.png'

const CupcakeShop = () => {

  // Função de navegação
  const navegar = (url) => {
    window.location.href = url;
  };

  return (
    <div className="container">
      <header className="topo">
        <button className="btnVoltar" title='Voltar'>←</button>
        <h1>LISTA DE CUPCAKES</h1>
        <img src={icone} alt="ícone" className="imgHeader" />
      </header>

      <div>
        <div className="orientation">
          <div className="item">
            <button className="btnItem">
              <img src={iconeCuke4} alt="" className="btnImg" />
              <button id='btnAdd' className="bi bi-plus-circle-fill" title="Adicionar"></button>
              <div className='textDiv'>
                <p>Cupcake Red Velvet Delícia</p>
                <span>R$ 14,00</span>
              </div>
            </button>
          </div>

          <div className="item">
            <button className="btnItem">
              <img src={iconeCuke} alt="" className="btnImg" />
              <button id='btnAdd' className="bi bi-plus-circle-fill" title="Adicionar"></button>
              <div className='textDiv'>
                <p>Cupcake Red Velvet Delícia</p>
                <span>R$ 14,00</span>
              </div>
            </button>
          </div>
        </div>

        <div className="orientation">
          <div className="item">
            <button className="btnItem">
              <img src={iconeCuke2} alt="" className="btnImg" />
              <button id='btnAdd' className="bi bi-plus-circle-fill" title="Adicionar"></button>
              <div className='textDiv'>
                <p>Cupcake Red Velvet Delícia</p>
                <span>R$ 14,00</span>
              </div>
            </button>
          </div>

          <div className="item">
            <button className="btnItem">
              <img src={iconeCuke3} alt="" className="btnImg" />
              <button id='btnAdd' className="bi bi-plus-circle-fill" title="Adicionar"></button>
              <div className='textDiv'>
                <p>Cupcake Red Velvet Delícia</p>
                <span>R$ 14,00</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="divBtn">
        <button>Mais</button>
      </div>

      <footer className="rodape">
        <div className="icones">
          <button className="bi bi-house" title="PEDIDOS" onClick={() => navegar('pedidos.html')}></button>
          <button className="bi bi-bag" title="PEDIDOS" onClick={() => navegar('pedidos.html')}></button>
          <button className="bi bi-person" title="PERFIL" onClick={() => navegar('perfil.html')}></button>
          <button className="bi bi-bank" title="SALDO" onClick={() => navegar('saldo.html')}></button>
        </div>
      </footer>
    </div>
  );
}

export default CupcakeShop;
