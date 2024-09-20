import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface Atividade {
  atividade: string;
  batimentosCardiacos: number;
  dataAtividade: string;
  peso: number;
  tempoAtividade: number;
}

interface ScatterChartComponentProps {
  dadosAtividade: Atividade[];
}

const ScatterChartComponent: React.FC<ScatterChartComponentProps> = ({ dadosAtividade }) => {
  const getChartData = () => {
    const data = {
      datasets: [
        {
          label: 'Tempo x Batimentos durante Atividades',
          data: dadosAtividade.map(item => ({
            x: item.tempoAtividade, 
            y: item.batimentosCardiacos
          })),
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };

    return data;
  };

  const chartData = getChartData();

  return (
    <div style={{ position: 'relative', width: '100%', height: '250px' }}>
      <Scatter data={chartData} />
    </div>
  );
};

export default ScatterChartComponent;
