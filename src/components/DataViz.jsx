import React from 'react'

const LegendDot = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
    <span className="text-xs text-slate-300">{label}</span>
  </div>
)

const ChartPlaceholder = ({ title, subtitle, legend = [] }) => (
  <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
    <div className="flex items-baseline justify-between">
      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
      </div>
      <div className="hidden md:flex items-center gap-4">
        {legend.map((l) => (
          <LegendDot key={l.label} color={l.color} label={l.label} />
        ))}
      </div>
    </div>
    <div className="mt-4 grid grid-cols-12 gap-2 h-48 md:h-56">
      {/* Y axis */}
      <div className="col-span-1 flex flex-col justify-between text-[10px] text-slate-500">
        <span>100</span>
        <span>75</span>
        <span>50</span>
        <span>25</span>
        <span>0</span>
      </div>
      {/* Plot area */}
      <div className="col-span-11 relative rounded-md border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
        {/* Grid lines */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute inset-x-0" style={{ top: `${(i*25)}%` }}>
            <div className="h-px w-full bg-white/5" />
          </div>
        ))}
        {/* Bars */}
        <div className="absolute inset-0 flex items-end gap-3 px-4">
          {[18, 36, 22, 48, 32, 54, 40].map((h, i) => (
            <div key={i} className="flex-1 flex items-end gap-1">
              <div className="w-full rounded-sm bg-[#9CA3AF]" style={{ height: `${h}%`, opacity: 0.5 }} />
              <div className="w-full rounded-sm bg-[#12D6DF]" style={{ height: `${Math.max(8, h-6)}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-3 md:hidden flex items-center gap-4">
      {legend.map((l) => (
        <LegendDot key={l.label} color={l.color} label={l.label} />
      ))}
    </div>
  </div>
)

const DataViz = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
      <div className="mb-5 md:mb-7">
        <h2 className="text-xl md:text-2xl font-semibold">Data‑viz & KPI</h2>
        <p className="mt-1 text-slate-300">Palette dédiée, lisibilité élevée, focus sur les séries pertinentes. Chiffres tabulaires et unités SI.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <ChartPlaceholder
          title="Disponibilité mensuelle (%)"
          subtitle="Fenêtre de 30 jours — eNode A / B"
          legend={[
            { color: '#9CA3AF', label: 'Historique' },
            { color: '#12D6DF', label: 'En cours' },
          ]}
        />
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
          <h4 className="text-white font-semibold">Règles de représentation</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
            <li>Couleurs secondaires en gris 300–600; accent Cyan pour la série focus.</li>
            <li>Épaisseurs: lignes 2 px; barres 8–12 px; points 4 px.</li>
            <li>Labels 12–14 px, axes en gris 500, légende cliquable.</li>
            <li>Accessibilité: contraste AA, alternatives pour “réduction de mouvement”.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DataViz
