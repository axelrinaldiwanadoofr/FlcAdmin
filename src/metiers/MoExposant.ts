import {MoSqlTable } from '../tools/MoSqlTable' ;
import {SqlPrd, SqlPrdAnswer} from '../providers/remotesql/sqlprd' ;


export class MoExposant extends MoSqlTable
{

// ce modele permet de gerer les objets Mo. Tous les Mo quelque chose sont des copiés collés
// gère automatiquement l'insertion des objets dans la base de données
  public id: number ;
  public nom: string ;
  public lettre: string ;
  public description: string ;
  public image: string ;

  constructor( data: any = null ) 
  {
    super( (data)? data : {
        id:null, 
        nom: null,
        lettre: null,
        image: null,
        description: null } ) ;
  }

  public getTableName(): string
  {
    return "exposant_18" ; 
  }

  public getPk(): Array<string>
  {
    return ["id"] ; 
  }

  public clone( data: any = null ): MoExposant
  {
    return new MoExposant( data ) ;
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