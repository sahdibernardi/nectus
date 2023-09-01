import { useState } from 'react';
import nectusLogo from '../assets/nectusLogoHorizontal.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import scrollToSection from '../utils/helpers';
import MobileMenu from './MobileMenu';
import closeIcon from '../assets/close-btn.svg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = (section, position) => {
    if (location.pathname !== '/') {
      navigate('/');
      scrollToSection(section, position);
    } else {
      scrollToSection(section, position);
    }
  }

  return (
    <>
    <div className="header">
      <Link to="/" >
        <div className='hd-img'>
          <img src={nectusLogo} alt="logo" className="logo"  />
        </div>
      </Link>
      <div className='menu-icon' onClick={toggleMenu}>
        {!isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="22" viewBox="0 0 34 22" fill="none">
          <path d="M2 2H32M2 11H32M2 20H32" stroke="#8D55E7" />
          </svg>
        ) :
        (<img src={ closeIcon } alt="X" />)}
      </div>
      <div className="hd-menu">
        <div className="hd-itens">
          <a className="hd-item" onClick={() => handleClick('s5', 'end')}>
            Quem Somos
          </a>
          <a className="hd-item" onClick={() => handleClick('s6', 'center')}>
            Programas
          </a>
          <a className="hd-item" onClick={() => handleClick('s11', 'start')}>
            Serviços
          </a>
          <a className="hd-item" onClick={() => handleClick('card-slider', 'center')}>
            Artigos
          </a>
        </div>
        <div className="hd-btns">
          <Link to="/for-people">
            <button className="hd-btn">
              Para Pessoas Colaboradoras
            </button>
          </Link>
          <Link to="/for-professionals" >
            <button className="hd-btn">
              Para Profissionais
            </button>
          </Link>
          <Link to="/for-companies" >
            <button className="hd-btn">
              Para Empresas
            </button>
          </Link>
        </div>
      </div>
    </div>
    {isMenuOpen && (
      <MobileMenu closeMenu={closeMenu} />
    )}
    </>
  )
}

export default Header;
