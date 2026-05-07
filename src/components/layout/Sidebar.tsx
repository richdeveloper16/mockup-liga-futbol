import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import { 
  ChevronDown, BarChart3, Trophy, Users, MapPin, DollarSign, Gavel, Settings,
  Shield, UserSquare2, CalendarDays, CreditCard, TrendingUp, Megaphone,
  Timer, FileEdit, BookOpen, AlertTriangle, Wallet,
  UserCircle, Target, ListOrdered, Users2, LogOut,
  Newspaper,
  Globe,
  Search,
  Info
} from 'lucide-react';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<string | null>(null);
  const location = useLocation(); // Para resaltar la ruta activa

  const toggleMenu = (label: string) => {
    setOpenMenus(openMenus === label ? null : label);
  };

  const FULL_MENU_STRUCTURE = [
    {
      role: "SUPER_ADMIN",
      section: "Super Administrador",
      items: [
        { 
          label: 'Dashboard', 
          icon: BarChart3, 
          subItems: [
            { label: 'Métricas de Ingresos', path: '/notfoundgage/not-found-page' },
            { label: 'Equipos Inscritos', path: '/notfoundgage/not-found-page' },
            { label: 'Partidos Destacados', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Torneos', 
          icon: Trophy, 
          path: '/admin/tournaments',
          subItems: [
            { label: 'Temporadas', path: '/admin/admin-seasons' },
            { label: 'Categorías', path: '/admin/admin-categories' },
            { label: 'Formatos de Competencia', path: '/admin/admin-formats' }
          ] 
        },
        { 
          label: 'Usuarios y Roles', 
          icon: Users, 
          path: '/admin/users',
          subItems: [
            { label: 'Árbitros', path: '/notfoundgage/not-found-page' },
            { label: 'Delegados', path: '/notfoundgage/not-found-page' },
            { label: 'Staff', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Infraestructura', 
          icon: MapPin, 
          path: '/admin/infrastructure',
          subItems: [
            { label: 'Registro de Campos', path: '/notfoundgage/not-found-page' },
            { label: 'Disponibilidad', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Finanzas', 
          icon: DollarSign, 
          path: '/admin/finances',
          subItems: [
            { label: 'Reporte de Pagos', path: '/notfoundgage/not-found-page' },
            { label: 'Patrocinios', path: '/notfoundgage/not-found-page' },
            { label: 'Aprobación de Gastos', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Comisión Disciplinaria', 
          icon: Gavel, 
          path: '/admin/disciplinary',
          subItems: [
            { label: 'Reportes Arbitrales', path: '/notfoundgage/not-found-page' },
            { label: 'Sanciones Manuales', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Configuración', 
          icon: Settings, 
          path: '/admin/settings',
          subItems: [
            { label: 'Logotipos', path: '/notfoundgage/not-found-page' },
            { label: 'Correos Automáticos', path: '/notfoundgage/not-found-page' },
            { label: 'Reglamentos', path: '/notfoundgage/not-found-page' },
                { label: 'Carga Comunicados', path: '/notfoundgage/not-found-page' },
                   { label: 'Carga galeria', path: '/notfoundgage/not-found-page' }
          ] 
        },
      ]
    },
    {
      role: "DELEGATE",
      section: "Delegado de Equipo",
      items: [
        { 
          label: 'Mi Club', 
          icon: Shield, 
          subItems: [
            { label: 'Información General', path: '/delegate/team-information' },
            { label: 'Escudo', path: '/notfoundgage/not-found-page' },
            { label: 'Contacto', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Plantilla', 
          icon: UserSquare2, 
          path: '/club/roster',
          subItems: [
            { label: 'Lista Jugadores', path: '/delegate/player-list' },
            { label: 'Registro', path: '/delegate/register-player' },
            { label: 'Estatus Registro', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Calendario', 
          icon: CalendarDays, 
          path: '/club/calendar',
          subItems: [
            { label: 'Próximos Partidos', path: '/delegate/march-calendar' },
            { label: 'Detalle Partido', path: '/delegate/detail-match' }
          ] 
        },
        { 
          label: 'Pagos y Deudas', 
          icon: CreditCard, 
          path: '/club/payments',
          subItems: [
            { label: 'Inscripciones', path: '/notfoundgage/not-found-page' },
            { label: 'Multas Pendientes', path: '/notfoundgage/not-found-page' },
            { label: 'Historial', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Estadísticas Equipo', 
          icon: TrendingUp, 
          path: '/club/stats',
          subItems: [
            { label: 'Estadisticas', path: '/delegate/stats-team' },
            { label: 'Goleadores Internos', path: '/notfoundgage/not-found-page' },
            { label: 'Tarjetas', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Avisos', 
          icon: Megaphone, 
          path: '/club/notices',
          subItems: [
            { label: 'Notificaciones', path: '/notfoundgage/not-found-page' },
            { label: 'Cambios de Última Hora', path: '/notfoundgage/not-found-page' }
          ] 
        },
      ]
    },
    {
      role: "REFEREE",
      section: "Árbitro",
      items: [
        { 
          label: 'Partidos de Hoy', 
          icon: Timer, 
          subItems: [
            { label: 'Jornada Actual', path: '/referee/current-match' },
            { label: 'Check-in Equipos', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Cédula Digital', 
          icon: FileEdit, 
          path: '/referee/digital-acta',
          subItems: [
            { label: 'Registro de Eventos', path: '/notfoundgage/not-found-page' },
            { label: 'Cierre de Acta', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Mi Agenda', 
          icon: BookOpen, 
          path: '/referee/agenda',
          subItems: [
            { label: 'Historial Pitados', path: '/notfoundgage/not-found-page' },
            { label: 'Asignaciones Futuras', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Incidencias', 
          icon: AlertTriangle, 
          path: '/referee/incidents',
          subItems: [
            { label: 'Reporte de Conducta', path: '/notfoundgage/not-found-page' },
            { label: 'Estado del Campo', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Honorarios', 
          icon: Wallet, 
          path: '/referee/fees',
          subItems: [
            { label: 'Pagos Recibidos', path: '/notfoundgage/not-found-page' },
            { label: 'Pendientes', path: '/notfoundgage/not-found-page' }
          ] 
        },
      ]
    },
    {
      role: "PLAYER",
      section: "Jugador",
      items: [
        { 
          label: 'Mi Perfil', 
          icon: UserCircle, 
          path: '/player/profile',
          subItems: [
            { label: 'Carnet Digital (QR)', path: '/player/digital-carid' },
            { label: 'Ficha Médica', path: '/notfoundgage/not-found-page' },
                        { label: 'Pagos', path: '/player/payment-history' }
          ] 
        },
        { 
          label: 'Mis Estadísticas', 
          icon: Target, 
          path: '/player/stats',
          subItems: [
            { label: 'Goles Anotados', path: '/player/player-stats' },
            { label: 'Minutos Jugados', path: '/notfoundgage/not-found-page' },
            { label: 'Tarjetas', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Mi Calendario', 
          icon: CalendarDays, 
          path: '/player/calendar',
          subItems: [
            { label: 'Siguiente Partido', path: '/player/next-match' }
          ] 
        },
        { 
          label: 'Tablas', 
          icon: ListOrdered, 
          path: '/player/standings',
          subItems: [
            { label: 'Tabla General', path: '/player/league-standings' },
            { label: 'Goleo Individual', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Mi Equipo', 
          icon: Users2, 
          path: '/player/team',
          subItems: [
            { label: 'Equipo', path: '/player/team-info' },
            { label: 'Contacto Delegado', path: '/notfoundgage/not-found-page' }
          ] 
        },
      ]
    } ,
     {
      role: "PUBLIC",
      section: "Información Pública",
      items: [
        { 
          label: 'Explorar Liga', 
          icon: Globe, 
          subItems: [
            { label: 'Explorar Liga', path: '/public/explore-league' },
            { label: 'Perfil Equipo Pubico', path: '/public/public-team-profile' },
            { label: 'Liga', path: '/public/landingpage' },
            { label: 'Goleo Individual', path: '/notfoundgage/not-found-page' },
            { label: 'Sedes y Campos', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Noticias', 
          icon: Newspaper, 
          path: '/public/news',
          subItems: [
            { label: 'Comunicados', path: '/public/announcements' },
            { label: 'Galería de Fotos', path: '/public/photogallery' }
          ] 
        },
        { 
          label: 'Buscador', 
          icon: Search, 
          path: '/public/search',
          subItems: [
            { label: 'Equipos Inscritos', path: '/notfoundgage/not-found-page' },
            { label: 'Transferencias', path: '/notfoundgage/not-found-page' }
          ] 
        },
        { 
          label: 'Reglamento', 
          icon: Info, 
          path: '/public/legal',
          subItems: [
            { label: 'Estatutos', path: '/notfoundgage/not-found-page' },
            { label: 'Protocolos', path: '/notfoundgage/not-found-page' }
          ] 
        },
      ]
    }
  ];

  return (
    <aside className="w-80 h-screen sticky top-0 bg-slate-950/90 backdrop-blur-2xl border-r border-white/10 flex flex-col overflow-hidden">
      {/* Branding */}
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500 p-2.5 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <Trophy className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-white font-black text-xl leading-none">LIGA MASTER</h1>
            <p className="text-emerald-400 text-[10px] font-bold tracking-[0.3em] uppercase mt-1">Management</p>
          </div>
        </div>
      </div>

      {/* Nav Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-8 scrollbar-thin scrollbar-thumb-white/10">
        {FULL_MENU_STRUCTURE.map((section) => (
          <div key={section.role} className="space-y-1">
            <div className="px-4 mb-3 flex items-center justify-between">
              <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                {section.section}
              </h3>
              <div className="h-px bg-white/5 flex-1 ml-4"></div>
            </div>
            
            {section.items.map((item) => {
              const isOpen = openMenus === item.label;
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isItemActive = location.pathname.startsWith(item.path || "#" );

              return (
                <div key={item.label} className="group">
                  {/* Si tiene sub-ítems es un botón de toggle, si no, es un Link directo */}
                  {hasSubItems ? (
                    <button
                      onClick={() => toggleMenu(item.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                        isOpen || isItemActive ? 'bg-emerald-500/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`h-5 w-5 transition-colors ${isOpen || isItemActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                        <span className="text-sm font-semibold tracking-tight">{item.label}</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 opacity-50 transition-transform duration-300 ${isOpen ? 'rotate-180 opacity-100' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.path|| "#"}
                      className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                        isItemActive ? 'bg-emerald-500/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`h-5 w-5 transition-colors ${isItemActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                        <span className="text-sm font-semibold tracking-tight">{item.label}</span>
                      </div>
                    </Link>
                  )}

                  {/* Sub-items con navegación real */}
                  {hasSubItems && (
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-64 opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-9 space-y-1 border-l border-white/10">
                        {item.subItems.map((sub) => {
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <Link 
                              key={sub.label} 
                              to={sub.path}
                              className={`w-full block text-left px-6 py-2.5 text-xs transition-all rounded-r-lg relative group/sub ${
                                isSubActive ? 'text-emerald-400 bg-emerald-400/5 font-bold' : 'text-slate-500 hover:text-emerald-400 hover:bg-emerald-400/5'
                              }`}
                            >
                              <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-px bg-emerald-400 transition-all ${
                                isSubActive ? 'w-4' : 'w-0 group-hover/sub:w-4'
                              }`}></span>
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer Perfil */}
      <div className="p-6 border-t border-white/5 bg-black/40">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-blue-500 p-px">
              <div className="h-full w-full bg-slate-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">RD</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white leading-none">Rich Developer</span>
              <span className="text-[10px] text-slate-500 mt-1">super_admin@liga.com</span>
            </div>
          </div>
          <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg bg-red-500/10 text-red-500 text-xs font-bold hover:bg-red-500 hover:text-white transition-all">
            <LogOut className="h-3.5 w-3.5" />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;