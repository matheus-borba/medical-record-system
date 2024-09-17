import { IonContent, IonPage, IonInput, IonButton, IonItem, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import './Login.css'; // Reutilizando o estilo da página de login
import { useState } from 'react';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <p>Carregando...</p>
  }
  
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
                      onIonChange={(e) => setEmail(e.detail.value!)}
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
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonButton expand="block" className="login-button" onClick={handleSignOut}>
                  Cadastrar
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignupPage;
