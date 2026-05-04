import React from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Download, 
  ExternalLink,
  Receipt,
  Wallet
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const PaymentHistoryPage = () => {
  const paymentHistory = [
    { id: 'INV-001', concept: 'Inscripción Torneo Apertura', date: '15 Abr 2026', amount: 1200, status: 'paid', method: 'Tarjeta - 4242' },
    { id: 'INV-002', concept: 'Mensualidad Abril', date: '05 Abr 2026', amount: 450, status: 'paid', method: 'Transferencia' },
    { id: 'INV-003', concept: 'Seguro de Gastos Médicos', date: '02 Mar 2026', amount: 800, status: 'paid', method: 'Efectivo' },
    { id: 'INV-004', concept: 'Mensualidad Marzo', date: '01 Mar 2026', amount: 450, status: 'expired', method: '-' },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8 animate-in fade-in duration-700">
        
        {/* HEADER */}
        <div>
          <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Finanzas y Pagos</h2>
          <p className="text-slate-500 text-sm font-medium">Gestiona tus cuotas y descarga tus comprobantes</p>
        </div>

        {/* STATUS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Saldo Pendiente */}
          <div className="bg-gradient-to-br from-red-500/20 to-transparent border border-red-500/30 p-8 rounded-[2.5rem] relative overflow-hidden">
            <AlertCircle className="absolute -right-4 -top-4 h-32 w-32 text-red-500/10" />
            <p className="text-[10px] text-red-400 font-black uppercase tracking-[0.2em] mb-2">Deuda Pendiente</p>
            <h3 className="text-4xl font-black text-white italic">$450.00</h3>
            <p className="text-slate-400 text-xs mt-4 font-medium italic">Vence en: <span className="text-white">3 días</span></p>
            <button className="mt-6 w-full py-3 bg-white text-black font-black uppercase italic rounded-xl hover:bg-red-500 hover:text-white transition-all text-xs">
              Pagar Ahora
            </button>
          </div>

          {/* Próximo Pago */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-2">Próximo Cargo</p>
            <h3 className="text-4xl font-black text-white italic">$450.00</h3>
            <p className="text-slate-400 text-xs mt-4 font-medium italic">Mensualidad Mayo • 01/05/2026</p>
          </div>

          {/* Estatus Elegibilidad */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center">
            <div className="p-3 bg-emerald-500 rounded-2xl mb-3 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <CheckCircle2 className="h-6 w-6 text-slate-950" />
            </div>
            <h4 className="text-white font-black italic uppercase tracking-tight">Jugador Elegible</h4>
            <p className="text-[10px] text-emerald-500 font-bold uppercase mt-1">Sin restricciones administrativas</p>
          </div>
        </div>

        {/* TABLA DE HISTORIAL */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <h4 className="text-lg font-black text-white italic uppercase flex items-center gap-2">
                <Receipt className="h-5 w-5 text-blue-400" /> Historial de Transacciones
            </h4>
            <button className="text-[10px] font-black text-slate-500 uppercase hover:text-white transition-colors flex items-center gap-2">
                <Download className="h-4 w-4" /> Descargar Todo (PDF)
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/2">
                  <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Concepto</th>
                  <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Fecha</th>
                  <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Monto</th>
                  <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Estatus</th>
                  <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {paymentHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6">
                      <p className="text-sm font-black text-white uppercase italic">{item.concept}</p>
                      <p className="text-[10px] text-slate-500 font-bold">{item.id} • {item.method}</p>
                    </td>
                    <td className="p-6 text-sm text-slate-400 font-medium">{item.date}</td>
                    <td className="p-6 text-sm font-black text-white italic">${item.amount.toFixed(2)}</td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter border ${
                        item.status === 'paid' 
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' 
                        : 'bg-red-500/10 border-red-500/20 text-red-500'
                      }`}>
                        {item.status === 'paid' ? 'Completado' : 'Vencido'}
                      </span>
                    </td>
                    <td className="p-6">
                      <button className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MÉTODOS DE PAGO GUARDADOS */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-black text-white italic uppercase tracking-widest">Método de Pago Predeterminado</h4>
                <button className="text-[10px] font-black text-blue-400 uppercase hover:underline">Gestionar Tarjetas</button>
            </div>
            <div className="flex items-center gap-4 bg-black/40 p-4 rounded-2xl border border-white/5 w-fit">
                <div className="bg-slate-800 p-2 rounded-lg">
                    <CreditCard className="h-6 w-6 text-slate-400" />
                </div>
                <div>
                    <p className="text-xs font-black text-white italic uppercase tracking-tighter">VISA •••• 4242</p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase">Expira: 12/28</p>
                </div>
                <div className="ml-8 px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[8px] text-blue-400 font-black uppercase">
                    Predeterminado
                </div>
            </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default PaymentHistoryPage;