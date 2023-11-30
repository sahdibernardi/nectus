import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PrivacyBanner() {
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  useEffect(() => {
    const privacyAccepted = sessionStorage.getItem('privacyAccepted');
    if (privacyAccepted) {
      setIsPrivacyAccepted(true);
    }
  }, [])

  const togglePrivacy = () => {
    setIsPrivacyAccepted(true);
    sessionStorage.setItem('privacyAccepted', true);
  };


  return (
    <>
    {!isPrivacyAccepted && (
    <div className="privacy-banner">
      <div>
        Utilizamos cookies para melhorar a sua experiência no site. Consulte a nossa <Link to="/privacy" id="privacy-link">Política de Privacidade</Link> para mais informações.
      </div>
      <button className="privacy-banner-btn" onClick={togglePrivacy}>
        Aceito
      </button>
    </div>
    )}
    </>
  )
}

export default PrivacyBanner;
