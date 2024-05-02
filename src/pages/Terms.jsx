import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import graphicNectusLogo from '../assets/graphic-logo.png'
import { Link } from "react-router-dom";
import PrivacyBanner from "../components/PrivacyBanner";

function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
        <Header />
        <PrivacyBanner />
        <div className='s2'>
            <img alt='graphic nectus logo' src={ graphicNectusLogo } className='graphic-logo' id="graphic-left"/>
            <div className='s2-title'>
                <span>
                <span id="s2-hl">
                    Termos de Uso
                </span>
                </span>
                <p className='s2-text'>
                    Nossos Termos e Condições Gerais de Uso do site estão em constantemente melhoria para melhor atendê-los! Você pode baixá-los clicando <Link to="/public/TermosDeUsoNectus.pdf" download target="_blank" className="link">aqui</Link>.
                </p>
                <p className='s2-text'>
                    A Nectus é a sua parceira. Para mais dúvidas ou sugestões, sobre os nossos Termos de Uso, entre em contato com o nosso suporte em suporte@nectusapp.com!
                </p>
                <p className='s2-text'>
                    Ficaremos felizes em lhe atender!✨
                </p>
            </div>
            <img alt='graphic nectus logo' src={ graphicNectusLogo } className='graphic-logo' id="graphic-right"/>
        </div>
        <Footer />
        </>
    )
}

export default Terms;
