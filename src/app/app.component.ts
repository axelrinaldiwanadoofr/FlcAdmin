import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JetonDeConnectionProvider } from "../providers/jeton-de-connection/jeton-de-connection" ; 

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListeUtilisateursPage } from '../pages/liste-utilisateurs/liste-utilisateurs' ;
import { ListeExposantsPage } from '../pages/liste-exposants/liste-exposants' ;
import { SaisieLivrePage } from '../pages/saisie-livre/saisie-livre';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, privilegeMin: number }>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public jetonConnection: JetonDeConnectionProvider ) 
  {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage, privilegeMin: 0 },
      { title: 'Utilisateurs', component: ListeUtilisateursPage, privilegeMin: 20 },
      { title: 'Exposants', component: ListeExposantsPage, privilegeMin: 10 },
      { title:'Rendez-vous', component:ListeRDVPage, privilegeMin:10 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
