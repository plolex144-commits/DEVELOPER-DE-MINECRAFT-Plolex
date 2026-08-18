import { contact } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contacto" className="section border-t border-base-border">
      <div className="panel flex flex-col gap-10 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="eyebrow mb-4">Contacto</p>
          <h2 className="max-w-md text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            ¿Necesitas configurar o poner en marcha tu servidor?
          </h2>
          <p className="mt-4 max-w-sm text-ink-muted">
            Escríbeme por cualquiera de estos canales y cuéntame qué necesitas para tu servidor o
            red.
          </p>
        </div>

        <ul className="flex min-w-[220px] flex-col gap-3 font-mono text-sm">
          <li>
            <a
              href={contact.discordInvite || '#'}
              className="flex items-center justify-between rounded-lg border border-base-border px-4 py-3 text-ink transition-colors hover:border-ember/50 hover:text-ember"
            >
              Discord
              <span className="text-ink-faint">{contact.discord}</span>
            </a>
          </li>
          <li>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-base-border px-4 py-3 text-ink transition-colors hover:border-ember/50 hover:text-ember"
            >
              GitHub
              <span className="text-ink-faint">↗</span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${contact.email.replace('[PLACEHOLDER] ', '')}`}
              className="flex items-center justify-between rounded-lg border border-base-border px-4 py-3 text-ink transition-colors hover:border-ember/50 hover:text-ember"
            >
              Email
              <span className="text-ink-faint">{contact.email}</span>
            </a>
          </li>
          {contact.extraLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-lg border border-base-border px-4 py-3 text-ink transition-colors hover:border-ember/50 hover:text-ember"
              >
                {link.label}
                <span className="text-ink-faint">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
