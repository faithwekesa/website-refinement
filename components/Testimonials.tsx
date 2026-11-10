import Link from 'next/link'

const testimonials = [
  {
    name: 'EACC Kenya',
    logo: '/images/eacc.png',
    event: 'Corporate event',
    quote:
      'Exceptional service and attention to detail. The team went above and beyond to ensure our corporate event was a success.',
  },
  {
    name: 'Equity Bank',
    logo: '/images/equity-.png',
    event: 'Annual gala dinner',
    quote:
      'The quality of food and presentation was outstanding. Our employees were thoroughly impressed with the service.',
  },
  {
    name: 'KNHCR',
    logo: '/images/knhcr.png',
    event: 'Conference catering',
    quote:
      'Professional, punctual, and perfect execution. The catering service exceeded our expectations in every way.',
  },
]

export default function Testimonials() {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2 className="h2">What our clients say</h2>
          <p className="lead">
            Read what our valued customers have to say about their experience
            with us.
          </p>
        </div>

        <div className="quotes">
          {testimonials.map((item) => (
            <figure key={item.name} className="quote">
              <div className="quote-logo">
                <img src={item.logo} alt="" loading="lazy" />
              </div>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.event}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="more-wrap">
          <Link href="/quote-request" className="more-link">
            Get your custom quote
          </Link>
        </div>
      </div>
    </section>
  )
}
