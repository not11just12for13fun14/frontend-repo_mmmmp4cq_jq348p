import React from 'react'

const VoiceCard = ({ title, items }) => (
  <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
    <div className="text-xs uppercase tracking-widest text-slate-400">{title}</div>
    <ul className="mt-3 space-y-2 text-slate-300 text-sm list-disc list-inside">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  </div>
)

const BrandVoice = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Brand Voice</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <VoiceCard title="Do" items={["Clear, concise, human", "Action-oriented verbs", "Warm but professional tone", "Write for skim-readers"]} />
        <VoiceCard title="Don’t" items={["Jargon or buzzwords", "Over-promising", "Passive voice everywhere", "Walls of text"]} />
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-5">
        <div className="text-xs uppercase tracking-widest text-slate-400">Example</div>
        <p className="mt-2 text-slate-300 text-sm">
          Before: Our solution leverages cutting-edge synergies to optimize user-centric paradigms.
        </p>
        <p className="mt-2 text-slate-200 text-sm">
          After: We help your team move faster with simple tools that work out of the box.
        </p>
      </div>
    </section>
  )
}

export default BrandVoice
