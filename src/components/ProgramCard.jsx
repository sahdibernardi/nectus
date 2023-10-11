import PropTypes from 'prop-types';
import { scrollToId } from '../utils/helpers';

function ProgramCard (props) {
  const { title, imageLink, description, text, sectionId } = props

 return (
  <div className='pg-card'>
    <span className='pg-title'>
      { title }
    </span>
    <img alt={ title } src={ imageLink } className='pg-img' />
      <span className='pg-hl'>
        { description }
      </span>
    <div className='pg-center'>
      <span className='pg-text'>
        { text }
      </span>
      <button type="button" className="pg-btn" onClick={() => scrollToId( sectionId, 'center')}>
        Saiba mais
      </button>
    </div>
  </div>
 )
}

ProgramCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
};

export default ProgramCard