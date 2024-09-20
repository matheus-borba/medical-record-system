import { IonMenu, IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonItem, IonIcon, IonLabel, IonPage, IonButtons, IonMenuButton, IonRouterOutlet, IonButton } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { documentOutline, statsChart, barChartOutline, footstepsOutline, personCircleOutline, powerOutline, documentTextOutline, logOut, logOutOutline, peopleOutline, personAddOutline } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import './AuthenticatedPage.css';

export default function AuthenticatedPage() {
    return (
      <IonReactRouter>
        <IonMenu contentId="main-content" side="start">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
              <IonItem routerLink="/tab1" className="custom-item">
                <IonIcon aria-hidden="true" icon={footstepsOutline} className="custom-icon" />
                <IonLabel className="custom-label">Análise de Atividades</IonLabel>
              </IonItem>
              <IonItem routerLink="/tab2" className="custom-item" >
                <IonIcon aria-hidden="true" icon={statsChart} className="custom-icon" />
                <IonLabel>Histograma Corporal</IonLabel>
              </IonItem>
              <IonItem className="custom-item">
                <IonIcon aria-hidden="true" icon={personAddOutline} className="custom-icon" />
                <IonLabel>Cadastro de Paciente</IonLabel>
              </IonItem>
              <IonItem className="custom-item">
                <IonIcon aria-hidden="true" icon={documentTextOutline} className="custom-icon" />
                <IonLabel>Cadastro de Atividades</IonLabel>
              </IonItem>
              <IonItem className="custom-item">
                <IonIcon aria-hidden="true" icon={peopleOutline} className="custom-icon" />
                <IonLabel>Pacientes</IonLabel>
              </IonItem>
              <IonItem className="custom-item">
                <IonIcon aria-hidden="true" icon={personCircleOutline} className="custom-icon" />
                <IonLabel>Perfil</IonLabel>
              </IonItem>
            </IonContent>
        </IonMenu>
  
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>HealthSync</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => console.log('Logoff clicado')}>
                  <IonIcon icon={logOutOutline} size="large"/>
                </IonButton>
              </IonButtons>
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
  
    );
}