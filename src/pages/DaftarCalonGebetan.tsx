import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonButton, IonTab, IonRouterOutlet, IonTabBar, IonIcon, IonLabel, IonTabButton, IonTabs, IonBackButton, IonButtons, IonTitle, IonMenuButton, IonItem, IonList, IonItemOption, IonItemOptions, IonItemSliding, IonAvatar, IonImg, useIonToast, IonLoading, IonRouterLink } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ban, banSharp, mailOutline, trash, videocamOutline, create, chevronForward, heart, female, male } from 'ionicons/icons';
import React, { useContext, useRef, useState } from "react";
import './DaftarCalonGebetan.css';
import Gebetans from "../components/Gebetans";
import { Redirect, Route } from "react-router";
import Target from "./Target";

export const GEBETAN_DATA = [
    {id: 'f1', name: 'Eula', ket: "Wamekinasai!", gender: "Perempuan", image: 'assets/images/eula.jpg'},
    {id: 'f2', name: 'Kamisato Ayaka', ket: "Sakura Fubuki!", gender: "Perempuan",  image: 'assets/images/ayaka.jpg'},
    {id: 'f3', name: 'Ei', ket: "Aku suka ∞", gender: "Perempuan",  image: 'assets/images/raiden.jpg'},
    {id: 'm1', name: 'Diluc', ket: "Kaenyo moyashitsukuse!", gender: "Laki-laki",  image: 'assets/images/diluc.jpg'},
    {id: 'm2', name: 'Sora', ket: "Aku suka perempuan", gender: "Laki-laki",  image: 'assets/images/sora.jpg'},
    {id: 'f4', name: 'Diona', ket: "Aku suka minum", gender: "Perempuan",  image: 'assets/images/diona.jpg'},
    {id: 'f5', name: 'Hu tao', ket: "Aku suka hantu", gender: "Perempuan",  image: 'assets/images/hutao.jpg'},
    {id: 'f6', name: 'Yanfei', ket: "Aku suka masalah", gender: "Perempuan",  image: 'assets/images/yanfei.jpg'},
    {id: 'f7', name: 'Yoimiya', ket: "Aku suka kembang api", gender: "Perempuan",  image: 'assets/images/yoimiya.jpg'},
    {id: 'm3', name: 'Bennet', ket: "Aku orangnya sial", gender: "Laki-laki",  image: 'assets/images/bennet.jpg'},
    {id: 'f8', name: 'Xiangling', ket: "Aku suka memasak", gender: "Perempuan",  image: 'assets/images/xiangling.jpg'},
    {id: 'f9', name: 'Noelle', ket: "Aku suka membuat teh", gender: "Perempuan",  image: 'assets/images/noelle.jpg'},
    {id: 'f10', name: 'Mona', ket: "Aku suka uang", gender: "Perempuan",  image: 'assets/images/mona.jpg'},
    {id: 'f11', name: 'Barbara', ket: "Aku suka berdoa", gender: "Perempuan",  image: 'assets/images/barbara.jpg'},
    {id: 'm4', name: 'Kazuha', ket: "Aku rindu temanku", gender: "Laki-laki",  image: 'assets/images/kazuha.jpg'},
    {id: 'f12', name: 'Fischl', ket: "Aku suka berkhayal", gender: "Perempuan",  image: 'assets/images/fischl.jpg'},
    {id: 'f13', name: 'Ganyu', ket: "Aku orangnya pemalu", gender: "Perempuan",  image: 'assets/images/ganyu.jpg'},
    {id: 'f14', name: 'Hotaru', ket: "Aku suka laki-laki", gender: "Perempuan",  image: 'assets/images/hotaru.jpg'},
    {id: 'f15', name: 'Jean', ket: "Aku suka membantu orang", gender: "Perempuan",  image: 'assets/images/jean.jpg'},
    {id: 'f16', name: 'Xinyan', ket: "Aku suka bernyanyi", gender: "Perempuan",  image: 'assets/images/xingyan.jpg'},
    {id: 'm5', name: 'Paimon', ket: "Aku suka ikut campur urusan orang", gender: "Laki-laki",  image: 'assets/images/paimon.jpg'},
    {id: 'f17', name: 'Qiqi', ket: "Aku suka susu kelapa (santan)", gender: "Perempuan",  image: 'assets/images/qiqi.jpg'},
    {id: 'm6', name: 'Razor', ket: "Aku suka serigala", gender: "Laki-laki",  image: 'assets/images/razor.jpg'},
    {id: 'f18', name: 'Keqing', ket: "Aku suka bekerja", gender: "Perempuan",  image: 'assets/images/keqing.jpg'},
    {id: 'm7', name: 'Zhongli', ket: "Aku suka kontrak", gender: "Laki-laki",  image: 'assets/images/zhongli.jpg'},
    {id: 'f20', name: 'Sucrose', ket: "Aku suka bereksperimen", gender: "Perempuan",  image: 'assets/images/sucrose.jpg'},
    {id: 'm8', name: 'Xiao', ket: "Aku suka menunggu", gender: "Laki-laki",  image: 'assets/images/xiao.jpg'},
    {id: 'f21', name: 'Lisa', ket: "Aku suka buku", gender: "Perempuan",  image: 'assets/images/lisa.jpg'},
    {id: 'f22', name: 'rosaria', ket: "Aku suka jalan jalan malam", gender: "Perempuan",  image: 'assets/images/rosaria.jpg'},
]

const DaftarCalonGebetan: React.FC = () => {
    const [present, dismiss] = useIonToast();
    const [showLoading, setShowLoading] = useState(false);
    const gebetansContext = useContext(Gebetans);
    let exist: any[] = [];
    gebetansContext.gebetans.map(gebetans => exist.push(gebetans.id));

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const callFriendHandler = () => {
        console.log("Calling. . .");
    }

    const addGebetan = (id: string, name: string, ket: string, gender: string, image: string) => {
        setShowLoading(true);
        slidingOptionsRef.current?.closeOpened();
        //console.log(name);
        gebetansContext.addGebetan(id, name, ket, gender, image);   
        //console.log(gebetansContext.gebetans);
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
                    <IonTitle>GebetApp</IonTitle>
                    <IonButton slot="end" fill="clear" className="profile circle ion-no-padding" routerLink="/profile"><img className="circle" src="assets/images/profile.png"></img></IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {GEBETAN_DATA.map(gebetan => (
                        <IonCard key={gebetan.id}>
                        <IonItemSliding>
                            <IonItemOptions side="end">
                                <IonItemOption disabled={exist.indexOf(gebetan.id) > -1} color="danger" onClick={() => addGebetan(gebetan.id, gebetan.name, gebetan.ket, gebetan.gender, gebetan.image)}>
                                    <IonIcon slot="icon-only" icon={heart} />
                                </IonItemOption>
                            </IonItemOptions>
                            <IonItem lines="full"
                                        button
                                        onClick={callFriendHandler}>
                                
                                    <IonImg src={gebetan.image}></IonImg>
                                    <IonCardContent className="ion-text-left">
                                        <h2 className="nama">{gebetan.name}</h2>
                                        <h4 className="desc">{gebetan.ket}</h4>
                                        <h4 className="desc"> {gebetan.gender == 'Laki-laki' ? 
                                            <IonIcon icon={male}></IonIcon>
                                        :gebetan.gender == 'Perempuan' ?
                                            <IonIcon icon={female}></IonIcon>
                                        :null}
                                            
                                        &nbsp;{gebetan.gender}</h4>
                                    </IonCardContent>
                                    <IonButton fill="clear" color="dark" slot="end"><IonIcon slot="end"icon={chevronForward} /></IonButton>
                                    <IonLoading 
                                        cssClass='my-custom-class'
                                        isOpen={showLoading}
                                        onDidDismiss={() => setShowLoading(false)}
                                        message={'Please wait . . .'}
                                        duration={1500}
                                    />
                            </IonItem>
                        </IonItemSliding>
                        </IonCard>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
        
    );
};

export default DaftarCalonGebetan;