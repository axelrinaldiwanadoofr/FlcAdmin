import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql'; 
import { ListeSqlModelePage } from '../../tools/liste-sql-modele' ;

import { MoRendezVous } from '../../metiers/MoRendezVous' ;

import { FrmSqlModelePage } from '../../tools/frm-sql_modele' ;
 

@Component({
  selector: 'page-saisieRDV',
  templateUrl: 'saisieRDV.html'
})

export class SaisieRDVPage extends FrmSqlModelePage
{
    @Input() private idExposant: number ;

    private typeRdvs: Array<{id;number, nom:string, description:string}> ;
    private trancheAges: Array<{id:number, libelle: string}> ;
    private exposants: Array<{id:number, nom:string}> ;
    private stands: Array<{id:number}> ;
    private jours: Array<{jour:string}> ;

    public object: MoRendezVous;

    // permet la création d'une saisie de RDV
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        public sqlPrd: RemoteSqlProvider )
        {            
            super( navCtrl, navParams, sqlPrd, toastCtrl, new MoRendezVous() ) ;

            this.typeRdvs = [] ;
            this.trancheAges = [] ;
            this.exposants = [] ;
            this.stands = [] ;
            this.jours = [{jour:"samedi"},{jour:"dimanche"}] ;

            this.sqlPrd.select( "select id, libelle from trancheage_18 order by libelle", [], this.trancheAges ) ;
            this.sqlPrd.select( "select id, nom, description from typerdv_18 order by nom", [], this.typeRdvs ) ;
            this.sqlPrd.select( "select id, nom from exposant_18 order by nom", [], this.exposants ) ;
            this.sqlPrd.select( "select id from stand_18 order by id", [], this.stands ) ;
        }

        onExposantChanged()
        {
            if( this.object.idExposant )
            {
                this.sqlPrd.select( "select idStand from etresur_18 where idExposant=? order by idStand", [this.object.idExposant], this.stands ).then( (data)=>
                {
                    if( data.rows.length == 1 )
                    {
                        this.object.idStand = data.rows[0].idStand ;
                    }
                }) ;
            }
            else
            {
                this.sqlPrd.select( "select id from stand_18 order by id", [], this.stands ) ;
            }
        }
}