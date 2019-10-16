import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';
import { MoEtreSur } from '../../metiers/MoEtreSur' ;
import { ToastController } from 'ionic-angular';
import { ListeFrmSqlModelePage } from '../../tools/liste-frm-sql-modele' ;
import { Identifiers } from '@angular/compiler';

/**
 */

@IonicPage()
@Component({
  selector: 'page-exposant-liste-stands',
  templateUrl: 'exposant-liste-stands.html',
})
export class ExposantListeStandsPage extends ListeFrmSqlModelePage 
{ // la classe mère ListSqlModelPage possède plein de fonctions qui permettent de manipuler les variables ici pour remplir les tableaux

  @Input() private idExposant:    number ;

  public stands : Array<{id:Number, hall:String}> ;

  constructor(  public navCtrl: NavController, 
    public navParams: NavParams,
    public sqlPrd: RemoteSqlProvider,
    public toastCtrl: ToastController ) 
  {
    super( null, navCtrl, navParams, sqlPrd, toastCtrl ) ;
  }

  ngOnInit()
  {
    // Cree un modèle par défaut avec le bon n° d'exposant.
    this.setModele( new MoEtreSur( {idExposant: this.idExposant, idStand:null}) ) ;

    this.select( "SELECT * FROM etresur_18 where idExposant=" + this.idExposant + " order by idStand", [] ) ;

    // Liste de choix des stands qui ne sont pas deja associés à l'exposant
    let sql = "SELECT * FROM stand_18 where id not in(" ;
    sql += " select idStand from etresur_18 where idExposant=" + this.idExposant + ") " ; 
    sql += " order by id" ;

    this.stands = [] ;
    this.sqlPrd.select( sql, [], this.stands ) ;
  }
}
