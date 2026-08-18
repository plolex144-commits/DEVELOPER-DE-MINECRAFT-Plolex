import { specialties } from '../data/portfolioData'

export default function Specialties() {
  return (
    <section id="especialidades" className="section border-t border-base-border">
      <p className="eyebrow mb-4">Especialidades</p>
      <h2 className="mb-10 max-w-md text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        En qué puedo ayudarte
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {specialties.map((item, i) => (
          <div
            key={item.title}
            className="panel group p-6 transition-colors hover:border-ember/50"
          >
            <span className="font-mono text-xs text-ink-faint">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-display text-base font-semibold text-ink group-hover:text-ember">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
