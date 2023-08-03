import headline from '../assets/Headline.svg'
import nectusLogo from '../assets/NectusLogo.png'
import youngMen from '../assets/young-men.png'
import graphicNectusLogo from '../assets/graphic-logo.png'

function Homepage() {

  return (
    <>
    <div className="s1">
        <img alt="nectus headline" src={ headline } className='s1-headline' />
        <img alt="nectus logo" src={ nectusLogo } className='nectus-logo' />
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className='down-arrow'>
          <path d="M10 19L23 31L36 19" stroke="white"/>
          <circle cx="23" cy="23" r="22.5" stroke="white"/>
        </svg>
    </div>
    <div className='s2'>
      <img alt='graphic nectus logo' src={ graphicNectusLogo } className='graphic-logo' id="graphic-left"/>
      <div className='s2-title'>
        <span>
          A Nectus é a comunidade que cuida do <span id="s2-hl">bem-estar e qualidade de vida através da visão integrada de saúde mental e desenvolvimento humano.</span>
        </span>
        <p className='s2-text'>
          Potencializamos jornadas pessoais e profissionais através do direcionamento assertivo e com as melhores ferramentas para te ajudar a evoluir na vida e no trabalho, além de auxiliar no processo de ativar os potenciais que já existem dentro de você.
        </p>
      </div>
      <img alt='graphic nectus logo' src={ graphicNectusLogo } className='graphic-logo' id="graphic-right"/>
    </div>
    <div className='s3'>
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className='down-arrow'>
        <path d="M10 19L23 31L36 19" stroke="#8D55E7"/>
        <circle cx="23" cy="23" r="22.5" stroke="#8D55E7"/>
      </svg>
    </div>
    <div className='s4'>
      <div className='s4-left'>
        <img alt='young men' src={ youngMen }  id="s4-men"/>
      </div>
      <div className='s4-right'>
        <span id='s4-text'>
          A Nectus é a comunidade que cuida do <span id="s2-hl">bem-estar e qualidade de vida através da visão integrada de saúde mental e desenvolvimento humano.</span>
        </span>
        <p className='s2-text'>
          Potencializamos jornadas pessoais e profissionais através do direcionamento assertivo e com as melhores ferramentas para te ajudar a evoluir na vida e no trabalho, além de auxiliar no processo de ativar os potenciais que já existem dentro de você.
        </p>
      </div>
    </div>
    </>
  )
}

export default Homepage
