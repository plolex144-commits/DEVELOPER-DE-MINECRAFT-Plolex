import { projects } from '../data/portfolioData'

const statusStyles = {
  'En línea': 'text-online border-online/40 bg-online/10',
  Finalizado: 'text-ink-muted border-base-border bg-base-panel2',
  'En desarrollo': 'text-ember border-ember/40 bg-ember/10',
  Archivado: 'text-ink-faint border-base-border bg-base-panel2',
}

// Iniciales del proyecto para la cabecera de la card (no depende de imágenes)
function initials(name) {
  return name
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function Projects() {
  return (
    <section id="proyectos" className="section border-t border-base-border">
      <div className="mb-10">
        <p className="eyebrow mb-4">Proyectos</p>
        <h2 className="max-w-md text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Servidores en los que he trabajado
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className={`panel flex flex-col overflow-hidden transition-colors hover:border-ember/50 ${
              project.featured ? 'ring-1 ring-ember/30' : ''
            }`}
          >
            {/* Cabecera visual sin fotos: iniciales del proyecto + modalidad */}
            <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 border-b border-base-border bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,74,0.14),transparent_60%)] bg-base-panel2">
              <span className="font-display text-4xl font-semibold tracking-tight text-ink-faint">
                {initials(project.name)}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ember/80">
                {project.gamemode}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-ink">{project.name}</h3>
                <span
                  className={`whitespace-nowrap rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
                    statusStyles[project.status] || statusStyles.Finalizado
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mb-4 flex-1 text-sm text-ink-muted">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-base-border px-2 py-1 font-mono text-[10px] text-ink-faint"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-base-border pt-4">
                <span className="font-mono text-xs text-ink-faint">{project.date}</span>
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="font-mono text-xs text-ink-muted hover:text-ember"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Enlace ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="font-mono text-xs text-ink-muted hover:text-ember"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

