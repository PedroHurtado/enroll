import { Descriptor } from '../../domain/levels'
export interface SelectedDescriptor extends Descriptor{
  selected:boolean
}
export interface Level extends SelectedDescriptor {
  courses: SelectedDescriptor[]
}

export interface Publication extends Descriptor {
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
