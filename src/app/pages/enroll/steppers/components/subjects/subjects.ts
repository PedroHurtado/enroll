
export interface Subjects {
  commonSubjects: string[];
  compulsorySubjects: string[];
  specializationSubjects: SpecializationSubjects;
  electives: Electives;
  religion: Religion;
}

export interface SpecializationSubjects {
  type: "selectedlist";
  multiple: boolean;
  limit: number;
  subjects: string[];
}
export interface Electives {
  type: "sortedlist";
  limit: number;
  subjects: string[]
}
export interface Religion {
  type: "selectedlist";
  limit: number;
  multiple: boolean;
  subjects: string[];
  defaultValue: string;
}
