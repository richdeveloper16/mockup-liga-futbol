import React from 'react';
import Sidebar from './Sidebar';
import { Bell, Search, User } from 'lucide-react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] flex">
      {/* Sidebar Fijo */}
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar Superior con efecto Glass */}
        <header className="h-16 border-b border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-96">
            <Search className="h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar jugadores, equipos o jornadas..." 
              className="bg-transparent border-none focus:ring-0 text-sm text-white w-full ml-2 placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#0f172a]"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 flex items-center justify-center border border-white/20">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </header>

        {/* Área de Scroll del Contenido */}
        <main className="p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;