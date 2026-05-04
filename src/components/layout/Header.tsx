import { Menu, Bell, Search } from 'lucide-react';
import { Props } from '../../interfaces/IUI';

export const Header = ({ onToggle }: Props) => (
  <header className="h-20 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40 px-8 flex items-center justify-between">
    
    {/* Sección Izquierda: Toggle y Buscador */}
    <div className="flex items-center gap-6">
      <button 
        onClick={onToggle} 
        className="p-2.5 bg-white/5 hover:bg-gym-purple/20 hover:text-gym-purple rounded-xl text-neutral-400 transition-all active:scale-90 border border-white/5 shadow-inner"
      >
        <Menu size={22} />
      </button>
      
      {/* Buscador minimalista opcional (muy común en Dashboards) */}
      <div className="hidden lg:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-neutral-500 focus-within:border-gym-purple/50 transition-all">
        <Search size={18} />
        <input 
          type="text" 
          placeholder="Buscar socio o rutina..." 
          className="bg-transparent border-none outline-none text-sm text-neutral-300 placeholder-neutral-600 w-64"
        />
      </div>
    </div>
    
    {/* Sección Derecha: Notificaciones y Perfil */}
    <div className="flex items-center gap-6">
      
      {/* Botón de Notificaciones con punto neón */}
      <button className="relative p-2 text-neutral-400 hover:text-gym-purple transition-colors">
        <Bell size={22} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gym-purple rounded-full shadow-[0_0_8px_rgba(157,78,221,1)]"></span>
      </button>

      <div className="flex items-center gap-4 pl-6 border-l border-white/10">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-black text-white tracking-tight italic uppercase">Coach Rich</p>
          <p className="text-[10px] text-gym-purple font-black uppercase tracking-[0.2em]">Head Trainer</p>
        </div>
        
        {/* Avatar con gradiente morado y sombra neón */}
        <div className="w-11 h-11 bg-gradient-to-tr from-gym-purple to-gym-darkPurple rounded-2xl text-white flex items-center justify-center font-black shadow-[0_0_15px_rgba(157,78,221,0.3)] border border-white/20 transform hover:rotate-3 transition-transform cursor-pointer">
          R
        </div>
      </div>
    </div>
  </header>
);