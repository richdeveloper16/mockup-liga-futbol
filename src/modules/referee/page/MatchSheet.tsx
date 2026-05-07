
import { Target, Timer, Save } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const MatchSheet = () => {
  return (
       <DashboardLayout>
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      {/* Marcador En Vivo */}
      <div className="bg-gradient-to-b from-slate-900 to-black border border-white/10 rounded-[2.5rem] p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div>
            <h3 className="text-4xl font-black text-white italic">2</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Titanes</p>
          </div>
          <div className="flex flex-col items-center">
            <Timer className="h-5 w-5 text-emerald-400 animate-pulse mb-1" />
            <span className="text-2xl font-black text-white italic">64'</span>
            <span className="text-[8px] text-emerald-500 font-black uppercase">2do Tiempo</span>
          </div>
          <div>
            <h3 className="text-4xl font-black text-white italic">1</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Dragones</p>
          </div>
        </div>
      </div>

      {/* Controles Rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Local', 'Visitante'].map((team) => (
          <div key={team} className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h4 className="text-sm font-black text-white italic uppercase mb-4 tracking-tighter">Acciones {team}</h4>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl hover:bg-emerald-500/20 transition-all">
                <Target className="h-6 w-6 text-emerald-400" />
                <span className="text-[9px] font-black text-white uppercase">Gol</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl hover:bg-yellow-500/20">
                <div className="w-4 h-6 bg-yellow-500 rounded-sm"></div>
                <span className="text-[9px] font-black text-white uppercase">Amonestar</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl hover:bg-red-500/20">
                <div className="w-4 h-6 bg-red-500 rounded-sm"></div>
                <span className="text-[9px] font-black text-white uppercase">Expulsar</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Finalizar */}
      <button className="w-full py-4 bg-white text-black font-black uppercase italic rounded-2xl flex items-center justify-center gap-2 shadow-xl hover:bg-emerald-400 transition-all">
        <Save className="h-5 w-5" />
        Finalizar y Firmar Cédula
      </button>
    </div>
    </DashboardLayout>
  );
};

export default MatchSheet;