import React from 'react'

const SlideFrame = ({ title, subtitle, bullets, variant = 'title' }) => {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg">
      {/* Slide Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
        <div className="h-2 w-2 rounded-full bg-red-400/80" />
        <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <div className="h-2 w-2 rounded-full bg-green-400/80" />
      </div>
      {/* Slide Content */}
      <div className="aspect-[16/9] p-6 md:p-10">
        {variant === 'title' && (
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 md:mt-4 max-w-prose text-slate-300">{subtitle}</p>
          </div>
        )}
        {variant === 'content' && (
          <div className="grid md:grid-cols-2 gap-6 h-full">
            <div className="flex flex-col justify-center">
              <h4 className="text-xl md:text-2xl font-semibold">{title}</h4>
              <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                {bullets?.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/10" />
          </div>
        )}
        {variant === 'quote' && (
          <div className="h-full flex items-center justify-center text-center">
            <blockquote className="max-w-2xl">
              <p className="text-xl md:text-3xl font-medium leading-snug">“{subtitle}”</p>
              <cite className="mt-3 block text-sm text-slate-400">— {title}</cite>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  )
}

const SlideDeck = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
      <div className="mb-5 md:mb-7">
        <h2 className="text-xl md:text-2xl font-semibold">Exemples de slides PowerPoint</h2>
        <p className="mt-1 text-slate-300">Modèles de titres, contenus et citations pour vos présentations.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SlideFrame
          variant="title"
          title="Titre de présentation"
          subtitle="Sous-titre descriptif pour poser le contexte et l'objectif de la présentation."
        />
        <SlideFrame
          variant="content"
          title="Points clés"
          bullets={[
            'Insight principal et bénéfice utilisateur',
            'Données ou preuve à l’appui',
            'Call-to-action clair',
          ]}
        />
        <div className="md:col-span-2">
          <SlideFrame
            variant="quote"
            title="Nom de la personne"
            subtitle="Une citation forte qui incarne la promesse de la marque."
          />
        </div>
      </div>
    </section>
  )
}

export default SlideDeck
