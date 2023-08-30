function HPForm () {
  return(
    <form>
            <input type="text" placeholder="Nome" className='s12-input'/>
            <input type="text" placeholder="E-mail coorporativo" className='s12-input'/>
            <input type="text" placeholder="Telefone" className='s12-input'/>
            <div>
              <input type="text" placeholder="Cargo" className='s12-input'/>
              <select className='s12-select'>
                <option value="0" selected>Departamento</option>
                <option value="1">Administrativo</option>
                <option value="2">RH</option>
                <option value="3">Marketing/Vendas</option>
                <option value="4">TI</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="Empresa" className='s12-input'/>
              <select className='s12-select'>
                <option value="0" selected>Quantidade de Colaboradores</option>
                <option value="1">1-50</option>
                <option value="2">51-100</option>
                <option value="3">101-500</option>
                <option value="4">501-1000</option>
              </select>
            </div>
            <select className='s12-select'>
              <option value="0" selected>Como ouviu falar da Nectus?</option>
              <option value="1">Google</option>
              <option value="2">Redes Sociais</option>
              <option value="3">Evento</option>
              <option value="4">Indicação</option>
            </select>
            <select className='s12-select'>
              <option value="0" selected>Motivo do Contato</option>
              <option value="1">Motivo 1</option>
              <option value="2">Motivo 2</option>
              <option value="3">Motivo 2</option>
            </select>
            <button className='form-btn'>
              Agendar Agora
            </button>
          </form>
  )
}

export default HPForm