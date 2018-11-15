import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql'; 
import { ListeSqlModelePage } from '../../tools/liste-sql-modele' ;

import { MoLivre } from '../../metiers/MoLivre' ;
import { MoTheme } from '../../metiers/MoTheme' ;
import { MoTrancheAge } from '../../metiers/MoTrancheAge' ;

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
        public toastCtrl: ToastController,
        public sqlPrd: RemoteSqlProvider  )
        {
            super( navCtrl, navParams, sqlPrd, toastCtrl, new MoLivre() )

    }
    change() {
    // recupère les elements
    var element   = document.getElementById('input-enResume');
    var textarea  = element.getElementsByTagName('textarea')[0];

    //met par défaut un style pour le textarea
    textarea.style.minHeight  = '0';
    textarea.style.height     = '0';
    // limite la taille à 176 pixels (11 lignes de texte)
    var scroll_height = textarea.scrollHeight;
    if(scroll_height > 176)
      scroll_height = 176;

    // applique le nouveau style
    element.style.height      = scroll_height + "px";
    textarea.style.minHeight  = scroll_height + "px";
    textarea.style.height     = scroll_height + "px";
    }
}