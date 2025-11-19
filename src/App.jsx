import React from 'react'
import BrandHeader from './components/BrandHeader'
import ColorSystem from './components/ColorSystem'
import Typography from './components/Typography'
import BrandVoice from './components/BrandVoice'
import SlideDeck from './components/SlideDeck'
import PrintMockups from './components/PrintMockups'
import InstagramGrid from './components/InstagramGrid'
import NewsletterExample from './components/NewsletterExample'
import DataViz from './components/DataViz'
import SpecsTable from './components/SpecsTable'
import Compliance from './components/Compliance'
import Governance from './components/Governance'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(18,214,223,0.12),transparent),radial-gradient(800px_400px_at_110%_10%,rgba(228,0,102,0.08),transparent)]" />

      <main className="relative mx-auto max-w-6xl px-4 py-10 md:py-14 space-y-8 md:space-y-10">
        <BrandHeader />

        <div className="grid gap-6 md:gap-8">
          <ColorSystem />
          <Typography />
          <BrandVoice />
          <Compliance />
          <DataViz />
          <SpecsTable />
          <SlideDeck />
          <PrintMockups />
          <InstagramGrid />
          <NewsletterExample />
          <Governance />
        </div>

        <footer className="pt-4 text-center text-xs text-slate-400">
          Brand System v1.0.0 • Doc ID: BB‑IND‑001 • Contact: design@votre‑groupe.com
        </footer>
      </main>
    </div>
  )
}

export default App
