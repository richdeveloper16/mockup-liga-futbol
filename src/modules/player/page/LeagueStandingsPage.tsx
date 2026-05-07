 
import { 
  Trophy, 
  Target,  
  Medal, 
  TrendingUp
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const LeagueStandingsPage = () => {
  const standings = [
    { pos: 1, team: 'Titanes FC', pj: 12, pg: 9, pe: 2, pp: 1, gf: 28, gc: 12, pts: 29, form: ['W', 'W', 'D', 'W', 'W'] },
    { pos: 2, team: 'Galácticos', pj: 12, pg: 8, pe: 3, pp: 1, gf: 24, gc: 10, pts: 27, form: ['W', 'D', 'W', 'L', 'W'] },
    { pos: 3, team: 'Dragones FC', pj: 12, pg: 7, pe: 2, pp: 3, gf: 20, gc: 15, pts: 23, form: ['L', 'W', 'W', 'D', 'L'] },
    { pos: 4, team: 'Real Suciedad', pj: 12, pg: 6, pe: 1, pp: 5, gf: 18, gc: 18, pts: 19, form: ['W', 'L', 'L', 'W', 'W'] },
    { pos: 5, team: 'Cuervos Negros', pj: 12, pg: 5, pe: 2, pp: 5, gf: 15, gc: 14, pts: 17, form: ['D', 'W', 'L', 'L', 'D'] },
  ];

  const topScorers = [
    { pos: 1, name: 'Carlos Rivera', team: 'Titanes FC', goals: 12, avg: 1.0, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop' },
    { pos: 2, name: 'Luis García', team: 'Galácticos', goals: 10, avg: 0.8, photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop' },
    { pos: 3, name: 'Marco Polo', team: 'Dragones FC', goals: 9, avg: 0.75, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop' },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-10 animate-in fade-in duration-700">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="text-[10px] text-yellow-500 font-black uppercase tracking-[0.3em]">Temporada Apertura 2026</span>
            </div>
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">Clasificación General</h2>
          </div>
          <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-2xl">
            {['Primera Div.', 'Juvenil', 'Femenil'].map((tab, i) => (
              <button key={tab} className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${i === 0 ? 'bg-white text-black shadow-lg' : 'text-slate-500 hover:text-white'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* TABLA GENERAL (LADO IZQUIERDO) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="p-5 text-[10px] font-black text-slate-500 uppercase">Pos</th>
                      <th className="p-5 text-[10px] font-black text-slate-500 uppercase">Equipo</th>
                      <th className="p-5 text-[10px] font-black text-slate-500 uppercase text-center">PJ</th>
                      <th className="p-5 text-[10px] font-black text-slate-500 uppercase text-center">DG</th>
                      <th className="p-5 text-[10px] font-black text-slate-500 uppercase text-center">Pts</th>
                      <th className="p-5 text-[10px] font-black text-slate-500 uppercase">Forma</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {standings.map((team) => (
                      <tr key={team.pos} className={`group hover:bg-white/[0.03] transition-colors ${team.pos <= 4 ? 'border-l-4 border-l-blue-500/50' : ''}`}>
                        <td className="p-5">
                          <span className={`text-sm font-black italic ${team.pos <= 4 ? 'text-blue-400' : 'text-slate-500'}`}>
                            {team.pos.toString().padStart(2, '0')}
                          </span>
                        </td>
                        <td className="p-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center font-black text-[10px] text-white">
                              {team.team.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="text-sm font-black text-white uppercase italic">{team.team}</span>
                          </div>
                        </td>
                        <td className="p-5 text-center text-sm font-bold text-slate-400">{team.pj}</td>
                        <td className="p-5 text-center text-sm font-bold text-slate-400">{team.gf - team.gc}</td>
                        <td className="p-5 text-center text-md font-black text-white italic">{team.pts}</td>
                        <td className="p-5">
                          <div className="flex gap-1">
                            {team.form.map((res, idx) => (
                              <div key={idx} className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black text-slate-950 ${
                                res === 'W' ? 'bg-emerald-500' : res === 'D' ? 'bg-slate-500' : 'bg-red-500'
                              }`}>
                                {res}
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex items-center gap-4 px-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div> Liguilla
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div> Descenso
                </div>
            </div>
          </div>

          {/* TABLA DE GOLEO (LADO DERECHO) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-b from-yellow-500/10 to-slate-950 border border-yellow-500/20 rounded-[2.5rem] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Target className="h-24 w-24 text-yellow-500" />
                </div>
                
                <h4 className="text-lg font-black text-white italic uppercase mb-8 flex items-center gap-3">
                    <Medal className="h-6 w-6 text-yellow-500" /> Líderes de Goleo
                </h4>

                <div className="space-y-6">
                    {topScorers.map((scorer, idx) => (
                        <div key={scorer.pos} className="flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className={`w-12 h-12 rounded-2xl p-0.5 ${idx === 0 ? 'bg-yellow-500' : 'bg-white/10'}`}>
                                        <img src={scorer.photo} alt={scorer.name} className="w-full h-full object-cover rounded-[0.9rem]" />
                                    </div>
                                    <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black shadow-lg ${
                                        idx === 0 ? 'bg-yellow-500 text-black' : 'bg-slate-800 text-white'
                                    }`}>
                                        {scorer.pos}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-white uppercase italic leading-none">{scorer.name}</p>
                                    <p className="text-[9px] text-slate-500 font-bold uppercase mt-1">{scorer.team}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xl font-black text-yellow-500 italic leading-none">{scorer.goals}</p>
                                <p className="text-[8px] text-slate-600 font-black uppercase">Goles</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black text-white uppercase hover:bg-white/10 transition-all">
                    Ver tabla de goleo completa
                </button>
            </div>

            {/* QUICK STATS BOX */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] text-slate-500 font-black uppercase">Dato de la Jornada</p>
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                </div>
                <p className="text-sm text-white font-bold italic leading-snug">
                    "Titanes FC mantiene un invicto de 8 partidos, la racha más larga de la temporada."
                </p>
            </div>
        </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default LeagueStandingsPage;