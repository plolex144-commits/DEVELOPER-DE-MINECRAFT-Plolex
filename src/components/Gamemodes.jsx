import { gamemodes } from '../data/portfolioData'

// Iconos simples dibujados en SVG (sin usar imágenes con copyright).
// Puedes sustituir cualquiera de estos por tus propias capturas en /public.
const icons = {
  tree: (
    <path d="M12 2l5 7h-3l4 6h-4v5h-4v-5H6l4-6H7l5-7z" />
  ),
  gem: <path d="M6 3h12l4 6-10 12L2 9l4-6z" />,
  sword: (
    <path d="M20.5 3.5l-8 8-2-2 8-8h2v2zM11 10.5l2 2-7 7-2.5.5.5-2.5 7-7z" />
  ),
  box: <path d="M3 7l9-4 9 4-9 4-9-4zm0 3l9 4v9l-9-4v-9zm18 0v9l-9 4v-9l9-4z" />,
}

export default function Gamemodes() {
  return (
    <section id="modalidades" className="section border-t border-base-border">
      <p className="eyebrow mb-4">Modalidades</p>
      <h2 className="mb-10 max-w-md text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Modalidades con las que he trabajado
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gamemodes.map((mode) => (
          <div key={mode.name} className="panel flex flex-col gap-4 p-6">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-ember/90"
              aria-hidden="true"
            >
              {icons[mode.icon]}
            </svg>
            <div>
              <h3 className="font-display text-base font-semibold text-ink">{mode.name}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{mode.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
