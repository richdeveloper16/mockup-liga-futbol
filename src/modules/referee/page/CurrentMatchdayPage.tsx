 
import { Link } from 'react-router-dom'; // Importante para la navegación
import { 
  ClipboardCheck, 
  Clock, 
  MapPin, 
  AlertCircle, 
  ChevronRight, 
  Calendar,
  Zap,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const CurrentMatchdayPage = () => {
  const assignments = [
    {
      id: 1,
      time: "16:00",
      field: "Campo 2 - La Noria",
      category: "Primera División",
      local: "Titanes FC",
      visitor: "Dragones FC",
      status: "next",
      type: "Central"
    },
    {
      id: 2,
      time: "18:00",
      field: "Campo 1 - La Noria",
      category: "Liga Juvenil",
      local: "Atlas Jr",
      visitor: "Rayos",
      status: "pending",
      type: "Asistente 1"
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8 animate-in fade-in duration-700">
        
        {/* HEADER DE BIENVENIDA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Panel de Arbitraje</h2>
            <p className="text-slate-500 text-sm font-medium">Lunes, 27 de Abril • Jornada Actual</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-2xl flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-[10px] text-emerald-400 font-black uppercase">Árbitro Certificado</span>
            </div>
          </div>
        </div>

        {/* CARD DE PARTIDO PRÓXIMO (Link a Cédula) */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-[3rem] p-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="px-3 py-1 bg-blue-500 rounded-full">
                <span className="text-[10px] text-white font-black uppercase italic">Siguiente Asignación</span>
              </div>
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Inicia en 1h 12m</span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-8 flex-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-2">
                    <span className="text-white font-black">TFC</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Titanes</p>
                </div>
                <span className="text-2xl font-black text-slate-700 italic">VS</span>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-2">
                    <span className="text-white font-black">DFC</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Dragones</p>
                </div>
              </div>

              <div className="h-16 w-px bg-white/10 hidden md:block"></div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-white font-bold italic">Campo 2 - La Noria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-white font-bold italic">16:00 HRS • Rol: {assignments[0].type}</span>
                </div>
              </div>

              {/* LINK A CÉDULA */}
              <Link 
                to={`/referee/match-sheet/${assignments[0].id}`}
                className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-[0_10px_20px_rgba(16,185,129,0.2)]"
              >
                ABRIR CÉDULA
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LISTA DE JORNADA */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-black text-white italic uppercase">Mis Designaciones</h4>
              </div>
            </div>

            <div className="space-y-4">
              {assignments.map((match) => (
                <div key={match.id} className="group bg-black/20 border border-white/5 hover:border-white/10 p-6 rounded-[2rem] transition-all flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="text-center bg-white/5 p-3 rounded-2xl min-w-[80px]">
                      <p className="text-xl font-black text-white italic">{match.time}</p>
                      <p className="text-[9px] text-slate-500 font-black uppercase">Hora</p>
                    </div>
                    <div>
                      <h5 className="text-white font-black italic uppercase tracking-tighter">
                        {match.local} <span className="text-slate-600 mx-2">vs</span> {match.visitor}
                      </h5>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] text-emerald-500 font-bold uppercase">{match.field}</span>
                        <span className="text-slate-700">•</span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase">{match.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                    <div className="text-right hidden md:block">
                      <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Rol</p>
                      <p className="text-xs font-bold text-white italic">{match.type}</p>
                    </div>
                    {/* ACCESO RÁPIDO A CÉDULA DESDE LISTA */}
                    <Link 
                      to={`/referee/match-sheet`}
                      className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all"
                    >
                      <ClipboardCheck className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HERRAMIENTAS RÁPIDAS (Links a Incidentes y Credenciales) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
              <h4 className="text-sm font-black text-white italic uppercase mb-6 tracking-widest">Acciones Rápidas</h4>
              
              <div className="space-y-3">
                {/* LINK REPORTAR INCIDENTE */}
                <Link to="/referee/incident-report" className="w-full flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl group hover:bg-red-500/20 transition-all text-left">
                  <div className="p-2 bg-red-500 rounded-lg text-white">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white uppercase italic leading-none">Reportar Incidente</p>
                    <p className="text-[10px] text-red-400/70 font-bold uppercase mt-1">Grave / Extraordinario</p>
                  </div>
                </Link>

                {/* LINK REVISAR CREDENCIALES (QR) */}
                <Link to="/referee/qr-scanner" className="w-full flex items-center gap-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl group hover:bg-emerald-500/20 transition-all text-left">
                  <div className="p-2 bg-emerald-500 rounded-lg text-slate-950">
                    <UserCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white uppercase italic leading-none">Revisar Credenciales</p>
                    <p className="text-[10px] text-emerald-400/70 font-bold uppercase mt-1">Escaneo QR Masivo</p>
                  </div>
                </Link>

                {/* VALIDACIÓN TERRENO (Simulado) */}
                <button className="w-full flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl group hover:bg-blue-500/20 transition-all text-left">
                  <div className="p-2 bg-blue-500 rounded-lg text-white">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white uppercase italic leading-none">Estado del Campo</p>
                    <p className="text-[10px] text-blue-400/70 font-bold uppercase mt-1">Validación de terreno</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-slate-900 border border-white/5 rounded-[2rem] p-6 text-center">
              <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-[0.2em]">Soporte Técnico</p>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                ¿Problemas con el marcador digital? Contacta a la mesa de control de la **Liga Master** vía chat rápido.
              </p>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default CurrentMatchdayPage;