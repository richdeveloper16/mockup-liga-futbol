import React from 'react';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  MoreVertical,
  FileText,
  UserPlus
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PlayListPage from '@/components/shared/LeagueTable';


const TeamStatistics = () => {
  // Datos simulados de la plantilla
  const players = [
    { id: 1, name: "Carlos Rivera", curp: "RIVC90...", status: "active", position: "Delantero", dorsal: "9", image: "CR" },
    { id: 2, name: "Luis Morales", curp: "MORL92...", status: "pending", position: "Portero", dorsal: "1", image: "LM" },
    { id: 3, name: "Erik Santos", curp: "SANE95...", status: "active", position: "Medio", dorsal: "10", image: "ES" },
    { id: 4, name: "Juan Peña", curp: "PENJ91...", status: "rejected", position: "Defensa", dorsal: "4", image: "JP" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"><CheckCircle2 className="h-3 w-3" /> Habilitado</span>;
      case 'pending':
        return <span className="flex items-center gap-1.5 text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"><AlertCircle className="h-3 w-3" /> Pendiente</span>;
      case 'rejected':
        return <span className="flex items-center gap-1.5 text-red-500 bg-red-500/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"><XCircle className="h-3 w-3" /> Rechazado</span>;
      default:
        return null;
    }
  };

  return (

     <DashboardLayout>
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header con Acciones */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase">Plantilla Oficial</h2>
          <p className="text-slate-500 text-sm font-medium">Gestiona el registro y estatus de tus jugadores.</p>
        </div>
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-black text-sm transition-all hover:bg-emerald-400 hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <UserPlus className="h-4 w-4" />
          Registrar Jugador
        </button>
      </div>

      {/* Cards de Resumen Rápido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Total Registrados</p>
          <div className="flex items-end gap-2 mt-2">
            <h4 className="text-3xl font-black text-white leading-none">22</h4>
            <span className="text-emerald-500 text-xs font-bold pb-1">/ 25 Cupos</span>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Habilitados</p>
          <h4 className="text-3xl font-black text-emerald-400 mt-2 leading-none">18</h4>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Doc. Pendiente</p>
          <h4 className="text-3xl font-black text-yellow-500 mt-2 leading-none">04</h4>
        </div>
      </div>
<PlayListPage></PlayListPage>
    </div>
    </DashboardLayout>
  );
};

export default TeamStatistics;