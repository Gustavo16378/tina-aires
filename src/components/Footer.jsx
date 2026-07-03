import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-petrol-deep text-[#7f968e]">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-4 px-5 py-[34px] sm:px-6">
        <span className="font-serif text-[19px] text-cream">{site.brand}</span>
        <a
          href={site.creditUrl}
          target="_blank"
          rel="noopener"
          aria-label={`${site.credit} — abre gustavodev.dev em nova aba`}
          className="text-[12.5px] transition-colors hover:text-cream"
        >
          {site.credit}
        </a>
      </div>
    </footer>
  )
}
