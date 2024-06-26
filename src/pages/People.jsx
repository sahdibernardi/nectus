import { useEffect } from "react";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivacyBanner from "../components/PrivacyBanner";

function People() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <Header />
    <PrivacyBanner />
      <ContactPage buttonText='Para Pessoas Colaboradoras' classProp='people' title="Quer transformar sua empresa?" subtitle="Fale com a gente." formTitle="Agende agora uma conversa com os nossos profissionais."/>
    <Footer />
    </>
  );
}

export default People;