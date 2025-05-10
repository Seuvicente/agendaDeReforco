import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Class, Subject } from '../types';
import { subjects } from '../data/mockData';

interface CalendarProps {
  classes: Class[];
}

const Calendar: React.FC<CalendarProps> = ({ classes }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };
  
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  
  const getClassesForDay = (day: number): Class[] => {
    const dateStr = formatDate(new Date(year, month, day));
    return classes.filter(cls => cls.date === dateStr);
  };
  
  const getSubjectById = (id: string): Subject | undefined => {
    return subjects.find(subject => subject.id === id);
  };
  
  const renderCalendarDays = () => {
    const days = [];
    const today = new Date();
    const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 border border-gray-200 p-1"></div>
      );
    }
    
    // Add cells for days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayClasses = getClassesForDay(day);
      const isToday = isCurrentMonth && today.getDate() === day;
      
      days.push(
        <div 
          key={day} 
          className={`h-24 border border-gray-200 p-1 relative ${isToday ? 'bg-indigo-50' : ''}`}
        >
          <div className={`text-sm mb-1 ${isToday ? 'font-bold text-indigo-600' : ''}`}>
            {day}
          </div>
          <div className="overflow-y-auto max-h-[calc(100%-20px)]">
            {dayClasses.map(cls => {
              const subject = getSubjectById(cls.subjectId);
              return (
                <div 
                  key={cls.id} 
                  className="text-xs p-1 mb-1 rounded truncate"
                  style={{ backgroundColor: `${subject?.color}20`, color: subject?.color }}
                >
                  {cls.startTime} - {cls.title}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 flex justify-between items-center bg-indigo-600 text-white">
        <button 
          onClick={goToPreviousMonth}
          className="p-1 rounded-full hover:bg-indigo-500 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold">
          {monthNames[month]} {year}
        </h2>
        <button 
          onClick={goToNextMonth}
          className="p-1 rounded-full hover:bg-indigo-500 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-7">
        {dayNames.map(day => (
          <div key={day} className="py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;