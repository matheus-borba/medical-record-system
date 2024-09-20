import { ChartData } from 'chart.js';
import { Graficos, ActivityData } from './classGraficos';
import FirebaseService from '../services/firebaseService';

export class RadarChart extends Graficos<'radar'> {
  protected async fetchData(pacienteId: number): Promise<ActivityData[]> {
    try {
      const allData = await FirebaseService.getAllData();
      const pacientes = allData.pacientes;

      const selectedPatient = pacientes.find((p: any) => p.id === pacienteId);
      if (selectedPatient && selectedPatient.dadosAtividade) {
        return selectedPatient.dadosAtividade;
      }
      return [];
    } catch (error) {
      console.error("Error loading data:", error);
      return [];
    }
  }

  protected getChartData(data: ActivityData[]): ChartData<'radar'> {
    const aggregatedData = this.aggregateData(data);
    const labels = Object.keys(aggregatedData);
    const tempoData = labels.map(label => aggregatedData[label].tempoAtividade);
    const batimentosData = labels.map(label => aggregatedData[label].batimentosCardiacos);
    const pesoData = labels.map(label => aggregatedData[label].peso);

    return {
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
    };
  }

  private aggregateData(data: ActivityData[]) {
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
      aggregated[key].batimentosCardiacos /= aggregated[key].count;
      aggregated[key].peso /= aggregated[key].count;
    }

    return aggregated;
  }
}
