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
      Nosso site usa cookies para melhorar sua experiência. Ao clicar em "Concordo", você concorda com nosso uso de cookies.
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
