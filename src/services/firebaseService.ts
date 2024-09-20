import { db } from './firebaseConfig';
import { ref, get, child } from 'firebase/database';

class FirebaseService {
  async getPacienteData(selectedPacienteId: number): Promise<any> {
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, `pacientes`));
      if (snapshot.exists()) {
        const pacientes = snapshot.val(); // Obter todos os pacientes
        const pacienteData = pacientes[selectedPacienteId]; // Acessar pelo ID
        if (pacienteData) {
          return pacienteData; // Retorna os dados do paciente encontrado
        } else {
          throw new Error('No patient data found'); // ID inválido
        }
      } else {
        throw new Error('No patient data found'); // Nenhum dado encontrado
      }
    } catch (error) {
      console.error("Error fetching patient data:", error);
      throw error; // Lança o erro para ser tratado onde a função é chamada
    }
  }
  

  async getAllData(): Promise<any> {
    const dbRef = ref(db);
    try {
      console.log("Fetching all data from Firebase...");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        console.log("Complete database snapshot:", snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available at the root");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}

export default new FirebaseService();
