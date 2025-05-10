import React from 'react';
import SubjectCard from '../components/SubjectCard';
import { subjects } from '../data/mockData';
import { student } from '../data/mockData';

const SubjectsPage: React.FC = () => {
  const getProgressForSubject = (subjectId: string) => {
    const subjectProgress = student.subjects.find(s => s.subjectId === subjectId);
    return subjectProgress?.progress || 0;
  };
  
  // Sort subjects by difficulty (highest first)
  const sortedSubjects = [...subjects].sort((a, b) => b.difficultyLevel - a.difficultyLevel);
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Matérias</h1>
      <p className="text-gray-600 mb-8">
        Explore todas as matérias disponíveis para reforço escolar, organizadas por nível de dificuldade.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedSubjects.map(subject => (
          <SubjectCard 
            key={subject.id} 
            subject={subject} 
            progress={getProgressForSubject(subject.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectsPage;