import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonAvatar, IonButton, IonRouterLink } from "@ionic/react";
import { mailOutline, videocamOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import './profile.css';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Profile</IonTitle>
                    <IonButton slot="end" fill="clear" className="profile circle ion-no-padding" routerLink="/profile"><img className="circle" src="assets/images/profile.png"></img></IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding ion-text-center background-profile">
                <img className="background-image profile-wallpaper" src="/assets/images/wallpaper-clear.png"/>
                <img className="ion-padding profilepict" src="assets/images/profile.png"></img>
                <h1 >Christian Richard Halim</h1>
                <h4>00000035752</h4>
            </IonContent>
        </IonPage>
    );
};

export default Profile;