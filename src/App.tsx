import { Redirect, Route, useLocation } from 'react-router-dom';
import { IonApp, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonMenu, 
  IonMenuButton, 
  IonPage, 
  IonRouterOutlet, 
  IonTitle, 
  IonToolbar, 
  setupIonicReact } from '@ionic/react';
import React from 'react';
import { IonButtons } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { barChartOutline, documentOutline, statsChart } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import LoginPage from './pages/Login'; // Adicione a importação do LoginPage
import SignupPage from './pages/Signup';
import { auth } from './firebaseConfig'; // Adicione a importação do Firebase Auth
import { User } from 'firebase/auth';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';
import { StatusBar } from '@capacitor/status-bar';

setupIonicReact();

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main-content" side="start">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonItem routerLink="/tab1">
              <IonIcon aria-hidden="true" icon={documentOutline} />
              <IonLabel>Análise Cruzada</IonLabel>
            </IonItem>
            <IonItem routerLink="/tab2">
              <IonIcon aria-hidden="true" icon={statsChart} />
              <IonLabel>Histograma Corporal</IonLabel>
            </IonItem>
            <IonItem routerLink="/tab3">
              <IonIcon aria-hidden="true" icon={barChartOutline} />
              <IonLabel>Análise de Valores Agrupados</IonLabel>
            </IonItem>
          </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
        </IonContent>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
