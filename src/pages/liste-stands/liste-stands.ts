import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';
import { MoStand } from '../../metiers/MoStand' ;
import { ToastController } from 'ionic-angular';
import { ListeFrmSqlModelePage } from '../../tools/liste-frm-sql-modele' ;

/**
 */

@IonicPage()
@Component({
  selector: 'page-liste-stands',
  templateUrl: 'liste-stands.html',
})
export class ListeStandsPage extends ListeFrmSqlModelePage 
{ // la classe mère ListSqlModelPage possède plein de fonctions qui permettent de manipuler les variables ici pour remplir les tableaux
  private rId: number ;
  private rHall: string ;

  constructor(  public navCtrl: NavController, 
    public navParams: NavParams,
    public sqlPrd: RemoteSqlProvider,
    public toastCtrl: ToastController ) 
  {
    super( new MoStand(), navCtrl, navParams, sqlPrd, toastCtrl ) ;

    this.rId = null ;
    this.rHall = null ;
  }

  ngOnInit()
  {
    this.select( "SELECT DISTINCT * FROM stand_18 order by id", [] ) ;
  }
// permet de filtrer la recherche
  onFiltre()
  {
    let where = "where 1=1" ;

    if( this.rId ) where += " and id=" + this.rId ;
    if( this.rHall ) where += " and hall like '%" + this.rHall + "%'" ;

    this.liste = [] ;
    this.select( "SELECT DISTINCT * FROM stand_18 " + where + " order by id", [] ) ;
  }

}
