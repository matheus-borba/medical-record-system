import { ChartData } from 'chart.js';

export interface ActivityData {
  atividade: string;
  batimentosCardiacos: number;
  dataAtividade?: string;
  peso: number;
  tempoAtividade: number;
}

export abstract class Graficos<T extends 'bar' | 'scatter' | 'line' | 'radar'> {
  protected abstract getChartData(data: ActivityData[]): ChartData<T>;

  protected abstract fetchData(pacienteId: number): Promise<ActivityData[]>;

  public async getChartDataFromService(pacienteId: number) {
    const atividades = await this.fetchData(pacienteId);
    return this.getChartData(atividades);
  }
}
