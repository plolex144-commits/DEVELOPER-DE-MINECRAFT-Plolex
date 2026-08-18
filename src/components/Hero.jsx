import { profile, stats } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="inicio" className="section pb-16 pt-16 sm:pt-24">
      {/* Signature element: barra de estado tipo "lista de servidores" de Minecraft */}
      <div className="mb-10 inline-flex animate-rise items-center gap-3 rounded-lg border border-base-border bg-base-panel px-4 py-2 font-mono text-xs text-ink-muted">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-online" />
        </span>
        <span className="text-online">EN LÍNEA</span>
        <span className="text-base-border">│</span>
        <span>{profile.availability}</span>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div className="animate-rise" style={{ animationDelay: '80ms' }}>
          <p className="eyebrow mb-4">{profile.role}</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name.replace('[PLACEHOLDER] ', '')}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">{profile.heroDescription}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#proyectos" className="btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn-secondary">
              Contactar conmigo
            </a>
            <a href="#tecnologias" className="btn-secondary">
              GitHub
            </a>
          </div>
        </div>

        {/* Panel lateral tipo "consola de servidor" con las cifras clave */}
        <div
          className="animate-rise panel overflow-hidden"
          style={{ animationDelay: '160ms' }}
          aria-label="Resumen de estadísticas"
        >
          <div className="flex items-center gap-2 border-b border-base-border bg-base-panel2 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              server.status
            </span>
          </div>
          <ul className="divide-y divide-base-border">
            {stats.map((stat) => (
              <li key={stat.label} className="flex items-center justify-between px-5 py-4">
                <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                  {stat.label}
                </span>
                <span className="font-mono text-lg font-semibold text-ember">
                  {stat.value}
                  {stat.suffix}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
