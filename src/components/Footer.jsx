import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-ink-faint sm:flex-row sm:px-8 lg:px-10">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name.replace('[PLACEHOLDER] ', '')}
        </p>
        <p className="font-mono">Hecho con React + Vite + Tailwind CSS</p>
      </div>
    </footer>
  )
}
