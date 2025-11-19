import React from 'react'

const Badge = ({ label }) => (
  <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-200">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
    {label}
  </span>
)

const Compliance = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
      <div className="mb-5 md:mb-7">
        <h2 className="text-xl md:text-2xl font-semibold">Normes & conformité</h2>
        <p className="mt-1 text-slate-300">Référentiels, certifications et marquages applicables à vos produits/systèmes.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
          <h4 className="text-white font-semibold">Certifications</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge label="CE" />
            <Badge label="ISO 9001" />
            <Badge label="ISO 27001" />
            <Badge label="RoHS" />
            <Badge label="REACH" />
          </div>
          <p className="mt-4 text-xs text-slate-400">Affichez uniquement les marquages réellement obtenus. Liez vers les certificats PDF.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
          <h4 className="text-white font-semibold">Normes pertinentes</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
            <li>IEC 61508 — Sécurité fonctionnelle</li>
            <li>IEC 61499 — Systèmes d’automation</li>
            <li>IEC 60529 — Indices IP</li>
            <li>EN 55032/35 — CEM multimédia</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Compliance
