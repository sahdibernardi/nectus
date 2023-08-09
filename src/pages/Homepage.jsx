import headline from '../assets/Headline.svg'
import nectusLogo from '../assets/NectusLogo.png'
import youngMen from '../assets/young-men.png'
import graphicNectusLogo from '../assets/graphic-logo.png'
import smilingGuy from '../assets/smilingGuy.png'
import nectusLogoGreen from '../assets/nectusLogoGreen.png'
import smilingGirl from '../assets/smilingGirl.png'
import ProgramCard from '../components/ProgramCard'
import s8Woman from '../assets/s8Woman.png'

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
          Pessoas felizes criam <span id="s2-hl">empresas de sucesso.</span>
        </span>
        <p className='s2-text'>
          Aqui, fortalecemos a saúde das empresas de forma leve e fluida. Inserimos cada negócio em uma cultura que gera ambientes produtivos, engajados e que promove a sensação de pertencimento, essencial para empresas que querem deixar a sua marca na sociedade e na vida das pessoas.
        </p>
      </div>
    </div>
    <div className='s5'>
      <div className='s5-div'>
        <span className='s5-title'>
          QUEM SOMOS?
        </span>
        <div className='s5-subtitle'>
          <div className='s5-image-bg'>
            <img alt='smiling guy' src={ smilingGuy } className='s5-img'/>
          </div>
          <div className='s5-sb-text'>
            <span id='s4-text'>
            Estamos aqui para <span id="s2-hl">cuidar de você por completo.</span>
            </span>
          </div>
        </div>
        <div className='s5-text-div'>
          <p className='s2-text'>
            Cuidamos da saúde de pessoas e empresas com gestão inteligente.  Visionamos bem-estar e engajamento que alavancam a produtividade, gerando ambientes  de felicidade com maior senso de pertencimento. Visão integral em saúde organizacional focada em resultados e sucesso a longo prazo.
          </p>
        </div>
      </div>
      <div className='s5-div'>
        <span className='s5-title'>
          QUAL O NOSSO OBJETIVO?
        </span>
        <div className='s5-subtitle'>
          <div className='s5-logo-bg'>
            <img alt='nectus logo green' src={ nectusLogoGreen } className='s5-logo'/>
          </div>
          <div className='s5-sb-text'>
            <span id='s4-text'>
            Aqui <span id="s2-hl">todas as esferas e pilares importam.</span>
            </span>
          </div>
        </div>
        <div className='s5-text-div'>
          <p className='s2-text'>
            Promovemos a transformação da saúde organizacional integrando saúde mental, autoconhecimento e evolução humana. Direcionamos você de forma assertiva, contemplando suas necessidades e ampliando a sua visão sobre passado, presente e futuro. E isso inclui abraçar o corpo, a mente e o espírito.
          </p>
        </div>
      </div>
      <div className='s5-div'>
        <span className='s5-title'>
          NO QUE ACREDITAMOS?
        </span>
        <div className='s5-subtitle'>
          <div className='s5-image-bg'>
            <img alt='smiling girl' src={ smilingGirl } className='s5-img'/>
          </div>
          <div className='s5-sb-text'>
            <span id='s4-text'>
            A Nectus <span id="s2-hl">faz diferente porque você é diferente.</span>
            </span>
          </div>
        </div>
        <div className='s5-text-div'>
          <p className='s2-text'>
            Cada pessoa é um universo, e cuidar deste individuo é zelar pela saúde e evolução da empresa. Consciência transformada gera felicidade e impulsiona o crescimento profissional e pessoal. Com a gestão da saúde mental você leva sua organização a outro nível, conectando mentes e pessoas a construírem juntos uma organização feliz e saudável.
          </p>
        </div>
      </div>
    </div>
    <div className='s6'>
      <span className='s5-title'>
        PROGRAMAS
      </span>
      <div className='s6-div'>
        <ProgramCard 
          title="Connects" 
          description="Solução para colaboradores"
          text="Saúde mental em primeiro lugar."
          imageLink="src/assets/pgConnects.png"
        />
        <ProgramCard
          title="Envolves"
          description="Solução para empresas"
          text="Cuidando das mentes, impulsionando resultados."
          imageLink="src/assets/pgEnvolves.png"
        />
        <ProgramCard
          title="Assertive Sessions"
          description="Direcionamento assertivo de sessões"
          text="Encontre a sua terapia e especialista mais adequado."
          imageLink="src/assets/pgAssertiveSessions.png"
        />
      </div>
    </div>
    <div className='s7'>
      <div className='s7-left'>
        <span id="s7-title">
          Separar o pessoal do profissional?
        </span>
        <span id="s7-subtitle"> Impossível</span>
        <p>
          Existe uma crença de que é possível dividir a personalidade em duas: uma pessoal e outra profissional. Somos seres integrados, que se fragmentam ao longo do tempo. Essa fragmentação, causada pelas bagagens ao longo da vida e,  intensidade da rotina, afeta a saúde física, mental e emocional.
        </p>
        <p>
          Uma pesquisa realizada pela consultoria Deloitte mostra que a exaustão tem efeitos dentro e fora do trabalho.
        </p>
      </div>
      <div className='s7-right'>
        <div className='s7-it'>
          <div className='s7-it-number'>
            91%
          </div>
          <div className='s7-it-text'>
            <span >
              dizem que o estresse ou frustração afeta de maneira negativa a qualidade do trabalho.
            </span>
          </div>
        </div>
        <div className='s7-it'>
          <div className='s7-it-number'>
            83%
          </div>
          <div className='s7-it-text'>
          <span>
            dizem que o burnout no trabalho impacta negativamente seus relacionamentos pessoais.
          </span>
          </div>
        </div>
        <div className='s7-it'>
          <div className='s7-it-number'>
            64%
          </div>
          <div className='s7-it-text'>
          <span>
            deles afirmam estar frequentemente estressados.
          </span>
          </div>
        </div>
      </div>
    </div>
    <div className='s8'>
      <div  className='s8-main-text'>
        <span className='s8-title'>
          A reintegração
          <span className='s8-hl'> é a chave para a evolução como um todo.
          </span>
        </span>
      </div>
      <div className='s8-div'>
        <div className='s8-text'>
          <p>
            Emoções afetam diversas áreas da vida, positiva ou negativamente . O que acontece na vida pessoal reflete na profissional e vice versa. É preciso transcender o desenvolvimento humano através da saúde integral frente às esferas do indivíduo e das empresas.
          </p>
          <p>
            A Nectus une ferramentas de jornada com terapias tradicionais e holísticas para fortalecer a individualidade saudável, potencializar capacidades humanas e profissionais,  em prol de desenvolver aprendizagem e direcionar a conexão sobre si, e com o outro.
          </p>
        </div>
        <div className='s8-bottom'>
          <div className='s8-circle'>
            <img alt="saude mental feminina" src={ s8Woman }/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Homepage
