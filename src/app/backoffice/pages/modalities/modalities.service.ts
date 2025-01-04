import { Injectable } from '@angular/core';
import { Mode } from './mode';

@Injectable({
  providedIn: 'root'
})
export class ModalitiesService {

  constructor() {

  }
   add(mode:Mode,levelId:string|undefined ):Mode{
    const {
      name,
      common,
      specific,
      elective,
      electiveOne
    } = mode
      return {
        id: self.crypto.randomUUID(),
        name,
        levelId,
        common,
        specific,
        elective,
        electiveOne

      }
    }
    remove(level:Mode){

    }
    update(level:Mode){

    }
}
