import headline from '../assets/Headline.svg'
import nectusLogo from '../assets/NectusLogo.png'
import downIcon from '../assets/Group 4.svg'
import graphicNectusLogo from '../assets/graphic-logo.png'

function Homepage() {

  return (
    <>
    <div className="s1">
        <img alt="nectus headline" src={ headline } className='s1-headline' />
        <img alt="nectus logo" src={ nectusLogo } className='nectus-logo' />
        <img alt="down arrow" src={ downIcon } className='down-arrow' />
    </div>
    <div className='s2'>
      <img alt='graphic nectus logo' src={ graphicNectusLogo } className='graphic-logo' id="graphic-left"/>
      <div className='s2-title'>
        <span>
          A Nectus é a comunidade que cuida do <span id="s2-hl">bem-estar e qualidade de vida através da visão integrada de saúde mental e desenvolvimento humano.</span>
        </span>
      </div>
      <img alt='graphic nectus logo' src={ graphicNectusLogo } className='graphic-logo' id="graphic-right"/>
    </div>
    </>
  )
}

export default Homepage
