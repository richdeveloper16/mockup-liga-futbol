import React from 'react';
import { 
  Globe, 
  Award, 
  Calendar, 
  Share2, 
  TrendingUp 
} from 'lucide-react';

// Componentes de Iconos Custom para evitar errores de exportación
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TeamPublicProfile = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* PORTADA ESTILO NIKE/ADIDAS */}
      <div className="h-[40vh] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-40"
          alt="Stadium"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-12 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 bg-slate-900 border-4 border-[#020617] rounded-[2.5rem] flex items-center justify-center text-4xl font-black italic text-white shadow-2xl">
              TFC
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-emerald-500 text-black text-[10px] font-black uppercase rounded-lg italic">Club Oficial</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Fundado en 2018</span>
              </div>
              <h1 className="text-6xl font-black text-white italic uppercase tracking-tighter">Titanes FC</h1>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-slate-400 hover:text-white">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-white text-black font-black uppercase italic rounded-2xl hover:bg-emerald-500 transition-all text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Contactar para Amistoso
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* INFO Y PALMARÉS */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-md">
            <h4 className="text-sm font-black text-white italic uppercase mb-6 tracking-widest border-b border-white/5 pb-4">Palmarés</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-yellow-500/5 p-4 rounded-2xl border border-yellow-500/10">
                <Award className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="text-sm font-black text-white uppercase italic">Campeón Clausura 2025</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Primera División</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800/20 p-4 rounded-2xl border border-white/5">
                <Award className="h-8 w-8 text-slate-500" />
                <div>
                  <p className="text-sm font-black text-white uppercase italic">Subcampeón Copa Master</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Edición Verano</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <InstagramIcon className="h-6 w-6 text-slate-500 hover:text-pink-500 cursor-pointer transition-colors" />
            <FacebookIcon className="h-6 w-6 text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" />
            <Globe className="h-6 w-6 text-slate-500 hover:text-emerald-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* ÚLTIMA ACTIVIDAD (DERECHA) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/5 border border-emerald-500/10 p-8 rounded-[2.5rem] group hover:bg-emerald-500/10 transition-all">
              <TrendingUp className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-4xl font-black text-white italic tracking-tighter">85%</h3>
              <p className="text-xs text-slate-500 font-bold uppercase mt-2">Efectividad de Victoria</p>
            </div>
            <div className="bg-blue-500/5 border border-blue-500/10 p-8 rounded-[2.5rem] group hover:bg-blue-500/10 transition-all">
              <Calendar className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-4xl font-black text-white italic tracking-tighter">Campo 2</h3>
              <p className="text-xs text-slate-500 font-bold uppercase mt-2">Sede Habitual de Local</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
               <Globe className="h-32 w-32 text-white" />
            </div>
            <h4 className="text-xl font-black text-white italic uppercase mb-8 tracking-tighter">Historia del Club</h4>
            <p className="text-slate-400 leading-relaxed italic relative z-10">
              Fundado bajo los valores de la disciplina y el trabajo en equipo, Titanes FC ha escalado desde la tercera división hasta convertirse en un referente de la Liga Master. Con una base de jugadores jóvenes y una filosofía de ataque, el club busca expandir su legado en la próxima temporada 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPublicProfile;