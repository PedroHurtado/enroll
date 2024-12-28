import { Injectable } from '@angular/core';
import { Level } from './level';

@Injectable({
  providedIn: 'root'
})
export class SchoolEnrollmentsService {

  constructor() { }
  getAll(): Record<string,Level[]> {
    const levels: Level[] = [

      {
        id: 1,
        description: 'ESO',
        level: 0,
        course: {
          id: 1,
          description: '1º ESO'
        },
        subjects: [
          {
            id: 1,
            description: 'Matemáticas'
          },
          {
            id: 2,
            description: 'Lengua'
          },
          {
            id: 3,
            description: 'Inglés'
          },
          {
            id: 4,
            description: 'Física y Química'
          }
        ]
      },
      {
        id: 2,
        description: 'ESO',
        level: 0,
        course: {
          id: 2,
          description: '2º ESO'
        },
        subjects: [
          {
            id: 1,
            description: 'Matemáticas'
          },
          {
            id: 2,
            description: 'Lengua'
          },
          {
            id: 3,
            description: 'Inglés'
          },
          {
            id: 4,
            description: 'Física y Química'
          }
        ]
      },
      {
        id: 3,
        description: 'ESO',
        level: 0,
        course: {
          id: 3,
          description: '3º ESO'
        },
        subjects: [
          {
            id: 1,
            description: 'Matemáticas'
          },
          {
            id: 2,
            description: 'Lengua'
          },
          {
            id: 3,
            description: 'Inglés'
          },
          {
            id: 4,
            description: 'Física y Química'
          }
        ]
      },
      {
        id: 4,
        description: 'ESO',
        level: 0,
        course: {
          id: 4,
          description: '4º ESO'
        },
        subjects: [
          {
            id: 1,
            description: 'Matemáticas'
          },
          {
            id: 2,
            description: 'Lengua'
          },
          {
            id: 3,
            description: 'Inglés'
          },
          {
            id: 4,
            description: 'Física y Química'
          }
        ]
      }
      ,
      {
        id: 5,
        description: 'Bachillerato',
        level: 1,
        course: {
          id: 5,
          description: '1º Bachillerato'
        },
        subjects: [
          {
            id: 1,
            description: 'Matemáticas'
          },
          {
            id: 2,
            description: 'Lengua'
          },
          {
            id: 3,
            description: 'Inglés'
          },
          {
            id: 4,
            description: 'Física y Química'
          }
        ]
      },
      {
        id: 6,
        description: 'Bachillerato',
        level: 1,
        course: {
          id: 6,
          description: '2º Bachillerato'
        },
        subjects: [
          {
            id: 1,
            description: 'Matemáticas'
          },
          {
            id: 2,
            description: 'Lengua'
          },
          {
            id: 3,
            description: 'Inglés'
          },
          {
            id: 4,
            description: 'Física y Química'
          }
        ]
      }
    ]
    return levels.reduce((acc: Record<string, Level[]>, level) => {
      const key = `${level.level}->${level.description}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(level);
      return acc;
    }, {});

  }
}
