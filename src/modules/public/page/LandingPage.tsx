import React from 'react';
import { 
  Trophy, 
  BookOpen, 
  Image as ImageIcon, 
  Mail, 
  ChevronRight, 
  ArrowUpRight, 
  MapPin, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
import { Link } from 'react-router-dom'; // O la librería de ruteo que estés usando

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] text-white font-sans">
      
{/* --- NAVIGATION / NAVBAR --- */}
<nav className="fixed top-0 left-0 w-full z-50 px-8 py-6">
  <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] px-8 py-4 shadow-2xl">
    
    {/* Logo */}
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center rotate-3 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
        <Trophy className="h-5 w-5 text-black" />
      </div>
      <span className="text-xl font-black italic tracking-tighter uppercase">
        Liga <span className="text-emerald-500">Master</span>
      </span>
    </div>

    {/* Enlaces de Navegación (Anclas) */}
    <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase italic tracking-widest text-slate-400">
      <a href="#reglamento" className="hover:text-emerald-400 transition-colors">Reglamento</a>
      <a href="#galeria" className="hover:text-emerald-400 transition-colors">Galería</a>
      <a href="#contacto" className="hover:text-emerald-400 transition-colors">Contacto</a>
    </div>

    {/* Botón de Login con Redirección */}
    <div className="flex items-center gap-4">
      <Link 
        to="/login" 
        className="px-6 py-2.5 bg-emerald-500 text-black rounded-xl text-[10px] font-black uppercase italic hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 group"
      >
        <Users className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
        Iniciar Sesión
      </Link>
    </div>
  </div>
</nav>

      {/* --- HERO SECTION --- */}
   <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-[#020617] z-0" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md">
            <Trophy className="h-4 w-4 text-emerald-400" />
            <span className="text-[10px] font-black uppercase italic tracking-[0.2em]">Temporada 2026 Abierta</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none mb-6">
            LIGA <span className="text-emerald-500">MASTER</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium italic mb-10">
            La competición amateur más prestigiosa de la región. Tecnología, disciplina y pasión en un solo lugar.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="px-10 py-5 bg-emerald-500 text-black font-black uppercase italic rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Inscribir mi Equipo
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase italic rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md">
              Ver Rol de Juegos
            </button>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN: REGLAMENTO --- */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="h-1 w-20 bg-emerald-500 rounded-full" />
            <h2 className="text-5xl font-black italic uppercase tracking-tighter">Reglamento <br/> <span className="text-slate-500">Oficial</span></h2>
            <p className="text-slate-400 italic leading-relaxed">
              Mantenemos el fair play y la disciplina como pilares fundamentales. Consulta nuestras normativas actualizadas para la temporada 2026, incluyendo transferencias, sanciones y protocolos de arbitraje.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Estatutos Generales', icon: BookOpen },
                { title: 'Código de Conducta', icon: ShieldCheck },
                { title: 'Sistema de Puntuación', icon: Trophy },
                { title: 'Protocolo Médico', icon: Users }
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                  <item.icon className="h-5 w-5 text-emerald-400" />
                  <span className="text-xs font-bold uppercase italic">{item.title}</span>
                  <ArrowUpRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-emerald-500/20 rounded-[4rem] rotate-3 absolute inset-0 blur-3xl" />
             <div className="relative bg-slate-900 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl">
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-emerald-500 font-black italic">PDF V.2026.1</span>
                    <button className="text-[10px] font-black uppercase bg-white text-black px-4 py-1 rounded-lg">Descargar</button>
                  </div>
                  <div className="space-y-4 opacity-50">
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                    <div className="h-2 w-5/6 bg-white/10 rounded" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN: GALERÍA (PREVIEW) --- */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Galería</h2>
              <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Momentos de gloria</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-black uppercase italic text-emerald-400 hover:text-white transition-colors">
              Ver galería completa <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
            <div className="md:col-span-2 rounded-[2.5rem] overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN: CONTACTO --- */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="bg-emerald-600 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <Mail className="h-64 w-64 text-white" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-black italic uppercase tracking-tighter mb-6">
                ¿Tienes dudas? <br/> Escríbenos.
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-emerald-900 font-bold italic">
                  <Mail className="h-6 w-6" /> info@ligamaster.com
                </div>
                <div className="flex items-center gap-4 text-emerald-900 font-bold italic">
                  <MapPin className="h-6 w-6" /> Ciudad de México, MX
                </div>
              </div>
            </div>
            <form className="space-y-4 bg-black/10 p-8 rounded-[2.5rem] backdrop-blur-sm">
              <input type="text" placeholder="Nombre completo" className="w-full bg-white/10 border border-black/10 rounded-2xl py-4 px-6 text-black placeholder:text-emerald-900 focus:outline-none focus:bg-white/20 transition-all" />
              <input type="email" placeholder="Correo electrónico" className="w-full bg-white/10 border border-black/10 rounded-2xl py-4 px-6 text-black placeholder:text-emerald-900 focus:outline-none focus:bg-white/20 transition-all" />
              <textarea placeholder="¿En qué podemos ayudarte?" rows={4} className="w-full bg-white/10 border border-black/10 rounded-2xl py-4 px-6 text-black placeholder:text-emerald-900 focus:outline-none focus:bg-white/20 transition-all" />
              <button className="w-full py-5 bg-black text-white font-black uppercase italic rounded-2xl hover:bg-slate-900 transition-all">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">
          © 2026 Liga Master Management - Developed by Ricardo
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;