 
import { 
  ChevronLeft, 
  Trophy, 
  Users, 
  Clock, 
  MapPin, 
  ArrowLeftRight, 
  History,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';

const MatchDetailPage = () => {
  return (
      <DashboardLayout>
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      
      {/* Header con Navegación */}
      <div className="flex items-center gap-4">
        <Link to="/club/calendar" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
          <ChevronLeft className="h-5 w-5 text-white" />
        </Link>
        <div>
          <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">Resumen del Encuentro</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Jornada 8 • Finalizado</p>
        </div>
      </div>

      {/* CARD DE MARCADOR FINAL */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[3rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-around gap-8">
          {/* Local */}
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center mx-auto shadow-2xl">
              <Trophy className="h-10 w-10 text-emerald-500" />
            </div>
            <h3 className="text-xl font-black text-white italic uppercase">Titanes FC</h3>
          </div>

          {/* Marcador Central */}
          <div className="text-center">
            <div className="flex items-center gap-6">
              <span className="text-7xl font-black text-white italic tracking-tighter">2</span>
              <span className="text-3xl font-black text-slate-700 italic">-</span>
              <span className="text-7xl font-black text-white italic tracking-tighter opacity-50">1</span>
            </div>
            <div className="mt-4 px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full inline-block">
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest text-center">Victoria</span>
            </div>
          </div>

          {/* Visitante */}
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center mx-auto opacity-50">
               <span className="text-white font-black text-xl">DF</span>
            </div>
            <h3 className="text-xl font-black text-white italic uppercase opacity-50">Dragones FC</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUMNA IZQUIERDA: EVENTOS Y ESTADÍSTICAS (Col 8) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Eventos del Partido (Timeline) */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                <History className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-black text-white italic uppercase">Crónica del Juego</h4>
            </div>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
              {/* Gol */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-emerald-500 border-4 border-slate-950"></div>
                <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-emerald-400" />
                    <div>
                      <p className="text-sm font-black text-white">GOL - Carlos Rivera</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Asistencia: Erik Santos</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-400 italic">24'</span>
                </div>
              </div>

              {/* Cambio */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-blue-500 border-4 border-slate-950"></div>
                <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <ArrowLeftRight className="h-4 w-4 text-blue-400" />
                    <div>
                      <p className="text-sm font-black text-white">CAMBIO</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Sale: Luis M. | Entra: Oscar P.</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-blue-400 italic">62'</span>
                </div>
              </div>

              {/* Tarjeta Amarilla */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-yellow-500 border-4 border-slate-950"></div>
                <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-4 bg-yellow-500 rounded-sm"></div>
                    <div>
                      <p className="text-sm font-black text-white">TARJETA AMARILLA</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Juan Peña - Falta táctica</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-yellow-500 italic">78'</span>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas de Equipo */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                   <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Faltas</p>
                   <p className="text-2xl font-black text-white italic">08</p>
                </div>
                <div className="text-center">
                   <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Tiros Meta</p>
                   <p className="text-2xl font-black text-white italic">14</p>
                </div>
                <div className="text-center">
                   <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Corners</p>
                   <p className="text-2xl font-black text-white italic">05</p>
                </div>
                <div className="text-center">
                   <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Offsides</p>
                   <p className="text-2xl font-black text-white italic">02</p>
                </div>
             </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: ALINEACIÓN FINAL (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-5 w-5 text-slate-400" />
              <h4 className="text-lg font-black text-white italic uppercase">Alineación</h4>
            </div>

            <div className="space-y-3">
              {[
                { name: "L. Morales", pos: "POR", rating: "8.5" },
                { name: "C. Rivera", pos: "DEL", rating: "9.2" },
                { name: "E. Santos", pos: "MED", rating: "7.8" },
                { name: "J. Peña", pos: "DEF", rating: "6.5" },
                { name: "M. Sosa", pos: "DEF", rating: "7.0" },
              ].map((player, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-black/20 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-slate-500 w-6">{player.pos}</span>
                    <span className="text-xs font-bold text-white">{player.name}</span>
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded ${
                    parseFloat(player.rating) > 8 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-400'
                  }`}>
                    {player.rating}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card de Información de Sede */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span className="text-xs text-slate-400 font-medium italic">Estadio La Noria, Ciudad de México</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-slate-500" />
              <span className="text-xs text-slate-400 font-medium italic">Duración: 90' + 4' Añadido</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default MatchDetailPage;