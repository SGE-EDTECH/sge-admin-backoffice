"use client";
import React, { useState } from "react";
import { MdPersonAdd } from "react-icons/md";

const CadastrosTable = () => {
  const data = [
    { codigo: "123456789", nome: "Paula Fernandes Araújo", genero: "F", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
    { codigo: "123456788", nome: "Flavia Vieira Santana", genero: "F", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
    { codigo: "123456777", nome: "Alan Corrêa Ramos Guimarães", genero: "M", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
    { codigo: "123456666", nome: "Ana Beatriz Silva Miranda", genero: "F", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
    { codigo: "123456644", nome: "Fernando Costa Silva Miranda", genero: "M", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
    { codigo: "123456655", nome: "Rodrigo Nunes Peixoto", genero: "-", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
    { codigo: "123456611", nome: "Vanessa Melo Nogueira", genero: "F", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
    { codigo: "123456622", nome: "Robson Santos Costa", genero: "M", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
    { codigo: "123456633", nome: "Mônica Yamamoto", genero: "F", situacao: "Ativo", telefone: "(99) 99999-9999", email: "emailamailemail@email.com" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 9;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
        <button className="add-button"><MdPersonAdd /> Cadastrar novo franqueado</button>
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

export default CadastrosTable;
