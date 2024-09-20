import { Redirect, Route } from "react-router-dom";

import Login from "../pages/Login/index";
import  SignupPage from "../pages/Signup/index"; 
import AuthenticatedPage from "../pages/Authenticated/index";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";

export function AppRoutes() {
    const [ user, loading, error ] = useAuthState(auth);

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/login">
                        {user ? <Redirect to="/" /> : <Login /> }
                    </Route>
                    <Route exact path="/signup">
                        {user ? <Redirect to="/" /> : <SignupPage /> }
                    </Route>
                    <Route exact path="/">
                        {user ? <AuthenticatedPage /> : <Login /> }
                    </Route>
                    <Route exact path="/tab1">
                        {user ? <AuthenticatedPage /> : <Login /> }
                    </Route>
                    <Route exact path="/tab2">
                        {user ? <AuthenticatedPage /> : <Login /> }
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
}