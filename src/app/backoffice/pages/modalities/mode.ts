export interface Mode {
  id: string;
  name: string;
  courseId?: string;
  common:boolean,
  specific:boolean,
  elective:boolean,
  electiveOne:boolean
}
