import { Descriptor } from '../../domain/levels'
export interface Level extends Descriptor {
  courses: Descriptor[]
}

export interface Publication extends Descriptor {
  id: string,

  start: Date,
  end: Date,
  levels: Level[]
}
export function createPublicacion(
  { name, start, end, levels }: {
    name: string,
    start: Date
    end: Date
    levels: Level[]
  }
): Publication {
  const id = crypto.randomUUID()
  return {
    id, name, start, end, levels
  }
}
