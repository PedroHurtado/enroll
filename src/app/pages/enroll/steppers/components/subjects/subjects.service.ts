import { Injectable } from '@angular/core';
import { Subjects } from './subjects';

const subjects: Subjects = {
  commonSubjects: [
    "Lengua Castellana y Literatura I",
    "Primera Lengua Extranjera Inglés I",
    "Filosofía",
    "Educación Física",
    "Metodología de la Investigación I"
  ],
  compulsorySubjects: ["Matemáticas I"],
  specializationSubjects: {
    type: "selectedlist",
    multiple: true,
    limit: 2,
    subjects: [
      "Física y Química",
      "Biología, Geología y Ambientales",
      "Dibujo Técnico",
      "Tecnología e Ingeniería"
    ]
  },
  electives: {
    type: "sortedlist",
    limit: 6,
    subjects: [

        "Segunda Lengua Extranjera FRANCÉS I",
        "Segunda Lengua Extranjera ITALIANO I",
        "Cultura Audiovisual",
        "Lenguaje y Práctica Musical",
        "Tecnología e Ingeniería I",
        "Dibujo Técnico I",
        "Biología, Geología y Ciencias Ambientales",
        "Física y Química",
        "Economía",
        "Historia del Mundo Contemporáneo",
        "Dibujo Técnico Aplicado a las Artes Plásticas y al Diseño I"

    ]
  },
  religion: {
    type: "selectedlist",
    multiple: false,
    subjects: [
      "ATENCIÓN EDUCATIVA",
      "Religión CATÓLICA",
      "Religión EVANGÉLICA",
      "Religión ISLÁMICA"
    ],
    defaultValue: "ATENCIÓN EDUCATIVA"
  }
};


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }
  getAll(): Subjects {
    return subjects;
  }
}
