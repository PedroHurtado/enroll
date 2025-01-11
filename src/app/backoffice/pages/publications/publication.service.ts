import { Injectable } from '@angular/core';
import { Publication } from './publication';
import { Utils } from '../../domain/levels';

const publications:Publication[] =[]
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor() { }
  add(publication:Publication){
    Utils.builder(publications).add(publication)
  }
  remove(publication:Publication){
    Utils.builder(publications).remove(publication)
  }
}
