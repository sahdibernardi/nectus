import { useState } from 'react';
import Article from './Article';

const cardData = [
  { id: 1,
    title: 'Card 1',
    magazine: './globoLogo.png',
    imageLink: './globo.png',
    headline: 'Terapia online cresce e amplia alcance de tratamentos psicológicos',
    link: 'https://revistapegn.globo.com/Startups/noticia/2021/10/terapia-online-cresce-e-amplia-alcance-de-tratamentos-psicologicos.html ', 
  },
  { id: 2,
    title: 'Card 2',
    magazine: './exameLogo.png',
    imageLink: './harvard1.png',
    headline: 'Para 70% dos brasileiros, empresas não sabem lidar com saúde mental',
    link: 'https://exame.com/carreira/para-70-dos-brasileiros-empresas-nao-sabem-lidar-com-saude-mental/',
  },
  { id: 3,
    title: 'Card 3',
    magazine: './mckinseyLogo.png',
    imageLink: './mckinsey.png',
    headline: 'O novo possível: como o RH pode ajudar a construir a organização do futuro.',
    link: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-new-possible-how-hr-can-help-build-the-organization-of-the-future/pt-br',
  },
  { id: 4,
    title: 'Card 4',
    magazine: './harvardLogo.png',
    imageLink: './harvard1.png',
    headline: '9 de 10 pessoas estão dispostas a ganhar menos dinheiro para realizar um trabalho mais significativo',
    link: 'https://mooc.campusvirtual.fiocruz.br/rea/desafios-da-lideranca/curso1/images/texto-HBR_Trabalho_significativo-Shawn_Achor_e_outros.pdf', 
  },
  { id: 5,
    title: 'Card 5',
    magazine: './harvardLogo.png',
    imageLink: './harvard2.png',
    headline: 'Liderança e propósito: provocando impacto positivo no desenvolvimento das organizações.',
    link: 'https://ci.fdc.org.br/AcervoDigital/Artigos%20FDC/Artigos%20DOM%2040/Lideran%C3%A7a%20e%20prop%C3%B3sito.pdf', 
  },
  { id: 6,
    title: 'Card 6',
    magazine: './wobaLogo.png',
    imageLink: './woba.png',
    headline: 'Saúde mental no trabalho: 11 estatísticas para você conhecer',
    link: 'https://blog.woba.com.br/saude-mental-no-trabalho/',
  },
  { id: 7,
    title: 'Card 7',
    magazine: './exameLogo.png',
    imageLink: './exame2.png',
    headline: 'Entenda o que é e para que serve a cultura organizacional',
    link: 'https://exame.com/carreira/o-que-e-cultura-organizacional/ ',
  },
  { id: 8,
    title: 'Card 8',
    magazine: './forbesLogo.png',
    imageLink: './forbes.png',
    headline: 'Investimento em saúde mental reduz turnover e melhora desempenho, aponta pesquisa',
    link: 'https://forbes.com.br/carreira/2022/05/investimento-em-saude-mental-reduz-turnover-e-melhora-desempenho-aponta-pesquisa/',
  },
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
