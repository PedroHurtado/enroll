interface Descriptor {
  id: string,
  name: string
}
interface Level extends Descriptor {
  courses: Course[]
}
interface Subject {
  title: string,
  type: string,
  multiple: boolean,
  limit: number,
  defaultSubject: any
  subjects: Descriptor[]
}
interface Course extends Descriptor {
  modalities: Mode[],
  subjects: Subject[]
}
interface Mode extends Descriptor {
  subjects: Subject[]
}
class LevelDomain {
  protected _courses: Course[] = []
  protected  _id: string
  protected  _name: string
  private constructor({ id, name }: { id: string; name: string }) {
    this._id = id
    this._name = name
  }
  update({ name }: { name: string }){
    this._name = name
  }
  addCourse(course: Course) {
    this._courses.push(course)
  }
  removeCourse(course: Course) {
    const index = this._courses.findIndex(c => c.id === course.id)
    if (index !== 1) {
      this._courses.splice(index, 1)
    }
  }
  updateCourse({ id, name }: { id: string; name: string }) {
    const index = this._courses.findIndex(c => c.id === id)
    if (index !== 1) {
      const updatedCourse = this._courses[index]
      updatedCourse.name = name
    }
  }
  get courses(): Course[] {
    return [...this._courses]
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

class CourseDomain{
  protected _id: string
  protected _name: string
  protected _modalities:Mode[] =[]
  private constructor({ id, name }: { id: string; name: string }){
    this._id = id
    this._name = name;
  }
  update({ name }: {  name: string }){
    this._name = name
  }
  addMode(mode:Mode){
    this._modalities.push(mode)
  }
  updateMode({ id, name }: { id: string; name: string }){
    const index = this._modalities.findIndex(m=>m.id===id)
    if(index!==-1){
      const updatedMode = this._modalities[index]
      updatedMode.name = name
    }
  }
  removeMode(mode:Mode){
    const index = this._modalities.findIndex(m=>m.id===mode.id)
    if(index!==-1){
      this._modalities.splice(index,1)
    }
  }
  get modalities():Mode[]{
    return [...this._modalities]
  }
  get id(): string {
    return this._id
  }
  get name(): string {
    return this._name
  }
  static create(name:string):CourseDomain{
    const descriptor = createDescriptor(name)
    return new CourseDomain(descriptor)
  }
}
function createDescriptor(name: string): Descriptor {
  return {
    id: crypto.randomUUID(),
    name
  }
}



