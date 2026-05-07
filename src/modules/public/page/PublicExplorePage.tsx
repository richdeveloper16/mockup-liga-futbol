 
import { Search, Filter, Trophy, Users, MapPin, ArrowUpRight } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const PublicExplorePage = () => {
  const teams = [
    { name: 'Titanes FC', category: 'Primera Div', players: 22, stadium: 'La Noria', rank: 1, logo: 'TFC' },
    { name: 'Galácticos', category: 'Primera Div', players: 18, stadium: 'Campo 1', rank: 2, logo: 'GFC' },
    { name: 'Dragones', category: 'Juvenil', players: 20, stadium: 'Sede Norte', rank: 3, logo: 'DFC' },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8 animate-in fade-in duration-700">
        {/* HERO SECTION PÚBLICA */}
        <div className="relative h-64 rounded-[3rem] overflow-hidden flex items-center px-12 border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-emerald-500/20 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">Explora la Liga</h2>
            <p className="text-slate-300 font-medium max-w-md italic">Conoce a los equipos, las sedes y los protagonistas que hacen de esta la mejor competición de la ciudad.</p>
          </div>
        </div>

        {/* BUSCADOR */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Buscar equipo o jugador..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
          <button className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white flex items-center gap-2 hover:bg-white/10 transition-all">
            <Filter className="h-5 w-5 text-emerald-400" />
            <span className="text-xs font-black uppercase italic">Filtros</span>
          </button>
        </div>

        {/* GRID DE EQUIPOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div key={team.name} className="group bg-white/5 border border-white/10 rounded-[2.5rem] p-6 hover:border-emerald-500/30 transition-all relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center text-xl font-black italic text-white group-hover:scale-110 transition-transform">
                  {team.logo}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-yellow-500 mb-1">
                    <Trophy className="h-3 w-3" />
                    <span className="text-[10px] font-black italic">RANK #{team.rank}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{team.category}</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white italic uppercase mb-4">{team.name}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <Users className="h-4 w-4" />
                  <span className="text-xs font-medium">{team.players} Jugadores Inscritos</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-medium">{team.stadium}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-xl text-[10px] font-black uppercase italic hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center gap-2">
                Ver Perfil Público <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};


export default PublicExplorePage;