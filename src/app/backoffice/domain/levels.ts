export interface Descriptor {
  id: string,
  name: string
}
export interface DescriptorParams extends Descriptor {
  params: any[]
  subjects: SubjectDomain[]
}
export interface DefaultSubject {
  name: string,
  type: string;
  multiple: boolean;
  limit: number;
  defaultSubject?: DescriptorDomain
}
export interface IActionSubject {
  addSubject(subject: SubjectDomain): void;
  removeSubject(subject: SubjectDomain): void;
  getSubjectById(id:string): SubjectDomain | undefined
}
export interface ISubjectDomain extends Descriptor {
  id: string;
  name: string;
  type: string;
  multiple: boolean;
  limit: number;
  defaultSubject: DescriptorDomain | null | undefined;
  subjects: DescriptorDomain[];

  addSubject(subject: Descriptor): void;
  removeSubject(subject: Descriptor): void;
  updateSubject(subject: Descriptor): void;
  updateName(name: string): void;
  update({
    name,
    type,
    multiple,
    limit,
    defaultSubject,
  }: {
    name: string;
    type: string;
    multiple: boolean;
    limit: number;
    defaultSubject?: DescriptorDomain;
  }): void;
}

export const defaultSubject: DefaultSubject = {
  name: '',
  type: "all",
  multiple: false,
  limit: 0,
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

export class CourseDomain implements IActionSubject {
  protected _id: string
  protected _name: string
  protected _modalities: ModeDomain[] = []
  protected _subjects: SubjectDomain[] = []
  private constructor({ id, name }: { id: string; name: string }) {
    this._id = id
    this._name = name;
  }
  getSubjectById(id: string): SubjectDomain | undefined {
    return Utils.builder(this._subjects).getById(id)
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
    Utils.builder(this._modalities).remove(mode);
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
  get subjects(): SubjectDomain[] {
    return this._subjects
  }
  get modalities(): ModeDomain[] {
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

export class ModeDomain implements IActionSubject {
  protected _subjects: SubjectDomain[] = []
  protected _id: string
  protected _name: string
  private constructor({ id, name }: { id: string; name: string }) {
    this._id = id
    this._name = name
  }
  getSubjectById(id: string): SubjectDomain | undefined {
    return Utils.builder(this._subjects).getById(id)
  }

  update(name: string) {
    this._name = name
  }
  addSubject(subject: SubjectDomain) {
    Utils.builder(this._subjects).add(subject)
  }
  removeSubject(subject: SubjectDomain) {
    Utils.builder(this._subjects).remove(subject)

  }
  updateSubject(subject: SubjectDomain) {
    const updatedMode = Utils.builder(this._subjects).get(subject)
    if (updatedMode) {
      updatedMode.update(subject)
    }
  }
  get subjects(): SubjectDomain[] {
    return this._subjects
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

export class SubjectDomain implements ISubjectDomain {
  protected _id: string;
  protected _name: string;
  protected _type: string;
  protected _multiple: boolean;
  protected _limit: number;
  protected _defaultSubject?: DescriptorDomain;
  protected _subjects: DescriptorDomain[] = [];

  private constructor({
    id,
    name,
    type,
    multiple,
    limit,
    defaultSubject,
  }: {
    id: string;
    name: string;
    type: string;
    multiple: boolean;
    limit: number;
    defaultSubject?: DescriptorDomain;
  }) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._multiple = multiple;
    this._limit = limit;
    this._defaultSubject = defaultSubject;
  }

  addSubject(subject: DescriptorDomain) {
    Utils.builder(this._subjects).add(subject)
  }
  removeSubject(subject: DescriptorDomain) {
    Utils.builder(this._subjects).remove(subject)
  }
  updateSubject(subject: DescriptorDomain) {
    const updatedDescriptor = Utils.builder(this._subjects).get(subject)
    if (updatedDescriptor) {
      updatedDescriptor.update(subject.name)
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

  get defaultSubject(): DescriptorDomain | undefined {
    return this._defaultSubject;
  }

  get subjects(): DescriptorDomain[] {
    return this._subjects;
  }
  updateName(name: string) {
    this._name = name;
  }

  update({
    name,
    type,
    multiple,
    limit,
    defaultSubject,

  }: {
    name: string;
    type: string;
    multiple: boolean;
    limit: number;
    defaultSubject?: DescriptorDomain;

  }): void {
    this._name = name;
    this._type = type;
    this._multiple = multiple;
    this._limit = limit;
    this._defaultSubject = defaultSubject;
  }
  static create(name: string): SubjectDomain {
    return new SubjectDomain(
      {
        ...defaultSubject,
        ...createDescriptor(name),
      }
    );
  }
}


export class DescriptorDomain implements Descriptor {
  private _id: string;
  private _name: string
  protected constructor(
    { id, name }: { id: string; name: string }
  ) {
    this._id = id;
    this._name = name
  }
  update(name: string) {
    this._name = name
  }
  public get id(): string {
    return this._id
  }
  public get name(): string {
    return this._name
  }
  static create(name: string): DescriptorDomain {
    const descriptor = createDescriptor(name)
    return new DescriptorDomain(descriptor)
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
  getById(id: string): T | undefined {
    return this.items.find(i => i.id === id)
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



