import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import ClassList from '../components/ClassList';
import { classes } from '../data/mockData';
import { Calendar as CalendarIcon, List } from 'lucide-react';

const SchedulePage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Agenda de Aulas</h1>
        
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setViewMode('calendar')}
            className={`px-4 py-2 rounded-md flex items-center ${
              viewMode === 'calendar' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>Calendário</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-md flex items-center ${
              viewMode === 'list' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <List className="w-4 h-4 mr-2" />
            <span>Lista</span>
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 mb-8">
        Visualize todas as aulas agendadas, organize seu tempo e prepare-se para cada sessão de reforço.
      </p>
      
      {viewMode === 'calendar' ? (
        <Calendar classes={classes} />
      ) : (
        <ClassList classes={classes} />
      )}
    </div>
  );
};

export default SchedulePage;