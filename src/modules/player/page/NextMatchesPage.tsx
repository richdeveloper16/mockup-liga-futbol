import  { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Info,
  ChevronRight,
  AlertCircle,
  Trophy
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const NextMatchesPage = () => {
  const [confirmed, setConfirmed] = useState<boolean | null>(null);

  const upcomingMatches = [
    { id: 2, date: '05 Mayo', time: '18:00', opponent: 'Galácticos FC', field: 'Campo 1', type: 'Liga' },
    { id: 3, date: '12 Mayo', time: '16:00', opponent: 'Real Suciedad', field: 'Campo 4', type: 'Copa' },
    { id: 4, date: '19 Mayo', time: '17:30', opponent: 'Cuervos Negros', field: 'Campo 2', type: 'Liga' },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8 animate-in fade-in duration-700">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Calendario de Juego</h2>
            <p className="text-slate-500 text-sm font-medium">Confirma tu asistencia y revisa tus próximos encuentros</p>
          </div>
        </div>

        {/* PARTIDO PRÓXIMO (DESTACADO) */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-slate-900 border border-white/10 rounded-[3rem] p-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info del Encuentro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-blue-500 rounded-full">
                  <span className="text-[10px] text-white font-black uppercase italic tracking-widest">Siguiente Jornada</span>
                </div>
                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Trophy className="h-3 w-3" /> Clásico de la Ciudad
                </span>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <span className="text-white font-black text-xl italic">TFC</span>
                  </div>
                  <p className="text-xs text-white font-black uppercase italic">Titanes</p>
                </div>
                <span className="text-3xl font-black text-slate-700 italic tracking-tighter">VS</span>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center mb-2">
                    <span className="text-white font-black text-xl italic">DFC</span>
                  </div>
                  <p className="text-xs text-white font-black uppercase italic">Dragones</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-[8px] text-slate-500 font-black uppercase">Fecha</p>
                    <p className="text-xs text-white font-bold italic uppercase">Sábado 28, Abril</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-[8px] text-slate-500 font-black uppercase">Hora</p>
                    <p className="text-xs text-white font-bold italic uppercase">16:00 HRS</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="text-[8px] text-slate-500 font-black uppercase">Sede</p>
                    <p className="text-xs text-white font-bold italic uppercase">Campo 2 - La Noria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PANEL DE CONFIRMACIÓN */}
            <div className="lg:col-span-5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8">
              <h4 className="text-center text-sm font-black text-white italic uppercase mb-6 tracking-widest">¿Contamos contigo?</h4>
              
              <div className="flex flex-col gap-3">
                {confirmed === null ? (
                  <>
                    <button 
                      onClick={() => setConfirmed(true)}
                      className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(16,185,129,0.2)]"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                      CONFIRMAR ASISTENCIA
                    </button>
                    <button 
                      onClick={() => setConfirmed(false)}
                      className="w-full py-4 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/20 text-slate-400 hover:text-red-500 font-black rounded-2xl transition-all flex items-center justify-center gap-3"
                    >
                      <XCircle className="h-5 w-5" />
                      NO PODRÉ ASISTIR
                    </button>
                  </>
                ) : confirmed ? (
                  <div className="text-center space-y-4 animate-in zoom-in duration-300">
                    <div className="mx-auto w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                    </div>
                    <p className="text-emerald-400 font-black italic uppercase text-sm">¡Confirmado! Nos vemos en el campo.</p>
                    <button onClick={() => setConfirmed(null)} className="text-[10px] text-slate-500 uppercase font-black hover:underline underline-offset-4">Cambiar respuesta</button>
                  </div>
                ) : (
                  <div className="text-center space-y-4 animate-in zoom-in duration-300">
                    <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                      <XCircle className="h-8 w-8 text-red-500" />
                    </div>
                    <p className="text-red-400 font-black italic uppercase text-sm">Reportado como ausencia.</p>
                    <button onClick={() => setConfirmed(null)} className="text-[10px] text-slate-500 uppercase font-black hover:underline underline-offset-4">Cambiar respuesta</button>
                  </div>
                )}
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-2xl flex gap-3 items-start">
                <Info className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-[9px] text-slate-400 font-medium leading-relaxed">
                  Tu respuesta ayuda al delegado a organizar la alineación. Tienes hasta 24h antes del partido para cambiarla.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* PRÓXIMOS PARTIDOS (LISTADO) */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-lg font-black text-white italic uppercase tracking-tighter">Resto del Calendario</h4>
            <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-500 font-black uppercase">3 Partidos Pendientes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="group relative bg-black/20 border border-white/5 hover:border-white/20 p-6 rounded-[2rem] transition-all overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                      <Calendar className="h-4 w-4 text-slate-400" />
                    </div>
                    <span className="text-[8px] text-slate-600 font-black uppercase tracking-[0.2em]">{match.type}</span>
                  </div>
                  
                  <p className="text-xl font-black text-white italic mb-1 uppercase tracking-tighter">vs {match.opponent}</p>
                  <p className="text-[10px] text-emerald-500 font-black uppercase mb-4">{match.date} • {match.time}</p>
                  
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="h-3 w-3" />
                    <span className="text-[10px] font-bold uppercase">{match.field}</span>
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 p-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white text-black p-2 rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AVISO DE REGLAMENTO */}
        <div className="bg-slate-900 border border-white/5 rounded-[2rem] p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl">
                <AlertCircle className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
                Recuerda llegar **30 minutos antes** de la hora marcada para el calentamiento y revisión de credenciales por parte del árbitro.
            </p>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default NextMatchesPage;