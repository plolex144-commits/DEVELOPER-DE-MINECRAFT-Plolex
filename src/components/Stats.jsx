import { stats } from '../data/portfolioData'

export default function Stats() {
  return (
    <section className="section border-t border-base-border">
      <p className="eyebrow mb-4">En cifras</p>
      <h2 className="mb-10 max-w-md text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Experiencia acumulada en servidores y redes
      </h2>

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-base-border bg-base-border sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-base-panel px-6 py-8">
            <p className="font-mono text-4xl font-semibold text-ember sm:text-5xl">
              {stat.value}
              <span className="text-ink-faint">{stat.suffix}</span>
            </p>
            <p className="mt-3 text-sm font-medium text-ink">{stat.label}</p>
            <p className="mt-1 text-xs text-ink-faint">{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
