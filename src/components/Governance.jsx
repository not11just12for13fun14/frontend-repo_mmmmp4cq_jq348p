import React from 'react'

const Governance = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
      <div className="mb-5 md:mb-7">
        <h2 className="text-xl md:text-2xl font-semibold">Gouvernance du design</h2>
        <p className="mt-1 text-slate-300">Versioning, tokens, processus et rôles pour garantir la cohérence et la traçabilité.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
          <h4 className="text-white font-semibold">Versioning</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
            <li>Sémantique (ex: 1.3.0)</li>
            <li>Changelog par release</li>
            <li>Identifiant de doc dans le pied de page</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
          <h4 className="text-white font-semibold">Design tokens</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
            <li>Couleurs: brand.primary, accent.alert, bg.base…</li>
            <li>Espacements: space.4/8/12/16 (échelle 8 px)</li>
            <li>Typo: font.title, font.ui, font.mono</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
          <h4 className="text-white font-semibold">Processus</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
            <li>Revue accessibilité (WCAG AA)</li>
            <li>Checklist publication (QA contenu/visuel)</li>
            <li>Référents design/tech nommés</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Governance
