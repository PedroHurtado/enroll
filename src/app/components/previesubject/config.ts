export interface Config {
  type:string,
  text:string,
  multiple:boolean,
  limit:number
}

export const defaultConfig:Config ={
  type:'all',
  text:'',
  multiple:false,
  limit:0
}
