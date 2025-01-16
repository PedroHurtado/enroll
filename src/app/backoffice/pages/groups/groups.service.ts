import { Injectable } from '@angular/core';
import { Descriptor } from '../../domain/levels';

export interface SubjectModality {
  id: string;
  name: string;
  order: number;
  total: number;
}

export interface Subject {
  compulsoryModality: SubjectModality[];
  mode: SubjectModality[];
  electives: SubjectModality[];
}

export interface Data {
  id: string;
  subjects: Subject[];
}



@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor() { }
  getCourses(): Descriptor[] {
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
  getSubjects(id: string):Data[]{

    return [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        subjects: [
          {
            compulsoryModality: [
              { id: "550e8400-e29b-41d4-a716-446655440010", name: "Matemáticas 1", order: 1, total: 25 },
              { id: "550e8400-e29b-41d4-a716-446655440011", name: "Matemáticas 1", order: 2, total: 20 },
              { id: "550e8400-e29b-41d4-a716-446655440012", name: "Matemáticas 1", order: 3, total: 15 },
              { id: "550e8400-e29b-41d4-a716-446655440013", name: "Matemáticas 1", order: 4, total: 10 },
              { id: "550e8400-e29b-41d4-a716-446655440014", name: "Matemáticas 1", order: 5, total: 5 },
              { id: "550e8400-e29b-41d4-a716-446655440015", name: "Matemáticas 1", order: 6, total: 3 },
              { id: "550e8400-e29b-41d4-a716-446655440016", name: "Matemáticas 1", order: 7, total: 1 }
            ],
            mode: [],
            electives: []
          }
        ]
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        subjects: [
          {
            compulsoryModality: [],
            mode: [],
            electives: []
          }
        ]
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440002",
        subjects: [
          {
            compulsoryModality: [],
            mode: [],
            electives: []
          }
        ]
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440003",
        subjects: [
          {
            compulsoryModality: [],
            mode: [],
            electives: []
          }
        ]
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440004",
        subjects: [
          {
            compulsoryModality: [],
            mode: [],
            electives: []
          }
        ]
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440005",
        subjects: [
          {
            compulsoryModality: [],
            mode: [],
            electives: []
          }
        ]
      }
    ].filter(c => c.id === id)


  }
}
