import PropTypes from 'prop-types';

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
      <div className='ar-center'>
        <span className='ar-headline'>
          { headline }
        </span>
      <div style={{margin: "20px 0 0 0"}}>
        <a href={link} target="_blank" rel="noreferrer" className='ar-link'>
            Leia mais 
              <svg className='ar-chevron' width="8" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="#8D55E7"/>
              </svg>
        </a>
      </div>
      </div>
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