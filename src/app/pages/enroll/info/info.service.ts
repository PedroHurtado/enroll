import { Injectable } from '@angular/core';
import { Info } from './info';

const info: Info[] = [
  {
    description: "datos del alumno",
    texts: [
      "Foto del DNI por ambas caras",
      "Foto de la tarjeta sanitaria por ambas caras",
      "Si procede, foto tamaño carnet del alumno",
      "Si procede, expediente académico de un centro privado o de otra comunidad"
    ]
  },
  {
    description: "situacion familiar",
    texts: [
      "Documentos que la acreditan (libro de familia, sentencias judiciales, etc.)"
    ]
  },
  {
    description: "madre/padre/tutor",
    texts: [
      "Foto del DNI por ambas caras"
    ]
  },
  {
    description: "otros",
    texts: [
      "Resguardo del pago del seguro escolar",
      "Resguardo del pago del AMPA y solicitud (si procede)",
      "Si necesita transporte escolar, solicitud de transporte"
    ]
  },
  {
    description: "datos médicos",
    texts: [
      "En el caso de padecer cualquier enfermedad, certificados médicos"
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
  getAll(): Info[] {
    return info;
  }
}
