import  { useState } from 'react';
import { 
  ArrowLeft, 
  Camera, 
  Upload, 
  User, 
  IdCard, 
  Save, 
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';

const RegisterPlayerPage = () => {
  const [dragActive, setDragActive] = useState(false);

  return (
        <DashboardLayout>
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header con Botón de Regreso */}
      <div className="flex justify-between items-end">
        <div className="space-y-4">
          <Link 
            to="/club/roster" 
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4" /> Volver a Plantilla
          </Link>
          <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase">Alta de Jugador</h2>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button className="px-6 py-3 rounded-2xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all">
            Cancelar
          </button>
          <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-2xl font-black text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <Save className="h-4 w-4" />
            Finalizar Registro
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Lado Izquierdo: Foto y Dorsal (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl flex flex-col items-center">
            <div className="relative group">
              <div className="w-44 h-56 rounded-[2rem] bg-slate-900 border-2 border-dashed border-white/20 flex flex-col items-center justify-center overflow-hidden transition-all group-hover:border-emerald-500/50">
                <Camera className="h-12 w-12 text-slate-700 mb-2 group-hover:text-emerald-500/50 transition-colors" />
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest px-4 text-center">Subir Foto Oficial</span>
                
                {/* Overlay al hacer hover */}
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                  <Upload className="text-emerald-400 h-8 w-8" />
                </div>
              </div>
              
              {/* Badge del Dorsal */}
              <div className="absolute -bottom-4 -right-4 bg-slate-950 border border-white/10 p-4 rounded-2xl shadow-2xl">
                <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Dorsal</p>
                <input 
                  type="text" 
                  maxLength={2} 
                  placeholder="00" 
                  className="bg-transparent text-2xl font-black text-emerald-400 w-10 outline-none text-center"
                />
              </div>
            </div>
            
            <p className="mt-12 text-center text-slate-500 text-[10px] font-medium leading-relaxed">
              La foto debe ser con el uniforme oficial del equipo y fondo claro para el carnet digital.
            </p>
          </div>

          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem] p-6 flex gap-4">
            <Info className="h-5 w-5 text-emerald-500 shrink-0" />
            <p className="text-xs text-emerald-200/60 leading-relaxed">
              Los registros son validados por la comisión disciplinaria en un lapso de 24 a 48 horas.
            </p>
          </div>
        </div>

        {/* Lado Derecho: Datos y Documentación (Col 8) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Datos Personales */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                <User className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight italic">Información Personal</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nombre(s)</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-emerald-500 outline-none transition-all" placeholder="Ej. Juan Carlos" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Primer Apellido</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-emerald-500 outline-none transition-all" placeholder="Ej. Pérez García" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Segundo Apellido</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-emerald-500 outline-none transition-all" placeholder="Ej. Pérez García" />
              </div>
                <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Correo</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-emerald-500 outline-none transition-all" placeholder="Ej. Pérez García" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Telefono</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-emerald-500 outline-none transition-all" placeholder="Ej. Pérez García" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Fecha de Nacimiento</label>
                <input type="date" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-emerald-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Posición de Juego</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-emerald-500 outline-none transition-all appearance-none">
                  <option>Portero</option>
                  <option>Defensa</option>
                  <option>Mediocampista</option>
                  <option>Delantero</option>
                </select>
              </div>
            </div>
          </div>

          {/* Documentación CURP */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                <IdCard className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight italic">Documentación Legal</h4>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">CURP (18 caracteres)</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-mono tracking-widest focus:border-emerald-500 outline-none transition-all" placeholder="ABCD000000XXXXXX00" />
              </div>

              {/* Dropzone para PDF de CURP */}
              <div 
                className={`border-2 border-dashed rounded-[2rem] p-10 flex flex-col items-center justify-center transition-all ${
                  dragActive ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10 hover:border-white/20'
                }`}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
              >
                <div className="bg-white/5 p-4 rounded-2xl mb-4">
                  <Upload className="h-6 w-6 text-slate-400" />
                </div>
                <p className="text-sm font-bold text-white mb-1">Cargar PDF de CURP</p>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Arrastra el archivo o haz clic para buscar</p>
              </div>
            </div>
          </div>

          {/* Footer Mobile */}
          <div className="flex md:hidden flex-col gap-4">
            <button className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all">
              <Save className="h-4 w-4" /> Finalizar Registro
            </button>
            <button className="px-6 py-4 rounded-2xl border border-white/10 text-white font-bold text-sm">
              Cancelar
            </button>
          </div>

        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default RegisterPlayerPage;