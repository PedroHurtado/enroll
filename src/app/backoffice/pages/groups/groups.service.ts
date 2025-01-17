import { Injectable } from '@angular/core';
import { Descriptor } from '../../domain/levels';


export interface WithEnrolls {
  enrolls: Descriptor[];
}

export interface DescriptorWithEnrolls extends Descriptor, WithEnrolls { }

export interface Position{
  position:number
  enrolls:Descriptor[]
}
export interface PositionWhitEnrolls extends Descriptor {
  positions: Position[];
}

export interface Modality extends DescriptorWithEnrolls {
  compulsoryModality: DescriptorWithEnrolls[];
  modalityElectives: DescriptorWithEnrolls[];
}

export interface Course extends DescriptorWithEnrolls {
  modalities: Modality[];
  electives: PositionWhitEnrolls[];
}

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor() { }
  getCourses(): Descriptor[] {
    return [
      {
        id: "550e8400-e29b-41d4-a716-446655440004",
        name: "1º Bachillerato"
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440005",
        name: "2º Bachillerato"
      },
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
      }

    ];
  }
  getCourse(id: string): Course | undefined {

    const courses:Course[] = [
      {
        id: "550e8400-e29b-41d4-a716-446655440004",
        name: "1º Bachillerato",
        enrolls: [
          { id: "1a2b3c4d-5678-9101-1234-56789abcdef0", name: "Carlos Martínez" },
          { id: "2b3c4d5e-6789-1011-1234-56789abcdef1", name: "Ana Fernández" }
        ],
        modalities: [
          {
            id: "8f7b5db2-3ed6-4e3a-8a2c-37d42951b7c1",
            name: "Artes Plásticas, Imagen y Diseño",
            enrolls: [
              { id: "3c4d5e6f-7890-1112-1234-56789abcdef2", name: "María López" },
              { id: "4d5e6f7g-8901-1213-1234-56789abcdef3", name: "Pedro Sánchez" }
            ],
            compulsoryModality: [
              {
                id: "1d7e9af3-12c4-4b5d-8e6f-9c0a2b3d4e5f",
                name: "Dibujo Artístico I",
                enrolls: [
                  { id: "5e6f7g8h-9012-1314-1234-56789abcdef4", name: "Laura García" }
                ]
              }
            ],
            modalityElectives: [
              {
                id: "2f8d6c4e-23a5-4b6c-9d7e-8f1c3d5b7a9e",
                name: "Cultura Audiovisual",
                enrolls: [
                  { id: "6f7g8h9i-0123-1415-1234-56789abcdef5", name: "Luis Gómez" },
                  { id: "7g8h9i0j-1234-1516-1234-56789abcdef6", name: "Paula Torres" }
                ]
              }
            ]
          },
          {
            id: "8f7b5db2-3ed6-4e3a-8a2c-37d42951b7c1",
            name: "Ciencias y Tecnología",
            enrolls: [
              { id: "3c4d5e6f-7890-1112-1234-56789abcdef2", name: "María López" },
              { id: "4d5e6f7g-8901-1213-1234-56789abcdef3", name: "Pedro Sánchez" }
            ],
            compulsoryModality: [
              {
                id: "1d7e9af3-12c4-4b5d-8e6f-9c0a2b3d4e5f",
                name: "Dibujo Artístico I",
                enrolls: [
                  { id: "5e6f7g8h-9012-1314-1234-56789abcdef4", name: "Laura García" }
                ]
              }
            ],
            modalityElectives: [
              {
                id: "2f8d6c4e-23a5-4b6c-9d7e-8f1c3d5b7a9e",
                name: "Cultura Audiovisual",
                enrolls: [
                  { id: "6f7g8h9i-0123-1415-1234-56789abcdef5", name: "Luis Gómez" },
                  { id: "7g8h9i0j-1234-1516-1234-56789abcdef6", name: "Paula Torres" }
                ]
              }
            ]
          }
        ],
        electives: [
          {
            id: "0b6c4d2e-01c3-4d4e-bf5g-6h9e1h3j5l7n",
            name: "Segunda Lengua Extranjera I",
            positions: [
              {
                position: 1,
                enrolls: [
                  { id: "9i0j1k2l-3456-1718-1234-56789abcdef8", name: "David Morales" },
                  { id: "0j1k2l3m-4567-1819-1234-56789abcdef9", name: "Isabel Vega" }
                ]
              },
              {
                position: 2,
                enrolls: [
                  { id: "1k2l3m4n-5678-1920-1234-56789abcde01", name: "Tomás Castillo" }
                ]
              },
              {
                position: 3,
                enrolls: [
                  { id: "2l3m4n5o-6789-2021-1234-56789abcde02", name: "Beatriz Navarro" }
                ]
              },
              {
                position: 4,
                enrolls: [
                  { id: "3m4n5o6p-7890-2122-1234-56789abcde03", name: "Sofía Ruiz" }
                ]
              }
            ]
          },
          {
            id: "1c7d5e3f-12d4-4e5f-cg6h-7i0f2i4k6m8o",
            name: "Anatomía Aplicada",
            positions: [
              {
                position: 1,
                enrolls: [
                  { id: "4n5o6p7q-8901-2223-1234-56789abcde04", name: "Tomás Castillo" }
                ]
              },
              {
                position: 2,
                enrolls: [
                  { id: "5o6p7q8r-9012-2324-1234-56789abcde05", name: "Nuria Fernández" }
                ]
              },
              {
                position: 3,
                enrolls: [
                  { id: "6p7q8r9s-0123-2425-1234-56789abcde06", name: "Alejandro López" }
                ]
              },
              {
                position: 4,
                enrolls: [
                  { id: "7q8r9s0t-1234-2526-1234-56789abcde07", name: "Raúl Sánchez" }
                ]
              },
              {
                position: 5,
                enrolls: [
                  { id: "8r9s0t1u-2345-2627-1234-56789abcde08", name: "Clara Jiménez" }
                ]
              }
            ]
          }
        ]
      }
    ]
    return courses.find(c=>c.id === id)


  }
}
