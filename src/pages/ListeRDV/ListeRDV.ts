import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';

import { MoUtilisateur } from '../../metiers/MoUtilisateur' ;
import { MoPersonne } from '../../metiers/MoPersonne' ;
import { MoRendezVous } from '../../metiers/MoRendezVous' ;

import { ListeFrmSqlModelePage } from '../../tools/liste-frm-sql-modele' ;
import { ToastController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-liste-utilisateurs',
  templateUrl: 'liste-utilisateurs.html',
})
export class ListeRDVPage extends ListeFrmSqlModelePage
{
  private personne: Array<{ idP:number, nomP:string, prenomP:string }>;
  private rdv: Array<{id:number,nom:string, nbPlacesMax:number, jour:string, duree:number, heure:string}>;
  
  constructor( 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sqlPrd: RemoteSqlProvider,
    public toastCtrl: ToastController) 
  {
    super( new MoRendezVous(), navCtrl, navParams, sqlPrd, toastCtrl ) ;

    this.rdv = [] ;
  }

  ngOnInit()
  {
    this.select( "SELECT * FROM rdv_18 order by idP", [] ) ;

    //let sql = "select id, nom from EXPOSANTS_18 " ;
    //sql += " where id not in( select idExposant from UTILISATEURS_18)" ;

    let sql = "select r.id, r.nom, r.nbPlacesMax, r.jour, r.duree, r.heure from participer_18 p,rdv_18 r WHERE   order by idP" ;

    this.sqlPrd.select( sql, [], this.rdv ) ;
  }
}
