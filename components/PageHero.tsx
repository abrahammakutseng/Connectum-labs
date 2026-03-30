interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-rule py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.08] tracking-[-0.02em] text-ink max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-mid font-light leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
