import { IonContent, IonPage, IonInput, IonButton, IonItem, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import './Login.css'; // Reutilizando o estilo da página de login
import { useState } from 'react';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    console.log('Email:', email, 'Senha:', password);
  };
  
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding login-background">
        <IonGrid className='login-container'>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="6" className="ion-text-center">
              <div className='login-box'>
                <h2 className='login-title'>Cadastre-se</h2>
                  <IonItem className='login-input'>
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
                  Cadastrar
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        
        {/* <div className="login-container">
          <div className="login-box">
            <h2>Cadastrar</h2>
            <IonItem className="login-input">
              <IonInput
                type="text"
                label="Nome de Usuário"
                labelPlacement="floating"
                value={username}
                onIonChange={(e: CustomEvent) => setUsername(e.detail.value!)}
                required
              />
            </IonItem>
            <IonItem className="login-input">
              <IonInput
                type="password"
                label="Senha"
                labelPlacement="floating"
                value={password}
                onIonChange={(e: CustomEvent) => setPassword(e.detail.value!)}
                required
              />
            </IonItem>
            <IonButton expand="block">Cadastrar</IonButton>
          </div>
        </div> */}
      </IonContent>
    </IonPage>
  );
};

export default SignupPage;
