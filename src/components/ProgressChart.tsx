import React from 'react';
import { Subject } from '../types';

interface ProgressChartProps {
  subjects: Subject[];
  progress: { subjectId: string; progress: number }[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ subjects, progress }) => {
  const sortedByDifficulty = [...subjects].sort((a, b) => b.difficultyLevel - a.difficultyLevel);
  const top3Difficult = sortedByDifficulty.slice(0, 3);
  
  const getProgressForSubject = (subjectId: string) => {
    const found = progress.find(p => p.subjectId === subjectId);
    return found?.progress || 0;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Matérias com Maior Dificuldade</h3>
      
      <div className="space-y-5">
        {top3Difficult.map(subject => {
          const progressValue = getProgressForSubject(subject.id);
          
          return (
            <div key={subject.id}>
              <div className="flex justify-between items-center mb-1">
                <div>
                  <span className="font-medium text-gray-700">{subject.name}</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Dificuldade: {subject.difficultyLevel}/5
                  </span>
                </div>
                <span className="text-sm font-medium">{progressValue}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progressValue}%`,
                    backgroundColor: subject.color
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Estas são as matérias que precisam de mais atenção baseado na sua dificuldade e progresso atual.
        </p>
      </div>
    </div>
  );
};

export default ProgressChart;