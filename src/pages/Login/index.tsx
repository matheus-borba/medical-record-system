import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonRouterLink,
  IonToast,
  IonLoading,
} from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import './styles.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (error) {
      setShowToast(true);
    }
  }, [error]);

  return (
    <IonPage>
      <IonLoading message="Aguarde um instante..." duration={0} isOpen={loading} />
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
                <IonButton expand="block" className="login-button" onClick={handleSignIn}>
                  Entrar
                </IonButton>
                <p className="forgot-password">Não tem uma conta?
                  <IonRouterLink href='/signup' className="signup-link"> Cadastre-se.</IonRouterLink>
                </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Usuário ou Senha inválido!"
          duration={2000}
          position="bottom"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
