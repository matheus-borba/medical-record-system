import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { auth, db } from '../services/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

import './Tab1.css';
import { get, ref } from 'firebase/database';
import { useState } from 'react';

const Tab1: React.FC = () => {

  // let [pacientesList, setPacientesList] = useState([]);

  // const getPacientes = async () => {
  //   console.log("TESTEEEE")
  //   const dbRef = ref(db, "pacientes");
  //   const snapshot = await get(dbRef);
  //   if (snapshot.exists()) {
  //     setPacientesList(Object.values(snapshot.val()));
  //   }
  //   console.log(pacientesList);
  // }

  // getPacientes();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
