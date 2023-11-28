import { useState } from 'react';
import Article from './Article';

const cardData = [
  { id: 0,
    title: 'Card 0',
    magazine: './forbesLogo.png',
    imageLink: './forbes.png',
    headline: 'Investimento em saúde mental reduz turnover e melhora desempenho, aponta pesquisa.',
    link: 'https://forbes.com.br/carreira/2022/05/investimento-em-saude-mental-reduz-turnover-e-melhora-desempenho-aponta-pesquisa/',
  },
  { id: 1,
    title: 'Card 1',
    magazine: './harvardLogo.png',
    imageLink: './harvard1.png',
    headline: '9 de 10 pessoas estão dispostas a ganhar menos dinheiro para realizar um trabalho mais significativo.',
    link: 'https://mooc.campusvirtual.fiocruz.br/rea/desafios-da-lideranca/curso1/images/texto-HBR_Trabalho_significativo-Shawn_Achor_e_outros.pdf', 
  },
  { id: 2,
    title: 'Card 2',
    magazine: './harvardLogo.png',
    imageLink: './harvard2.png',
    headline: '80% preferem uma liderança que se importe com a busca individual por significado e sucesso do trabalho.',
    link: 'https://ci.fdc.org.br/AcervoDigital/Artigos%20FDC/Artigos%20DOM%2040/Lideran%C3%A7a%20e%20prop%C3%B3sito.pdf', 
  },
  { id: 3,
    title: 'Card 3',
    magazine: './mckinseyLogo.png',
    imageLink: './mckinsey.png',
    headline: '70% dos funcionários dizem que seu senso de propósito é definido por seu trabalho.',
    link: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-new-possible-how-hr-can-help-build-the-organization-of-the-future/pt-br',
  },
  { id: 4,
    title: 'Card 4',
    magazine: './globoLogo.png',
    imageLink: './globo.png',
    // headline: 'A Saúde Mental do brasileiro está entre as piores do mundo, onde o Brasil lidera o ranking de depressão na américa latina e campeão do país mais ansioso do mundo.',
    headline: 'A Saúde Mental do brasileiro está entre as piores do mundo: líder em depressão na américa latina e em ansiedade global.',
    link: 'https://revistapegn.globo.com/Startups/noticia/2021/10/terapia-online-cresce-e-amplia-alcance-de-tratamentos-psicologicos.html ', 
  },
  { id: 5,
    title: 'Card 5',
    magazine: './exameLogo.png',
    imageLink: './exame1.png',
    headline: 'Para 70% dos brasileiros, empresas não sabem lidar com saúde mental.',
    link: 'https://exame.com/carreira/para-70-dos-brasileiros-empresas-nao-sabem-lidar-com-saude-mental/',
  },
  { id: 6,
    title: 'Card 6',
    magazine: './wobaLogo.png',
    imageLink: './woba.png',
    headline: 'Problemas mentais também agravam e ocasionam outras doenças, como obesidade, diabetes e hipertensão.',
    link: 'https://blog.woba.com.br/saude-mental-no-trabalho/',
  },
  { id: 7,
    title: 'Card 7',
    magazine: './exameLogo.png',
    imageLink: './exame2.png',
    headline: 'Uma pesquisa da McKinsey, mostra que empresas com melhores culturas têm um retorno 60% maior em lucros.',
    link: 'https://exame.com/carreira/o-que-e-cultura-organizacional/ ',
  }
];

function ArticleSlider () {
  const [startIndex, setStartIndex] = useState(0);

  const numVisibleGroups = Math.ceil(cardData.length - 3);

  const navigationButtons = Array.from({ length: numVisibleGroups }, (_, index) => (
    <button
      key={index}
      className={`nav-button ${index === startIndex ? 'active' : ''}`}
      onClick={() => setStartIndex(index)}
    >
    </button>
  ));

  const deviceWidth = window.innerWidth;

  let slicedCard = [];

  if(deviceWidth < 768) {
    slicedCard = cardData.slice(startIndex, startIndex + cardData.length).map((card) => (
      <div className="card" key={card.id}>
        <Article card={card}  />
      </div>
    ))
  } else {
    slicedCard = cardData.slice(startIndex, startIndex + 4).map((card) => (
      <div className="card" key={card.id}>
        <Article card={card}  />
      </div>
    ))
  }


  return (
    <div className="card-slider">
      <div className="cards-container">
        { slicedCard }
      </div>
        <div className="nav-buttons">
          {navigationButtons}
        </div>
    </div>
  );
}

export default ArticleSlider;
