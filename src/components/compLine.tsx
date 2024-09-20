import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // Importar e registrar componentes

Chart.register(...registerables);

interface Atividade {
  dataAtividade: string;
  tempoAtividade: number;
}

interface LineChartComponentProps {
  dadosAtividade: Atividade[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ dadosAtividade }) => {
  const getChartData = () => {
    const sortedData = dadosAtividade.sort((a, b) => {
      const [dayA, monthA, yearA] = a.dataAtividade.split('-').map(Number);
      const [dayB, monthB, yearB] = b.dataAtividade.split('-').map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateA.getTime() - dateB.getTime();
    });
    
    const labels = sortedData.map(item => item.dataAtividade);
    const tempoAtividadeData = sortedData.map(item => item.tempoAtividade);

    return {
      labels,
      datasets: [{
        label: 'Tempo de Atividade ao Longo do Tempo',
        data: tempoAtividadeData,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        fill: true,
      }],
    };
  };

  const chartData = getChartData();

  return (
    <div style={{ position: 'relative', width: '100%', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Line data={chartData} />
    </div>
  );
};

export default LineChartComponent;
