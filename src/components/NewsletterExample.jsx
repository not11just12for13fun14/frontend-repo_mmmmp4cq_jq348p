import React from 'react'

const NewsletterHeader = () => (
  <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
    <div className="font-semibold">Votre Marque</div>
    <div className="text-xs text-slate-400">newsletter@brand.com</div>
  </div>
)

const NewsletterBody = () => (
  <div className="p-5 space-y-4">
    <h3 className="text-lg md:text-xl font-semibold">Nouvelle collection — Disponible maintenant</h3>
    <p className="text-slate-300">Une intro courte qui met en avant le bénéfice principal et donne envie de cliquer.</p>
    <div className="rounded-lg border border-white/10 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 h-40" />
    <ul className="list-disc list-inside text-slate-300">
      <li>Point clé 1</li>
      <li>Point clé 2</li>
      <li>Offre ou remise limitée</li>
    </ul>
    <div>
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 transition px-4 py-2 text-sm font-medium"
      >
        Découvrir
      </a>
    </div>
    <p className="text-xs text-slate-400">Vous recevez cet email parce que vous vous êtes inscrit·e sur notre site.</p>
  </div>
)

const NewsletterExample = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
      <div className="mb-5 md:mb-7">
        <h2 className="text-xl md:text-2xl font-semibold">Exemple de newsletter</h2>
        <p className="mt-1 text-slate-300">Structure d’email avec en-tête, visuel, texte, liste et call-to-action.</p>
      </div>
      <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
        <NewsletterHeader />
        <NewsletterBody />
      </div>
    </section>
  )
}

export default NewsletterExample
