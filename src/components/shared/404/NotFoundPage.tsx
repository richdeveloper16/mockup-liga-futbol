 
import { Link } from 'react-router-dom';
import { Trophy, ArrowLeft, Ghost, Search } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const NotFoundPage = () => {
  return (
    
     <DashboardLayout>
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Icono Principal con Efecto Glitch/Glow */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 animate-pulse"></div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[3rem] relative">
            <Search className="h-24 w-24 text-emerald-400 opacity-80" />
            <div className="absolute -bottom-2 -right-2 bg-red-500 p-3 rounded-2xl shadow-lg rotate-12">
              <Ghost className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Texto de Error */}
        <div className="space-y-4">
          <h1 className="text-9xl font-black text-white/10 tracking-tighter absolute inset-x-0 -top-20 pointer-events-none select-none">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tight uppercase leading-none">
            Fuera de <span className="text-emerald-400">Lugar</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto font-medium">
            Parece que la página que buscas recibió una tarjeta roja o simplemente no está en la alineación.
          </p>
        </div>

        {/* Acciones */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-sm transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95 shadow-xl"
          >
            <ArrowLeft className="h-4 w-4" />
            REGRESAR AL INICIO
          </Link>
          
          <Link 
            to="/soporte" 
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all hover:bg-white/10 backdrop-blur-sm"
          >
            REPORTAR PROBLEMA
          </Link>
        </div>

        {/* Footer del 404 */}
        <div className="mt-16 flex items-center justify-center gap-2 opacity-30">
          <Trophy className="h-4 w-4 text-slate-500" />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
            Liga Master Management © 2026
          </span>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default NotFoundPage;