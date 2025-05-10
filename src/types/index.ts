export interface Subject {
  id: string;
  name: string;
  difficultyLevel: number; // 1-5
  color: string;
  icon: string;
}

export interface Class {
  id: string;
  subjectId: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  notes?: string;
}

export interface Student {
  id: string;
  name: string;
  avatar?: string;
  subjects: {
    subjectId: string;
    progress: number; // 0-100
  }[];
}