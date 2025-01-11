import { Injectable } from '@angular/core';
import { Publication } from './publication';
import { Utils } from '../../domain/levels';

const publications:Publication[] =[]
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor() { }
  getAll(){
    return publications
  }
  get(id:string){
    return publications.find(p=>p.id === id)
  }
  add(publication:Publication){
    Utils.builder(publications).add(publication)
  }
  remove(publication:Publication){
    Utils.builder(publications).remove(publication)
  }
  update(publication:Publication){
    const index = publications.findIndex(p=>p.id===publication.id)
    if(index>-1){
      publications[index] = publication
    }
  }
}
