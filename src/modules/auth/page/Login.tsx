import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../../components/ui/Alert';
import { Trophy, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowAlert(true);

      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] p-4">
      
      {/* Sistema de Alertas Flotante - Estilo Emerald */}
      {showAlert && (
        <div className="fixed top-8 right-8 z-[100] w-full max-w-sm animate-in slide-in-from-right duration-500">
          <Alert
            type="success"
            title="ACCESO AUTORIZADO"
            message="BIENVENIDO DE NUEVO. REDIRIGIENDO AL PANEL..."
            onClose={() => setShowAlert(false)}
          />
        </div>
      )}

      {/* Contenedor Principal con Bordes "Master" */}
      <div className="relative w-full max-w-md">
        
        {/* Glow Effects de fondo */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
        
        <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-[3rem] shadow-2xl p-10 overflow-hidden">
          
          {/* Línea decorativa superior */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

          {/* Logo y Encabezado con Estilo Agresivo */}
          <div className="flex flex-col items-center mb-10">
            <div className="p-4 bg-emerald-500 rounded-[1.5rem] shadow-[0_0_30px_rgba(16,185,129,0.3)] mb-6 rotate-3">
              <Trophy className="h-10 w-10 text-black" />
            </div>
            <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">
              LIGA <span className="text-emerald-500">MASTER</span>
            </h1>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">Portal de Administración</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Campo: Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest ml-1">Usuario / Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-600 group-focus-within:text-emerald-400 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-black/40 border border-white/5 rounded-2xl text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/50 transition-all italic font-medium"
                  placeholder="CORREO@LIGA.COM"
                />
              </div>
            </div>

            {/* Campo: Contraseña */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black text-emerald-500 uppercase italic tracking-widest">Contraseña</label>
                <button type="button" className="text-[9px] font-bold text-slate-500 hover:text-white uppercase transition-colors">¿Olvidaste tu clave?</button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-600 group-focus-within:text-emerald-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-12 py-4 bg-black/40 border border-white/5 rounded-2xl text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/50 transition-all italic font-medium"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-slate-600 hover:text-emerald-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-slate-600 hover:text-emerald-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Botón de Entrada: Estilo Nike/Futbol */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-4 px-4 bg-white text-black rounded-[1.5rem] shadow-[0_10px_20px_rgba(0,0,0,0.4)] text-sm font-black uppercase italic hover:bg-emerald-500 transition-all transform active:scale-95 disabled:opacity-50 group"
            >
              {loading ? "Verificando..." : "Entrar al Sistema"}
              {!loading && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
            </button>
          </form>

          {/* Footer del Login */}
          <div className="mt-10 pt-6 border-t border-white/5 text-center">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              ¿No tienes acceso? <br />
              <button className="text-emerald-500 font-black hover:text-white transition-colors mt-2">SOLICITAR CREDENCIALES</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;