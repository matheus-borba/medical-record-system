import React from 'react';
import { Bar } from 'react-chartjs-2';

interface Atividade {
  atividade: string;
  tempoAtividade: number;
}

interface BarChartComponentProps {
  dadosAtividade: Atividade[];
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ dadosAtividade }) => {
  console.log("Dados para o gráfico:", dadosAtividade);

  const getChartData = () => {
    const activityTypes: string[] = [...new Set(dadosAtividade.map((item) => item.atividade))];

    const activityData = activityTypes.reduce((acc: { [key: string]: number }, atividade: string) => {
      acc[atividade] = dadosAtividade
        .filter((item) => item.atividade === atividade)
        .reduce((sum, item) => sum + (item.tempoAtividade || 0), 0);
      return acc;
    }, {});

    return {
      labels: activityTypes,
      datasets: [
        {
          label: 'Tempo Total (hrs) por Atividade',
          data: Object.values(activityData),
          backgroundColor: 'green',
          borderRadius: 5,
          borderColor: 'green',
          borderWidth: 1,
        },
      ],
    };
  };

  const chartData = getChartData();

  return (
    <div style={{ position: 'relative', width: '100%', height: '250px' }}>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChartComponent;
