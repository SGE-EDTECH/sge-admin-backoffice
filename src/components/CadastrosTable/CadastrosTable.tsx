import React, { useState, useEffect } from "react";
import { MdPersonAdd } from "react-icons/md";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchFranchises } from '../../hooks/api';
import PrivateRoute from '../../components/PrivateRoute';
import CadastroForm from '../../components/CadastroForm'; // Importe o componente aqui

const CadastrosTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(9); // Adicione essa linha para corrigir o erro com setRowsPerPage
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getFranchises = async () => {
      try {
        const franchiseData = await fetchFranchises();
        const transformedData = franchiseData.map(item => ({
          codigo: item.id,
          nome: item.name,
          genero: "N/A",
          situacao: item.free ? "Ativo" : "Inativo",
          telefone: item.addresses[0]?.phone || "N/A",
          email: item.addresses[0]?.email || "N/A"
        }));
        setData(transformedData);
      } catch (error) {
        console.error("Error fetching franchises:", error);
      }
    };
    getFranchises();
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (showForm) {
    return <CadastroForm onCancel={() => setShowForm(false)} onSave={() => {
      setShowForm(false);
      getFranchises();
    }} />;
  }

  return (
    <PrivateRoute>
      <div className="cadastros-page">
        <ToastContainer />
        <h2>Cadastros de franquias</h2>
        <div className="search-bar">
          <select>
            <option value="">Selecione</option>
          </select>
          <input type="text" placeholder="Digite a consulta" />
          <button>Buscar</button>
        </div>
        <div className="button-container">
          <button className="add-button" onClick={() => setShowForm(true)}><MdPersonAdd /> Cadastrar nova franquia</button>
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
          <select onChange={(e) => setRowsPerPage(Number(e.target.value))} value={rowsPerPage}>
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
    </PrivateRoute>
  );
};

export default CadastrosTable;
