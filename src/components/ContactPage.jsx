import PropTypes from 'prop-types';
import nectusLogo from '../assets/NectusLogo.png'
import HPForm from './HPForm';

function ContactPage ({ buttonText, classProp, title, subtitle, formTitle }) {
    return (
      <>
      <div className={classProp}>
        <div className='contat-div'>
          <button className='contact-subtitle'>
            { buttonText }
          </button>
          <img alt="nectus logo" src={ nectusLogo } className='nectus-logo' />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className='down-arrow' id="s1-down-arrow">
            <path d="M10 19L23 31L36 19" stroke="white"/>
            <circle cx="23" cy="23" r="22.5" stroke="white"/>
          </svg>
      </div>
      <div className='contact-form-div'>
        <div className='s12-text contact-form-title'>
          <span>
            <span id="s10-hl">{title}</span> {subtitle}
          </span>
        </div>
        <div className="s12-right-div">
          <span className='s12-form-title' >
            {formTitle}
          </span>
          <HPForm />
        </div>
      </div>
      </>
    );
}

ContactPage.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classProp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  formTitle: PropTypes.string.isRequired,
};

export default ContactPage;