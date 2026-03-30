import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-serif text-4xl font-bold text-ink mb-4">Page not found.</h1>
      <p className="text-mid font-light mb-8">The page you're looking for doesn't exist or has moved.</p>
      <Link href="/" className="btn-primary">Go home →</Link>
    </section>
  )
}
