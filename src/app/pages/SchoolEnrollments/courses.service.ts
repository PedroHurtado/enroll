import { Injectable } from '@angular/core';
import { Course } from './Course';

const courses: Course[] = [
  {
    id: 1, description: '1º ESO', category: { id: 0, description: 'ESO' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 2, description: '2º ESO', category: { id: 0, description: 'ESO' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 3, description: '3º ESO', category: { id: 0, description: 'ESO' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 4, description: '4º ESO', category: { id: 0, description: 'ESO' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 5, description: '1º Bachiller', category: { id: 1, description: 'Bachiller' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 6, description: '2º Bachiller', category: { id: 1, description: 'Bachiller' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  }
];
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getAll(): Record<string, Course[]> {
    return courses.reduce((acc, course) => {
      const categoryKey = course.category.description;
      if (!acc[categoryKey]) {
        acc[categoryKey] = [];
      }
      acc[categoryKey].push(course);
      return acc;
    }, {} as Record<string, Course[]>);
  }
}
