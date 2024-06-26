import headline from '../assets/Headline.svg'
import nectusLogo from '../assets/NectusLogo.png'
import youngMen from '../assets/young-men.png'
import graphicNectusLogo from '../assets/graphic-logo.png'
import smilingGuy from '../assets/smilingGuy.png'
import nectusLogoGreen from '../assets/nectusLogoGreen.png'
import smilingGirl from '../assets/smilingGirl.png'
import ProgramCard from '../components/ProgramCard'
import s8Woman from '../assets/s8Woman.png'
import chevronLeft from '../assets/chevronLeft.svg'
import chevronLeftWhite from '../assets/chevronLeftWhite.svg'
import vectorGroup from '../assets/VectorGroup.svg'
import vectorGroup2 from '../assets/VectorGroup2.svg'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ArticleSlider from '../components/ArticlesSlider'
// import HPForm from '../components/HPForm'
import FadeInSection from '../utils/fadeInSection'
import SlideUpImages from '../utils/slideUpImages'
import scrollToSection from '../utils/helpers'
import SlideRightSection from '../utils/slideRightSection'
import MailchimpFormContainer from '../components/MailchimpFormContainer'
import PrivacyBanner from '../components/PrivacyBanner'


function Homepage() {

  return (
    <>
    <Header />
    <PrivacyBanner />
    <div className="s1">
        <img alt="nectus headline" src={ headline } className='s1-headline' />
        <img alt="nectus logo" src={ nectusLogo } className='nectus-logo' />
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className='down-arrow' id="s1-down-arrow" onClick={() => scrollToSection( 's2', 'center')}>
          <path d="M10 19L23 31L36 19" stroke="white"/>
          <circle cx="23" cy="23" r="22.5" stroke="white"/>
        </svg>
    </div>
    <div className='s2'>
      <img alt='graphic nectus logo' src={ graphicNectusLogo } className='graphic-logo' id="graphic-left"/>
      <div className='s2-title'>
        <div className='s2-title-and-text'>
          <span>
            A Nectus é a comunidade que cuida do <span id="s2-hl">bem-estar e qualidade de vida através da visão integrada de saúde mental e desenvolvimento humano.</span>
          </span>
          <p className='s2-text'>
            Potencializamos jornadas pessoais e profissionais através do direcionamento assertivo e com as melhores ferramentas para te ajudar a evoluir na vida e no trabalho, além de auxiliar no processo de ativar os potenciais que já existem dentro de você.
          </p>
        </div>
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
        <p className='s4-text'>
          Aqui, fortalecemos a saúde das empresas de forma leve e fluida. Inserimos cada negócio em uma cultura que gera ambientes produtivos, engajados e que promove a sensação de pertencimento, essencial para empresas que querem deixar a sua marca na sociedade e na vida das pessoas.
        </p>
      </div>
    </div>
    <div className='s5'>
    <div className='s5-div'>
        <div className='s5-title-div'>
          { window.innerWidth > 768 ?
            <span className='s5-title'>
              QUEM <br></br> SOMOS?
            </span>
          : <span className='s5-title'>
              QUEM SOMOS?
            </span>
          }
        </div>
        <div className='s5-subtitle'>
          <div className='s5-image-bg'>
            <SlideUpImages>
              <img alt='smiling guy' src={ smilingGuy } className='s5-img'/>
            </SlideUpImages>
          </div>
          <div className='s5-sb-text'>
            <span id='s4-text'>
            Estamos aqui para <span id="s2-hl">cuidar de você por completo.</span>
            </span>
          </div>
        </div>
        <div className='s5-text-div'>
          <p className='s5-text'>
            Cuidamos da saúde de pessoas e empresas com gestão inteligente.  Visionamos bem-estar e engajamento que alavancam a produtividade, gerando ambientes  de felicidade com maior senso de pertencimento. Visão integral em saúde organizacional focada em resultados e sucesso a longo prazo.
          </p>
        </div>
      </div>
      <div className='s5-div'>
        <div className='s5-title-div'>
          <span className='s5-title'>
            QUAL O NOSSO OBJETIVO?
          </span>
        </div>
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
          <p className='s5-text'>
            Promovemos a transformação da saúde organizacional integrando saúde mental, autoconhecimento e evolução humana. Direcionamos você de forma assertiva, contemplando suas necessidades e ampliando a sua visão sobre passado, presente e futuro. E isso inclui abraçar o corpo, a mente e o espírito.
          </p>
        </div>
      </div>
      <div className='s5-div'>
        <div className='s5-title-div'>
          <span className='s5-title'>
            NO QUE ACREDITAMOS?
          </span>
        </div>
        <div className='s5-subtitle'>
          <div className='s5-image-bg'>
            <SlideUpImages>
              <img alt='smiling girl' src={ smilingGirl } className='s5-img'/>
            </SlideUpImages>
          </div>
          <div className='s5-sb-text'>
            <span id='s4-text'>
            A Nectus <span id="s2-hl">faz diferente porque você é diferente.</span>
            </span>
          </div>
        </div>
        <div className='s5-text-div'>
          <p className='s5-text'>
            Cada pessoa é um universo, e cuidar deste individuo é zelar pela saúde e evolução da empresa. Consciência transformada gera felicidade e impulsiona o crescimento profissional e pessoal. Com a gestão da saúde mental você leva sua organização a outro nível, conectando mentes e pessoas a construírem juntos uma organização feliz e saudável.
          </p>
        </div>
      </div>
    </div>
    <div className='s6'>
      <span className='s11-title'>
        PROGRAMAS
      </span>
      <div className='s6-div'>
        <ProgramCard 
          title="Connects" 
          description="Solução para colaboradores"
          text="Saúde mental em primeiro lugar."
          imageLink='./connects.png'
          sectionId='connects'
        />
        <ProgramCard
          title="Evolves"
          description="Solução para empresas"
          text="Cuidando das mentes, impulsionando resultados."
          imageLink='./envolves.png'
          sectionId='envolves'
        />
        <ProgramCard
          title="Assertive Sessions"
          description="Direcionamento assertivo de sessões"
          text="Encontre a sua terapia e especialista mais adequado."
          imageLink='./assertive.png'
          sectionId='assertive-sessions'
        />
      </div>
    </div>
    <div className='s7'>
      <div className='s7-left'>
        <span id="s7-title">
          Separar o pessoal <br></br>do profissional?
        </span>
        <span id="s7-subtitle">Impossível.</span>
        <p className='s7-l-text'>
          Existe uma crença de que é possível dividir a personalidade em duas: uma pessoal e outra profissional. Somos seres integrados, que se fragmentam ao longo do tempo. Essa fragmentação, causada pelas bagagens ao longo da vida e,  intensidade da rotina, afeta a saúde física, mental e emocional.
        </p>
        <p className='s7-l-text'>
          Uma pesquisa realizada pela consultoria Deloitte mostra que a exaustão tem efeitos dentro e fora do trabalho.
        </p>
      </div>
      <div className='s7-right'>
        <div className='s7-it'>
          <div className='s7-it-number'>
            91%
          </div>
          <SlideRightSection>
            <div className='s7-it-text'>
              <span className='s7-it-in-text'>
                dizem que o estresse ou <br></br>frustração afeta de maneira negativa a qualidade do trabalho.
              </span>
            </div>
          </SlideRightSection>
        </div>
        <div className='s7-it'>
          <div className='s7-it-number'>
            83%
          </div>
          <SlideRightSection>
            <div className='s7-it-text'>
            <span className='s7-it-in-text'>
              dizem que o burnout no trabalho impacta negativamente seus relacionamentos pessoais.
            </span>
            </div>
          </SlideRightSection>
        </div>
        <div className='s7-it'>
          <div className='s7-it-number'>
            64%
          </div>
          <SlideRightSection>
          <div className='s7-it-text'>
          <span className='s7-it-in-text'>
            deles afirmam estar frequentemente estressados.
          </span>
          </div>
          </SlideRightSection>
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
          <p id='s8-first-txt'>
            Emoções afetam diversas áreas da vida, positiva ou negativamente. O que acontece na vida pessoal reflete na profissional e vice versa. É preciso transcender o desenvolvimento humano através da saúde integral frente às esferas do indivíduo e das empresas.
          </p>
          <p>
            A Nectus une ferramentas de jornada com terapias tradicionais e holísticas para fortalecer a individualidade saudável, potencializar capacidades humanas e profissionais,  em prol de desenvolver aprendizagem e direcionar a conexão sobre si, e com o outro.
          </p>
        </div>
        <div className='s8-bottom'>
          <div className='s8-circle'>
            <img alt="saude mental feminina" src={ s8Woman } className='s8-image'/>
          </div>
        </div>
      </div>
    </div>
    <div className='s9'>
      <div className='s9-left'>
        <div className='s9-boxes'>
          <div className='s9-box-up'>
            <img alt='depression icon' src={vectorGroup} className='s9-icon'/>
            <span className='s9-title'>
              Depressão
            </span>
          </div>
          <div className='s9-box-down'>
            <div className='s9-li'>
              <img alt='icon' src={chevronLeftWhite}/>
              <span className='s9-list'>
                O Brasil lidera o ranking de casos de depressão na América Latina e o 5º país mais depressivo do mundo
              </span>
              <span className='s9-comment'>
                (LHH do Grupo Adecco; OMS)
              </span>
            </div>
            <div className='s9-li'>
              <img alt='icon' src={chevronLeftWhite}/>
              <span className='s9-list'>
                + ou - 300 milhões de pessoas sofrem de DEPRESSÃO no mundo
              </span>
              <span className='s9-comment'>
                (LHH do Grupo Adecco)
              </span>
            </div>
            <div className='s9-li'>
              <img alt='icon' src={chevronLeftWhite} />
              <span className='s9-list'>
                Até 2030 a depressão será a doença mais comum do mundo
              </span>
              <span className='s9-comment'>
                (OMS)
              </span>
            </div>
          </div>
        </div>
        <div className='s9-boxes'>
          <div className='s9-box-up'>
            <img alt='anxiety icon' src={vectorGroup2} className='s9-icon' />
            <span className='s9-title'>
              Ansiedade
            </span>
          </div>
          <div className='s9-box-down'>
            <div className='s9-li'>
              <img alt='icon' src={chevronLeftWhite}/>
              <span className='s9-list'>
                O Brasil lidera o ranking do país mais ansioso do mundo
              </span>
              <span className='s9-comment'>
               (OMS)
              </span>
            </div>
            <div className='s9-li'>
              <img alt='icon' src={chevronLeftWhite}/>
              <span className='s9-list'>
                É a terceira maior causa de afastamentos do trabalho no Brasil
              </span>
              <span className='s9-comment'>
                (OMS)
              </span>
            </div>
            <div className='s9-li'>
              <img alt='icon' src={chevronLeftWhite} />
              <span className='s9-list'>
                9% dos brasileiros sofrem de ansiedade patológica, quase 20 milhões de pessoas
              </span>
            </div>
            <div className='s9-li'>
              <img alt='icon' src={chevronLeftWhite} />
              <span className='s9-list'>
                US$ 6 trilhões serão os custos globais com problemas psicológicos até 2030
              </span>
              <span className='s9-comment'>
                (Fórum Econômico Mundial e LSE UK)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='s9-right'>
          <p className='s9-r-title'>
            Pessoas saudáveis, 
          </p>
          <p className='s9-r-title'>
            empresas saudáveis,
          </p>
          <p className='s9-r-bold s9-r-title'>
            organizações que crescem.
          </p>
          <p id='s9-r-text'>
            Pense em sua empresa como um indivíduo. Ela precisa estar saudável para viver bem, evoluir, potencializar e expandir resultados.
          </p>
        <FadeInSection>
          <div className='s9-r-box'>
            <img alt='icon' src={chevronLeft} className='s9-icon-black'/>
            <span className='s9-r-point'>
              70% do tempo os colaboradores reportam não estarem presente em reuniões
            </span>
            <p className='s9-font'>
              (Mindful Leadership Institute)
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className='s9-r-box'>
            <img alt='icon' src={chevronLeft} className='s9-icon-black' />
            <span className='s9-r-point'>
              12 bilhões de dias de trabalho são perdidos devido a problemas psicológicos no período de 1 ano
            </span>
            <p className='s9-font'>
              (LHH do Grupo Adecco)
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className='s9-r-box'>
            <img alt='icon' src={chevronLeft} className='s9-icon-black'/>
            <span className='s9-r-point'>
              Empresas que não cuidam da saúde mental das pessoas geram um custo de 1 trilhão de dólares por perda de produtividade e afastamento de colaboradores, na economia global
            </span>
            <p className='s9-font'>
              (Fórum Econômico Mundial e LSE UK)
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className='s9-r-box'>
            <img alt='icon' src={chevronLeft} className='s9-icon-black'/>
            <span className='s9-r-point'>
              US$ 6 trilhões serão os custos globais com problemas psicológicos até 2030
            </span>
            <p className='s9-font'>
              (Fórum Econômico Mundial e LSE UK)
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
    <div className='s10'>
        <img alt='graphic nectus logo' src={ graphicNectusLogo } className='s10-graphic-logo' id="s10-logo-right"/>
      <div className='s10-title'>
        <div className='s10-title-and-text'>
          { window.innerWidth > 768 ? 
            <span>
              <span id="s10-hl">É possível mudar o rumo dessa história.</span> Faça parte do movimento de <span id="s10-hl-2">transformação humana global<br></br> junto a agenda 2030 da ONU</span><br></br> e torne a sua empresa líder em cuidar da saúde das pessoas colaboradoras.
            </span> 
          : <span>
            <span id="s10-hl">É possível mudar o rumo dessa história.</span> Faça parte do movimento de <span id="s10-hl-2">transformação humana global junto a agenda 2030 da ONU</span> e torne a sua empresa líder em cuidar da saúde das pessoas colaboradoras.
          </span>}
          <div>
          <button className='btn-1' id="s10-btn" onClick={() => scrollToSection( 's12', 'nearest')}>
            Conheça agora
          </button>
          </div>
        </div>
      </div>
      <img alt='graphic nectus logo' src={ graphicNectusLogo } className='s10-graphic-logo' id="s10-logo-left"/>
    </div>
    <div className='s11'>
      <div className='s11-title'>
        <span>SERVIÇOS</span>
      </div>
      <FadeInSection>
        <div className='s11-box'>
          <div className='s11-box-left' id="connects">
            <span className='s11-box-title'>
              Connects
            </span>
            <span className='s11-box-subtitle'>
              O match perfeito entre você e a sua melhor versão.
            </span>
            <button className='btn-2 s11-btn' onClick={() => scrollToSection( 's12', 'nearest')}>
              Agende uma demonstração
            </button>
          </div>
          <div className='s11-box-right'>
            <p>
              A Connects é uma ferramenta intuitiva de autoavaliação mental e emocional. Responda ao questionário para receber insights e descubra as melhores terapias e especialistas para iniciar o seu processo de evolução.
            </p>
            <button className='btn-2 s11-btn-2' onClick={() => scrollToSection( 's12', 'nearest')}>
              Agende uma demonstração
            </button>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className='s11-box'>
          <div className='s11-box-left s11-left-heigher'>
            <span className='s11-box-title' id="envolves">
              Evolves
            </span>
            <span className='s11-box-subtitle'>
              Conectando empresas a melhores resultados.
            </span>
            <button className='btn-2 s11-btn' onClick={() => scrollToSection( 's12', 'nearest')}>
              Agende uma demonstração
            </button>
          </div>
          <div className='s11-box-right'>
            <p>
            Toda empresa de sucesso é comprometida com a saúde e bem-estar dos colaboradores. Mapeie o estado mental e emocional das equipes e receba planos contínuos e personalizados para transformar pessoas e multiplicar resultados.
            <br></br>
              <strong>
                Colaboradores chegam à excelência quando começam a construir novos padrões mentais, emocionais, comportamentais, culturais e sociais
              </strong>
            </p>
            <button className='btn-2 s11-btn-2' onClick={() => scrollToSection( 's12', 'nearest')}>
              Agende uma demonstração
            </button>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className='s11-box'>
          <div className='s11-box-left s11-left-heigher'>
            <span className='s11-box-title' id="assertive-sessions">
              Assertive Sessions
            </span>
            <span className='s11-box-subtitle'>
              Encontre a sua terapia e especialista mais adequado.
            </span>
            <button className='btn-2 s11-btn' onClick={() => scrollToSection( 's12', 'nearest')}>
              Agende uma demonstração
            </button>
          </div>
          <div className='s11-box-right'>
            <p>
            Encontrar o terapeuta certo pode ser desafiador. Com nosso serviço de direcionamento assertivo, conectamos você ao especialista ideal. Identificamos terapeutas qualificados para suas necessidades específicas. Inicie a terapia com confiança e conveniência. Encontre a terapia certa e o especialista perfeito para sua jornada de evolução e crescimento pessoal.
            </p>
            <button className='btn-2 s11-btn-2' onClick={() => scrollToSection( 's12', 'nearest')}>
              Agende uma demonstração
            </button>
          </div>
        </div>
      </FadeInSection>
    </div>
    <div className='s11-title'>
      <span style={{ margin: "30px" }}>ARTIGOS</span>
    </div>
    <ArticleSlider />
    <div className='s12'>
      <div className='s12-div'>
        <div className='s12-text'>
          <span>
            <span id="s10-hl">Empresas<br></br> de sucesso cuidam <br></br> das pessoas colaboradoras.</span> Comece hoje.
          </span>
        </div>
        <div className="s12-right-div">
          <span className='s12-form-title'>
            Agende uma conversa com a gente.
          </span>
          <MailchimpFormContainer type={'homepage'} />
        </div>
      </div>
      <div className='s12-img-div'>
        <img alt='graphic nectus logo' src={ graphicNectusLogo } className='s10-graphic-logo' id="s12-logo-left"/>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Homepage
