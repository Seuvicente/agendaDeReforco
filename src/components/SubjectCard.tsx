import React from 'react';
import { Subject } from '../types';
import { getSubjectIcon } from '../data/mockData';

interface SubjectCardProps {
  subject: Subject;
  progress?: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, progress }) => {
  const IconComponent = getSubjectIcon(subject.icon);
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border-l-4"
      style={{ borderLeftColor: subject.color }}
    >
      <div className="p-5">
        <div className="flex items-center space-x-3">
          <div 
            className="w-10 h-10 rounded-md flex items-center justify-center"
            style={{ backgroundColor: `${subject.color}20` }}
          >
            <IconComponent className="w-6 h-6" style={{ color: subject.color }} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{subject.name}</h3>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">Nível de dificuldade</span>
            <span className="text-sm font-medium">{subject.difficultyLevel}/5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full" 
              style={{ 
                width: `${(subject.difficultyLevel / 5) * 100}%`,
                backgroundColor: subject.color
              }}
            ></div>
          </div>
        </div>
        
        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Seu progresso</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-green-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectCard;