 
import { GitBranch, ListOrdered, LayoutGrid, Check } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const NewFormatForm = () => {
  return (

     <DashboardLayout>
    <div className="max-w-3xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12">
      <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-8 text-center">Configurar <span className="text-emerald-500">Sistema</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Liga', icon: ListOrdered, selected: true },
          { label: 'Eliminación', icon: GitBranch, selected: false },
          { label: 'Grupos', icon: LayoutGrid, selected: false }
        ].map((f) => (
          <button key={f.label} className={`p-6 rounded-[2rem] border transition-all flex flex-col items-center gap-3 ${f.selected ? 'bg-emerald-500 border-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'bg-white/5 border-white/5 text-slate-500 hover:border-white/20'}`}>
            <f.icon className="h-8 w-8" />
            <span className="text-[10px] font-black uppercase italic">{f.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest">Puntos por Victoria</label>
          <input type="number" defaultValue="3" className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white outline-none focus:border-emerald-500/50" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest">Vueltas de Calendario</label>
          <input type="number" defaultValue="2" className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white outline-none focus:border-emerald-500/50" />
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 border border-white/5 rounded-2xl bg-white/5 mb-10">
        <div className="h-6 w-6 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Check className="h-4 w-4 text-black" />
        </div>
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Habilitar desempate por diferencia de goles</span>
      </div>

      <button className="w-full py-5 bg-white text-black font-black uppercase italic rounded-[2rem] hover:bg-emerald-500 transition-all text-sm tracking-widest">
        Confirmar Formato de Torneo
      </button>
    </div>
    </DashboardLayout>
  );
};

export default NewFormatForm;