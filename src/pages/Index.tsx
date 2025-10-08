import { useState } from 'react';
import Landing from '@/components/Landing';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [activeView, setActiveView] = useState<'landing' | 'admin'>('landing');

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold tracking-tight">HR ENGAGEMENT PLATFORM</div>
            <div className="flex gap-8">
              <button
                onClick={() => setActiveView('landing')}
                className={`text-sm font-medium transition-colors ${
                  activeView === 'landing' ? 'text-black' : 'text-gray-400'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveView('admin')}
                className={`text-sm font-medium transition-colors ${
                  activeView === 'admin' ? 'text-black' : 'text-gray-400'
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
