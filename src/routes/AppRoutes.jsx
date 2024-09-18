import { Redirect, Route } from "react-router-dom";

import Login from "../pages/Login";
import  SignupPage from "../pages/Signup"; 
import AuthenticatedPage from "../pages/AuthenticatedPage";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";

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
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
}