import React from 'react';
import { Layers, Users, ShieldPlus } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const NewCategoryForm = () => {
  return (
               <DashboardLayout>
    <div className="max-w-2xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-4 bg-emerald-500 rounded-2xl rotate-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <Layers className="h-6 w-6 text-black" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Nueva Categoría</h2>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Definición de nivel y edad</p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest">Nombre del Nivel</label>
          <input type="text" placeholder="EJ. VETERANOS MASTER" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white italic uppercase focus:border-emerald-500/50 outline-none" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest">Edad Mínima</label>
            <input type="number" placeholder="35" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white outline-none focus:border-emerald-500/50" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest">Cupos Máximos</label>
            <input type="number" placeholder="20" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white outline-none focus:border-emerald-500/50" />
          </div>
        </div>

        <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem] flex items-center gap-4">
          <ShieldPlus className="h-6 w-6 text-emerald-500" />
          <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed italic">Al crear esta categoría, podrás asignar delegados y configurar el límite de extranjeros por equipo.</p>
        </div>

        <button className="w-full py-5 bg-emerald-500 text-black font-black uppercase italic rounded-2xl hover:bg-emerald-400 transition-all shadow-xl">
          Guardar Categoría
        </button>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default NewCategoryForm;