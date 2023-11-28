import Social from "./Social";
import fullLogoGreen from '../assets/fullLogoGreen.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import scrollToSection from "../utils/helpers";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (section, position) => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection(section, position);
    }
  }

 return (
  <div className='footer'>
    <div className="ft-up">
      <div className="ft-up-c1">
        <Link to="/" >
          <div className="ft-up-img">
            <img src={fullLogoGreen} alt="nectus-logo-green" className="ft-up-logo"/>
          </div>
        </Link>
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
          <button className="ft-menu-btn" onClick={() => handleClick('s5', 'end')}>
            Quem Somos
          </button>
          <button className="ft-menu-btn" onClick={() => handleClick('s6', 'center')}>
            Programas
          </button>
          <button className="ft-menu-btn" onClick={() => handleClick('s11', 'start')}>
            Serviços
          </button>
          <button className="ft-menu-btn" onClick={() => handleClick('card-slider', 'center')}>
            Artigos
          </button>
        </div>
        <div className="ft-btns">
          <Link to="/for-people">
            <button className="ft-btn">
              Para Pessoas Colaboradoras
            </button>
          </Link>
          <Link to="/for-professionals" >
            <button className="ft-btn">
              Para Profissionais
            </button>
          </Link>
          <Link to="/for-companies">
            <button className="ft-btn">
              Para Empresas
            </button>
          </Link>
        </div>
      </div>
      <div className="ft-up-c4">
        <div className="ft-c4-text">
          <p id="ft-c4-title"><strong>
            Atendimento
          </strong></p>
          <p className="c4-bottom">
            Atendimento a clientes, colaboradores e empresas de segunda à sexta-feira das 9h às 19h <span id="ft-c4-holidays">(exceto feriados)</span>
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
            corporativo@nectusapp.com
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