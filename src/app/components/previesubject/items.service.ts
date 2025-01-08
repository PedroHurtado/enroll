import { Injectable } from '@angular/core';
import { Descriptor } from '../../backoffice/domain/levels';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _items:Descriptor[] = []
  constructor() { }
  get items(){
    return this._items
  }
  set items(value:Descriptor[]){
    this._items = value;
  }
}
