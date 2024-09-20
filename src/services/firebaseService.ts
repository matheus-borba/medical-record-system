import { db } from './firebaseConfig';
import { ref, get, child } from 'firebase/database';

class FirebaseService {
  async getPacienteData(selectedPacienteId: number): Promise<any> {
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, `pacientes`));
      if (snapshot.exists()) {
        const pacientes = snapshot.val(); 
        const pacienteData = pacientes[selectedPacienteId];
        if (pacienteData) {
          return pacienteData;
        } else {
          throw new Error('No patient data found');
        }
      } else {
        throw new Error('No patient data found');
      }
    } catch (error) {
      console.error("Error fetching patient data:", error);
      throw error;
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
