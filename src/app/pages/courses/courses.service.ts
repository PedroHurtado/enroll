import { Injectable } from '@angular/core';
import { Course } from './course'

const courses: Course[] = [
  {
    id: 1, description: '1º Eso', category: { id: 0, description: 'Eso' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 2, description: '2º Eso', category: { id: 0, description: 'Eso' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 3, description: '3º Eso', category: { id: 0, description: 'Eso' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 4, description: '4º Eso', category: { id: 0, description: 'Eso' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 5, description: '1º Bachillerato', category: { id: 1, description: 'Bachillerato' }, subjects: [
      { id: 1, description: 'Matemáticas' },
      { id: 2, description: 'Lengua' },
      { id: 3, description: 'Inglés' },
      { id: 4, description: 'Física' },
      { id: 5, description: 'Química' }
    ]
  },
  {
    id: 6, description: '2º Bachillerato', category: { id: 1, description: 'Bachillerato' }, subjects: [
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

  getAll(): Record<string, Course[]> {
    return courses.reduce((acc, course) => {
      const key = course.category.description;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(course);
      return acc;
    }, {} as Record<string, Course[]>);
  }
}
