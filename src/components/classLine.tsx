import { ChartData } from 'chart.js';
import { Graficos, ActivityData } from './classGraficos';
import FirebaseService from '../services/firebaseService';

export class LineChart extends Graficos<'line'> {
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

  protected getChartData(data: ActivityData[]): ChartData<'line'> {
    const labels = data.map(item => item.dataAtividade);
    const tempoAtividadeData = data.map(item => item.tempoAtividade);

    return {
      labels,
      datasets: [{
        label: 'Tempo de Atividade ao Longo do Tempo',
        data: tempoAtividadeData,
        borderColor: 'green',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
      }],
    };
  }
}
