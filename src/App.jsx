import React from 'react'
import BrandHeader from './components/BrandHeader'
import ColorSystem from './components/ColorSystem'
import Typography from './components/Typography'
import BrandVoice from './components/BrandVoice'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(37,99,235,0.15),transparent),radial-gradient(800px_400px_at_110%_10%,rgba(6,182,212,0.12),transparent)]" />

      <main className="relative mx-auto max-w-6xl px-4 py-10 md:py-14 space-y-8 md:space-y-10">
        <BrandHeader />

        <div className="grid gap-6 md:gap-8">
          <ColorSystem />
          <Typography />
          <BrandVoice />
        </div>

        <footer className="pt-4 text-center text-xs text-slate-400">
          Make it yours: replace samples with your logo, colors, and copy.
        </footer>
      </main>
    </div>
  )
}

export default App
