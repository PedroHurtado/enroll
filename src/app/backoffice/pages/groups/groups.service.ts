import { Injectable } from '@angular/core';
import { createDescriptor, Descriptor, DescriptorDomain } from '../../domain/levels';


export interface WithEnrolls {
  enrolls: Descriptor[];
}

export interface DescriptorWithEnrolls extends Descriptor, WithEnrolls { }

export interface Position {
  position: number
  enrolls: Descriptor[]
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
export interface Alumn {
  courseName: string,
  modalityName?: string,
  subjectName?: string,
  enrolls: Descriptor[]
}
export interface Group {
  courseId: string,
  courseName: string,
  groups:GroupGroup[]
}
export interface GroupGroup extends Descriptor {
  subjects: GroupSubject[]
}
export interface GroupSubject extends Descriptor{
  modalityId?:string,
  modalityname?:string
  type:string,
  position:number,
  total:number
}


function uuidv4(): string {
  return crypto.randomUUID()
}

function createStudents(count: number) {
  const firstNames = ["Carlos", "María", "Juan", "Ana", "Luis", "Carmen", "José", "Laura", "Pedro", "Lucía"];
  const lastNames = ["García", "Martínez", "López", "Hernández", "González", "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Torres"];

  return Array.from({ length: count }, () => ({
    id: uuidv4(),
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`
  }));
}

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  .filter(letter => letter !== 'Ñ');

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

    const courses: Course[] = [
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
              },
              {
                id: "8d99301d-d991-48dd-868f-d34e072fb149 ",
                name: "Dibujo Artístico II",
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
                id: "977a331c-a912-4fe2-97c8-e30b0265fe8d",
                name: "Matemáticas",
                enrolls: [
                  { id: "5e6f7g8h-9012-1314-1234-56789abcdef4", name: "Laura García" }
                ]
              }
            ],
            modalityElectives: [
              {
                id: "3876a4c4-fbe6-4a06-8c07-3f679db0156e",
                name: "Física y Química",
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
            id: "1a2b3c4d-5678-9101-1234-56789abcdef0",
            name: "Matemáticas",
            positions: [
              { position: 1, enrolls: createStudents(45) },
              { position: 2, enrolls: createStudents(15) },
              { position: 3, enrolls: createStudents(5) },
              { position: 4, enrolls: createStudents(3) },
              { position: 5, enrolls: createStudents(2) },
            ]
          },
          {
            id: "2b3c4d5e-6789-1011-1234-56789abcdef1",
            name: "Física",
            positions: [
              { position: 1, enrolls: createStudents(10) },
              { position: 2, enrolls: createStudents(15) },
              { position: 3, enrolls: createStudents(5) },
              { position: 4, enrolls: createStudents(3) },
              { position: 5, enrolls: createStudents(2) },
            ]
          },
          {
            id: "3c4d5e6f-7890-1112-1234-56789abcdef2",
            name: "Química",
            positions: [
              { position: 1, enrolls: createStudents(10) },
              { position: 2, enrolls: createStudents(15) },
              { position: 3, enrolls: createStudents(5) },
              { position: 4, enrolls: createStudents(3) },
              { position: 5, enrolls: createStudents(2) },
            ]
          },
          {
            id: "4d5e6f7g-8901-1213-1234-56789abcdef3",
            name: "Lengua",
            positions: [
              { position: 1, enrolls: createStudents(10) },
              { position: 2, enrolls: createStudents(15) },
              { position: 3, enrolls: createStudents(5) },
              { position: 4, enrolls: createStudents(3) },
              { position: 5, enrolls: createStudents(2) },
            ]
          }
        ]

      }
    ]
    return courses.find(c => c.id === id)
  }
  getModaliyEnrolls(courseId: string, modalityId: string): Alumn | undefined {
    const course = this.getCourse(courseId)
    if (course) {
      const courseName = course.name
      const modality = course.modalities.find(m => m.id === modalityId)
      if (modality) {
        const modalityName = modality.name

        return {
          courseName,
          modalityName,
          enrolls: modality.enrolls || [] // Se asegura de cumplir la interfaz Alumn
        };

      }
    }
    return undefined
  }
  getModaliyCompulsoryEnrolls(courseId: string, modalityId: string, subjectId: string): Alumn | undefined {
    const course = this.getCourse(courseId)
    if (course) {
      const courseName = course.name
      const modality = course.modalities.find(m => m.id === modalityId)
      const modalityName = modality?.name
      if (modality) {
        const subject = modality.compulsoryModality.find(s => s.id === subjectId)
        if (subject) {
          const subjectName = subject.name
          return {
            courseName,
            modalityName,
            subjectName,
            enrolls: subject.enrolls
          }
        }
      }
    }
    return undefined
  }
  getModaliyElectivesEnrolls(courseId: string, modalityId: string, subjectId: string): Alumn | undefined {
    const course = this.getCourse(courseId)
    if (course) {
      const courseName = course.name
      const modality = course.modalities.find(m => m.id === modalityId)
      const modalityName = modality?.name
      if (modality) {
        const subject = modality.modalityElectives.find(s => s.id === subjectId)
        if (subject) {
          const subjectName = subject.name
          return {
            courseName,
            modalityName,
            subjectName,
            enrolls: subject.enrolls
          }
        }
      }
    }
    return undefined
  }
  getElectivesEnrolls(courseId: string, subjectId: string, position: number): Alumn | undefined {
    const course = this.getCourse(courseId)
    if (course) {
      const courseName = course.name
      const elective = course.electives.find(e => e.id === subjectId)
      if (elective) {
        const subjectName = elective.name
        const _position = elective.positions.find(p => p.position === Number(position))
        if (_position) {
          return {
            courseName,
            subjectName,
            enrolls: _position.enrolls
          }
        }

      }
    }
    return undefined
  }
  public createGroups(course: Descriptor | undefined, groups: number): Group {

    const result = alphabet.splice(0, groups)

    return {
      courseId: course?.id || '',
      courseName: course?.name || '',
      groups: result.map((l) => ({
        id: uuidv4(),
        name: `${course?.name || ''}-${l}`,
        subjects: [] as GroupSubject[],
      })),
    };


  }

}


