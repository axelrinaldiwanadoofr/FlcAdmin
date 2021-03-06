import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteSqlProvider } from '../../providers/remotesql/remotesql';

import { MoUtilisateur } from '../../metiers/MoUtilisateur' ;
import { MoPersonne } from '../../metiers/MoPersonne' ;
import { MoRendezVous } from '../../metiers/MoRendezVous' ;

import { SaisieRDVPage } from "../saisie-RDV/saisieRDV";
import { ListeSqlModelePage } from "../../tools/liste-sql-modele";

@IonicPage()
@Component({
  selector: 'page-ListeRDV',
  templateUrl: 'ListeRDV.html',
})
export class ListeRDVPage extends ListeSqlModelePage
{
  @Input() private idExposant: number ;

  private rdv: Array<{id:number,nom:string, nbPlacesMax:number, jour:string, duree:number, heure:string, idExposant:number, idStand:number, idTrancheAge:number}>;
  private lesPersonnes: Array<{id:number,nom:string, prenom:string, fonction:string}>;
  private rIdRdv: number ;
  private rIdStand: number ;
  private rNom: string ;

  constructor( 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sqlPrd: RemoteSqlProvider) 
  {
     super( new MoRendezVous(), SaisieRDVPage, navCtrl, navParams, sqlPrd )

    this.rdv = [] ;
    this.lesPersonnes=[];
  }


  ngOnInit()
  {
    this.select( "SELECT DISTINCT * FROM rdv_18 order by id", [] ) ;

    let sql = "select DISTINCT r.id, r.nom, r.nbMaxPlace, r.jour, r.duree, r.heure from rdv_18 r order by r.id" ;

    this.sqlPrd.select( sql, [], this.rdv );
  }

  //Applique le filtre selon l'option selectionnée
  onFiltre()
  {
    let where = "where 1=1" ;

    if( this.rIdRdv ) where += " and id=" + this.rIdRdv ;
    if( this.rIdStand ) where += " and idStand=" + this.rIdStand ;
    if( this.rNom ) where += " and nom like '%" + this.rNom + "%'" ;

    this.liste = [] ;
    this.select( "SELECT DISTINCT * FROM rdv_18 " + where + " order by id", [] ) ;
  }
}