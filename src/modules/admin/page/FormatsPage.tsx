 
import { GitBranch, ListOrdered, LayoutGrid, CheckCircle2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';

const FormatsPage = () => {
  const formats = [
    { type: 'Liga Tradicional', desc: 'Todos contra todos por puntos a doble vuelta.', icon: ListOrdered },
    { type: 'Playoffs / Eliminación', desc: 'Llaves directas desde octavos hasta la gran final.', icon: GitBranch },
    { type: 'Grupos + Liguilla', desc: 'Fase clasificatoria seguida de eliminación directa.', icon: LayoutGrid },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-10 bg-[#020617] min-h-screen bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        
        {/* ENCABEZADO CON BOTÓN DE ACCIÓN */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">Formatos</h2>
            <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">Sistemas de puntuación y rondas</p>
          </div>

          <Link 
            to="/admin/register-format" 
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-[1.5rem] text-xs font-black uppercase italic hover:bg-emerald-500 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.3)] active:scale-95"
          >
            <div className="bg-black/10 p-1 rounded-lg group-hover:bg-black/20 transition-colors">
              <Plus className="h-4 w-4" />
            </div>
            Crear Formato
          </Link>
        </div>

        {/* GRID DE FORMATOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formats.map((f) => (
            <div key={f.type} className="flex flex-col sm:flex-row gap-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 hover:border-emerald-500/30 transition-all group">
              {/* Contenedor del Icono */}
              <div className="h-20 w-20 shrink-0 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center shadow-inner group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
                <f.icon className="h-10 w-10 text-emerald-500" />
              </div>

              {/* Información */}
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl font-black text-white italic uppercase mb-2 tracking-tight group-hover:text-emerald-400 transition-colors">
                  {f.type}
                </h4>
                <p className="text-slate-400 text-sm italic font-medium leading-relaxed mb-4 max-w-sm">
                  {f.desc}
                </p>
                <div className="flex items-center gap-2 text-emerald-500">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                  <span className="text-[10px] font-black uppercase italic tracking-widest">Sistema Operativo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FormatsPage;