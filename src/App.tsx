import { IonApp,
  setupIonicReact } from '@ionic/react';
import React from 'react';

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
import { AppRoutes } from './routes/AppRoutes';

setupIonicReact();

const App: React.FC = () => (

  <IonApp>
      <AppRoutes />
  </IonApp>

);

export default App;
