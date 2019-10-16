import {MoSqlTable } from '../tools/MoSqlTable' ;
import {SqlPrd, SqlPrdAnswer} from '../providers/remotesql/sqlprd' ;


export class MoEtreSur extends MoSqlTable
{

// ce modele permet de gerer les objets Mo. Tous les Mo quelque chose sont des copiés collés
// gère automatiquement l'insertion des objets dans la base de données
  public idStand: number ;
  public idExposant: number ;

  constructor( data: any = null ) 
  {
    super( (data)? data : {
        idStand:null, 
        idExposant: null } ) ;
  }

  public getTableName(): string
  {
    return "etresur_18" ; 
  }

  public getPk(): Array<string>
  {
    return ["idStand","idExposant"] ; 
  }

  public clone( data: any = null ): MoEtreSur
  {
    if( !data ) data = {idExposant: this.idExposant, idStand: this.idStand } ;
    return new MoEtreSur( data ) ;
  }
}