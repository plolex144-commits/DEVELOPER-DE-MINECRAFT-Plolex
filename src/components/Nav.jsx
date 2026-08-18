import { useEffect, useState } from 'react'
import { nav, profile, contact } from '../data/portfolioData'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-base-border bg-base/90 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#inicio" className="flex items-center gap-2 font-display text-sm font-semibold text-ink">
          <span className="h-2 w-2 rounded-sm bg-ember" aria-hidden="true" />
          {profile.name.replace('[PLACEHOLDER] ', '')}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-wide text-ink-muted transition-colors hover:text-ember"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.discordInvite || '#contacto'}
          className="hidden font-mono text-xs uppercase tracking-wide text-ink-muted transition-colors hover:text-ember md:inline-block"
        >
          Contactar →
        </a>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-base-border text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="font-mono text-lg leading-none">{open ? '×' : '≡'}</span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-base-border bg-base px-6 py-4 md:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-wide text-ink-muted hover:text-ember"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
