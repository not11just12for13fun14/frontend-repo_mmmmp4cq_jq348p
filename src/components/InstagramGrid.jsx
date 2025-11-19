import React from 'react'

const Post = ({ type = 'image', title }) => (
  <div className="relative rounded-md overflow-hidden border border-white/10 bg-slate-800/60">
    {type === 'image' && (
      <div className="h-full w-full bg-gradient-to-br from-blue-500/30 to-cyan-500/20" />
    )}
    {type === 'quote' && (
      <div className="h-full w-full p-4 flex items-center justify-center text-center">
        <p className="text-sm md:text-base font-medium leading-snug">“{title}”</p>
      </div>
    )}
    {type === 'carousel' && (
      <div className="h-full w-full grid grid-cols-3">
        <div className="bg-blue-500/20" />
        <div className="bg-cyan-500/20" />
        <div className="bg-indigo-500/20" />
      </div>
    )}
  </div>
)

const ProfileHeader = () => (
  <div className="flex items-center gap-4">
    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
    <div>
      <div className="font-semibold">brand_officiel</div>
      <div className="text-xs text-slate-400">Marque • Lifestyle</div>
    </div>
  </div>
)

const InstagramGrid = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
      <div className="mb-5 md:mb-7">
        <h2 className="text-xl md:text-2xl font-semibold">Profil Instagram</h2>
        <p className="mt-1 text-slate-300">Exemple d’en-tête et grille de posts (image, citation, carrousel).</p>
      </div>

      <div className="space-y-4">
        <ProfileHeader />
        <div className="grid grid-cols-3 gap-1 md:gap-2">
          <Post type="image" />
          <Post type="quote" title="Construire une marque, c’est tenir une promesse." />
          <Post type="image" />
          <Post type="carousel" />
          <Post type="image" />
          <Post type="quote" title="Constance > Intensité." />
          <Post type="image" />
          <Post type="image" />
          <Post type="carousel" />
        </div>
      </div>
    </section>
  )
}

export default InstagramGrid
