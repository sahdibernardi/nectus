import nectusLogo from '../assets/nectusLogoHorizontal.png'

function Header() {
  return (
    <div className="header">
      <div className='hd-img'>
        <img src={nectusLogo} alt="logo" className="logo"  />
      </div>
      <div className='menu-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="22" viewBox="0 0 34 22" fill="none">
        <path d="M2 2H32M2 11H32M2 20H32" stroke="#8D55E7" />
        </svg>
      </div>
      <div className="hd-menu">
        <div className="hd-itens">
          <button className="hd-item">
            Quem Somos
          </button>
          <button className="hd-item">
            Programas
          </button>
          <button className="hd-item">
            Serviços
          </button>
          <button className="hd-item">
            Artigos
          </button>
        </div>
        <div className="hd-btns">
          <button className="hd-btn">
            Para Pessoas Colaboradoras
          </button>
          <button className="hd-btn">
            Para Profissionais
          </button>
          <button className="hd-btn">
            Para Empresas
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
