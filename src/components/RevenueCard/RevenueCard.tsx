"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Definindo a interface para as propriedades do componente RevenueCard
interface RevenueCardProps {
  title: string;
  goal: number;
  current: number;
  achieved: boolean;
  achievedPercentage: number;
  data: Array<{ name: string; Realizado: number; Previsto: number }>;
  color: string;
}

// Componente RevenueCard usando a interface RevenueCardProps
const RevenueCard: React.FC<RevenueCardProps> = ({ title, goal, current, achieved, data, achievedPercentage, color }) => {
  return (
    <div className="card">
      <div className="header">
        <h3>{title}</h3>
        <p>Meta: R${goal.toLocaleString()}</p>
        <div className={`achieved-container ${achieved ? 'achieved' : 'not-achieved'}`}>
          <span>{achievedPercentage}%</span>
        </div>
      </div>
      <div className="body">
        <p>
          Valor atual: R${current.toLocaleString()} <br />
          {achieved ? (
            <span className="achieved">Meta atingida em {achievedPercentage}%</span>
          ) : (
            <span className="not-achieved">Faltam: R${(goal - current).toLocaleString()}</span>
          )}
        </p>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Realizado" stroke={color} />
            <Line type="monotone" dataKey="Previsto" stroke={color} strokeDasharray="3 4 5 2" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          width: 100%;
          margin: 10px 0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: white;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .header h3 {
          margin: 0;
          font-size: 1.2em;
          color: #333;
        }
        .header p {
          margin: 0;
          font-size: 0.9em;
          color: #666;
        }
        .achieved-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.2em;
          font-weight: bold;
        }
        .achieved {
          background-color: #d4edda;
          color: #155724;
        }
        .not-achieved {
          background-color: #f8d7da;
          color: #721c24;
        }
        .body {
          margin-bottom: 20px;
        }
        .body p {
          margin: 0;
          font-size: 1em;
        }
        .achieved {
          color: green;
        }
        .not-achieved {
          color: red;
        }
        .chart {
          height: 200px;
        }
      `}</style>
    </div>
  );
};

export default RevenueCard;
