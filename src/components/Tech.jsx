import { techMinecraft, techWebsite } from '../data/portfolioData'

export default function Tech() {
  return (
    <section id="tecnologias" className="section border-t border-base-border">
      <p className="eyebrow mb-4">Tecnologías y conocimientos</p>
      <h2 className="mb-10 max-w-md text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Con qué trabajo
      </h2>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="panel p-6 sm:p-8">
          <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-ember">
            Servidores de Minecraft
          </h3>
          <ul className="space-y-3">
            {techMinecraft.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-ember" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel p-6 sm:p-8">
          <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
            Esta propia web
          </h3>
          <p className="mb-5 text-xs text-ink-faint">
            Tecnología usada para construir este portafolio (no forma parte de mi experiencia en
            Minecraft).
          </p>
          <ul className="space-y-3">
            {techWebsite.map((item) => (
              <li key={item.name} className="text-sm text-ink">
                <span className="font-medium">{item.name}</span>
                <span className="text-ink-faint"> — {item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
