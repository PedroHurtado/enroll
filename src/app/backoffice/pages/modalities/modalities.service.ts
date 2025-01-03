import { Injectable } from '@angular/core';
import { Mode } from './mode';

@Injectable({
  providedIn: 'root'
})
export class ModalitiesService {

  constructor() {

  }
   add(name:string,levelId:string|undefined ):Mode{
      return {
        id: self.crypto.randomUUID(),
        name: name,
        levelId
      }
    }
    remove(level:Mode){

    }
    update(level:Mode){

    }
}
