import React from 'react';
import { 
  Users, 
  Shield, 
  MessageSquare, 
  Phone, 
  ChevronRight,
  Star,
  CheckCircle2,
  Clock,
  Briefcase
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const TeamInfoPage = () => {
  const delegate = {
    name: "Ricardo 'El Capi' Mendoza",
    role: "Delegado y Representante",
    phone: "+52 55 1234 5678",
    status: "Online",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop"
  };

  const teammates = [
    { id: 1, name: "Carlos Rivera", number: 9, pos: "DEL", status: "Disponible", rating: "9.2" },
    { id: 2, name: "Luis García", number: 10, pos: "MCO", status: "Lesionado", rating: "8.5" },
    { id: 3, name: "Héctor Moreno", number: 4, pos: "DFC", status: "Disponible", rating: "7.9" },
    { id: 4, name: "Javier Hernández", number: 14, pos: "DEL", status: "Suspendido", rating: "8.1" },
    { id: 5, name: "Memo Ochoa", number: 1, pos: "POR", status: "Disponible", rating: "8.8" },
    { id: 6, name: "Andrés Guardado", number: 18, pos: "MC", status: "Disponible", rating: "8.4" },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
        
        {/* HEADER EQUIPO */}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-blue-600/20 to-transparent p-8 rounded-[3rem] border border-white/10">
            <div className="w-24 h-24 bg-white/5 border border-white/20 rounded-[2rem] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-black text-white italic">TFC</span>
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Titanes FC</h2>
                <div className="flex items-center gap-4 mt-2 justify-center md:justify-start">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-1">
                        <Users className="h-3 w-3" /> 22 Jugadores
                    </span>
                    <span className="text-slate-700">•</span>
                    <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest flex items-center gap-1">
                        <Star className="h-3 w-3" /> 1er Lugar Liga
                    </span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* SECCIÓN DELEGADO (Col 4) */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Briefcase className="h-20 w-20 text-white" />
                    </div>
                    
                    <h4 className="text-sm font-black text-white italic uppercase mb-8 tracking-widest flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-400" /> Mi Delegado
                    </h4>

                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                            <div className="w-24 h-24 rounded-full border-2 border-blue-500 p-1">
                                <img src={delegate.photo} className="w-full h-full object-cover rounded-full" alt="Delegado" />
                            </div>
                            <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full"></div>
                        </div>
                        <h3 className="text-xl font-black text-white italic uppercase">{delegate.name}</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase mt-1">{delegate.role}</p>

                        <div className="grid grid-cols-2 gap-3 w-full mt-8">
                            <button className="flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all group">
                                <MessageSquare className="h-4 w-4 text-blue-400" />
                                <span className="text-[10px] font-black uppercase">Chat</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
                                <Phone className="h-4 w-4 text-emerald-400" />
                                <span className="text-[10px] font-black uppercase">Llamar</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 border border-white/5 rounded-[2rem] p-6">
                    <h5 className="text-[10px] text-slate-500 font-black uppercase mb-4 tracking-widest">Avisos del Delegado</h5>
                    <div className="space-y-4">
                        <div className="p-3 bg-blue-500/5 border-l-2 border-blue-500 rounded-r-xl">
                            <p className="text-[10px] text-white font-bold italic">"Llevar el uniforme alternativo (negro) para el sábado."</p>
                            <p className="text-[8px] text-slate-600 font-black uppercase mt-2">Hace 2 horas</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* LISTA DE COMPAÑEROS (Col 8) */}
            <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
                <div className="flex items-center justify-between mb-8">
                    <h4 className="text-lg font-black text-white italic uppercase tracking-tighter">Plantilla Oficial</h4>
                    <div className="flex gap-2">
                        {['Todo', 'Disponible', 'Baja'].map((f, i) => (
                            <button key={f} className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all ${i === 0 ? 'bg-white text-black' : 'text-slate-500 hover:text-white'}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {teammates.map((player) => (
                        <div key={player.id} className="group flex items-center justify-between p-4 bg-black/20 border border-white/5 hover:border-white/20 rounded-2xl transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                                    <span className="text-xs font-black text-slate-400">#{player.number}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-black text-white uppercase italic">{player.name}</p>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-[9px] text-blue-400 font-black uppercase">{player.pos}</span>
                                        <span className="text-slate-700">•</span>
                                        <span className={`text-[9px] font-black uppercase ${
                                            player.status === 'Disponible' ? 'text-emerald-500' : 
                                            player.status === 'Lesionado' ? 'text-orange-500' : 'text-red-500'
                                        }`}>
                                            {player.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-black text-white italic">{player.rating}</p>
                                <p className="text-[8px] text-slate-600 font-black uppercase">Rating</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <button className="w-full mt-6 py-4 border border-dashed border-white/10 rounded-2xl text-[10px] font-black text-slate-500 uppercase hover:text-white hover:border-white/30 transition-all flex items-center justify-center gap-2">
                    Ver Plantilla Completa <ChevronRight className="h-3 w-3" />
                </button>
            </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeamInfoPage;