// src/components/dashboard/StatCard.tsx
import React from 'react';

// Agrega 'export' aquí para que sea un named export
export const StatCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
    <div className="flex justify-between items-start">
      <div className="p-3 bg-white/5 rounded-2xl">
        <Icon className="h-6 w-6 text-emerald-400" />
      </div>
      {trend && (
        <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
          {trend}
        </span>
      )}
    </div>
    <div className="mt-4">
      <p className="text-slate-400 text-sm font-medium">{title}</p>
      <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
    </div>
  </div>
);