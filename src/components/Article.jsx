import PropTypes from 'prop-types';
import chevronLeft from '../assets/chevronLeft.svg'

function Article (props) {
  const { magazine, imageLink, headline, link } = props.card

 return (
  <div className='article'>
    <div className='ar-img-div'>
      <img alt={ headline } src={ imageLink } className='ar-img' />
    </div>
    <div className='ar-info'>
      <div className='ar-mgz'>
        <img alt={ magazine } src={ magazine } className='ar-mgz-img' />
      </div>
        <span className='ar-headline'>
          { headline }
        </span>
    </div>
    <div>
      <a href={link} target="_blank" rel="noreferrer" className='ar-link'>
          Leia mais <img alt='icon' src={chevronLeft} className='s9-icon-black'/>
      </a>
    </div>
  </div>
 )
}

Article.propTypes = {
  card: PropTypes.shape({
    magazine: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article