import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

function HPForm ({ status, message, onValidated }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [company, setCompany] = useState('');
  const [size, setSize] = useState('');
  const [heardAbout, setHeardAbout] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    email &&
    name &&
    phone &&
    position &&
    department &&
    company &&
    size &&
    heardAbout &&
    reason &&
    email.indexOf("@") > -1 &&
    onValidated({
      MERGE1: name,
      MERGE0: email,
      MERGE4: phone,
      MERGE6: position,
      MERGE3: department,
      MERGE7: company,
      MERGE2: size,
      MERGE5: heardAbout,
      MERGE8: reason,
    });
  }

  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setEmail('');
    setName('');
    setPhone('');
    setPosition('');
    setDepartment('');
    setCompany('');
    setSize('');
    setHeardAbout('');
    setReason('');
  }

  return(
    <form className="forms" onSubmit={ handleSubmit }>
            <input 
              type="text" 
              placeholder="Nome"
              className='s12-input'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="E-mail coorporativo"
              className='s12-input'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Telefone"
              className='s12-input'
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <div className="input-row">
              <input
                type="text"
                placeholder="Cargo"
                className='s12-input'
                onChange={(e) => setPosition(e.target.value)}
                value={position}
              />
              <select className='s12-select' onChange={(e) => setDepartment(e.target.value)}>
                <option value="Departamento" default disabled>Departamento</option>
                <option value="Founders / Gestão de Pessoas / RH">Founders / Gestão de Pessoas / RH</option>
                <option value="Administrativo / Financeiro">Administrativo / Financeiro</option>
                <option value="Comercial / Vendas / Marketing">Comercial / Vendas / Marketing</option>
                <option value="Tecnologia / P&D / Operações e Processos">Tecnologia / P&D / Operações e Processos</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <div className="input-row">
              <input
                type="text"
                placeholder="Empresa"
                className='s12-input'
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
              <select className='s12-select' onChange={(e) => setSize(e.target.value)}>
                <option value="Quantidade de Colaboradores" default disabled>Quantidade de Colaboradores</option>
                <option value="1 a 50">1-50</option>
                <option value="51 a 100">51-100</option>
                <option value="101 a 500">101-500</option>
                <option value="501 a 1000">501-1000</option>
                <option value="mais que 1000">mais de 1000</option>
              </select>
            </div>
            <select className='s12-select' onChange={(e) => setHeardAbout(e.target.value)}>
              <option value="Como ouviu" default disabled>Como ouviu falar da Nectus?</option>
              <option value="Google">Google</option>
              <option value="Redes Sociais">Redes Sociais</option>
              <option value="Evento">Evento</option>
              <option value="Indicação">Indicação</option>
              <option value="Outros">Outros</option>
            </select>
            <input
                type="text"
                placeholder="Motivo do Contato"
                className='s12-input'
                onChange={(e) => setReason(e.target.value)}
                value={reason}
              />
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

HPForm.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onValidated: PropTypes.func.isRequired,
};

export default HPForm