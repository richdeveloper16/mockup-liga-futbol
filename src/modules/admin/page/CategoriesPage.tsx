import React from 'react';
import { Layers, Shield, ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom'; // Asegúrate de que Link esté bien importado
import DashboardLayout from '@/components/layout/DashboardLayout';

const CategoriesPage = () => {
  const categories = [
    { title: 'Primera División', age: 'Libre', min: 16, color: 'emerald' },
    { title: 'Veteranos Master', age: '35+', min: 35, color: 'blue' },
    { title: 'Fuerzas Básicas', age: 'U-18', min: 15, color: 'purple' },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-10 bg-[#020617] min-h-screen bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        
        {/* ENCABEZADO CORREGIDO: Flexbox para alinear el botón a la derecha */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">Categorías</h2>
            <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">Divisiones y límites de edad</p>
          </div>

          <Link 
            to="/admin/register-category" // Corregí la ruta a category si aplica
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-[1.5rem] text-xs font-black uppercase italic hover:bg-emerald-500 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.3)] active:scale-95"
          >
            <div className="bg-black/10 p-1 rounded-lg group-hover:bg-black/20 transition-colors">
              <Plus className="h-4 w-4" />
            </div>
            Crear Categoría
          </Link>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-[3rem] p-10 relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                <Shield className="h-32 w-32 text-white" />
              </div>
              
              <div className="mb-8 h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <Layers className="h-6 w-6 text-emerald-500" />
              </div>

              <h3 className="text-2xl font-black text-white italic uppercase mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
                {cat.title}
              </h3>

              <div className="flex gap-3 mb-8">
                <div className="bg-white/5 px-4 py-1.5 rounded-xl border border-white/5 text-[9px] font-black text-slate-400 uppercase italic">
                  Edad: {cat.age}
                </div>
                <div className="bg-white/5 px-4 py-1.5 rounded-xl border border-white/5 text-[9px] font-black text-slate-400 uppercase italic">
                  Mín: {cat.min} AÑOS
                </div>
              </div>

              <button className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase italic tracking-[0.2em] hover:text-white transition-all group/btn">
                Gestionar Equipos 
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CategoriesPage;