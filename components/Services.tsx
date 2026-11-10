import Link from 'next/link'

const services = [
  {
    n: '01',
    title: 'Corporate events',
    text: 'Professional catering for business meetings, conferences and corporate celebrations.',
    image: '/images/hero.jpg',
    tone: 'linear-gradient(135deg,#f3dcc2,#d98a3d)',
  },
  {
    n: '02',
    title: 'Weddings',
    text: 'Make your special day unforgettable with our exquisite wedding catering services.',
    image: '/images/hero1.jpg',
    tone: 'linear-gradient(135deg,#f6e3d3,#cf7a2f)',
  },
  {
    n: '03',
    title: 'Private parties',
    text: 'Personalised catering for birthdays, anniversaries and intimate celebrations.',
    image: '/images/unsplash-photo.jpg',
    tone: 'linear-gradient(135deg,#f1d6b8,#c8691d)',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2 className="h2">Our premium services</h2>
          <p className="lead">
            From intimate gatherings to grand celebrations, we bring culinary
            excellence to every occasion.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link key={service.n} href="/services" className="svc">
              <div
                className="svc-media"
                style={{
                  backgroundImage: `url(${service.image}), ${service.tone}`,
                }}
              />
              <span className="svc-num">{service.n}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="svc-link">
                Learn more <span aria-hidden="true">→</span>
              </span>
              <i className="svc-line" />
            </Link>
          ))}
        </div>

        <div className="more-wrap">
          <Link href="/services" className="more-link">
            View all services
          </Link>
        </div>
      </div>
    </section>
  )
}
