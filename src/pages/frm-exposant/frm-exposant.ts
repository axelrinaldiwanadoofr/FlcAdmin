import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';
import { ToastController } from 'ionic-angular';
import { FrmSqlModelePage } from '../../tools/frm-sql_modele' ;
import { MoExposant } from '../../metiers/MoExposant' ;

/**
 * Generated class for the FrmEquipementInterventionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frm-exposant',
  templateUrl: 'frm-exposant.html',
})
export class FrmExposantPage extends FrmSqlModelePage
{

  public onglet: string ;
  public name:string;
  public object: MoExposant ;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sqlPrd: RemoteSqlProvider,
    public toastCtrl: ToastController) 
  {
    super( navCtrl, navParams, sqlPrd, toastCtrl, new MoExposant() ) ;
    this.onglet = "general" ;
    this.name = NavParams.name;
  }


  affichageLivres(name){
    

  }
}
