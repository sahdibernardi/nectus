import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function ProfessionalForm ({ status, message, onValidated }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [gender, setGender] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    email &&
    name &&
    phone &&
    cpf &&
    speciality &&
    gender &&
    linkedin &&
    onValidated({
      MERGE1: name,
      MERGE0: email,
      MERGE4: phone,
      MERGE9: cpf,
      MERGE11: speciality,
      MERGE10: gender,
      MERGE12: linkedin,
    });
  }

  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setEmail('');
    setName('');
    setPhone('');
    setCpf('');
    setSpeciality('');
    setGender('');
    setLinkedin('');
  }

  return(
    <form className="forms" onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder="Nome"
        className='s12-input'
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <input
        type="text"
        placeholder="E-mail coorporativo"
        className='s12-input'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <div className="input-row">
        <input
          type="text"
          placeholder="Celular"
          className='s12-input'
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
        <input
          type="cpf"
          placeholder="CPF"
          className='s12-input'
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          required
        />
      </div>
      <div className="input-row">
        <input
          type="text"
          placeholder="Especialidade"
          className='s12-input'
          onChange={(e) => setSpeciality(e.target.value)}
          value={speciality}
          required
        />
        <select className='s12-select' onChange={(e) => setGender(e.target.value)} required>
          <option value="Quantidade de Colaboradores" default>Gênero</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Não binário">Não binário</option>
          <option value="Prefiro não informar">Prefiro não informar</option>
        </select>
      </div>
      <input
          type="text"
          placeholder="LinkedIn"
          className='s12-input'
          onChange={(e) => setLinkedin(e.target.value)}
          value={linkedin}
          required
        />
      <span id="form-privacy">Estou ciente e concordo que ao enviar este formulário estarei concordando com os <Link to="/terms" className="link">Termos de Uso</Link> e a <Link to="/privacy" className="link">Política de Privacidade</Link> da Nectus.</span>
      <button className='form-btn' type="submit">
        Agendar agora
      </button>
      {status === "sending" && (
        <div className="s12-form-warning">
          Enviando...
        </div>
      )}
      {console.log(message)}
      {status === "error" && (
        <div className="s12-form-warning">
          Desculpe, ocorreu o seguinte erro ao enviar o seu formulário: {message}
        </div>
      )}
      {status === "success" && (
        <div className="s12-form-warning">
          Obrigada pela inscrição! Entraremos em contato o mais brevemente possível.
        </div>
      )}
    </form>
  )
}

ProfessionalForm.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onValidated: PropTypes.func.isRequired,
};

export default ProfessionalForm