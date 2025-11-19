import React from 'react'

const BrandHeader = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-8 md:p-10 shadow-xl">
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Brand Book Starter
          </h1>
          <p className="mt-3 text-slate-300 max-w-xl">
            A clean, editable mockup to document your brand’s core elements — logo, colors,
            typography, imagery, and voice. Use this as a foundation and tailor it to your team.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white text-slate-900 font-bold shadow">
              LOGO
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-800 text-white font-bold border border-white/10">
              LOGO
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-xs uppercase tracking-widest text-slate-400">Primary Mark</div>
            <div className="mt-1 text-sm text-slate-300">Light & Dark usage</div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
          <div className="text-xs text-slate-400">Mission</div>
          <div className="mt-1 text-slate-200">
            State your purpose in one clear sentence. Keep it simple and memorable.
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
          <div className="text-xs text-slate-400">Tagline</div>
          <div className="mt-1 text-slate-200">Short phrase capturing your brand promise.</div>
        </div>
      </div>
    </section>
  )
}

export default BrandHeader
