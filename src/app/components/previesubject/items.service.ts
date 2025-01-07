import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _items:any[] = []
  constructor() { }
  get items(){
    return this._items
  }
  set items(value:any[]){
    this._items = value;
  }
}
