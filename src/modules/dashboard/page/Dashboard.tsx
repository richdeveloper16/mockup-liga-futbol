import DashboardLayout from '../../../components/layout/DashboardLayout';
import { StatCard } from '../../../components/dashboard/StatCard';
import { Users, TrendingUp, DollarSign, Activity, UsersIcon, CalendarIcon } from 'lucide-react';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Saludo y Título */}
        <div>
          <h2 className="text-3xl font-bold text-white">Bienvenido, Rich Developer</h2>
          <p className="text-slate-400 mt-1">Aquí está el resumen de la liga para hoy.</p>
        </div>

        {/* Fila de Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Equipos Activos" value="24" icon={UsersIcon} trend="+2 esta semana" />
          <StatCard title="Partidos Hoy" value="8" icon={CalendarIcon} />
          <StatCard title="Goles Totales" value="1,240" icon={TrendingUp} />
          <StatCard title="Estatus Liga" value="Activo" icon={Activity} />
        </div>

        {/* Sección Inferior: Partidos Próximos vs Tabla */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-6">Próximos Encuentros</h4>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-bold text-white">E{i}</div>
                    <span className="text-white font-medium text-sm">VS</span>
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-bold text-white">E{i+1}</div>
                  </div>
                  <span className="text-slate-400 text-xs">Hoy 16:00 PM</span>
                  <button className="text-emerald-400 text-xs font-bold hover:underline">Ver Cédula</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-6">Estado Financiero</h4>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm">Total Recaudado</p>
              <h3 className="text-4xl font-bold text-white">$45,200</h3>
            </div>
            <button className="w-full mt-8 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-colors">
              Generar Reporte Mensual
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  
  );
};

export default DashboardPage;