import { about } from '../data/portfolioData'

export default function About() {
  return (
    <section id="sobre-mi" className="section border-t border-base-border">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow mb-4">Sobre mí</p>
          <h2 className="mb-6 max-w-md text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Configuración de servidores como oficio, no como afición ocasional
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 max-w-md text-ink-muted">
              {p}
            </p>
          ))}
        </div>

        <div className="panel p-6 sm:p-8">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-ink-faint">
            // resumen.log
          </p>
          <ul className="space-y-4">
            {about.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-ember" />
                <span className="text-sm text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
