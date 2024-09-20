import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AtividadesFisicas from '../components/AtividadesFisicas'; // Importe o componente aqui
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div className="chart-container">
          <AtividadesFisicas />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
