//https://www.educaweb.com/contenidos/educativos/sistema-educativo/conoce-cuales-son-niveles-educativos-espana/#eso

export interface Course {
  id: number;
  description: string;
}

export interface Level {
  id: number;
  description: string;
  level:number
  course: Course;
  subjects: subjects[];
}

export interface subjects{
  id: number;
  description: string;
}
