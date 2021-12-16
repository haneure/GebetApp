import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Target from './pages/Target';
import { accessibility, aperture, list, mailOutline, settings, triangle, triangleOutline, videocamOutline, warning } from 'ionicons/icons';
import DaftarCalonGebetan from './pages/DaftarCalonGebetan';
import Profile from './pages/Profile';
import GebetanProvider from './components/GebetanProvider';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              GebetApp
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink="/daftar">
                <IonIcon slot="start" icon={list} />
                <IonLabel>Daftar Calon Gebetan</IonLabel>
              </IonItem>
              <IonItem button routerLink="/target">
                <IonIcon slot="start" icon={aperture} />
                <IonLabel>Target Gebetan</IonLabel>
              </IonItem>
              <IonItem button routerLink="/profile">
                <IonIcon slot="start" icon={accessibility} />
                <IonLabel>Profile</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">

        <GebetanProvider>
          <Route path="/daftar" component={DaftarCalonGebetan} />
          <Route path="/target" component={Target} />
          <Route path="/profile" component={Profile} />
          <Redirect exact from="/" to="/daftar" />
        </GebetanProvider>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
