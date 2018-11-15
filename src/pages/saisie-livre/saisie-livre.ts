import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JetonDeConnectionProvider } from "../../providers/jeton-de-connection/jeton-de-connection" ; 
import { ToastController } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql'; 
import { ListeSqlModelePage } from '../../tools/liste-sql-modele' ;
import { MoLivre } from '../../metiers/MoLivre' ;
import { FrmSqlModelePage } from '../../tools/frm-sql_modele' ;


@Component({
  selector: 'page-saisie-livre',
  templateUrl: 'saisie-livre.html'
})

export class SaisieLivrePage extends FrmSqlModelePage
{
    @Input() private idExposant:    number ;

    public object:    MoLivre;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public jetonConnect: JetonDeConnectionProvider,
        public toastCtrl: ToastController,
        public sqlPrd: RemoteSqlProvider  )
        {
            super( navCtrl, navParams, sqlPrd, toastCtrl, new MoLivre() )

    }
    ngOnInit(){
    }
    validerSaisie(){

    }
}