import React from 'react'

const MockCard = ({ label, children }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
    <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">{label}</div>
    <div className="rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60">
      {children}
    </div>
  </div>
)

const BusinessCard = () => (
  <div className="aspect-[85/54] p-4 flex items-center justify-between">
    <div className="font-semibold text-lg">VOTRE LOGO</div>
    <div className="text-right text-sm">
      <div>Nom Prénom</div>
      <div className="text-slate-400">Poste</div>
      <div className="text-slate-300">email@brand.com</div>
      <div className="text-slate-300">+33 6 12 34 56 78</div>
    </div>
  </div>
)

const BrochureCover = () => (
  <div className="aspect-[210/297] p-6 flex flex-col justify-between bg-gradient-to-br from-blue-600/30 to-cyan-500/20">
    <div className="text-sm text-slate-200">Brochure 2025</div>
    <div>
      <h3 className="text-3xl font-bold">Titre de la brochure</h3>
      <p className="mt-2 max-w-xs text-slate-200">Accroche concise qui présente votre offre ou votre collection.</p>
    </div>
  </div>
)

const ProductSheet = () => (
  <div className="aspect-[210/297] p-6 grid grid-rows-[auto_1fr_auto] gap-4">
    <div className="flex items-center justify-between">
      <div className="font-semibold">Nom du produit</div>
      <div className="text-xs text-slate-400">Réf. BR-001</div>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-md bg-slate-800/60 border border-white/10" />
      <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
        <li>Caractéristique 1</li>
        <li>Caractéristique 2</li>
        <li>Caractéristique 3</li>
        <li>Bénéfice clé</li>
      </ul>
    </div>
    <div className="text-right font-semibold">199 €</div>
  </div>
)

const PrintMockups = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
      <div className="mb-5 md:mb-7">
        <h2 className="text-xl md:text-2xl font-semibold">Mockups print</h2>
        <p className="mt-1 text-slate-300">Cartes de visite, couverture de brochure et fiche produit.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <MockCard label="Carte de visite">
          <BusinessCard />
        </MockCard>
        <MockCard label="Couverture de brochure">
          <BrochureCover />
        </MockCard>
        <MockCard label="Fiche produit">
          <ProductSheet />
        </MockCard>
      </div>
    </section>
  )
}

export default PrintMockups
