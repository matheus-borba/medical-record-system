import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonButton, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';
import './styles.css';
import { globeOutline, mapOutline } from 'ionicons/icons';

const AboutUs: React.FC = () => {
    const [location, setLocation] = useState<{latitude: number, longitude: number} | null>(null);

    const destination = {
      lat: -30.027505143580516,
      lng: -51.17580263091848,
    };

    useEffect(() => {
      const getLocation = async () => {
        const position = await Geolocation.getCurrentPosition();
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      };
  
      getLocation();
    }, []);

    const openMaps = () => {
      if (location) {
        const url = `https://www.google.com/maps/dir/?api=1&origin=${location.latitude},${location.longitude}&destination=${destination.lat},${destination.lng}&travelmode=driving`;
        window.open(url);
      }
    };

    const openLink = async () => {
      await Browser.open({ url: 'https://www.unisinos.br' });
    };

    return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sobre Nós</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <h2>Grupo:</h2>
              <p>
                Aplicativo desenvolvido pelos alunos de pós graduação em Engenharia de Software na Unisinos/POA.
              </p>
              <p>
                Felipe B. dos Santos,
                Daniels Weber Kessler,
                Matheus de Paula Borba e
                Ricardo Jacques.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>

        {location ? (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Unisinos</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                <p>Acesse o site e conheça mais: </p>
                <IonButton expand='block' className='aboutus-button' onClick={openLink}>
                <IonIcon icon={globeOutline} className='custom-icon'></IonIcon>
                  Abrir no navegador
                </IonButton>
              </IonText>
              <IonText>
                <p><b>Endereço:</b>  Av. Dr. Nilo Peçanha, 1600 - Boa Vista, Porto Alegre - RS, 91330-002</p>
              </IonText>
              <IonButton expand='block' className='aboutus-button' onClick={openMaps}>
                <IonIcon icon={mapOutline} className='custom-icon'></IonIcon>
                Abrir no Maps
              </IonButton>
            </IonCardContent>
          </IonCard>
        ) : (
          <IonText>Carregando localização...</IonText>
        )}
      </IonContent>
    </IonPage>
    );
}

export default AboutUs;