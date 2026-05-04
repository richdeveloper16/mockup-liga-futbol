import React from 'react';
import { 
  QrCode, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  CreditCard,
  Verified,
  Share2,
  Download
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const DigitalIDCard = () => {
  // Datos simulados del perfil del jugador
  const player = {
    name: "CARLOS RIVERA",
    id: "LM-2026-0984",
    role: "Delantero Centro",
    team: "Titanes FC",
    number: "9",
    category: "Primera División",
    validUntil: "Dic 2026",
    status: "Activo",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop"
  };

  return (
    <DashboardLayout>
      <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-500">
        
        {/* Header con Acciones */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Mi Carnet Digital</h2>
            <p className="text-slate-500 text-sm font-medium">Identificación Oficial • Liga Master 2026</p>
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white transition-all">
              <Download className="h-5 w-5" />
            </button>
            <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white transition-all">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* CARNET LADO A: FRONT (Visual) */}
          <div className="relative group perspective-1000">
            {/* Glow de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-[#0a0f1d] border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl">
              {/* Textura de fondo y Holograma */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-40"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
              
              {/* Contenido del Carnet */}
              <div className="relative p-8">
                {/* Logo Liga y Status */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck className="h-6 w-6 text-emerald-400" />
                    <span className="font-black italic tracking-tighter leading-none text-xl">LIGA MASTER<br/><span className="text-[10px] text-slate-500 not-italic tracking-widest">MANAGEMENT</span></span>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full">
                    <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">ACTIVO</span>
                  </div>
                </div>

                <div className="flex gap-8 items-center">
                  {/* Foto del Jugador */}
                  <div className="relative">
                    <div className="w-32 h-40 bg-slate-800 rounded-2xl overflow-hidden border-2 border-white/10">
                      <img src={player.photo} alt="Jugador" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-black italic border-4 border-[#0a0f1d]">
                      {player.number}
                    </div>
                  </div>

                  {/* Datos Principales */}
                  <div className="flex-1 space-y-1">
                    <p className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.2em]">Jugador Profesional</p>
                    <h3 className="text-2xl font-black text-white italic leading-tight uppercase">{player.name}</h3>
                    <p className="text-slate-400 font-bold text-sm italic">{player.team}</p>
                    <div className="pt-4 flex gap-4">
                        <div>
                            <p className="text-[8px] text-slate-500 font-black uppercase">Posición</p>
                            <p className="text-xs text-white font-bold">{player.role}</p>
                        </div>
                        <div className="w-px h-6 bg-white/10"></div>
                        <div>
                            <p className="text-[8px] text-slate-500 font-black uppercase">Categoría</p>
                            <p className="text-xs text-white font-bold">{player.category}</p>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Footer del Carnet */}
                <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center text-[9px] font-black text-slate-500 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Verified className="h-3 w-3 text-blue-400" />
                    ID: {player.id}
                  </div>
                  <span>VENCE: {player.validUntil}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARNET LADO B: QR y Seguridad */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-white rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                   <QrCode className="h-40 w-40 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-black italic uppercase">Código de Validación</h4>
                  <p className="text-slate-500 text-sm mt-1">Muestra este código al árbitro antes de iniciar el encuentro para validar tu participación.</p>
                </div>
                <div className="flex gap-4 w-full">
                    <div className="flex-1 bg-black/40 border border-white/5 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-1">
                            <MapPin className="h-3 w-3 text-slate-500" />
                            <span className="text-[8px] text-slate-500 font-black uppercase">Sede Oficial</span>
                        </div>
                        <p className="text-[10px] text-white font-bold uppercase italic">La Noria Pro</p>
                    </div>
                    <div className="flex-1 bg-black/40 border border-white/5 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 mb-1">
                            <Calendar className="h-3 w-3 text-slate-500" />
                            <span className="text-[8px] text-slate-500 font-black uppercase">Registro</span>
                        </div>
                        <p className="text-[10px] text-white font-bold uppercase italic">Temp. 2026</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Aviso de Seguridad */}
            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl flex gap-4 items-center">
                <div className="p-2 bg-blue-500 rounded-lg">
                    <CreditCard className="h-4 w-4 text-white" />
                </div>
                <p className="text-[10px] text-blue-400 font-medium leading-relaxed uppercase tracking-tighter">
                    Este carnet es personal e intransferible. El uso indebido será sancionado por la comisión disciplinaria de la liga.
                </p>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default DigitalIDCard;