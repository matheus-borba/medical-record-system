import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonRouterLink,
} from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css'; // Importar o arquivo CSS

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    console.log('Email:', email, 'Senha:', password);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding login-background">
        <IonGrid className="login-container">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="6" className="ion-text-center">
              <div className="login-box">
                <h2 className="login-title">Bem vindo de volta!</h2>
                <IonItem className="login-input">
                  <IonIcon icon={mailOutline} slot="start" />
                  <IonInput
                    type="email"
                    label='Email'
                    labelPlacement='floating'
                    value={email}
                    onIonChange={(e: CustomEvent) => setEmail(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem className="login-input">
                  <IonIcon icon={lockClosedOutline} slot="start" />
                  <IonInput
                    type="password"
                    label='Senha'
                    labelPlacement='floating'
                    value={password}
                    onIonChange={(e: CustomEvent) => setPassword(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonButton expand="block" className="login-button" onClick={handleLogin}>
                  Entrar
                </IonButton>
                <p className="forgot-password">Não tem uma conta?
                  <IonRouterLink href='/signup' className="signup-link"> Cadastre-se.</IonRouterLink>
                </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
