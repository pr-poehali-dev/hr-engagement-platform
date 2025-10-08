import { useState } from 'react';
import Landing from '@/components/Landing';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [activeView, setActiveView] = useState<'landing' | 'admin'>('landing');

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
              <span className="text-xl font-bold">Команда+</span>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveView('landing')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeView === 'landing' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveView('admin')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeView === 'admin' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Админ-панель
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeView === 'landing' ? <Landing /> : <Dashboard />}
    </div>
  );
};

export default Index;