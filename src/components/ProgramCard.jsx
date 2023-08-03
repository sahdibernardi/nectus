import PropTypes from 'prop-types';

function ProgramCard (props) {
  const { title, imageLink, description, text } = props

 return (
  <div className='pg-card'>
    <span className='pg-title'>
      { title }
    </span>
    <img alt={ title } src={ imageLink } className='pg-img' />
    <span className='pg-hl'>
      { description }
    </span>
    <span className='pg-text'>
      { text }
    </span>
    <button type="button" className="pg-btn">
      Saiba mais
    </button>
  </div>
 )
}

ProgramCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProgramCard