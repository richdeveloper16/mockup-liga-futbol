 
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Trophy,
  Users,
  Star,
  Calendar,
  ExternalLink
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const MyClubPage = () => {

// Datos de ejemplo para la card de jugadores
  const topPlayers = [
    { id: 1, name: "Carlos Rivera", position: "Delantero", goals: 12, photo: "CR" },
    { id: 2, name: "Luis Morales", position: "Portero", cleanSheets: 5, photo: "LM" },
    { id: 3, name: "Erik Santos", position: "Medio", assists: 8, photo: "ES" },
  ];

  return (
    <DashboardLayout>
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Informativo */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic">PERFIL DEL CLUB</h2>
          <p className="text-slate-500 text-sm font-medium">Información oficial registrada en la liga.</p>
        </div>
        <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Estatus: Activo</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card Principal: Identidad (Solo Consulta) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
            {/* Decoración de fondo */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-40 h-40 rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-950 p-1 shadow-2xl">
                <div className="w-full h-full rounded-[2.8rem] bg-slate-900 flex items-center justify-center border border-white/10">
                  <Shield className="h-16 w-16 text-emerald-500/80" />
                </div>
              </div>
              
              <h3 className="mt-6 text-2xl font-black text-white italic">TITANES FC</h3>
              <div className="flex items-center gap-2 mt-1">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Campeón Apertura 2025</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Categoría</span>
                <span className="text-white text-sm font-bold">Primera División</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Fundación</span>
                <span className="text-white text-sm font-bold">12 de Mayo, 2018</span>
              </div>
            </div>
          </div>

          {/* Contacto (Cards Rápidas) */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 space-y-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="h-4 w-4 text-slate-400 group-hover:text-emerald-400" />
              </div>
              <div>
                <p className="text-[9px] text-slate-500 font-bold uppercase">Correo Oficial</p>
                <p className="text-white text-xs">titanes_fc@liga.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                <Phone className="h-4 w-4 text-slate-400 group-hover:text-blue-400" />
              </div>
              <div>
                <p className="text-[9px] text-slate-500 font-bold uppercase">Teléfono Delegado</p>
                <p className="text-white text-xs">+52 55 1234 5678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Plantilla y Estadísticas */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Card de Jugadores Destacados */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Users className="h-5 w-5 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">Plantilla Destacada</h4>
              </div>
              <button className="text-xs font-bold text-emerald-400 flex items-center gap-1 hover:underline">
                Ver todos <ExternalLink className="h-3 w-3" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topPlayers.map((player) => (
                <div key={player.id} className="relative group bg-white/5 border border-white/5 p-5 rounded-[2rem] hover:bg-white/10 transition-all cursor-default">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-4 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                      <span className="text-white font-black text-lg">{player.photo}</span>
                    </div>
                    <h5 className="text-white font-bold text-sm leading-tight">{player.name}</h5>
                    <p className="text-slate-500 text-[10px] font-bold uppercase mt-1 tracking-tighter">{player.position}</p>
                    
                    <div className="mt-4 pt-4 border-t border-white/5 w-full flex justify-center items-center gap-2">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-white font-bold text-xs">
                        {player.goals ? `${player.goals} Goles` : `${player.cleanSheets} Invictos`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Información Adicional (Sede y Horario) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 flex items-start gap-4">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <MapPin className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">Sede Local</h5>
                <p className="text-slate-400 text-xs mt-1">Complejo Deportivo "La Noria", Campo 3.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Calendar className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">Día de Juego</h5>
                <p className="text-slate-400 text-xs mt-1">Sábados - 16:00 hrs (Promedio)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default MyClubPage;