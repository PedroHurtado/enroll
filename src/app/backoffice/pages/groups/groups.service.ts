import { Injectable } from '@angular/core';
import { Descriptor } from '../../domain/levels';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(){ }
  getCourses():Descriptor[]{
    return [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        name: "1º ESO"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        name: "2º ESO"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440002",
        name: "3º ESO"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440003",
        name: "4º ESO"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440004",
        name: "1º Bachillerato"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440005",
        name: "2º Bachillerato"
      }
    ];
  }
  getSubjects(id:string){
    [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        subjects:[
          {
            mode:[

            ]
          }
        ]
      }
    ]
  }
}
