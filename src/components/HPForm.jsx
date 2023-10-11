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
            <div>
              <input
                type="text"
                placeholder="Cargo"
                className='s12-input'
                onChange={(e) => setPosition(e.target.value)}
                value={position}
              />
              <select className='s12-select' onChange={(e) => setDepartment(e.target.value)}>
                <option value="Departamento" selected>Departamento</option>
                <option value="Administrativo">Administrativo</option>
                <option value="RH">RH</option>
                <option value="Marketing/Vendas">Marketing/Vendas</option>
                <option value="TI">TI</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Empresa"
                className='s12-input'
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
              <select className='s12-select' onChange={(e) => setSize(e.target.value)}>
                <option value="0" selected>Quantidade de Colaboradores</option>
                <option value="1 a 50">1-50</option>
                <option value="51 a 100">51-100</option>
                <option value="101 a 500">101-500</option>
                <option value="501 a 1000">501-1000</option>
                <option value="mais de 1000">mais de 1000</option>
              </select>
            </div>
            <select className='s12-select' onChange={(e) => setHeardAbout(e.target.value)}>
              <option value="Como ouviu" selected>Como ouviu falar da Nectus?</option>
              <option value="Google">Google</option>
              <option value="Redes Sociais">Redes Sociais</option>
              <option value="Evento">Evento</option>
              <option value="Indicação">Indicação</option>
            </select>
            <select className='s12-select' onChange={(e) => setReason(e.target.value)}>
              <option value="Motivo do Contato" selected>Motivo do Contato</option>
              <option value="Motivo 1">Motivo 1</option>
              <option value="Motivo 2">Motivo 2</option>
              <option value="Motivo 3">Motivo 3</option>
              <option value="Outros">Outros</option>
            </select>
            <button className='form-btn' type="submit">
              Agendar Agora
            </button>
            {status === "sending" && (
              <div className="s12-form-warning">
                sending...
              </div>
            )}
            {status === "error" && (
              <div 
                className="s12-form-warning"
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div
                className="s12-form-warning"
                dangerouslySetInnerHTML={{ __html: message }}
              />
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