
import { X, Zap, CheckCircle2 } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const QRScanner = () => {
  return (
     <DashboardLayout>
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Área de Cámara (Simulada) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_black_70%)] z-10 flex items-center justify-center">
        {/* Marco del Scanner */}
        <div className="w-72 h-72 border-2 border-emerald-500/50 rounded-[3rem] relative shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-emerald-400 animate-[scan_2s_linear_infinite] shadow-[0_0_15px_rgba(16,185,129,1)]"></div>
          
          {/* Esquinas estilizadas */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-emerald-500 rounded-tl-2xl"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-emerald-500 rounded-br-2xl"></div>
        </div>
      </div>

      {/* UI Overlay */}
      <div className="relative z-20 flex flex-col h-full p-8 justify-between pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest flex items-center gap-2">
              <Zap className="h-3 w-3 fill-emerald-400" /> Scanner Activo
            </p>
          </div>
          <button className="p-3 bg-red-500/20 border border-red-500/40 rounded-full text-red-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 pointer-events-auto">
          {/* Notificación de Último Escaneo Exitoso */}
          <div className="bg-emerald-500 p-4 rounded-[2rem] flex items-center gap-4 animate-in slide-in-from-bottom-8">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-slate-950 font-black text-sm italic uppercase">JUGADOR VALIDADO</p>
              <p className="text-slate-900 text-[10px] font-bold uppercase">Carlos Rivera • Delantero • #9</p>
            </div>
          </div>

          <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] text-center">
            <p className="text-white font-bold text-sm italic">Apunta al código QR de la app del jugador</p>
            <p className="text-slate-500 text-[10px] font-black uppercase mt-1">18 / 22 Jugadores Revisados</p>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default QRScanner;