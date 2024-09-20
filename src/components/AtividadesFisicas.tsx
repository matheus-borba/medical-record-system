import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import React, { useState, useEffect, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2'; // Importação do gráfico de linha
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import firebaseService from '../services/firebaseService';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

interface Atividade {
  atividade: string;
  dataAtividade: string;
  tempoAtividade: number;
  batimentosCardiacos: number;
  peso: number;
}

interface Paciente {
  nome: string;
  dadosAtividade: Atividade[];
  pesoAtual: number;
  pesoInicial: number;
}

interface DadosPacientes {
  pacientes: Record<number, Paciente>;
}

const AtividadesFisicas: React.FC = () => {
  const [pacienteSelecionado, setPacienteSelecionado] = useState<string>('');
  const [dataTabs, setDataTabs] = useState<Paciente[]>([]);
  const [tipoConsulta, setTipoConsulta] = useState<string>(''); // Novo estado para tipo de consulta

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: DadosPacientes = await firebaseService.getAllData();
        const pacientes = Object.values(data.pacientes);
        setDataTabs(pacientes); 
      } catch (error) {
        console.error('Erro ao buscar dados do Firebase:', error);
      }
    };
    fetchData();
  }, []);

  const dadosAtividade = useMemo(() => {
    const paciente = dataTabs.find((p) => p.nome === pacienteSelecionado);
    return paciente ? paciente.dadosAtividade : [];
  }, [dataTabs, pacienteSelecionado]);

  // Gráfico de atividades
  const labelsAtividade = useMemo(() => dadosAtividade.map((a) => a.dataAtividade), [dadosAtividade]);
  const tempoAtividade = useMemo(() => dadosAtividade.map((a) => a.tempoAtividade), [dadosAtividade]);
  const batimentosCardiacos = useMemo(() => dadosAtividade.map((a) => a.batimentosCardiacos), [dadosAtividade]);

  const dataChartAtividade = {
    labels: labelsAtividade,
    datasets: [
      {
        label: 'Tempo de Atividade (min)',
        data: tempoAtividade,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
      {
        label: 'Batimentos Cardíacos (bpm)',
        data: batimentosCardiacos,
        backgroundColor: 'green',
        borderColor: 'green',
      },
    ],
  };

  const optionsAtividade = {
    responsive: true,
    maintainAspectRatio: true,
  };

  // Gráfico de comparação de peso
  const pesoAtual = useMemo(() => {
    const paciente = dataTabs.find((p) => p.nome === pacienteSelecionado);
    return paciente ? paciente.pesoAtual : 0;
  }, [dataTabs, pacienteSelecionado]);

  const pesoInicial = useMemo(() => {
    const paciente = dataTabs.find((p) => p.nome === pacienteSelecionado);
    return paciente ? paciente.pesoInicial : 0;
  }, [dataTabs, pacienteSelecionado]);

  const dataChartPeso = {
    labels: ['Peso Atual', 'Peso Inicial'],
    datasets: [
      {
        label: 'Comparação Peso',
        data: [pesoAtual, pesoInicial],
        backgroundColor: ['#0091ff', 'green'],
      },
    ],
  };

  const optionsPeso = {
    indexAxis: 'y' as const,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    responsive: true,
  };

  // Gráfico de consultas mensais
  const getConsultas = (tipo: string) => {
    if (tipo === 'Convênio') {
      return [8, 12, 10, 18, 30, 45];
    } else if (tipo === 'Particular') {
      return [14, 11, 16, 13, 16, 12];
    }
    return [];
  };

  const dataConsultas = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Consultas Realizadas',
        data: getConsultas(tipoConsulta),
        borderColor: '#0091ff',
        backgroundColor: 'rgba(0, 145, 255, 0.2)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#0091ff',
        pointBorderColor: '#0091ff',
        pointRadius: 5,
      },
    ],
  };

  const optionsConsultas = {
    responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const, // Use 'as const' to specify the exact type
    },
    title: {
      display: true,
      text: 'Número de Consultas Realizadas por Mês',
    },
  },
  scales: {
    x: {
    },
    y: {
      beginAtZero: true,
    },
  },
};

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel className='label' position="floating">Paciente</IonLabel>
          <IonSelect
            value={pacienteSelecionado}
            placeholder="Selecione"
            onIonChange={(e) => setPacienteSelecionado(e.detail.value!)}
          >
            <IonSelectOption value="">Selecione</IonSelectOption>
            {dataTabs.map((paciente) => (
              <IonSelectOption key={paciente.nome} value={paciente.nome}>
                {paciente.nome}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        <div style={{ position: 'relative', width: '100%', height: '250px' }}>
          <Bar data={dataChartAtividade} options={optionsAtividade} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '250px' }}>
          <Bar data={dataChartPeso} options={optionsPeso} />
        </div>

        {/* Select para escolher o tipo de consulta */}
        <IonItem>
          <IonLabel className='label' position="floating">Tipo de consulta</IonLabel>
          <IonSelect
            value={tipoConsulta}
            placeholder="Selecione"
            onIonChange={(e) => setTipoConsulta(e.detail.value!)} // Atualiza o estado tipoConsulta
          >
            <IonSelectOption value="">Selecione</IonSelectOption>
            <IonSelectOption value="Convênio">Convênio</IonSelectOption>
            <IonSelectOption value="Particular">Particular</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* Renderiza o gráfico de linha somente se um tipo de consulta for selecionado */}
        {tipoConsulta && (
          <div style={{ position: 'relative', width: '100%', height: '250px' }}>
            <Line data={dataConsultas} options={optionsConsultas} />
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AtividadesFisicas;
