import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import graphicNectusLogo from '../assets/graphic-logo.png'
import PrivacyBanner from "../components/PrivacyBanner";

function PageNotFound() {
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
                    Erro 404
                <br></br>
                <span id="s2-hl">
                    Página não encontrada
                </span>
                </span>
                <p className='s2-text'>
                    Pedimos desculpas pela inconveniência e transtorno gerado, saiba que estamos trabalhando com amor e dedicação para estabilizar e a voltar agregar mais em sua vida e organização.
                </p>
                <p className='s2-text'>
                    A Nectus é a sua parceira, para mais dúvidas, sugestões, sobre nossos serviços, entre em contato com o nosso suporte em suporte@nectusapp.com!
                </p>
                <p className='s2-text'>
                    Ficaremos felizes em lhe atender! Obrigada(o) pela compreensão!✨
                </p>
            </div>
            <img alt='graphic nectus logo' src={ graphicNectusLogo } className='graphic-logo' id="graphic-right"/>
        </div>
        <Footer />
        </>
    )
}

export default PageNotFound;
