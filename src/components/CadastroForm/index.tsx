import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createFranchise } from '../../hooks/api';

const CadastroForm = ({ onCancel, onSave }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    state_region: "",
    social_name: "",
    state_registration: "",
    percentage: 0,
    free: true,
    contact_name: "J",
    addresses: [
      {
        zip_code: "",
        street: "",
        neighborhood: "",
        city: "",
        state: "",
        number: "",
        no_number: false,
        complement: "",
        email: "",
        phone: "",
        landline_phone: "",
        whatsapp: true,
      },
    ],
    communicationAddresses: [
      {
        phone: "",
        contact_name: "",
        responsible_sector: "",
        whatsapp: true,
      },
    ],
    learningTypes: [
      {
        name: "Type of Faculdade",
      },
    ],
    documents: [
      {
        document_name: "",
        document_type: "",
        document_url: "",
        accreditation_resolution: "",
        status: "",
        internship_name: "",
        internship_url: "",
        internship_status: "",
        general_observation: "",
      },
    ],
  });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      addresses: formData.addresses.map((address, index) =>
        index === 0 ? { ...address, [name]: value } : address
      ),
    });
  };

  const handleSubmit = async () => {
    const submitData = {
      name: formData.name,
      cnpj: formData.cnpj,
      state_region: "Southeast",
      social_name: "Example Social Name",
      state_registration: 12345678,
      percentage: 15,
      free: true,
      contact_name: "John Doe",
      franchiseeIds: ["franchisee-id-1", "franchisee-id-2"],
      addresses: [
        {
          zip_code: "12345-6789",
          street: "Example Street",
          neighborhood: "Example Neighborhood",
          city: "Example City",
          state: "Example State",
          number: "123",
          no_number: false,
          complement: "Example Complement",
          email: formData.addresses[0].email,
          phone: formData.addresses[0].phone,
          landline_phone: "0987654321",
          whatsapp: true,
        },
      ],
      communicationAddresses: [
        {
          phone: "1234567890",
          contact_name: "Contact Douglas",
          responsible_sector: "Sales",
          whatsapp: true,
        },
      ],
      learningTypes: [
        {
          name: "Type of Faculdade",
        },
      ],
      documents: [
        {
          document_name: "Document Name",
          document_type: "Document Type",
          document_url: "http://example.com/document",
          accreditation_resolution: "Accreditation Resolution",
          status: "active",
          internship_name: "Internship Name",
          internship_url: "http://example.com/internship",
          internship_status: "active",
          general_observation: "General Observation",
        },
      ],
    };

    try {
      const response = await createFranchise(submitData);
      if (response.statusCode === 201) {
        toast.success("Dados salvos com sucesso!");
        onSave();
      } else {
        toast.error("Erro ao salvar os dados!");
      }
    } catch (error) {
      toast.error("Erro ao salvar os dados!");
    }
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
              <label>Nome</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Digite o nome completo" />
            </div>
            <div className="form-group">
              <label>CNPJ</label>
              <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} placeholder="Digite o CNPJ" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Região do Estado</label>
              <input type="text" name="state_region" value={formData.state_region} onChange={handleChange} placeholder="Digite a região do estado" />
            </div>
            <div className="form-group">
              <label>Nome Social</label>
              <input type="text" name="social_name" value={formData.social_name} onChange={handleChange} placeholder="Digite o nome social" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Inscrição Estadual</label>
              <input type="text" name="state_registration" value={formData.state_registration} onChange={handleChange} placeholder="Digite a inscrição estadual" />
            </div>
            <div className="form-group">
              <label>Percentual</label>
              <input type="text" name="percentage" value={formData.percentage} onChange={handleChange} placeholder="Digite o percentual" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Nome do Contato</label>
              <input type="text" name="contact_name" value={formData.contact_name} onChange={handleChange} placeholder="Digite o nome do contato" />
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
              <input type="text" name="zip_code" value={formData.addresses[0].zip_code} onChange={handleAddressChange} placeholder="Digite o CEP" />
            </div>
            <div className="form-group">
              <label>Rua</label>
              <input type="text" name="street" value={formData.addresses[0].street} onChange={handleAddressChange} placeholder="Digite o nome da rua" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Bairro</label>
              <input type="text" name="neighborhood" value={formData.addresses[0].neighborhood} onChange={handleAddressChange} placeholder="Digite o bairro" />
            </div>
            <div className="form-group">
              <label>Cidade</label>
              <input type="text" name="city" value={formData.addresses[0].city} onChange={handleAddressChange} placeholder="Nome da cidade" />
            </div>
            <div className="form-group">
              <label>Estado</label>
              <select name="state" value={formData.addresses[0].state} onChange={handleAddressChange}>
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
              <input type="text" name="number" value={formData.addresses[0].number} onChange={handleAddressChange} placeholder="Digite o número" />
            </div>
            <div className="form-group">
              <input type="checkbox" name="no_number" checked={formData.addresses[0].no_number} onChange={(e) => handleAddressChange({ target: { name: 'no_number', value: e.target.checked } })} />
              <label htmlFor="sem-numero">Sem número</label>
            </div>
          </div>
          <div className="form-group">
            <label>Complemento <span className="optional">(Opcional)</span></label>
            <input type="text" name="complement" value={formData.addresses[0].complement} onChange={handleAddressChange} placeholder="Digite um complemento" />
          </div>

          <h4>Comunicação do franqueado</h4>
          <div className="form-section">
            <div className="form-group">
              <label>E-mail</label>
              <input type="text" name="email" value={formData.addresses[0].email} onChange={handleAddressChange} placeholder="Digite o e-mail" />
            </div>
            <div className="form-group">
              <label>DDD + Celular do franqueado</label>
              <input type="text" name="phone" value={formData.addresses[0].phone} onChange={handleAddressChange} placeholder="(99) 99999-9999" />
            </div>
            <div className="form-group">
              <input type="checkbox" name="whatsapp" checked={formData.addresses[0].whatsapp} onChange={(e) => handleAddressChange({ target: { name: 'whatsapp', value: e.target.checked } })} />
              <label htmlFor="whatsapp">Número do WhatsApp</label>
            </div>
          </div>
          <div className="form-group">
            <label>DDD + Telefone fixo <span className="optional">(Opcional)</span></label>
            <input type="text" name="landline_phone" value={formData.addresses[0].landline_phone} onChange={handleAddressChange} placeholder="(99) 99999-9999" />
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="step-content">
          <h3>Dados profissionais</h3>
          <div className="form-section">
            <div className="form-group">
              <label>Cargo</label>
              <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} placeholder="Digite o cargo" />
            </div>
            <div className="form-group">
              <label>Número de matrícula</label>
              <input type="text" name="employee_number" value={formData.employee_number} onChange={handleChange} placeholder="Digite o número de matrícula" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>Data de admissão</label>
              <input type="text" name="admission_date" value={formData.admission_date} onChange={handleChange} placeholder="dd/mm/aaaa" />
            </div>
          </div>
          <div className="form-group">
            <label>Formação acadêmica</label>
            <input type="text" name="academic_formation" value={formData.academic_formation} onChange={handleChange} placeholder="Digite a formação acadêmica" />
          </div>
          <div className="form-group">
            <label>Instituição</label>
            <input type="text" name="institution" value={formData.institution} onChange={handleChange} placeholder="Digite a instituição" />
          </div>
          <div className="form-group">
            <label>Empresa anterior</label>
            <input type="text" name="previous_company" value={formData.previous_company} onChange={handleChange} placeholder="Digite a empresa anterior" />
          </div>
          <div className="form-group">
            <label>Cargo anterior</label>
            <input type="text" name="previous_job" value={formData.previous_job} onChange={handleChange} placeholder="Digite o cargo anterior" />
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className="step-content">
          <h3>Informações adicionais</h3>
          <div className="form-section">
            <div className="form-group">
              <label>Nome do dependente</label>
              <input type="text" name="dependent_name" value={formData.dependent_name} onChange={handleChange} placeholder="Digite o nome do dependente" />
            </div>
            <div className="form-group">
              <label>Data de nascimento do dependente</label>
              <input type="text" name="dependent_birth_date" value={formData.dependent_birth_date} onChange={handleChange} placeholder="dd/mm/aaaa" />
            </div>
          </div>
          <div className="form-group">
            <label>Grau de parentesco</label>
            <select name="kinship_degree" value={formData.kinship_degree} onChange={handleChange}>
              <option value="">Selecione o grau de parentesco</option>
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
            </select>
          </div>
          <div className="form-group">
            <label>Observações</label>
            <textarea name="general_observation" value={formData.general_observation} onChange={handleChange} placeholder="Digite suas observações"></textarea>
          </div>
        </div>
      )}
      <div className="navigation-buttons">
        <button onClick={handlePrev} disabled={currentStep === 1}>Anterior</button>
        {currentStep < 4 ? (
          <button onClick={handleNext}>Próximo</button>
        ) : (
          <button onClick={handleSubmit}>Enviar</button>
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

export default CadastroForm;
