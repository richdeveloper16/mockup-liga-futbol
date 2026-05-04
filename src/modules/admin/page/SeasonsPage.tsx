import React from 'react';
import { Calendar, Plus, Trophy, ChevronRight, Clock } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Link } from 'react-router-dom'; 

const SeasonsPage = () => {
  const seasons = [
    { name: 'Clausura 2026', status: 'Activa', teams: 18, start: '15 Ene', end: '30 Jun' },
    { name: 'Apertura 2025', status: 'Finalizada', teams: 20, start: '15 Jul', end: '15 Dic' },
    { name: 'Copa Verano 2026', status: 'Próxima', teams: 12, start: '01 Jul', end: '15 Ago' },
  ];

  return (
         <DashboardLayout>
    <div className="p-8 space-y-8 bg-[#020617] min-h-screen bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <div>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Temporadas</h2>
          <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Cronología de la liga</p>
        </div>
         <Link 
               to="/admin/register-season" 
               className="px-6 py-2.5 bg-emerald-500 text-black rounded-xl text-[10px] font-black uppercase italic hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 group"
             >
          <Plus className="h-4 w-4" /> Crear Temporada
      </Link>
      </div>

      <div className="grid gap-6">
        {seasons.map((s) => (
          <div key={s.name} className="group bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-8 flex items-center gap-8 hover:border-emerald-500/30 transition-all">
            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${s.status === 'Activa' ? 'bg-emerald-500 text-black' : 'bg-white/5 text-slate-500'}`}>
              <Trophy className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className={`text-[9px] font-black uppercase italic px-2 py-0.5 rounded ${s.status === 'Activa' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-400'}`}>
                  {s.status}
                </span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{s.teams} Equipos</span>
              </div>
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tight group-hover:text-emerald-400 transition-colors">{s.name}</h3>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[10px] text-slate-500 font-black uppercase italic mb-1">Periodo</p>
              <p className="text-white font-bold italic text-sm">{s.start} - {s.end}</p>
            </div>
            <button className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
    </DashboardLayout>
  );
};

export default SeasonsPage;