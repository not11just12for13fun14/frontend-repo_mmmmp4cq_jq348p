import React from 'react'

const swatches = [
  { name: 'Primary', hex: '#2563EB', usage: 'Links, buttons, accents' },
  { name: 'Secondary', hex: '#06B6D4', usage: 'Highlights, backgrounds' },
  { name: 'Neutral 900', hex: '#0F172A', usage: 'Background' },
  { name: 'Neutral 700', hex: '#334155', usage: 'Text on light' },
  { name: 'Neutral 200', hex: '#E5E7EB', usage: 'Dividers, borders' },
]

const ColorCard = ({ name, hex, usage }) => (
  <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900/60">
    <div className="h-28 w-full" style={{ backgroundColor: hex }} />
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-white">{name}</h4>
        <code className="text-xs text-slate-400">{hex}</code>
      </div>
      <p className="mt-1 text-sm text-slate-300">{usage}</p>
    </div>
  </div>
)

const ColorSystem = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 md:p-8 shadow-xl">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Color System</h2>
        <div className="text-xs text-slate-400">Accessibility tip: aim for 4.5:1 contrast</div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {swatches.map((s) => (
          <ColorCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  )
}

export default ColorSystem
