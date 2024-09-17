import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonIcon, IonLabel, IonPage, IonButtons, IonMenuButton, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { documentOutline, statsChart, barChartOutline } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

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
  
    );
}