 
import { Camera, Share2 } from 'lucide-react';

const PhotoGallery = () => {
  const albums = [
    { title: 'Final Clausura 2025', photos: 42, date: 'ABR 12', cover: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018' },
    { title: 'Jornada 12: Titanes FC', photos: 15, date: 'ABR 10', cover: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2' },
    { title: 'Entrega de Premios', photos: 28, date: 'MAR 28', cover: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] p-8 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-white/5 pb-8">
        <div>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Galería</h2>
          <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Capturando la pasión</p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
            <Camera className="text-emerald-400 h-5 w-5" />
            <span className="text-white font-black italic text-sm">1.2k Total Fotos</span>
        </div>
      </div>

      {/* Grid de Álbumes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album) => (
          <div key={album.title} className="group relative">
            {/* Contenedor Principal (Estilo Perfil Jugador) */}
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900/50 relative shadow-2xl transition-all duration-500 group-hover:border-emerald-500/50">
              <img 
                src={album.cover} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                alt={album.title}
              />
              
              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* Info Superior */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    <span className="text-white font-black italic text-[10px] uppercase tracking-widest">{album.date}</span>
                </div>
                <div className="flex gap-2">
                    <button className="p-3 bg-emerald-500 text-black rounded-xl hover:scale-110 transition-transform">
                        <Share2 className="h-4 w-4" />
                    </button>
                </div>
              </div>

              {/* Info Inferior */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-400 text-[10px] font-black uppercase italic tracking-widest">
                    {album.photos} Capturas
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white italic uppercase leading-none tracking-tighter group-hover:translate-x-2 transition-transform">
                  {album.title}
                </h4>
              </div>
            </div>

            {/* Efecto de capas debajo (Stacking) */}
            <div className="absolute -bottom-3 left-10 right-10 h-10 bg-white/5 border border-white/10 rounded-[2.5rem] -z-10 group-hover:-bottom-5 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PhotoGallery;