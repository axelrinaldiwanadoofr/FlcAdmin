import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';
import { MoExposant } from '../../metiers/MoExposant' ;
import { FrmExposantPage } from '../frm-exposant/frm-exposant' ;
import { ListeSqlModelePage } from '../../tools/liste-sql-modele' ;

/**
 */

@IonicPage()
@Component({
  selector: 'page-liste-exposants',
  templateUrl: 'liste-exposants.html',
})
export class ListeExposantsPage extends ListeSqlModelePage 
{ // la classe mère ListSqlModelPage possède plein de fonctions qui permettent de manipuler les variables ici pour remplir les tableaux
  private rId: number ;
  private rNom: string ;

  constructor(  public navCtrl: NavController, 
    public navParams: NavParams,
    public sqlPrd: RemoteSqlProvider) 
  {
    super( new MoExposant(), FrmExposantPage, navCtrl, navParams, sqlPrd ) ;

    this.rId = null ;
    this.rNom = null ;
  }

  ngOnInit()
  {
    this.select( "SELECT DISTINCT * FROM exposant_18 order by nom", [] ) ;
  }
// permet de filtrer la recherche
  onFiltre()
  {
    let where = "where 1=1" ;

    if( this.rId ) where += " and id=" + this.rId ;
    if( this.rNom ) where += " and nom like '%" + this.rNom + "%'" ;

    this.liste = [] ;
    this.select( "SELECT DISTINCT * FROM exposant_18 " + where + " order by nom", [] ) ;
  }

}
