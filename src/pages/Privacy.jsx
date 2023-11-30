import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import graphicNectusLogo from '../assets/graphic-logo.png'
import { Link } from "react-router-dom";

function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
        <Header />
        <div className='s2'>
            <img alt='graphic nectus logo' src={ graphicNectusLogo } className='graphic-logo' id="graphic-left"/>
            <div className='s2-title'>
                <span>
                <span id="s2-hl">
                    Política de Privacidade
                </span>
                </span>
                <p className='s2-text'>
                    Aqui na Nectus, nós seguimos as melhores práticas de privacidade e segurança para garantir a proteção dos seus dados pessoais. Por isso, nossa Política de Privacidade e Tratamento de Dados está em constante melhoria e atualização, e você pode encontrá-la <Link to="https://docs.google.com/document/d/18nqMXK0_QnS9DjottkrdwT2FxZZJsqQwWdusfEudLto/edit?usp=sharing" target="_blank" className="link">nesse link</Link>.
                </p>
                <p className='s2-text'>
                    A Nectus é a sua parceira, para mais dúvidas, sugestões, sobre a nossa política de privacidade, entre em contato com o nosso time de privacidade em privacidade@nectusapp.com!
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

export default Privacy;
