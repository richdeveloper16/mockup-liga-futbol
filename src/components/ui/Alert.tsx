import { useEffect, useState } from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { IToastProps } from '../../interfaces/IUI';

const AlertSweet = ({ title, message, onClose, type, duration = 4000 }: IToastProps) => {
  const [progress, setProgress] = useState(100);

  // Definimos si es tipo "success" (verde) o "info/default" (azul)
  const isSuccess = type === 'success';

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - (100 / (duration / 10))));
    }, 10);
    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-300">
      
      <div className={`relative bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl border border-white/20 flex flex-col items-center text-center animate-in zoom-in-95 duration-300 ease-out ${isSuccess ? 'shadow-emerald-200/50' : 'shadow-blue-200/50'}`}>
        
        {/* Icono Principal Dinámico (Azul o Verde) */}
        <div className={`w-20 h-20 ${isSuccess ? 'bg-emerald-50 text-emerald-500' : 'bg-blue-50 text-blue-600'} rounded-full flex items-center justify-center mb-6 relative transition-colors duration-500`}>
          {isSuccess ? (
            <CheckCircle2 size={44} strokeWidth={2.5} />
          ) : (
            <Info size={44} strokeWidth={2.5} />
          )}
          {/* Ping animation dinámico */}
          <div className={`absolute inset-0 ${isSuccess ? 'bg-emerald-400' : 'bg-blue-400'} rounded-full animate-ping opacity-20`}></div>
        </div>

        <div className="space-y-3 mb-8">
          <h3 className="text-2xl font-black text-slate-800 tracking-tight uppercase italic leading-tight">
            {title}
          </h3>
          <p className="text-slate-500 font-semibold text-sm leading-relaxed px-4">
            {message}
          </p>
        </div>

        <button 
          onClick={onClose}
          className={`w-full py-4 ${isSuccess ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'} text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-xs mb-8`}
        >
          Entendido
        </button>

        {/* BARRA DE ESTADO (Siguiendo el estilo de image_8f4742.png) */}
        <div className="w-full space-y-2 bg-slate-50/80 p-5 rounded-[1.8rem] border border-slate-100 shadow-inner">
          <div className="flex justify-between items-center mb-1 px-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Autocierre</span>
            <span className={`text-[10px] font-black ${isSuccess ? 'text-emerald-500' : 'text-blue-500'}`}>
              {Math.ceil((progress * duration) / 10000)}s
            </span>
          </div>
          
          <div className="relative h-2.5 w-full bg-slate-200/50 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-75 ease-linear relative"
              style={{ 
                width: `${progress}%`,
                background: isSuccess 
                  ? 'linear-gradient(90deg, #10b981 0%, #34d399 100%)' 
                  : 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
                boxShadow: isSuccess 
                  ? '0 0 12px rgba(16, 185, 129, 0.4)' 
                  : '0 0 12px rgba(37, 99, 235, 0.4)'
              }}
            >
              {/* Brillo de la barra */}
              <div className="absolute top-0 left-0 w-full h-[30%] bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AlertSweet;