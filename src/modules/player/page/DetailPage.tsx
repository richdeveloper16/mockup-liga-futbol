 
import { 
  UserPlus
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PlayerDetailPage from '@/components/shared/PlayerDetailPage';


const DetailPage = () => {
  // Datos simulados de la plantilla


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
<PlayerDetailPage></PlayerDetailPage>
    </div>
    </DashboardLayout>
  );
};

export default DetailPage;