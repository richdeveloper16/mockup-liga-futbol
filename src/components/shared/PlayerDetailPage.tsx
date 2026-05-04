import React from 'react';
import { 
  ChevronLeft, 
  Target, 
  Clock, 
  ShieldAlert, 
  Star, 
  Calendar,
  IdCard,
  TrendingUp,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';

const PlayerDetailPage = () => {
  return (
    
  
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* NAVEGACIÓN Y HEADER */}
      <div className="flex items-center gap-4">
        <Link to="/club/roster" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
          <ChevronLeft className="h-5 w-5 text-white" />
        </Link>
        <div>
          <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">Ficha del Jugador</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Temporada 2026 • Registro Oficial</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUMNA IZQUIERDA: PERFIL VISUAL (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-xl">
            {/* Glow de fondo dinámico según rendimiento */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Foto del Jugador */}
              <div className="w-48 h-60 bg-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                <span className="text-6xl font-black text-slate-800 italic">CR9</span>
                {/* <img src="/player-photo.jpg" className="w-full h-full object-cover" /> */}
              </div>
              
              <div className="mt-6 text-center">
                <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  Delantero Centro
                </span>
                <h3 className="mt-4 text-3xl font-black text-white italic leading-none">CARLOS RIVERA</h3>
                <p className="text-slate-500 font-bold mt-1 uppercase tracking-tighter italic">Titanes FC • #9</p>
              </div>

              <div className="mt-8 w-full grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                  <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Edad</p>
                  <p className="text-white font-bold text-lg">24</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                  <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Rating</p>
                  <p className="text-emerald-400 font-bold text-lg">8.9</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Documentación Rápida */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 space-y-4">
            <div className="flex items-center gap-4">
              <IdCard className="h-5 w-5 text-slate-500" />
              <div>
                <p className="text-[9px] text-slate-500 font-black uppercase">CURP Registrada</p>
                <p className="text-white text-xs font-mono tracking-widest">RIVC020412HDFRR...</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: ESTADÍSTICAS Y GRÁFICAS (Col 8) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Dashboard de Métricas Principales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-xl relative group hover:bg-emerald-500/5 transition-all">
              <Target className="h-5 w-5 text-emerald-400 mb-4" />
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Goles</p>
              <h4 className="text-3xl font-black text-white italic">12</h4>
              <div className="mt-2 flex items-center gap-1 text-emerald-500 text-[10px] font-bold">
                <TrendingUp className="h-3 w-3" /> +2 este mes
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-xl">
              <Clock className="h-5 w-5 text-blue-400 mb-4" />
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Minutos</p>
              <h4 className="text-3xl font-black text-white italic">684'</h4>
              <p className="mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">8/8 Titularidades</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-xl">
              <ShieldAlert className="h-5 w-5 text-yellow-500 mb-4" />
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Amarillas</p>
              <h4 className="text-3xl font-black text-white italic">03</h4>
              <p className="mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Riesgo: Bajo</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-xl">
              <ShieldAlert className="h-5 w-5 text-red-500 mb-4" />
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Rojas</p>
              <h4 className="text-3xl font-black text-white italic">00</h4>
              <p className="mt-2 text-[10px] text-emerald-500 font-black uppercase tracking-tighter italic">Limpio</p>
            </div>
          </div>

          {/* Historial de Partidos Recientes */}
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <h4 className="text-lg font-black text-white italic uppercase tracking-tight">Últimos Desempeños</h4>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { match: "vs Dragones FC", date: "Abr 12", goals: 2, mins: 90, rating: "9.5" },
                { match: "vs Galácticos", date: "Abr 05", goals: 0, mins: 78, rating: "7.2" },
                { match: "vs Rayo Valle", date: "Mar 29", goals: 1, mins: 90, rating: "8.4" },
              ].map((perf, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-black/20 rounded-3xl border border-white/5 hover:bg-white/5 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900 rounded-2xl">
                      <Calendar className="h-4 w-4 text-slate-500" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white italic">{perf.match}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">{perf.date} • {perf.mins} min jugados</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    {perf.goals > 0 && (
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        <Target className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400 font-black text-xs">x{perf.goals}</span>
                      </div>
                    )}
                    <div className="text-right">
                      <p className="text-[9px] text-slate-500 font-black uppercase">Rating</p>
                      <p className="text-white font-black italic">{perf.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logros/Hitos */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-emerald-500 text-slate-950 rounded-3xl">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white italic uppercase leading-none">MVP del Mes</h4>
                <p className="text-slate-400 text-xs font-medium mt-1">Elegido por el comité técnico en Marzo 2026</p>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-white/20 font-black text-6xl tracking-tighter italic">MARZO</span>
            </div>
          </div>

        </div>
      </div>
    </div>
   
  );
};

export default PlayerDetailPage;