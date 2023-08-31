import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

function People() {
  return (
    <>
    <Header />
      <ContactPage buttonText='Para Pessoas Colaboradoras' classProp='people' title="Quer transformar sua empresa?" subtitle="Fale com a gente." formTitle="Agende agora uma conversa com os nossos profissionais"/>
    <Footer />
    </>
  );
}

export default People;