import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListeUtilisateursPage } from '../pages/liste-utilisateurs/liste-utilisateurs' ;
import { FrmExposantPage } from '../pages/frm-exposant/frm-exposant' ;
import { ListeExposantsPage } from '../pages/liste-exposants/liste-exposants' ;
import { SaisieLivrePage } from '../pages/saisie-livre/saisie-livre';
import { ListeLivresPage } from '../pages/liste-livres/liste-livres' ;

import { ListeFrmSqlModeleComponent } from '../components/liste-frm-sql-modele/liste-frm-sql-modele' ;
import { ListeFrmLineComponent } from '../components/liste-frm-line/liste-frm-line' ;
import { TabFormComponent } from '../components/tab-form/tab-form' ;
import { TabRowComponent } from '../components/tab-row/tab-row' ;
import { TabCellComponent } from '../components/tab-cell/tab-cell' ;
import { TabBtSaveComponent } from '../components/tab-bt-save/tab-bt-save' ;
import { TabBtCancelComponent } from '../components/tab-bt-cancel/tab-bt-cancel' ;
import { TabBtRemoveComponent } from '../components/tab-bt-remove/tab-bt-remove' ;
import { TabBtNewComponent } from '../components/tab-bt-new/tab-bt-new' ;
import { TabColHeaderComponent } from '../components/tab-col-header/tab-col-header' ;
import { TabLineSelectorComponent } from '../components/tab-line-selector/tab-line-selector' ;
import { FileSelectorComponent } from '../components/file-selector/file-selector' ;
import { TextAreaComponent } from '../components/text-area/text-area' ;

import { RemoteSqlProvider } from '../providers/remotesql/remotesql';
import { JetonDeConnectionProvider } from '../providers/jeton-de-connection/jeton-de-connection' ;

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabFormComponent,
    TabRowComponent,
    TabCellComponent,
    TabColHeaderComponent,
    TabBtSaveComponent,
    TabBtCancelComponent,
    TabBtRemoveComponent,
    TabBtNewComponent,
    TabLineSelectorComponent,
    FileSelectorComponent,
    TextAreaComponent,
    ListeUtilisateursPage,
    FrmExposantPage,
    ListeExposantsPage,
    SaisieLivrePage,
    ListeLivresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListeUtilisateursPage,
    FrmExposantPage,
    ListeExposantsPage,
    SaisieLivrePage,
    ListeLivresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RemoteSqlProvider,
    JetonDeConnectionProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule 
{
  constructor()
  {
    // Specifie l'URL pour l'accès à la base de donnée 
    RemoteSqlProvider.setWebSqlApiUrl( "http://www.lcs.alsace/flc/php" ) ;
    //RemoteSqlProvider.setWebSqlApiUrl( "http://localhost/bd" ) ;
    
    // Specifie le nom de la base de donnée à consulter
    RemoteSqlProvider.setWebDbNameAndId( "lcsalsacggroot", 0 ) ;
  }
}
