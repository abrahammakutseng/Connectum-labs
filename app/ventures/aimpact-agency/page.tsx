import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'AImpact Agency — LLM SEO',
  description:
    'AImpact Agency helps businesses capture visibility in AI-driven search through LLM SEO audits, content strategy, and optimisation.',
}

const services = [
  {
    title: 'LLM SEO Audit',
    description:
      'A comprehensive review of your current content ecosystem, identifying gaps in AI search visibility and opportunities for LLM citation.',
  },
  {
    title: 'AI Search Optimisation',
    description:
      'Structural and semantic content improvements that increase your chances of being cited by ChatGPT, Perplexity, Gemini, and other LLM-powered platforms.',
  },
  {
    title: 'Content Strategy',
    description:
      'A forward-looking content roadmap built for the dual demands of traditional search engines and generative AI discovery.',
  },
  {
    title: 'Attribution Tracking',
    description:
      'Multi-layer attribution systems to measure the commercial impact of LLM visibility — connecting AI search citations to actual customer acquisition.',
  },
]

export default function AImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Venture · Agency"
        title={<>AImpact Agency — SEO for the <em className="italic font-normal text-accent">AI search era</em>.</>}
        subtitle="Helping businesses capture visibility in AI-driven search environments where traditional SEO meets the demands of large-language-model platforms."
      />

      {/* ── Overview ── */}
      <section className="py-20 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-4 text-mid font-light leading-relaxed">
            <p>
              Search is changing. Platforms like ChatGPT, Perplexity, and Google's AI Overviews are now
              a primary way users discover products, services, and answers — and they pull from a very
              different content ecosystem than traditional SEO covers.
            </p>
            <p>
              AImpact Agency specialises in this new layer. We help businesses understand how AI search
              engines perceive and cite their content, then build strategies to improve that presence
              systematically.
            </p>
            <p>
              Our client work includes full LLM SEO audits, content architecture, and five-layer attribution
              tracking — measuring not just rankings, but the commercial value of AI search visibility.
            </p>
          </div>
          <div className="border border-rule p-6 space-y-4">
            <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-mid">Operated by</p>
            <p className="font-serif text-xl font-medium text-ink">Connectum Labs Pty Ltd</p>
            <p className="text-mid font-light text-sm">Brisbane, Queensland, Australia</p>
            <div className="pt-2 border-t border-rule">
              <a
                href="https://aimpactagency.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Visit aimpactagency.com.au ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 border-b border-rule">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-label">Services</p>
          <div className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
            {services.map((s, i) => (
              <div key={s.title} className="bg-paper p-8 hover:bg-white/60 transition-colors">
                <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-mid mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-lg font-medium text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-mid font-light leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl font-medium text-ink mb-1">Ready to improve your AI search presence?</h2>
            <p className="text-mid font-light text-sm">Talk to us about an LLM SEO audit for your business.</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://aimpactagency.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              Visit AImpact Agency ↗
            </a>
            <Link href="/contact" className="btn-outline shrink-0 text-sm">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
