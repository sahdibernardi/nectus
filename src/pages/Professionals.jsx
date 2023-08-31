import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Professionals() {
  return (
    <>
    <Header />
      <ContactPage buttonText='Para Profissionais' classProp='professionals' title="Faça parte da revolução da Nectus" subtitle="Trabalhe com a gente." formTitle="Agende um bate papo agora"/>
    <Footer />
    </>
  );
}

export default Professionals;