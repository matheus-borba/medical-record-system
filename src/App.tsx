import { Route } from 'react-router-dom';
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
import { Redirect } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

setupIonicReact();

const App: React.FC = () => (

  <IonApp>
      <AppRoutes />
  </IonApp>

);

export default App;
