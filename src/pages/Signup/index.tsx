import { IonContent, IonPage, IonInput, IonButton, IonItem, IonGrid, IonRow, IonCol, IonIcon, IonRouterLink, IonLoading } from '@ionic/react';
import '../Login/styles.css';
import { useState } from 'react';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

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

  return (
    <IonPage>
      <IonLoading message="Aguarde um instante..." duration={0} isOpen={loading} />
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
                    labelPlacement='floating'
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                    required
                  >
                    <div slot='label' className='input-label'>
                      Email
                    </div>
                  </IonInput>
                </IonItem>
                <IonItem className="login-input">
                  <IonIcon icon={lockClosedOutline} slot="start" />
                  <IonInput
                    type="password"
                    labelPlacement='floating'
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    required
                  >
                    <div slot='label' className='input-label'>
                      Senha
                    </div>
                  </IonInput>
                </IonItem>
                <IonButton expand="block" className="login-button" onClick={handleSignOut}>
                  Cadastrar
                </IonButton>
                <p className="forgot-password">Ja tem uma conta?
                  <IonRouterLink href='/login' className="signup-link"> Acesse.</IonRouterLink>
                </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignupPage;
