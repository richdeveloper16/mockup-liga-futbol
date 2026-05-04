import React from 'react';
import { Megaphone, Calendar, ChevronRight, Bell, Search } from 'lucide-react';

const AnnouncementsPage = () => {
  const news = [
    { 
      id: 1, 
      tag: 'Oficial', 
      title: 'Apertura de Inscripciones Temporada 2026', 
      date: '28 Abr 2026', 
      preview: 'Se informa a todos los delegados que el proceso de registro para el torneo de clausura comenzará el próximo lunes...', 
      priority: 'high' 
    },
    { 
      id: 2, 
      tag: 'Disciplina', 
      title: 'Reporte de Sanciones - Jornada 12', 
      date: '26 Abr 2026', 
      preview: 'La comisión disciplinaria ha publicado el listado de jugadores inhabilitados para la siguiente fecha por acumulación...', 
      priority: 'normal' 
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed p-8 space-y-8">
      {/* Header con estilo SISTEMA-GAEC/NutriCloud */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">Comunicados</h2>
          <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Avisos oficiales de la liga</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-black uppercase italic rounded-2xl text-xs hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <Megaphone className="h-4 w-4" /> Publicar Aviso
        </button>
      </div>

      {/* Buscador estilizado */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
        <input 
          type="text" 
          placeholder="Buscar comunicados..." 
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-xs text-white focus:outline-none focus:border-emerald-500/50 transition-all"
        />
      </div>

      {/* Lista de Comunicados con tarjetas estilo "Plantilla Oficial" */}
      <div className="grid gap-4">
        {news.map((item) => (
          <div key={item.id} className="group bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 hover:border-emerald-500/30 transition-all flex flex-col md:flex-row items-center gap-6">
            <div className={`h-16 w-16 rounded-[1.5rem] flex items-center justify-center shrink-0 ${item.priority === 'high' ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
              <Bell className="h-8 w-8" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase italic ${item.priority === 'high' ? 'bg-red-500 text-white' : 'bg-emerald-500 text-black'}`}>
                  {item.tag}
                </span>
                <span className="text-slate-500 text-[10px] font-bold flex items-center gap-1 uppercase tracking-widest">
                  <Calendar className="h-3.5 w-3.5" /> {item.date}
                </span>
              </div>
              <h3 className="text-xl font-black text-white italic uppercase group-hover:text-emerald-400 transition-colors tracking-tight">{item.title}</h3>
              <p className="text-slate-400 text-sm mt-1 line-clamp-1 italic font-medium">"{item.preview}"</p>
            </div>

            <button className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-black group-hover:bg-emerald-500 transition-all border border-white/5 shadow-xl">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnnouncementsPage;