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
    Utils.builder(this._subjects).add(subject)
  }
  removesubject(subject: subject) {
    Utils.builder(this._subjects).remove(subject)
  }
  updatesubject(subject:subject) {
    const updatedsubject = Utils.builder(this._subjects).get(subject)
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

export class SubjectDomain {
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
    Utils.builder(this._modalities).add(mode);
  }
  updateMode(mode: Mode) {
    const updatedMode = Utils.builder(this._modalities).get(mode)
    if (updatedMode) {
      updatedMode.name = mode.name
    }
  }
  removeMode(mode: Mode) {
    Utils.builder(this._modalities).add(mode);
  }
  addSubject(subject:Subject){
    Utils.builder(this._subjects).add(subject)
  }
  removeSubject(subject:Subject){
    Utils.builder(this._subjects).remove(subject)
  }
  updateSubject(subject:Subject){
    const updatedSubject = Utils.builder(this._subjects).get(subject)
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
  static create(name: string): SubjectDomain {
    const descriptor = createDescriptor(name)
    return new SubjectDomain(descriptor)
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
    Utils.builder(this._subjects).add(subject)
  }
  removeSubject(subject: Subject) {
    Utils.builder(this._subjects).remove(subject)

  }
  updateSubject(subject:Subject) {
    const updatedSubject = Utils.builder(this._subjects).get(subject)
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
  protected readonly items: T[] = [];

  constructor(items: T[]) {
    this.items = items;
  }

  add(entity: T): void {
    this.items.push(entity);
  }

  remove(entity: T): void {
    const index = this.getIndex(entity);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  get(entity: T): T | undefined {
    const index = this.getIndex(entity);
    if (index > -1) {
      return this.items[index];
    }
    return undefined;
  }

  private getIndex(entity: T): number {
    return this.items.findIndex(e => e.id === entity.id);
  }

  static builder<T extends Descriptor>(array: T[]): Utils<T> {
    return new Utils<T>(array);
  }
}


function createDescriptor(name: string): Descriptor {
  return {
    id: crypto.randomUUID(),
    name
  }
}



