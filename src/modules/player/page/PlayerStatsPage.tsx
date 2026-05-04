import React from 'react';
import { 
  Trophy, 
  Target, 
  Zap, 
  Activity, 
  Star, 
  TrendingUp, 
  Award,
  ArrowUpRight
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const PlayerStatsPage = () => {
  const stats = [
    { label: 'Goles', value: '12', icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Asistencias', value: '08', icon: Star, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Partidos Jugados', value: '15', icon: Activity, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'MVP Partidos', value: '04', icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* HEADER CON RESUMEN RÁPIDO */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-emerald-500 to-blue-600 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" 
                  className="w-full h-full object-cover rounded-[1.4rem] grayscale hover:grayscale-0 transition-all"
                  alt="Profile"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 text-xs font-black px-2 py-1 rounded-lg shadow-lg">
                9.2
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Estadísticas de Temporada</h2>
              <p className="text-slate-500 font-bold flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                Rendimiento Superior al 85% de la Liga
              </p>
            </div>
          </div>
          
          <div className="flex bg-white/5 border border-white/10 p-2 rounded-2xl">
            {['Global', 'Apertura 2026', 'Clausura'].map((tab, i) => (
              <button key={tab} className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all ${i === 1 ? 'bg-white text-black' : 'text-slate-500 hover:text-white'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MÉTRICAS PRINCIPALES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:border-white/20 transition-all group">
              <div className={`p-3 w-fit rounded-2xl ${item.bg} ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-black text-white italic leading-none">{item.value}</p>
              <p className="text-[10px] text-slate-500 font-black uppercase mt-2 tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* RADAR DE HABILIDADES (Visualización de Atributos) */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="text-lg font-black text-white italic uppercase mb-8 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-emerald-400" /> Atributos Técnicos
                </h4>
                
                <div className="space-y-6">
                    {[
                        { attr: 'Velocidad', val: 92, color: 'bg-emerald-500' },
                        { attr: 'Tiro', val: 88, color: 'bg-blue-500' },
                        { attr: 'Pase', val: 75, color: 'bg-purple-500' },
                        { attr: 'Físico', val: 84, color: 'bg-orange-500' },
                        { attr: 'Defensa', val: 40, color: 'bg-red-500' },
                    ].map((item) => (
                        <div key={item.attr}>
                            <div className="flex justify-between text-[10px] font-black uppercase mb-2 tracking-widest">
                                <span className="text-slate-400">{item.attr}</span>
                                <span className="text-white">{item.val}</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${item.color} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]`} 
                                    style={{ width: `${item.val}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* ÚLTIMOS PARTIDOS (Log de Rendimiento) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <h4 className="text-lg font-black text-white italic uppercase mb-8">Rendimiento Reciente</h4>
            <div className="space-y-4">
                {[
                    { match: 'vs Real Madrid', date: '22 Abr', goals: 2, rating: 9.5, result: 'W' },
                    { match: 'vs Manchester City', date: '15 Abr', goals: 1, rating: 8.2, result: 'D' },
                    { match: 'vs FC Barcelona', date: '08 Abr', goals: 0, rating: 7.8, result: 'L' },
                    { match: 'vs Bayern Munich', date: '01 Abr', goals: 3, rating: 10, result: 'W' },
                ].map((m, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-black/20 border border-white/5 rounded-2xl hover:bg-black/40 transition-all group">
                        <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${
                                m.result === 'W' ? 'bg-emerald-500/20 text-emerald-500' : 
                                m.result === 'D' ? 'bg-blue-500/20 text-blue-500' : 'bg-red-500/20 text-red-500'
                            }`}>
                                {m.result}
                            </div>
                            <div>
                                <p className="text-sm font-black text-white uppercase italic">{m.match}</p>
                                <p className="text-[10px] text-slate-500 font-bold uppercase">{m.date}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <p className="text-xs font-black text-white italic">{m.goals}</p>
                                <p className="text-[8px] text-slate-600 font-black uppercase">Goles</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-black text-emerald-400 italic">{m.rating}</p>
                                <p className="text-[8px] text-slate-600 font-black uppercase">Rating</p>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-slate-700 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="w-full mt-6 py-4 border border-dashed border-white/10 rounded-2xl text-[10px] font-black text-slate-500 uppercase hover:text-white hover:border-white/30 transition-all">
                Ver historial completo de partidos
            </button>
          </div>

        </div>

        {/* LOGROS / PREMIOS */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-yellow-500 rounded-3xl shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                <Award className="h-10 w-10 text-slate-950" />
            </div>
            <div>
                <h4 className="text-xl font-black text-white italic uppercase tracking-tighter">Bota de Oro Provisional</h4>
                <p className="text-slate-400 text-sm font-medium">Actualmente eres el máximo goleador de la Primera División con **12 tantos**. ¡Sigue así!</p>
            </div>
            <button className="ml-auto px-8 py-3 bg-white text-black font-black uppercase italic rounded-xl hover:bg-yellow-500 transition-all">
                Ver Ranking
            </button>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default PlayerStatsPage;