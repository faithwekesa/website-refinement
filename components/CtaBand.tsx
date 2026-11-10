import Link from 'next/link'
import Reveal from './Reveal'

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta-inner">
          <h2 className="h2">Planning an event? Let us make it unforgettable.</h2>
          <p>Tell us about your occasion and we will put together a menu and a quote.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-white">
              Book an event
            </Link>
            <a href="tel:+254799194973" className="cta-phone">
              Or call (+254) 799 194 973
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
