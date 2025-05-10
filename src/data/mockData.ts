import { Subject, Class, Student } from '../types';
import { BookOpen, Code, FlaskRound as Flask, PiSquare, GraduationCap, Telescope } from 'lucide-react';

export const subjects: Subject[] = [
  {
    id: '1',
    name: 'Matemática',
    difficultyLevel: 4,
    color: '#FFC107',
    icon: 'PiSquare',
  },
  {
    id: '2',
    name: 'Português',
    difficultyLevel: 2,
    color: '#4CAF50',
    icon: 'BookOpen',
  },
  {
    id: '3',
    name: 'Ciências',
    difficultyLevel: 3,
    color: '#2196F3',
    icon: 'Flask',
  },
  {
    id: '4',
    name: 'Programação',
    difficultyLevel: 5,
    color: '#9C27B0',
    icon: 'Code',
  },
  {
    id: '5',
    name: 'História',
    difficultyLevel: 2,
    color: '#FF5722',
    icon: 'GraduationCap',
  },
  {
    id: '6',
    name: 'Física',
    difficultyLevel: 4,
    color: '#795548',
    icon: 'Telescope',
  },
];

export const classes: Class[] = [
  {
    id: '1',
    subjectId: '1',
    title: 'Equações de 2º Grau',
    date: '2025-03-15',
    startTime: '14:00',
    endTime: '15:30',
    notes: 'Trazer exercícios da página 45',
  },
  {
    id: '2',
    subjectId: '3',
    title: 'Sistema Solar',
    date: '2025-03-15',
    startTime: '16:00',
    endTime: '17:30',
  },
  {
    id: '3',
    subjectId: '2',
    title: 'Interpretação de Texto',
    date: '2025-03-16',
    startTime: '10:00',
    endTime: '11:30',
  },
  {
    id: '4',
    subjectId: '4',
    title: 'Algoritmos Básicos',
    date: '2025-03-17',
    startTime: '14:00',
    endTime: '16:00',
    notes: 'Trazer laptop',
  },
  {
    id: '5',
    subjectId: '1',
    title: 'Geometria',
    date: '2025-03-18',
    startTime: '15:00',
    endTime: '16:30',
  },
  {
    id: '6',
    subjectId: '5',
    title: 'Revolução Francesa',
    date: '2025-03-19',
    startTime: '14:00',
    endTime: '15:30',
  },
  {
    id: '7',
    subjectId: '6',
    title: 'Leis de Newton',
    date: '2025-03-20',
    startTime: '16:00',
    endTime: '17:30',
  },
];

export const student: Student = {
  id: '1',
  name: 'Ana Silva',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  subjects: [
    {
      subjectId: '1',
      progress: 65,
    },
    {
      subjectId: '2',
      progress: 85,
    },
    {
      subjectId: '3',
      progress: 72,
    },
    {
      subjectId: '4',
      progress: 45,
    },
    {
      subjectId: '5',
      progress: 90,
    },
    {
      subjectId: '6',
      progress: 60,
    },
  ],
};

export const getSubjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'PiSquare':
      return PiSquare;
    case 'BookOpen':
      return BookOpen;
    case 'Flask':
      return Flask;
    case 'Code':
      return Code;
    case 'GraduationCap':
      return GraduationCap;
    case 'Telescope':
      return Telescope;
    default:
      return BookOpen;
  }
};