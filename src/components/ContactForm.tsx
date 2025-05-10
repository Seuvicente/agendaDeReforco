import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Entre em Contato</h2>
      
      {formStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
          Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Matéria de interesse
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Selecione uma matéria</option>
              <option value="matematica">Matemática</option>
              <option value="portugues">Português</option>
              <option value="ciencias">Ciências</option>
              <option value="historia">História</option>
              <option value="fisica">Física</option>
              <option value="programacao">Programação</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:bg-indigo-400"
          >
            {formStatus === 'submitting' ? (
              <>Enviando...</>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar mensagem
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;