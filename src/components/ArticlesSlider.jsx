import { useState } from 'react';
import Article from './Article';

const cardData = [
  { id: 1,
    title: 'Card 1',
    magazine: './forbesLogo.png',
    imageLink: './forbes.png',
    headline: 'Investimento em saúde mental reduz turnover e melhora desempenho, aponta pesquisa.',
    link: '', 
  },
  { id: 2,
    title: 'Card 2',
    magazine: './harvardLogo.png',
    imageLink: './harvard1.png',
    headline: '9 de 10 pessoas estão dispostas a ganhar menos dinheiro para realizar um trabalho mais significativo.',
    link: '',
  },
  { id: 3,
    title: 'Card 3',
    magazine: './harvardLogo.png',
    imageLink: './harvard2.png',
    headline: 'Liderança e propósito: provocando impacto positivo no desenvolvimento das organizações.',
    link: '', 
  },
  { id: 4,
    title: 'Card 4',
    magazine: './mckinseyLogo.png',
    imageLink: './mckinsey.png',
    headline: 'O novo possível: como o RH pode ajudar a construir a organização do futuro.',
    link: '',
  },
  { id: 5,
    title: 'Card 5',
    magazine: './forbesLogo.png',
    imageLink: './forbes.png',
    headline: 'Card 5',
    link: '',
  },
  { id: 6,
    title: 'Card 6',
    magazine: './forbesLogo.png',
    imageLink: './forbes.png',
    headline: 'Card 6',
    link: '',
  },
  { id: 7,
    title: 'Card 7',
    magazine: './forbesLogo.png',
    imageLink: './forbes.png',
    headline: 'Card 7',
    link: '',
  },
  { id: 8,
    title: 'Card 8',
    magazine: './forbesLogo.png',
    imageLink: './forbes.png',
    headline: 'Card 8',
    link: '',
  },
  { id: 9,
    title: 'Card 9',
    magazine: './forbesLogo.png',
    imageLink: './forbes.png',
    headline: 'Ultimo card',
    link: '',
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
