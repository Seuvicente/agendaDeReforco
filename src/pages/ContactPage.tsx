import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Contato</h1>
      <p className="text-gray-600 mb-8">
        Entre em contato conosco para agendar aulas, tirar dúvidas ou obter mais informações sobre nossos serviços de reforço escolar.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Informações de Contato</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Telefone</h3>
                  <p className="text-gray-600">(11) 98765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">contato@reforcoplus.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Endereço</h3>
                  <p className="text-gray-600">Rua das Flores, 123</p>
                  <p className="text-gray-600">São Paulo - SP</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <Clock className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
                  <p className="text-gray-600">Sábado: 9h às 15h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
            <p className="text-gray-600 mb-3">
              O ReforçoPlus foi criado para oferecer suporte educacional personalizado que realmente faz a diferença no aprendizado dos alunos.
            </p>
            <p className="text-gray-600">
              Nossa equipe de professores qualificados está comprometida em identificar as dificuldades individuais e desenvolver estratégias eficazes para superá-las.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;