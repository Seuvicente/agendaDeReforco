import React from 'react';
import { Link } from '../components/ui/Link';
import { Calendar as CalendarIcon, BookOpen, Award, Clock } from 'lucide-react';
import { classes, student, subjects } from '../data/mockData';
import ClassList from '../components/ClassList';
import ProgressChart from '../components/ProgressChart';

const HomePage: React.FC = () => {
  // Get upcoming classes (next 3)
  const today = new Date();
  const upcomingClasses = classes
    .filter(cls => {
      const classDate = new Date(cls.date);
      return classDate >= today;
    })
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.startTime}`);
      const dateB = new Date(`${b.date}T${b.startTime}`);
      return dateA.getTime() - dateB.getTime();
    })
    .slice(0, 3);
  
  return (
    <div className="space-y-10">
      {/* Hero section */}
      <section className="bg-indigo-600 text-white rounded-2xl overflow-hidden">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Reforço escolar personalizado para seu sucesso acadêmico
            </h1>
            <p className="text-indigo-100 mb-8 text-lg">
              Oferecemos aulas de reforço personalizadas para ajudar estudantes a superarem suas dificuldades e alcançarem seu potencial pleno.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/schedule" 
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Ver agenda
              </Link>
              <Link 
                to="/contact" 
                className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors"
              >
                Agendar aula
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <CalendarIcon className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-xl">+200</h3>
            <p className="text-gray-600">Aulas realizadas</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-green-100 p-3 rounded-full">
            <BookOpen className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-xl">6</h3>
            <p className="text-gray-600">Matérias disponíveis</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-amber-100 p-3 rounded-full">
            <Award className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="font-semibold text-xl">90%</h3>
            <p className="text-gray-600">Taxa de aprovação</p>
          </div>
        </div>
      </section>
      
      {/* Two columns section */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Próximas Aulas</h2>
            <Link to="/schedule" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              <span>Ver todas</span>
              <Clock className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <ClassList classes={upcomingClasses} />
        </div>
        
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Acompanhamento</h2>
          </div>
          <ProgressChart subjects={subjects} progress={student.subjects} />
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pronto para melhorar seu desempenho escolar?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Entre em contato conosco agora para agendar uma aula experimental e descobrir como podemos ajudar você a alcançar seus objetivos acadêmicos.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Agendar aula experimental
        </Link>
      </section>
    </div>
  );
};

export default HomePage;