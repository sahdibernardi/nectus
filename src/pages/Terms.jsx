import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import graphicNectusLogo from '../assets/graphic-logo.png'
import { Link } from "react-router-dom";

function Terms() {
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
                    Termos de Uso
                </span>
                </span>
                <p className='s2-text'>
                    Nossos Termos e Condições Gerais de Uso do site estão em constantemente melhoria para melhor atendê-los! Você pode encontrá-los <Link to="https://docs.google.com/document/d/13P8_3qs3xSia6dSxQXCxN7a17GlhHLIX3iQhkvbUH7A/edit?usp=sharing" target="_blank" className="link">nesse link</Link>.
                </p>
                <p className='s2-text'>
                    A Nectus é a sua parceira. Para mais dúvidas ou sugestões, sobre sobre os nossos Termos de Uso, entre em contato com o nosso suporte em suporte@nectusapp.com!
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
