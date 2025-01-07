interface Descriptor {
  id: string,
  name: string
}
interface Level extends Descriptor {
  courses: Courses[]
}
interface Subject {
  title: string,
  type: string,
  multiple: boolean,
  limit: number,
  defaultSubject: any
  subjects: Descriptor[]
}
interface Courses extends Descriptor {
  modalities: Modalities[],
  subjects: Subject[]
}
interface Modalities extends Descriptor {
  subjects: Subject[]
}

const level: Level = {
  id: '1',
  name: 'ESO',
  courses: [
    {
      id: '1', name: '1º Eso', modalities: [
        {
          id: '1',
          name: 'Ciencias y tecnología',
          subjects: []
        }
      ],
      subjects: []
    }
  ]
}
const descriptor:Descriptor= level;


