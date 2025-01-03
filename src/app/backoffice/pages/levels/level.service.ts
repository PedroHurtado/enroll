import { Injectable } from '@angular/core';
import { Level } from './level';

const levels:Level[] = [
  {id: self.crypto.randomUUID(), name: 'Eso'},
  {id: self.crypto.randomUUID(), name: 'Bachiller'},
  {id: self.crypto.randomUUID(), name: 'FP básica'},
  {id: self.crypto.randomUUID(), name: 'Ciclos formativos de grado medio'},
  {id: self.crypto.randomUUID(), name: 'Ciclos formativos de grado superior'},
]
@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor() { }
  getAll():Level[]{
    return levels;
  }
  get(id:string):Level|undefined{
    return levels.find(level => level.id === id);
  }

  add(name:string):Level{
    return {
      id: self.crypto.randomUUID(),
      name: name
    }
  }
  remove(level:Level){

  }
  update(level:Level){

  }
}
