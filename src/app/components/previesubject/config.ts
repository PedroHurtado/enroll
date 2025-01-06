export interface Config {
  type:string,
  title:string,
  multiple:boolean,
  limit:number,
  defaultSubject:any
}

export const defaultConfig:Config ={
  type:'all',
  title:'',
  multiple:false,
  limit:0,
  defaultSubject:null
}
