import React from 'react';
import { 
  CalendarDays, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Trophy, 
  History,
  AlertCircle,
  Video
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const MatchCalendarPage = () => {
  const pastMatches = [
    { id: 1, opponent: "Dragones FC", result: "2 - 1", status: "W", date: "12 Abr", type: "Jornada 8" },
    { id: 2, opponent: "Galácticos", result: "0 - 0", status: "D", date: "05 Abr", type: "Jornada 7" },
    { id: 3, opponent: "Rayo Valle", result: "1 - 3", status: "L", date: "29 Mar", type: "Jornada 6" },
  ];

  const upcomingMatches = [
    { id: 4, opponent: "Leones Negros", date: "02 May", time: "18:00", field: "Campo 1" },
    { id: 5, opponent: "Atlas Junior", date: "09 May", time: "16:00", field: "Campo 4" },
  ];

  return (

         <DashboardLayout>
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* SECCIÓN: PRÓXIMO PARTIDO (DESTACADO) */}
      <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-2xl">
        {/* Glow de fondo decorativo */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">Siguiente Encuentro</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Equipo Local */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="w-24 h-24 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl">
                <Trophy className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-black text-white italic">TITANES FC</h3>
            </div>

            {/* VS & Info */}
            <div className="flex flex-col items-center flex-1 text-center">
              <div className="bg-white/5 px-4 py-1 rounded-full border border-white/10 mb-4">
                <span className="text-white font-black text-2xl italic tracking-tighter">VS</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                  <CalendarDays className="h-4 w-4" /> 26 de Abril, 2026
                </div>
                <div className="flex items-center justify-center gap-2 text-emerald-400 text-lg font-black italic">
                  <Clock className="h-5 w-5" /> 16:00 HRS
                </div>
              </div>
            </div>

            {/* Equipo Visitante */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="w-24 h-24 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                   <span className="text-blue-400 font-black">LN</span>
                </div>
              </div>
              <h3 className="text-xl font-black text-white italic uppercase">LEONES NEGROS</h3>
            </div>
          </div>

          {/* Footer del Partido Destacado */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-slate-500" />
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase">Sede</p>
                <p className="text-white text-sm font-bold">Complejo "La Noria" - Campo 2</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-slate-500" />
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase">Uniforme</p>
                <p className="text-white text-sm font-bold">Local (Verde/Negro)</p>
              </div>
            </div>
             <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-slate-500" />
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase">ASISTENCIA PROXIMO PARTIDO</p>
                <p className="text-white text-sm font-bold">DETALLE CONFIRMACIÓN DE JUGADORES </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SECCIÓN: CALENDARIO PRÓXIMO */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-xl">
                <CalendarDays className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-lg font-black text-white italic uppercase tracking-tight">Próximas Fechas</h4>
            </div>
          </div>

          <div className="space-y-4">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="group bg-white/5 border border-white/5 hover:border-white/10 p-5 rounded-2xl transition-all flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-[10px] font-black text-slate-500">VS</div>
                  <div>
                    <h5 className="text-white font-bold text-sm">vs {match.opponent}</h5>
                    <p className="text-slate-500 text-[10px] font-bold uppercase mt-1">{match.date} • {match.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-bold block">{match.field}</span>
                  <button className="mt-1 text-emerald-400 hover:text-emerald-300 transition-colors">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN: HISTORIAL DE PARTIDOS */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-500/10 rounded-xl">
                <History className="h-5 w-5 text-slate-400" />
              </div>
              <h4 className="text-lg font-black text-white italic uppercase tracking-tight">Resultados Pasados</h4>
            </div>
          </div>

          <div className="space-y-4">
            {pastMatches.map((match) => (
              <div key={match.id} className="flex items-center justify-between p-5 bg-black/20 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black ${
                    match.status === 'W' ? 'bg-emerald-500/20 text-emerald-400' : 
                    match.status === 'D' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {match.status}
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">{match.opponent}</h5>
                    <p className="text-slate-500 text-[10px] font-bold uppercase mt-1">{match.date} • {match.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-black text-white italic tracking-tighter">{match.result}</span>
                  <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <Video className="h-3.5 w-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default MatchCalendarPage;