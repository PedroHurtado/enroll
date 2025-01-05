export interface Config {
  type:string,
  title:string,
  multiple:boolean,
  limit:number
}

export const defaultConfig:Config ={
  type:'all',
  title:'',
  multiple:false,
  limit:0
}
