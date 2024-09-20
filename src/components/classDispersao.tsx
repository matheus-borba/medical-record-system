import { ChartData } from 'chart.js';
import { Graficos, ActivityData } from './classGraficos';
import FirebaseService from '../services/firebaseService';

export class ScatterChart extends Graficos<'scatter'> {
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

  protected getChartData(data: ActivityData[]): ChartData<'scatter'> {
    const chartData = data.map(item => ({
      x: item.tempoAtividade,
      y: item.batimentosCardiacos,
      label: item.atividade,
    }));

    return {
      datasets: [{
        label: 'Batimentos Cardíacos por Tempo',
        data: chartData,
        backgroundColor: 'blue',
      }],
    };
  }
}
