import {MoSqlTable } from '../tools/MoSqlTable' ;
import {SqlPrd, SqlPrdAnswer} from '../providers/remotesql/sqlprd' ;


export class MoUtilisateur extends MoSqlTable
{

  public id: number ;
  public nom: string ;
  public compte: string ;
  public mdp: string ;
  public privilige: number ;

  constructor( data: any = null ) 
  {
    super( (data)? data : {
        id:null, 
        nom: null,
        compte: null,
        mdp: null, 
        privilige: 0 } ) ;
  }

  public getTableName(): string
  {
    return "UTILISATEURS_18" ; 
  }

  public getPk(): Array<string>
  {
    return ["nom"] ; 
  }

  public clone( data: any = null ): MoUtilisateur
  {
    return new MoUtilisateur( data ) ;
  }
}