import { Injectable } from '@angular/core';
import { CourseDomain, LevelDomain } from '../../domain/levels';



@Injectable({
  providedIn: 'root'
})
export class LevelService {
  protected levels: LevelDomain[] = createFakeLevels()
  constructor() { }
  getAll(): LevelDomain[] {
    return this.levels;
  }
  get(id: string): LevelDomain | undefined {
    return this.levels.find(l => l.id === id)
  }

  add(name: string): LevelDomain {
    const level = LevelDomain.create(name)
    this.levels.push(level)
    return level
  }
  remove(level: LevelDomain) {
    this.levels = this.levels.filter(l => l !== level)
    return this.levels;
  }

}
const createFakeLevels = () => {

  const eso = LevelDomain.create("ESO");
  ["1º", "2º", "3º", "4º"].forEach((grade) => {
    eso.addCourse(CourseDomain.create(`${grade} ESO`));
  });

  const bachiller = LevelDomain.create("Bachillerato");
  ["1º Bachiller", "2º Bachiller"].forEach((grade) => {
    bachiller.addCourse(CourseDomain.create(grade));
  });
  return [eso,bachiller]
};
