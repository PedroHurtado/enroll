//https://www.educaweb.com/contenidos/educativos/sistema-educativo/conoce-cuales-son-niveles-educativos-espana/#eso

export interface Course {
  id: number;
  description: string;
  category: Category;
  subjects: Subjects[];
}

export interface Category {
  id: number;
  description: string;
}

export interface Subjects{
  id: number;
  description: string;
}
