import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="stub">
      <div className="container">
        <span className="eyebrow">Page not found</span>
        <h1 className="h2">We could not find that page</h1>
        <p className="lead">It may have moved, or the link may be wrong. Here is where most people are headed.</p>
        <div className="nf-actions">
          <Link href="/menu" className="btn btn-primary">
            See the menu
          </Link>
          <Link href="/quote-request" className="back-link">
            Request a quote
          </Link>
        </div>
      </div>
    </main>
  )
}
