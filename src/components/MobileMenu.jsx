import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import scrollToSection from "../utils/helpers";

function MobileMenu({closeMenu}) {
  const handleClick = (section, position) => {
    scrollToSection(section, position);
    closeMenu();
  }

  return (
   <div className="mobile-menu">
      <a className="mb-menu-item" onClick={() => handleClick('s5', 'start')}>
        Quem Somos
      </a>
      <a className="mb-menu-item" onClick={() => handleClick('s6', 'start')}>
        Programas
      </a>
      <a className="mb-menu-item" onClick={() => handleClick('s11', 'start')}>
        Serviços
      </a>
      <a className="mb-menu-item" onClick={() => handleClick('card-slider', 'center')}>
        Artigos
      </a>
      <div className="mb-menu-btns">
        <Link to="/for-people">
          <button className="mb-menu-btn">
            Para Pessoas Colaboradoras
          </button>
        </Link>
        <Link to="/for-professionals" >
          <button className="mb-menu-btn">
            Para Profissionais
          </button>
        </Link>
        <Link to="/for-companies" >
          <button className="mb-menu-btn">
            Para Empresas
          </button>
        </Link>
      </div>
   </div> 
  )
}

export default MobileMenu;

MobileMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};
