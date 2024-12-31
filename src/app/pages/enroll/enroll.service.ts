import { Injectable } from '@angular/core';
import { Enroll } from './enroll';

const registrations: Enroll[] = [
  { id: 1, studentId: 1, studentName: 'John Doe', courseId: 1, courseName: 'Angular', start: 2021, end: 2022, status:'open' },
  { id: 2, studentId: 2, studentName: 'Jane Doe', courseId: 2, courseName: 'React', start: 2021, end: 2022, status:'open' },
  { id: 3, studentId: 3, studentName: 'Sam Doe', courseId: 3, courseName: 'Vue', start: 2021, end: 2022, status:'closed' },
  { id: 4, studentId: 4, studentName: 'Sara Doe', courseId: 4, courseName: 'Node', start: 2021, end: 2022,status:'closed'},
  { id: 5, studentId: 5, studentName: 'Tom Doe', courseId: 5, courseName: 'MongoDB', start: 2022, end: 2023,status:'closed' },
]

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }
  getAll(): Record<string, Enroll[]> {
    return registrations.reduce((acc, enroll) => {
      const key = `${enroll.start}-${enroll.end}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(enroll);
      return acc;
    }, {} as Record<string, Enroll[]>);
  }
}
