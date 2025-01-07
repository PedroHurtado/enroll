export interface Descriptor {
  id: string,
  name: string
}
export interface Level extends Descriptor {
  courses: Course[]
}
export interface Course extends Descriptor {
  subjects: Subject[],
  modalities: Mode[],
}
export interface Subject extends Descriptor {
  type: string,
  multiple: boolean,
  limit: number,
  defaultSubject: any
  subjects: Descriptor[]
}
export interface Mode extends Descriptor {
  subjects: Subject[]
}
export class LevelDomain {
  protected _courses: CourseDomain[] = []
  protected _id: string
  protected _name: string
  private constructor({ id, name }: { id: string; name: string }) {
    this._id = id
    this._name = name
  }
  update(name: string) {
    this._name = name
  }
  addCourse(course: CourseDomain) {
    Utils.builder(this._courses).add(course)
  }
  removeCourse(course: CourseDomain) {
    Utils.builder(this._courses).remove(course)
  }
  updateCourse(course: CourseDomain) {
    const updateCourse = Utils.builder(this._courses).get(course)
    if (updateCourse) {
      updateCourse.update(course.name)
    }
  }
  get courses(): CourseDomain[] {
    return this._courses
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

export class CourseDomain {
  protected _id: string
  protected _name: string
  protected _modalities: ModeDomain[] = []
  protected _subjects: SubjectDomain[] = []
  private constructor({ id, name }: { id: string; name: string }) {
    this._id = id
    this._name = name;
  }
  update(name: string) {
    this._name = name
  }
  addMode(mode: ModeDomain) {
    Utils.builder(this._modalities).add(mode);
  }
  updateMode(mode: ModeDomain) {
    const updatedMode = Utils.builder(this._modalities).get(mode)
    if (updatedMode) {
      updatedMode.update(updatedMode.name)
    }
  }
  removeMode(mode: ModeDomain) {
    Utils.builder(this._modalities).add(mode);
  }

  addSubject(subject: SubjectDomain) {
    Utils.builder(this._subjects).add(subject)
  }
  removeSubject(subject: SubjectDomain) {
    Utils.builder(this._subjects).remove(subject)
  }
  updateSubject(subject: SubjectDomain) {
    const updatedSubject = Utils.builder(this._subjects).get(subject)
    if (updatedSubject) {
      updatedSubject.update(subject)

    }
  }
  get subjects(): Subject[] {
    return this._subjects
  }
  get modalities(): Mode[] {
    return this._modalities
  }
  get id(): string {
    return this._id
  }
  get name(): string {
    return this._name
  }
  static create(name: string): CourseDomain {
    const descriptor = createDescriptor(name)
    return new CourseDomain(descriptor)
  }
}

export class ModeDomain {
  protected _subjects: Subject[] = []
  protected _id: string
  protected _name: string
  private constructor({ id, name }: { id: string; name: string }) {
    this._id = id
    this._name = name
  }
  update(name: string) {
    this._name = name
  }
  addSubject(subject: Subject) {
    Utils.builder(this._subjects).add(subject)
  }
  removeSubject(subject: Subject) {
    Utils.builder(this._subjects).remove(subject)

  }
  updateSubject(subject: Subject) {
    const updatedMode = Utils.builder(this._subjects).get(subject)
    if (updatedMode) {
      updatedMode.name = subject.name
    }
  }
  get subjects(): Subject[] {
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

export class SubjectDomain {
  protected _id: string;
  protected _name: string;
  protected _type: string;
  protected _multiple: boolean;
  protected _limit: number;
  protected _defaultSubject: Subject;
  protected _subjects: Descriptor[];

  private constructor({
    id,
    name,
    type,
    multiple,
    limit,
    defaultSubject,
    subjects,
  }: {
    id: string;
    name: string;
    type: string;
    multiple: boolean;
    limit: number;
    defaultSubject: Subject;
    subjects: Descriptor[];
  }) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._multiple = multiple;
    this._limit = limit;
    this._defaultSubject = defaultSubject;
    this._subjects = subjects;
  }

  addSubject(subject: Descriptor) {
    Utils.builder(this._subjects).add(subject)
  }
  removeSubject(subject: Descriptor) {
    Utils.builder(this._subjects).remove(subject)
  }
  updateSubject(subject: Descriptor) {
    const updatedDescriptor = Utils.builder(this._subjects).get(subject)
    if (updatedDescriptor) {
      updatedDescriptor.name = subject.name
    }
  }
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  get multiple(): boolean {
    return this._multiple;
  }

  get limit(): number {
    return this._limit;
  }

  get defaultSubject(): Subject {
    return this._defaultSubject;
  }

  get subjects(): Descriptor[] {
    return [...this._subjects];
  }
  update({
    name,
    type,
    multiple,
    limit,
    defaultSubject,
    subjects,
  }: {
    name: string;
    type: string;
    multiple: boolean;
    limit: number;
    defaultSubject: Subject;
    subjects: Descriptor[];
  }): void {
    this._name = name;
    this._type = type;
    this._multiple = multiple;
    this._limit = limit;
    this._defaultSubject = defaultSubject;
    this._subjects = subjects;
  }
  static create({

    name,
    type,
    multiple,
    limit,
    defaultSubject,
    subjects,
  }: {

    name: string;
    type: string;
    multiple: boolean;
    limit: number;
    defaultSubject: Subject;
    subjects: Descriptor[];
  }): SubjectDomain {
    return new SubjectDomain({
      ...createDescriptor(name),
      type,
      multiple,
      limit,
      defaultSubject,
      subjects,
    });
  }
}



export class Utils<T extends Descriptor> {
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



