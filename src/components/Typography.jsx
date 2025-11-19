import React from 'react'

const Typography = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Typography</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Display</div>
            <div className="mt-1 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Heading One Aa
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Section Title</div>
            <div className="mt-1 text-2xl md:text-3xl font-bold text-white">Heading Two Aa</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Subheading</div>
            <div className="mt-1 text-lg font-semibold text-slate-200">Heading Three Aa</div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Body</div>
            <p className="mt-1 text-slate-300 leading-relaxed">
              Use a modern, legible sans-serif. Keep line-length between 60–80 characters for optimal readability.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Buttons & UI</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-500 transition">Primary</button>
              <button className="rounded-lg border border-white/10 bg-slate-800 px-4 py-2 text-white hover:bg-slate-700 transition">Secondary</button>
              <button className="rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">Ghost</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Typography
