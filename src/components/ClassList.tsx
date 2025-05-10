import React from 'react';
import { Clock, Calendar as CalendarIcon, BookOpen } from 'lucide-react';
import { Class } from '../types';
import { subjects } from '../data/mockData';

interface ClassListProps {
  classes: Class[];
  limit?: number;
}

const ClassList: React.FC<ClassListProps> = ({ classes, limit }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
  };
  
  const getSubjectName = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    return subject?.name || 'Matéria não encontrada';
  };
  
  const getSubjectColor = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    return subject?.color || '#6366F1';
  };
  
  const sortedClasses = [...classes].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.startTime}`);
    const dateB = new Date(`${b.date}T${b.startTime}`);
    return dateA.getTime() - dateB.getTime();
  });
  
  const displayClasses = limit ? sortedClasses.slice(0, limit) : sortedClasses;
  
  return (
    <div className="space-y-4">
      {displayClasses.map((cls) => (
        <div 
          key={cls.id} 
          className="bg-white rounded-lg shadow-md p-4 border-l-4 transition-transform hover:scale-102"
          style={{ borderLeftColor: getSubjectColor(cls.subjectId) }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold">{cls.title}</h3>
            <div className="text-sm text-gray-500 flex items-center mt-1 sm:mt-0">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{getSubjectName(cls.subjectId)}</span>
            </div>
          </div>
          
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center text-gray-600">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span className="text-sm capitalize">{formatDate(cls.date)}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{cls.startTime} - {cls.endTime}</span>
            </div>
          </div>
          
          {cls.notes && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">{cls.notes}</p>
            </div>
          )}
        </div>
      ))}
      
      {displayClasses.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Não há aulas agendadas no momento.</p>
        </div>
      )}
    </div>
  );
};

export default ClassList;