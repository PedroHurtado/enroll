import { Injectable } from '@angular/core';
import { Courses } from './courses';

const courses: Courses[] = []
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  get(){

  }
  add(course: Courses, levelId: string): Courses {
    const newCourse = {
      ...course,
      id:crypto.randomUUID(),
      levelId
    }
    courses.push(newCourse)
    return newCourse
  }
  update(course: Courses){

  }
  remove(course: Courses) {


  }
}
