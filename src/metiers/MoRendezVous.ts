import {MoSqlTable } from '../tools/MoSqlTable' ;
import {SqlPrd, SqlPrdAnswer} from '../providers/remotesql/sqlprd' ;

export class MoRendezVous extends MoSqlTable
{
  // ce modele permet de gerer les objets Mo. Tous les Mo quelque chose sont des copiés collés
  public id: number ;
  public nom: string ;
  public nbPlacesMax:number ;
  public jour:string ;
  public duree:number ;
  public heure:string ;

  constructor( data: any = null ) 
  {
    super( (data)? data : {
        id:null, 
        nom: null,
        nbPlacesMax: null,
        jour: null,
        duree: null, 
        heure: null } ) ;
  }

  public getTableName(): string
  {
    return "rdv_18" ; 
  }

  public getPk(): Array<string>
  {
    return ["id"] ; 
  }

  public clone( data: any = null ): MoRendezVous
  {
    return new MoRendezVous( data ) ;
  }

  // gère automatiquement l'insertion des objets dans la base de données
  beforeInsert( sqlPrd: SqlPrd )
  {
    return sqlPrd.select( "select max(id) as maxId from " + this.getTableName(), [], null, 0, 99999).then( (results)=>
    {
        if( results.rows[0].maxId == "" ) this.id = 1 ;
        else this.id = parseInt(results.rows[0].maxId) + 1 ;
    }) ;
  }
}