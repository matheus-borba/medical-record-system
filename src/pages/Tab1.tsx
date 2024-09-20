import React, { useState, useEffect } from 'react';
import { IonContent, IonFooter, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption } from '@ionic/react';
import BarChartComponent from '../components/compBarras';
import ScatterChartComponent from '../components/compDispersao';
import firebaseService from '../services/firebaseService';
import './Tab1.css';
import LineChartComponent from '../components/compLine';
import RadarChartComponent from '../components/compRadar';

interface Atividade {
  atividade: string;
  batimentosCardiacos: number;
  dataAtividade: string;
  peso: number;
  tempoAtividade: number;
}

interface Paciente {
  altura: number;
  dadosAtividade: { [key: number]: Atividade };
  dataNascimento: string;
  genero: string;
  idadeAtual: number;
  nome: string;
  numeroAtividadesTotal: number;
  paciente: number;
  pesoAtual: number;
  pesoInicial: number;
  sobrenome: string;
  tempoAtividadeTotal: number;
  tempoMedioAtividadeSemanal: number;
}

const Tab1: React.FC = () => {
  const [selectedPacienteId, setSelectedPacienteId] = useState<number | null>(null);
  const [dataTabs, setDataTabs] = useState<Paciente[]>([]);
  const [pacienteData, setPacienteData] = useState<Atividade[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await firebaseService.getAllData();
        const pacientesData = data.pacientes as { [key: number]: Paciente };
        const pacientesArray = Object.values(pacientesData);
        setDataTabs(pacientesArray);
        console.log("Pacientes carregados:", pacientesArray);
      } catch (error) {
        console.error('Erro ao buscar dados do Firebase:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedPacienteId !== null) {
      const paciente = dataTabs.find((p) => p.paciente === selectedPacienteId);
      console.log("Paciente encontrado:", paciente);
      if (paciente) {
        const atividadesArray = Object.values(paciente.dadosAtividade);
        const sortedAtividades = atividadesArray.sort((a, b) => new Date(a.dataAtividade).getTime() - new Date(b.dataAtividade).getTime());
        setPacienteData(sortedAtividades);
        console.log("Dados do paciente:", sortedAtividades);
      } else {
        setPacienteData([]);
      }
    }
  }, [selectedPacienteId, dataTabs]);

  const handlePacienteSelect = (e: any) => {
    const pacienteId = parseInt(e.detail.value, 10);
    console.log("Paciente selecionado:", pacienteId);
    setSelectedPacienteId(pacienteId);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonSelect
          placeholder="Selecione um Paciente"
          onIonChange={handlePacienteSelect}
          value={selectedPacienteId ? String(selectedPacienteId) : ''}
        >
          {dataTabs.map((paciente) => (
            <IonSelectOption key={paciente.paciente} value={paciente.paciente}>
              {paciente.nome}
            </IonSelectOption>
          ))}
        </IonSelect>
        <BarChartComponent dadosAtividade={pacienteData} />
        <LineChartComponent dadosAtividade={pacienteData} />
        <ScatterChartComponent dadosAtividade={pacienteData} />
        <RadarChartComponent dadosAtividade={pacienteData} />
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
