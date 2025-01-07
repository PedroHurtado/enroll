import { Injectable } from '@angular/core';
import {  LevelDomain} from '../../domain/levels';



@Injectable({
  providedIn: 'root'
})
export class LevelService {
  protected levels:LevelDomain[] =[]
  constructor() { }
  getAll():LevelDomain[]{
    return this.levels;
  }
  get(id:string):LevelDomain|undefined{
    return this.levels.find(l=>l.id ===id)
  }

  add(name:string):LevelDomain{
   const level= LevelDomain.create(name)
   this.levels.push(level)
   return level
  }
  remove(level:LevelDomain){
    this.levels = this.levels.filter(l=>l!==level)
    return this.levels;
  }
}
