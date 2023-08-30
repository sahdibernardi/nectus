import Social from "./Social";
import fullLogoGreen from '../assets/fullLogoGreen.png'

function Footer() {

 return (
  <div className='footer'>
    <div className="ft-up">
      <div className="ft-up-c1">
        <div className="ft-up-img">
          <img src={fullLogoGreen} alt="nectus-logo-green" className="ft-up-logo"/>
        </div>
        <div className="ft-c1-text">
          <strong className="ft-title">
            Nectus é revolução do bem-estar através da transformação do potencial humano.
          </strong>
          <p className="ft-subtitle">
            Somos a ponte para construir legados de valor, desenvolver a consciência e criar ambientes de plenitude e colaboração.
          </p>
        </div>
      </div>
      <div className="ft-up-c2">
      </div>
      <div className="ft-up-c3">
        <div className="ft-menu">
          <button className="ft-menu-btn">
            Quem Somos
          </button>
          <button className="ft-menu-btn">
            Programas
          </button>
          <button className="ft-menu-btn">
            Serviços
          </button>
          <button className="ft-menu-btn">
            Artigos
          </button>
        </div>
        <div className="ft-btns">
          <button className="ft-btn">
            Para Pessoas Colaboradoras
          </button>
          <button className="ft-btn">
            Para Profissionais
          </button>
          <button className="ft-btn">
            Para Empresas
          </button>
        </div>
      </div>
      <div className="ft-up-c4">
        <div className="ft-c4-text">
          <p><strong>
            Atendimento
          </strong></p>
          <p className="c4-bottom">
            Atendimento a clientes, colaboradores e empresas de segunda à sexta-feira das 9h às 19h (exceto feriados)
          </p>
        </div>
        <div className="ft-c4-text">
          <p>
            Colaboradores
          </p>
          <p className="c4-bottom"><strong>
            info@nectusapp.com
          </strong></p>
        </div>
        <div className="ft-c4-text">
          <p>
            Empresas
          </p>
          <p className="c4-bottom"><strong>
            coorporativo@nectusapp.com
          </strong></p>
        </div>
        <div className="ft-c4-text">
          <p>
            Profissionais
          </p>
          <p className="c4-bottom"><strong>
            profissional@nectusapp.com
          </strong></p>
        </div>
      </div>
    </div>
    <div className="ft-down">
      <div>
        <p>
          Copyright © 2022 Nectus Tecnologia Ltda. All rights reserved.
        </p>
        <p>CNPJ: 48.200.894/0001-90</p>
      </div>
      <Social />
    </div>
  </div>
 )
}

export default Footer