"use client";
import React, { useState } from "react";
import { MdPersonAdd } from "react-icons/md";

const CadastrosTable = () => {
  const data = [
    { codigo: "123456789", nome: "Paula Fernandes Araújo", genero: "F", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
    // Adicione mais dados conforme necessário...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 9;
  const [showForm, setShowForm] = useState(false);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (showForm) {
    return <CadastroForm onCancel={() => setShowForm(false)} />;
  }

  return (
    <div className="cadastros-page">
      <h2>Cadastros de franqueados</h2>
      <div className="search-bar">
        <select>
          <option value="">Selecione</option>
        </select>
        <input type="text" placeholder="Digite a consulta" />
        <button>Buscar</button>
      </div>
      <div className="button-container">
        <button className="add-button" onClick={() => setShowForm(true)}><MdPersonAdd /> Cadastrar novo franqueado</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome do franqueado</th>
            <th>Gênero</th>
            <th>Situação</th>
            <th>Telefone</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((item, index) => (
            <tr key={index}>
              <td>{item.codigo}</td>
              <td>{item.nome}</td>
              <td>{item.genero}</td>
              <td>{item.situacao}</td>
              <td>{item.telefone}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        {[...Array(Math.ceil(data.length / rowsPerPage)).keys()].map((number) => (
          <button key={number + 1} onClick={() => paginate(number + 1)} className={currentPage === number + 1 ? 'active' : ''}>
            {number + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(data.length / rowsPerPage)}>
          &gt;
        </button>
      </div>
      <div className="rows-per-page">
        <span>Linhas por página:</span>
        <select>
          <option value="9">9</option>
          <option value="15">15</option>
          <option value="25">25</option>
        </select>
      </div>
      <style jsx>{`
        .cadastros-page {
          padding: 20px;
        }
        .search-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .search-bar select,
        .search-bar input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .search-bar button {
          padding: 10px 20px;
          background-color: #000066;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .button-container {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
        }
        .add-button {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background-color: #000066;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        table th, table td {
          padding: 10px;
          border: 1px solid #ddd;
          text-align: left;
        }
        table th {
          background-color: #f8f8f8;
        }
        tbody tr:nth-child(even) {
          background-color: #ffffff;
        }
        tbody tr:nth-child(odd) {
          background-color: #f9f9f9;
        }
        .pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }
        .pagination button {
          margin: 0 2px;
          padding: 5px 10px;
          border: 1px solid #ddd;
          background-color: white;
          cursor: pointer;
        }
        .pagination button.active {
          background-color: #000066;
          color: white;
        }
        .pagination button:disabled {
          background-color: #e9ecef;
          cursor: not-allowed;
        }
        .rows-per-page {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
        }
        .rows-per-page select {
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

const CadastroForm = ({ onCancel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({ celular: '', nome: '', parentesco: '', whatsapp: false });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);
  
  const addContact = () => {
    setContacts([...contacts, contact]);
    setContact({ celular: '', nome: '', parentesco: '', whatsapp: false });
  };

  return (
    <div className="cadastro-form">
      <div className="steps">
        <div className={`step ${currentStep === 1 ? 'active' : ''}`} onClick={() => setCurrentStep(1)}><span className="step-number">1</span> Dados pessoais</div>
        <div className={`step ${currentStep === 2 ? 'active' : ''}`} onClick={() => setCurrentStep(2)}><span className="step-number">2</span> Endereço e Comunicação</div>
        <div className={`step ${currentStep === 3 ? 'active' : ''}`} onClick={() => setCurrentStep(3)}><span className="step-number">3</span> Dados profissionais</div>
        <div className={`step ${currentStep === 4 ? 'active' : ''}`} onClick={() => setCurrentStep(4)}><span className="step-number">4</span> Informações adicionais</div>
      </div>
      {currentStep === 1 && (
        <div className="step-content">
          <h3>Dados pessoais</h3>
          <div className="form-section">
            <div className="form-group">
              <label>CPF</label>
              <input type="text" placeholder="Digite o CPF" />
            </div>
            <div className="form-group">
              <label>RG</label>
              <input type="text" placeholder="Digite o RG" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" placeholder="Digite o nome completo" />
            </div>
            <div className="form-group">
              <label>Órgão expedidor</label>
              <input type="text" placeholder="Digite o órgão expedidor" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Nome social <span className="optional">(Opcional)</span></label>
              <input type="text" placeholder="Digite o nome social" />
            </div>
            <div className="form-group">
              <label>Data de expedição</label>
              <input type="text" placeholder="dd/mm/aaaa" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Data de nascimento</label>
              <input type="text" placeholder="dd/mm/aaaa" />
            </div>
            <div className="form-group">
              <label>Gênero</label>
              <select>
                <option value="">Selecione o gênero</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="O">Outro</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Estado civil</label>
            <div className="button-group">
              <input type="radio" id="solteiro" name="estado-civil" value="solteiro" />
              <label htmlFor="solteiro">Solteiro</label>
              
              <input type="radio" id="casado" name="estado-civil" value="casado" />
              <label htmlFor="casado">Casado</label>
              
              <input type="radio" id="separado" name="estado-civil" value="separado" />
              <label htmlFor="separado">Separado</label>
              
              <input type="radio" id="viuvo" name="estado-civil" value="viuvo" />
              <label htmlFor="viuvo">Viúvo</label>
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="step-content">
          <h3>Endereço e Comunicação</h3>
          <div className="form-section">
            <div className="form-group">
              <label>CEP</label>
              <input type="text" placeholder="Digite o CEP" />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input type="text" placeholder="Digite o e-mail" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Rua</label>
              <input type="text" placeholder="Digite o nome da rua" />
            </div>
            <div className="form-group">
              <label>DDD + Celular do franqueado</label>
              <input type="text" placeholder="(99) 99999-9999" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Bairro</label>
              <input type="text" placeholder="Digite o bairro" />
            </div>
            <div className="form-group">
              <label>DDD + Telefone fixo</label>
              <input type="text" placeholder="(99) 99999-9999" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Cidade</label>
              <input type="text" placeholder="Nome da cidade" />
            </div>
            <div className="form-group">
              <label>Estado</label>
              <select>
                <option value="">Selecione o estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Número</label>
              <input type="text" placeholder="Digite o número" />
            </div>
            <div className="form-group">
              <input type="checkbox" id="sem-numero" />
              <label htmlFor="sem-numero">Sem número</label>
            </div>
          </div>
          <div className="form-group">
            <label>Complemento <span className="optional">(Opcional)</span></label>
            <input type="text" placeholder="Digite um complemento" />
          </div>
          <h3>Comunicação adicional</h3>
          <p>É recomendado informar pelo menos 3 números adicionais de celular para contatos emergenciais.</p>
          <div className="form-section">
            <div className="form-group">
              <label>DDD + Celular</label>
              <input type="text" value={contact.celular} onChange={(e) => setContact({ ...contact, celular: e.target.value })} placeholder="(99) 99999-9999" />
            </div>
            <div className="form-group">
              <label>Nome do contato</label>
              <input type="text" value={contact.nome} onChange={(e) => setContact({ ...contact, nome: e.target.value })} placeholder="Digite o nome do contato" />
            </div>
            <div className="form-group">
              <label>Grau de parentesco</label>
              <select value={contact.parentesco} onChange={(e) => setContact({ ...contact, parentesco: e.target.value })}>
                <option value="">Selecione</option>
                <option value="Pai">Pai</option>
                <option value="Mãe">Mãe</option>
                <option value="Irmão">Irmão</option>
                <option value="Irmã">Irmã</option>
                <option value="Tio">Tio</option>
                <option value="Tia">Tia</option>
                <option value="Primo">Primo</option>
                <option value="Prima">Prima</option>
                <option value="Avô">Avô</option>
                <option value="Avó">Avó</option>
                <option value="Amigo">Amigo</option>
                <option value="Amiga">Amiga</option>
                {/* Adicione outros graus de parentesco conforme necessário */}
              </select>
            </div>
            <div className="form-group">
              <input type="checkbox" id="numero-whatsapp" checked={contact.whatsapp} onChange={(e) => setContact({ ...contact, whatsapp: e.target.checked })} />
              <label htmlFor="numero-whatsapp">Número do WhatsApp</label>
            </div>
            <button type="button" className="save-button" onClick={addContact}>Salvar celular</button>
          </div>
          <div className="form-section">
            <table className="contacts-table">
              <thead>
                <tr>
                  <th>Celular</th>
                  <th>Nome</th>
                  <th>Grau de parentesco</th>
                  <th>Whatsapp</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((cont, index) => (
                  <tr key={index}>
                    <td>{cont.celular}</td>
                    <td>{cont.nome}</td>
                    <td>{cont.parentesco}</td>
                    <td>{cont.whatsapp ? '✔' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="step-content">
          <h3>Dados profissionais</h3>
          <div className="form-section">
            <div className="form-group">
              <label>Cargo</label>
              <input type="text" placeholder="Digite o cargo" />
            </div>
            <div className="form-group">
              <label>Número de matrícula</label>
              <input type="text" placeholder="Digite o número de matrícula" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Data de admissão</label>
              <input type="text" placeholder="dd/mm/aaaa" />
            </div>
          </div>
          <div className="form-group">
            <label>Formação acadêmica</label>
            <input type="text" placeholder="Digite a formação acadêmica" />
          </div>
          <div className="form-group">
            <label>Instituição</label>
            <input type="text" placeholder="Digite a instituição" />
          </div>
          <div className="form-group">
            <label>Empresa anterior</label>
            <input type="text" placeholder="Digite a empresa anterior" />
          </div>
          <div className="form-group">
            <label>Cargo anterior</label>
            <input type="text" placeholder="Digite o cargo anterior" />
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className="step-content">
          <h3>Informações adicionais</h3>
          <div className="form-section">
            <div className="form-group">
              <label>Nome do dependente</label>
              <input type="text" placeholder="Digite o nome do dependente" />
            </div>
            <div className="form-group">
              <label>Data de nascimento do dependente</label>
              <input type="text" placeholder="dd/mm/aaaa" />
            </div>
          </div>
          <div className="form-group">
            <label>Grau de parentesco</label>
            <select>
              <option value="">Selecione o grau de parentesco</option>
              {/* Adicione outros graus de parentesco conforme necessário */}
            </select>
          </div>
          <div className="form-group">
            <label>Observações</label>
            <textarea placeholder="Digite suas observações"></textarea>
          </div>
        </div>
      )}
      <div className="navigation-buttons">
        <button onClick={handlePrev} disabled={currentStep === 1}>Anterior</button>
        {currentStep < 4 ? (
          <button onClick={handleNext}>Próximo</button>
        ) : (
          <button onClick={() => alert('Formulário enviado!')}>Enviar</button>
        )}
        <button onClick={onCancel}>Cancelar</button>
      </div>
      <style jsx>{`
        .cadastro-form {
          padding: 20px;
          max-width: 1000px;
          margin: 0 auto;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .steps {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
          border-bottom: 2px solid #e0e0e0;
          position: relative;
        }
        .steps .step {
          padding: 10px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .steps .step .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          margin-right: 8px;
          border-radius: 50%;
          background-color: #e0e0e0;
          color: #fff;
        }
        .steps .step.active .step-number {
          background-color: #ff6600;
        }
        .steps .step.completed .step-number {
          background-color: #00bfa5;
        }
        .steps .step.completed .step-number::after {
          content: "\\2713";
          font-size: 14px;
          color: #fff;
        }
        .steps::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #e0e0e0;
          z-index: -1;
          transform: translateY(-50%);
        }
        .step-content {
          margin-bottom: 20px;
        }
        .form-section {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          position: relative;
        }
       
        .form-group {
          flex: 1;
          margin-right: 20px;
        }
        .form-group:last-child {
          margin-right: 0;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .button-group {
          display: flex;
          gap: 10px;
        }
        .button-group input[type="radio"] {
          display: none;
        }
        .button-group label {
          padding: 10px 20px;
          border: 1px solid #ccc;
          border-radius: 25px;
          cursor: pointer;
          background-color: #f8f8f8;
        }
        .button-group input[type="radio"]:checked + label {
          background-color: #000066;
          color: white;
          border: 1px solid #000066;
        }
        .radio-group {
          display: flex;
          gap: 20px;
        }
        .radio-group label {
          display: flex;
          align-items: center;
        }
        .radio-group input {
          margin-right: 5px;
        }
        .navigation-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .navigation-buttons button {
          padding: 10px 20px;
          background-color: #000066;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .navigation-buttons button:disabled {
          background-color: #e9ecef;
          cursor: not-allowed;
        }
        .save-button {
          background-color: #000066;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .contacts-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .contacts-table th, .contacts-table td {
          padding: 10px;
          border: 1px solid #ddd;
          text-align: left;
        }
        .contacts-table th {
          background-color: #f8f8f8;
        }
        .contacts-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .contacts-table tr:nth-child(odd) {
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default CadastrosTable;
