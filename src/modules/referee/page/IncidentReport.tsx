import React from 'react';
import { AlertTriangle, Camera, Send } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const IncidentReport = () => {
  return (
     <DashboardLayout>
    <div className="p-6 bg-[#0f172a] min-h-screen space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle className="h-6 w-6 text-red-500" />
        <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">Reporte de Incidente</h2>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="text-[10px] text-slate-500 font-black uppercase ml-2">Gravedad del Evento</span>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {['Leve', 'Moderado', 'Grave'].map(level => (
              <button key={level} className="py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white uppercase hover:bg-red-500/20 hover:border-red-500/50 transition-all">
                {level}
              </button>
            ))}
          </div>
        </label>

        <label className="block">
          <span className="text-[10px] text-slate-500 font-black uppercase ml-2">Descripción de los hechos</span>
          <textarea 
            className="w-full mt-2 bg-black/40 border border-white/10 rounded-2xl p-4 text-white text-sm focus:border-red-500/50 focus:outline-none min-h-[150px]"
            placeholder="Detalla lo ocurrido (insultos, agresiones, invasión de campo...)"
          ></textarea>
        </label>

        <button className="w-full py-4 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center gap-2 text-slate-500 hover:text-white hover:border-white/30 transition-all">
          <Camera className="h-6 w-6" />
          <span className="text-[10px] font-black uppercase">Adjuntar Evidencia (Foto/Video)</span>
        </button>

        <button className="w-full py-4 bg-red-600 text-white font-black uppercase italic rounded-2xl shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
          Enviar a Comisión Disciplinaria
        </button>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default IncidentReport;