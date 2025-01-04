import { Injectable } from '@angular/core';
import { Mode } from './mode';

const modes:Mode[] = [];
@Injectable({
  providedIn: 'root'
})
export class ModalitiesService {

  constructor() {

  }
   add(mode:Mode,courseId:string|undefined ):Mode{

      const newMode:Mode = {
        ...mode,
        id: self.crypto.randomUUID(),
        courseId
      }
      modes.push(newMode);
      return newMode;
    }
    remove(mode:Mode){
      const index = modes.findIndex((m)=>m===mode);
      if(index >= 0){
        modes.splice(index,1);
      }
    }
    update(mode:Mode){
      const index = modes.findIndex((m)=>m===mode);
      if(index >= 0){
        modes[index] = mode;
      }
    }
}
