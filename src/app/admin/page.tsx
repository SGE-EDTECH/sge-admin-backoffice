"use client";
import React from "react";
import RevenueCard from "@/components/RevenueCard/RevenueCard";
import BarChartCard from "@/components/BarChartCard/BarChartCard";

const AdminPage = () => {
  const lineChartData = [
    {
      title: "Faturamento",
      goal: 10000,
      current: 12000,
      achieved: true,
      achievedPercentage: 120,
      color: "#28a745",
      data: [
        { name: '01 Jan', Realizado: 400, Previsto: 240 },
        { name: '05 Jan', Realizado: 300, Previsto: 139 },
        { name: '10 Jan', Realizado: 200, Previsto: 980 },
        { name: '15 Jan', Realizado: 278, Previsto: 390 },
        { name: '20 Jan', Realizado: 189, Previsto: 480 },
        { name: '25 Jan', Realizado: 239, Previsto: 380 },
        { name: '30 Jan', Realizado: 349, Previsto: 430 },
      ],
    },
    {
      title: "Faturamento Comercial",
      goal: 5000,
      current: 2500,
      achieved: false,
      achievedPercentage: 50,
      color: "#007bff",
      data: [
        { name: '01 Jan', Realizado: 400, Previsto: 240 },
        { name: '05 Jan', Realizado: 300, Previsto: 139 },
        { name: '10 Jan', Realizado: 200, Previsto: 980 },
        { name: '15 Jan', Realizado: 278, Previsto: 390 },
        { name: '20 Jan', Realizado: 189, Previsto: 480 },
        { name: '25 Jan', Realizado: 239, Previsto: 380 },
        { name: '30 Jan', Realizado: 349, Previsto: 430 },
      ],
    },
    {
      title: "Lucro",
      goal: 10000,
      current: 6000,
      achieved: false,
      achievedPercentage: 60,
      color: "#28a745",
      data: [
        { name: '01 Jan', Realizado: 400, Previsto: 240 },
        { name: '05 Jan', Realizado: 300, Previsto: 139 },
        { name: '10 Jan', Realizado: 200, Previsto: 980 },
        { name: '15 Jan', Realizado: 278, Previsto: 390 },
        { name: '20 Jan', Realizado: 189, Previsto: 480 },
        { name: '25 Jan', Realizado: 239, Previsto: 380 },
        { name: '30 Jan', Realizado: 349, Previsto: 430 },
      ],
    },
    {
      title: "Despesas",
      goal: 5000,
      current: 4000,
      achieved: false,
      achievedPercentage: 80,
      color: "#ff6600",
      data: [
        { name: '01 Jan', Realizado: 400, Previsto: 240 },
        { name: '05 Jan', Realizado: 300, Previsto: 139 },
        { name: '10 Jan', Realizado: 200, Previsto: 980 },
        { name: '15 Jan', Realizado: 278, Previsto: 390 },
        { name: '20 Jan', Realizado: 189, Previsto: 480 },
        { name: '25 Jan', Realizado: 239, Previsto: 380 },
        { name: '30 Jan', Realizado: 349, Previsto: 430 },
      ],
    },
    {
      title: "Matrículas",
      goal: 4000,
      current: 2000,
      achieved: false,
      achievedPercentage: 50,
      color: "#007bff",
      data: [
        { name: '01 Jan', Realizado: 400, Previsto: 240 },
        { name: '05 Jan', Realizado: 300, Previsto: 139 },
        { name: '10 Jan', Realizado: 200, Previsto: 980 },
        { name: '15 Jan', Realizado: 278, Previsto: 390 },
        { name: '20 Jan', Realizado: 189, Previsto: 480 },
        { name: '25 Jan', Realizado: 239, Previsto: 380 },
        { name: '30 Jan', Realizado: 349, Previsto: 430 },
      ],
    },
    {
      title: "Alunos Ativos",
      goal: 3000,
      current: 2600,
      achieved: true,
      achievedPercentage: 80,
      color: "#28a745",
      data: [
        { name: '01 Jan', Realizado: 400, Previsto: 240 },
        { name: '05 Jan', Realizado: 300, Previsto: 139 },
        { name: '10 Jan', Realizado: 200, Previsto: 980 },
        { name: '15 Jan', Realizado: 278, Previsto: 390 },
        { name: '20 Jan', Realizado: 189, Previsto: 480 },
        { name: '25 Jan', Realizado: 239, Previsto: 380 },
        { name: '30 Jan', Realizado: 349, Previsto: 430 },
      ],
    },
  ];

  const barChartData = [
    {
      title: "Taxa de Ocupação",
      goal: 4000,
      current: 3000,
      achieved: false,
      achievedPercentage: 75,
      color: "#28a745",
      data: [
        { name: 'Turma 1', Ocupação: 80, Previsto: 120 },
        { name: 'Turma 2', Ocupação: 90, Previsto: 100 },
        { name: 'Turma 3', Ocupação: 70, Previsto: 110 },
        { name: 'Turma 4', Ocupação: 85, Previsto: 115 },
        { name: 'Turma 5', Ocupação: 95, Previsto: 105 },
        { name: 'Turma 6', Ocupação: 100, Previsto: 120 },
        { name: 'Turma 7', Ocupação: 110, Previsto: 115 },
        { name: 'Turma 8', Ocupação: 105, Previsto: 110 },
        { name: 'Turma 9', Ocupação: 115, Previsto: 120 },
        { name: 'Turma 10', Ocupação: 120, Previsto: 125 },
        { name: 'Turma 11', Ocupação: 125, Previsto: 130 },
        { name: 'Turma 12', Ocupação: 130, Previsto: 135 },
        { name: 'Turma 13', Ocupação: 135, Previsto: 140 },
        { name: 'Turma 14', Ocupação: 140, Previsto: 145 },
        { name: 'Turma 15', Ocupação: 145, Previsto: 150 },
        { name: 'Turma 16', Ocupação: 150, Previsto: 155 },
      ],
    },
  ];

  return (
    <div className="admin-page">
      <h2>Welcome to Admin Panel GSE</h2>
      <div className="revenue-cards">
        {lineChartData.map((item, index) => (
          <div className="revenue-card-wrapper" key={index}>
            <RevenueCard {...item} />
          </div>
        ))}
      </div>
      <div className="bar-chart-card">
        {barChartData.map((item, index) => (
          <BarChartCard key={index} {...item} />
        ))}
      </div>
      <style jsx>{`
        .admin-page {
          padding: 20px;
        }
        .revenue-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .bar-chart-card {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default AdminPage;
