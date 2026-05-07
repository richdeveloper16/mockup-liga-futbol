 
import { ArrowRight, X } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const NewSeasonForm = () => {
  return (
      <DashboardLayout>
    <div className="max-w-2xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50" />
      
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none">Nueva Temporada</h2>
          <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Configuración de periodo</p>
        </div>
        <button className="p-3 bg-white/5 rounded-2xl hover:bg-red-500/20 text-slate-500 hover:text-red-500 transition-all">
          <X className="h-5 w-5" />
        </button>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest ml-1">Nombre de la Temporada</label>
          <input type="text" placeholder="EJ. CLAUSURA 2026" className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white italic focus:outline-none focus:border-emerald-500/50 transition-all" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest ml-1">Fecha de Inicio</label>
            <input type="date" className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-emerald-500/50 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest ml-1">Fecha de Cierre</label>
            <input type="date" className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-emerald-500/50 transition-all" />
          </div>
        </div>

        <button className="w-full py-5 bg-white text-black font-black uppercase italic rounded-[1.5rem] hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 group">
          Registrar Temporada <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
    </DashboardLayout>
  );
};

export default NewSeasonForm;