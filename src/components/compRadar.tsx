import React, { useEffect, useState } from 'react';
import { Chart, CategoryScale, RadialLinearScale, Title, PointElement, LineElement, Tooltip, Legend, ChartData, ChartOptions, RadarController } from 'chart.js';
import { Graficos, ActivityData } from './classGraficos';
import './graficos.css';
import { Radar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(RadarController, CategoryScale, RadialLinearScale, PointElement, LineElement, Title);

const aggregateData = (data: ActivityData[]) => {
  if (!data || !Array.isArray(data)) {
    console.error('Invalid data input for aggregation');
    return {};
  }

  const aggregated: { [key: string]: { tempoAtividade: number, batimentosCardiacos: number, peso: number, count: number } } = {};

  data.forEach(item => {
    const atividade = item.atividade || 'Desconhecida';
    if (!aggregated[atividade]) {
      aggregated[atividade] = { tempoAtividade: 0, batimentosCardiacos: 0, peso: 0, count: 0 };
    }
    aggregated[atividade].tempoAtividade += item.tempoAtividade || 0;
    aggregated[atividade].batimentosCardiacos += item.batimentosCardiacos || 0;
    aggregated[atividade].peso += item.peso || 0;
    aggregated[atividade].count += 1;
  });

  for (const key in aggregated) {
    if (aggregated[key].count > 0) {
      aggregated[key].batimentosCardiacos /= aggregated[key].count;
      aggregated[key].peso /= aggregated[key].count;
    }
  }

  return aggregated;
};

class RadarChart extends Graficos<'radar'> {
  protected getChartData(data: ActivityData[]): ChartData<'radar', (number | null)[], unknown> {
    throw new Error('Method not implemented.');
  }
  protected fetchData(pacienteId: number): Promise<ActivityData[]> {
    throw new Error('Method not implemented.');
  }
}

interface RadarChartComponentProps {
  dadosAtividade: ActivityData[];
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ dadosAtividade }) => {
  const [chartData, setChartData] = useState<ChartData<'radar'> | undefined>();

  useEffect(() => {
    const aggregatedData = aggregateData(dadosAtividade);
    const labels = Object.keys(aggregatedData);
    const tempoData = labels.map(label => aggregatedData[label].tempoAtividade);
    const batimentosData = labels.map(label => aggregatedData[label].batimentosCardiacos);
    const pesoData = labels.map(label => aggregatedData[label].peso);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Tempo de Atividade',
          data: tempoData,
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
          borderColor: 'blue',
        },
        {
          label: 'Batimentos Cardíacos Médios',
          data: batimentosData,
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          borderColor: 'red',
        },
        {
          label: 'Peso Médio',
          data: pesoData,
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          borderColor: 'green',
        }
      ],
    });
  }, [dadosAtividade]);

  const options: ChartOptions<'radar'> = {
    plugins: {
      datalabels: {
        color: 'black',
        display: false,
        formatter: (value) => value.toFixed(1),
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '250px' }}>
      {chartData ? <Radar data={chartData} options={options} /> : <div>Loading...</div>}
    </div>
  );
};

export default RadarChartComponent;
