import React from 'react';
// 1. Importa Link desde react-router-dom
import { Link } from 'react-router-dom'; 
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  MoreVertical,
  FileText,
  UserPlus,
  // 2. Elimina 'Link' de lucide-react para evitar conflictos
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const PlayListPage = () => {
  const players = [
    { id: 1, name: "Carlos Rivera", curp: "RIVC90...", status: "active", position: "Delantero", dorsal: "9", image: "CR" },
    { id: 2, name: "Luis Morales", curp: "MORL92...", status: "pending", position: "Portero", dorsal: "1", image: "LM" },
    { id: 3, name: "Erik Santos", curp: "SANE95...", status: "active", position: "Medio", dorsal: "10", image: "ES" },
    { id: 4, name: "Juan Peña", curp: "PENJ91...", status: "rejected", position: "Defensa", dorsal: "4", image: "JP" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"><CheckCircle2 className="h-3 w-3" /> Habilitado</span>;
      case 'pending':
        return <span className="flex items-center gap-1.5 text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"><AlertCircle className="h-3 w-3" /> Pendiente</span>;
      case 'rejected':
        return <span className="flex items-center gap-1.5 text-red-500 bg-red-500/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"><XCircle className="h-3 w-3" /> Rechazado</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Buscar por nombre o CURP..." 
              className="w-full bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-bold bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 transition-all">
            <Filter className="h-4 w-4" />
            Filtrar
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/20">
                <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Jugador</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Posición</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">CURP</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Estatus</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {players.map((player) => (
                <tr key={player.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-white/10 text-[10px] font-black text-white relative">
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 rounded-lg flex items-center justify-center text-[9px] border-2 border-slate-950">
                          {player.dorsal}
                        </span>
                        {player.image}
                      </div>
                      <div>
                        {/* 3. Cambia 'path' por 'to' y envuelve correctamente */}
                        <Link to={`/player/deatail-player`} className="hover:opacity-80 transition-opacity">
                          <p className="text-sm font-bold text-white leading-none">{player.name}</p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-tighter italic">ID: #{player.id}2026</p>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-300">{player.position}</td>
                  <td className="px-6 py-4 text-xs font-mono text-slate-500 uppercase tracking-wider">{player.curp}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      {getStatusBadge(player.status)}
                    </div>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all" title="Ver Documentos">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-black/20 border-t border-white/5 flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span>Mostrando {players.length} de 22 jugadores</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 transition-all">Anterior</button>
            <button className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 transition-all">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayListPage;