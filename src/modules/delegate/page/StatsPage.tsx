 
import { 
  Trophy, 
  Target, 
  ShieldAlert, 
  TrendingUp, 
  Award,
  Users,
  ChevronRight,
  Minus
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const StatsPage = () => {
  // Datos simulados
  const topScorers = [
    { id: 1, name: "Carlos Rivera", goals: 12, games: 8, avg: "1.5" },
    { id: 2, name: "Erik Santos", goals: 8, games: 8, avg: "1.0" },
    { id: 3, name: "Oscar Peña", goals: 5, games: 6, avg: "0.8" },
  ];

  const badConduct = [
    { id: 1, name: "Juan Peña", yellow: 4, red: 1, status: 'Suspensión' },
    { id: 2, name: "Luis Morales", yellow: 3, red: 0, status: 'Límite' },
    { id: 3, name: "M. Sosa", yellow: 2, red: 0, status: 'Limpio' },
  ];

  return (
         <DashboardLayout>
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      
      {/* HEADER DE ESTADÍSTICAS */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase">Analytics del Club</h2>
          <p className="text-slate-500 text-sm font-medium">Temporada Clausura 2026 • Titanes FC</p>
        </div>
        <div className="flex gap-4">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
                <p className="text-[9px] text-slate-500 font-black uppercase">Rendimiento</p>
                <p className="text-emerald-400 font-black italic">W W D W L</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 1. POSICIÓN EN LA TABLA (Col 4) */}
        <div className="lg:col-span-4 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-[3rem] p-8 shadow-[0_20px_50px_rgba(16,185,129,0.2)] flex flex-col justify-between relative overflow-hidden">
          <Trophy className="absolute -right-4 -bottom-4 h-40 w-40 text-black/10 -rotate-12" />
          
          <div className="relative z-10">
            <p className="text-white/60 text-xs font-black uppercase tracking-widest">Posición Actual</p>
            <h3 className="text-8xl font-black text-white italic leading-none mt-2">03°</h3>
            <p className="text-white/80 font-bold mt-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" /> Subió 2 puestos
            </p>
          </div>

          <div className="relative z-10 mt-12 grid grid-cols-3 gap-2 border-t border-white/20 pt-6">
            <div>
              <p className="text-white/50 text-[9px] font-black uppercase">PTS</p>
              <p className="text-white text-xl font-black">18</p>
            </div>
            <div>
              <p className="text-white/50 text-[9px] font-black uppercase">PJ</p>
              <p className="text-white text-xl font-black">08</p>
            </div>
            <div>
              <p className="text-white/50 text-[9px] font-black uppercase">DG</p>
              <p className="text-white text-xl font-black">+14</p>
            </div>
          </div>
        </div>

        {/* 2. GOLEO INDIVIDUAL (Col 8) */}
        <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-xl">
                <Target className="h-5 w-5 text-emerald-400" />
              </div>
              <h4 className="text-lg font-black text-white italic uppercase">Líderes de Goleo</h4>
            </div>
          </div>

          <div className="space-y-4">
            {topScorers.map((player, index) => (
              <div key={player.id} className="group bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-slate-600 font-black italic text-xl w-6">0{index + 1}</span>
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center font-black text-[10px] text-white">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{player.name}</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase">{player.games} Partidos Jugados</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="text-center hidden md:block">
                        <p className="text-[9px] text-slate-500 font-black">PROMEDIO</p>
                        <p className="text-white font-bold text-sm">{player.avg}</p>
                    </div>
                    <div className="bg-emerald-500/10 px-6 py-2 rounded-xl border border-emerald-500/20">
                        <span className="text-emerald-400 font-black text-xl italic">{player.goals}</span>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. DISCIPLINA (Tarjetas) (Col 6) */}
        <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-500/20 rounded-xl">
                <ShieldAlert className="h-5 w-5 text-red-400" />
              </div>
              <h4 className="text-lg font-black text-white italic uppercase">Control Disciplinario</h4>
            </div>

            <div className="space-y-4">
                {badConduct.map((player) => (
                    <div key={player.id} className="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                <div className={`w-2 h-3 rounded-sm ${player.yellow > 0 ? 'bg-yellow-500' : 'bg-slate-700'}`}></div>
                                <div className={`w-2 h-3 rounded-sm ${player.red > 0 ? 'bg-red-500' : 'bg-slate-700'}`}></div>
                            </div>
                            <span className="text-sm font-bold text-white">{player.name}</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex gap-4">
                                <span className="text-xs font-black text-yellow-500">{player.yellow} <span className="text-[8px] uppercase">YEL</span></span>
                                <span className="text-xs font-black text-red-500">{player.red} <span className="text-[8px] uppercase">RED</span></span>
                            </div>
                            <span className={`text-[9px] font-black uppercase px-2 py-1 rounded ${player.red > 0 ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-slate-500'}`}>
                                {player.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* 4. RESUMEN GENERAL EQUIPO (Col 6) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex flex-col justify-between">
                <Users className="h-6 w-6 text-blue-400" />
                <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Asistencia Promedio</p>
                    <h4 className="text-3xl font-black text-white italic mt-1">94%</h4>
                </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex flex-col justify-between">
                <Award className="h-6 w-6 text-purple-400" />
                <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Fair Play Score</p>
                    <h4 className="text-3xl font-black text-white italic mt-1">8.2</h4>
                </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 col-span-2 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl">
                        <Minus className="h-5 w-5 text-slate-400" />
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-tighter italic">Ver Tabla Completa de la Liga</span>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-600 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default StatsPage;