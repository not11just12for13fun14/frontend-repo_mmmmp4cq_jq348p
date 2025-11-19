import React from 'react'

const Row = ({ k, v }) => (
  <tr className="border-b border-white/10 last:border-0">
    <td className="py-2 pr-4 text-slate-300 text-sm">{k}</td>
    <td className="py-2 text-slate-100 text-sm font-mono">{v}</td>
  </tr>
)

const SpecsTable = () => {
  const specs = [
    ['Tension nominale', '24 V DC ±10%'],
    ['Température de service', '-20…+60 °C'],
    ['Indice de protection', 'IP65 (IEC 60529)'],
    ['Interfaces', 'Ethernet, CAN, RS‑485'],
    ['Protocoles', 'Modbus/TCP, OPC UA'],
    ['MTBF', '> 120 000 h (Telcordia)'],
    ['Conformité', 'CE, RoHS, REACH'],
  ]

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
      <div className="mb-5 md:mb-7">
        <h2 className="text-xl md:text-2xl font-semibold">Tableau de spécifications</h2>
        <p className="mt-1 text-slate-300">Unités SI, tolérances, conditions de test. Chiffres tabulaires pour l’alignement.</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-slate-900/60 overflow-hidden">
        <table className="w-full text-left">
          <tbody>
            {specs.map(([k, v]) => (
              <Row key={k} k={k} v={v} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SpecsTable
