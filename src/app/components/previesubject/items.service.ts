import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _items:any[] = [
    "Biología",
    "Dibujo Técnico II",
    "Física",
    "Geología y Ciencias Ambientales",
    "Química",
    "Tecnología e Ingeniería II",
  ]
  constructor() { }
  get items(){
    return this._items
  }
  set items(value:any[]){
    this._items = value;
  }
}
