import { useEffect } from "react";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Companies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <Header />
      <ContactPage buttonText='Para Empresas' classProp='companies' title="Empresas de sucesso cuidam dos colaboradores" subtitle="Comece hoje." formTitle="Agende agora e conheça os benefícios e programas para a sua empresa"/>
    <Footer />
    </>
  );
}

export default Companies;