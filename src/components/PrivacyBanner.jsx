import { useEffect, useState } from 'react';
import nectusLogo from '../assets/nectusLogoHorizontal.png'
import { Link } from 'react-router-dom';

function PrivacyBanner() {
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  useEffect(() => {
    const privacyAccepted = localStorage.getItem('privacyAccepted');
    if (privacyAccepted) {
      setIsPrivacyAccepted(true);
    }
  }, [])

  const togglePrivacy = () => {
    setIsPrivacyAccepted(true);
    localStorage.setItem('privacyAccepted', true);
  };


  return (
    <>
    {!isPrivacyAccepted && (
    <div className="privacy-banner">
      <div>
        Utilizamos cookies para melhorar a sua experiência no site. Consulte a nossa <Link to="/privacy" id="privacy-link">Política de Privacidade</Link>.
      </div>
      <button className="privacy-banner-btn" onClick={togglePrivacy}>
        Aceitar
      </button>
    </div>
    )}
    </>
  )
}

export default PrivacyBanner;
