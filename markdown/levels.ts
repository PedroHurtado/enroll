export interface Descriptor {
  id: string,
  name: string
}
export  interface Level extends Descriptor {
  subjects: subject[]
}
export interface Subject extends Descriptor {
  type: string,
  multiple: boolean,
  limit: number,
  defaultSubject: any
  subjects: Descriptor[]
}
export interface subject extends Descriptor {
  modalities: Mode[],
  subjects: Subject[]
}
export interface Mode extends Descriptor {
  subjects: Subject[]
}
export class LevelDomain {
  protected _subjects: subject[] = []
  protected _id: string
  protected _name: string
  private constructor({ id, name }: { id: string; name: string }) {
    this._id = id
    this._name = name
  }
  update({ name }: { name: string }) {
    this._name = name
  }
  addsubject(subject: subject) {
    Utils.add(this.subjects,subject)
  }
  removesubject(subject: subject) {
    Utils.remove(this.subjects,subject)
  }
  updatesubject(subject:subject) {
    const updatedsubject = Utils.get(this.subjects,subject)
    if(updatedsubject){
      updatedsubject.name = subject.name
    }
  }
  get subjects(): subject[] {
    return [...this.subjects]
  }
  get id(): string {
    return this._id
  }
  get name(): string {
    return this._name
  }
  static create(name: string): LevelDomain {
    const descriptor = createDescriptor(name)
    return new LevelDomain(descriptor)
  }

}

export class subjectDomain {
  protected _id: string
  protected _name: string
  protected _modalities: Mode[] = []
  protected _subjects: Subject[] = []
  private constructor({ id, name }: { id: string; name: string }) {
    this._id = id
    this._name = name;
  }
  update({ name }: { name: string }) {
    this._name = name
  }
  addMode(mode: Mode) {
    Utils.add(this._modalities, mode);
  }
  updateMode(mode: Mode) {
    const updatedMode = Utils.get(this._modalities, mode)
    if (updatedMode) {
      updatedMode.name = mode.name
    }
  }
  removeMode(mode: Mode) {
    Utils.add(this._modalities, mode);
  }
  addSubject(subject:Subject){
    Utils.add(this._subjects,subject)
  }
  removeSubject(subject:Subject){
    Utils.remove(this._subjects, subject)
  }
  updateSubject(subject:Subject){
    const updatedSubject = Utils.get(this._subjects,subject)
    if(updatedSubject){
      updatedSubject.name = subject.name
      updatedSubject.defaultSubject = subject.defaultSubject
      updatedSubject.limit =subject.limit
      updatedSubject.multiple = subject.multiple
      updatedSubject.type = subject.type
      updatedSubject.subjects = [...subject.subjects]
    }
  }
  get modalities(): Mode[] {
    return [...this._modalities]
  }
  get id(): string {
    return this._id
  }
  get name(): string {
    return this._name
  }
  static create(name: string): subjectDomain {
    const descriptor = createDescriptor(name)
    return new subjectDomain(descriptor)
  }
}

export class ModeDomain{
  protected _subjects: Subject[] = []
  protected _id: string
  protected _name: string
  private constructor({ id, name }: { id: string; name: string }) {
    this._id = id
    this._name = name
  }
  update({ name }: { name: string }) {
    this._name = name
  }
  addSubject(subject: Subject) {
    Utils.add(this._subjects,subject)
  }
  removeSubject(subject: Subject) {
    Utils.remove(this._subjects,subject)
  }
  updateSubject(subject:Subject) {
    const updatedSubject = Utils.get(this._subjects, subject)
    if(updatedSubject){
      updatedSubject.name = subject.name
      updatedSubject.defaultSubject = subject.defaultSubject
      updatedSubject.limit =subject.limit
      updatedSubject.multiple = subject.multiple
      updatedSubject.type = subject.type
      updatedSubject.subjects = [...subject.subjects]
    }
  }
  get subjects(): subject[] {
    return [...this.subjects]
  }
  get id(): string {
    return this._id
  }
  get name(): string {
    return this._name
  }
  static create(name: string): ModeDomain {
    const descriptor = createDescriptor(name)
    return new ModeDomain(descriptor)
  }
}

class Utils<T extends Descriptor> {
  static add<T extends Descriptor>(array: T[], entity: T): void {
    array.push(entity);
  }

  static remove<T extends Descriptor>(array: T[], entity: T): void {
    const index = this.getIndex(array, entity);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  static get<T extends Descriptor>(array: T[], entity: T): T | undefined {
    const index = this.getIndex(array, entity);
    if (index > -1) {
      return array[index];
    }
    return undefined;
  }

  private static getIndex<T extends Descriptor>(array: T[], entity: T): number {
    return array.findIndex(e => e.id === entity.id);
  }
}

function createDescriptor(name: string): Descriptor {
  return {
    id: crypto.randomUUID(),
    name
  }
}



