import { IonActionSheet, IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonLoading, IonMenuButton, IonPage, IonRouterLink, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { heart, male, female, chevronForward, close, mailOutline, videocamOutline } from "ionicons/icons";
import { useContext, useRef, useState } from "react";
import { Redirect, Route, useParams } from "react-router";
import Gebetan from "../components/Gebetans";
import DaftarCalonGebetan from "./DaftarCalonGebetan";

const Target: React.FC = () => {
    const gebetansContext = useContext(Gebetan);
    const [showActionSheet, setShowActionSheet] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [idGebetan, setIdGebetan] = useState<string>();
    const id = useParams<{id: string}>().id;
    
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const deleteGebetan = (id: string) => {
        slidingOptionsRef.current?.closeOpened();
        gebetansContext.deleteGebetan(id);
        setShowLoading(true);
    }

    const actionSheet = (id: string) => {
        setShowActionSheet(true);
        setIdGebetan(id);
    }

    setTimeout(() => {
        setShowLoading(false);
    }, 1500)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Target Gebetan</IonTitle>
                    <IonButton slot="end" fill="clear" className="profile circle ion-no-padding" routerLink="/profile"><img className="circle" src="assets/images/profile.png"></img></IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <img className="background-image" src="/assets/images/wallpaper-clear.png"/>
                <IonList>
                    {gebetansContext.gebetans.map(gebetan => (
                        
                        <IonCard key={gebetan.id} >

                            {gebetansContext.gebetans.length < 1 ? 
                                <h1>APAA???!!! ANDA BELUM ADA GEBETAN??</h1>
                            :null}

                            <IonItemSliding>
                                <IonItemOptions side="end">
                                    <IonItemOption color="danger" onClick={() => actionSheet(gebetan.id)}>
                                        <IonIcon slot="icon-only" icon={close} />
                                    </IonItemOption>
                                </IonItemOptions>
                                <IonItem lines="full" button>
                                    <IonImg src={gebetan.image}></IonImg>
                                        <IonCardContent className="ion-text-left">
                                            <h2>{gebetan.name}</h2>
                                            <h4>{gebetan.ket}</h4>
                                            <h4> {gebetan.gender == 'Laki-laki' ? 
                                                <IonIcon icon={male}></IonIcon>
                                            :gebetan.gender == 'Perempuan' ?
                                                <IonIcon icon={female}></IonIcon>
                                            :null}
                                                
                                                {gebetan.gender}</h4>
                                        </IonCardContent>
                                    <IonButton fill="clear" color="dark" slot="end"><IonIcon slot="end"icon={chevronForward} /></IonButton>
                                </IonItem>
                                {idGebetan &&
                                    <IonActionSheet isOpen={showActionSheet}
                                        onDidDismiss={() => setShowActionSheet(false)}
                                        header = "Yakin ga gebet dia lagi ?"
                                        buttons={[{
                                            text: 'HAPUS DIA DARI MUKA BUMI',
                                            handler: () => deleteGebetan(idGebetan)
                                        },
                                        {
                                            text: "Gajadi deh"        
                                        }]}
                                    />
                                }
                            </IonItemSliding>
                            <IonLoading 
                                cssClass='my-custom-class'
                                isOpen={showLoading}
                                onDidDismiss={() => setShowLoading(false)}
                                message={'Please wait . . .'}
                                duration={1500}
                            />
                        </IonCard>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Target;