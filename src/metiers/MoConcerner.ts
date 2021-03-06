import {MoSqlTable } from '../tools/MoSqlTable' ;
import {SqlPrd, SqlPrdAnswer} from '../providers/remotesql/sqlprd' ;

export class MoConcerner extends MoSqlTable
{
  public idLivre: number;
  public idTheme: number;
// ce modele permet de gerer les objets Mo. Tous les Mo quelque chose sont des copiés collés
  constructor( data: any = null ) 
  {
    super( (data)? data : {
        idLivre: null,
        idTheme: null } ) ;
  }

  public getTableName(): string
  {
    return "concerner_18" ; 
  }

  public getPk(): Array<string>
  {
    return ["id"] ; 
  }

  public clone( data: any = null ): MoConcerner
  {
    return new MoConcerner( data ) ;
  }
// gère automatiquement l'insertion des objets dans la base de données
  beforeInsert( sqlPrd: SqlPrd )
  {
    return sqlPrd.select( "select max(id) as maxId from " + this.getTableName(), [], null, 0, 99999).then( (results)=>
    {
        if( results.rows[0].maxId == "" ) this.idLivre = 1 ;
        else this.idLivre = parseInt(results.rows[0].maxId) + 1 ;
    }) ;
  }
}