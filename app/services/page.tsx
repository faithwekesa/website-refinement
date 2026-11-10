import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import WhyChoose from '@/components/WhyChoose'

export const metadata: Metadata = {
  title: 'Services | Jawaka Catering',
  description:
    'Catering for corporate events, weddings and private parties, tailored to your occasion.',
}

const services = [
  {
    title: 'Corporate events',
    text: 'Professional catering for business meetings, conferences and corporate celebrations.',
    includes: ['Business meetings', 'Conferences', 'Team building events'],
  },
  {
    title: 'Weddings',
    text: 'Make your special day unforgettable with our exquisite wedding catering services.',
    includes: ['Full reception service', 'Cocktail hours', 'Custom menu design'],
  },
  {
    title: 'Private parties',
    text: 'Personalised catering for birthdays, anniversaries and intimate celebrations.',
    includes: [
      'Birthday celebrations',
      'Anniversary parties',
      'Family gatherings',
      'Baby showers',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Our services"
        text="From intimate gatherings to grand celebrations, we bring culinary excellence to every occasion."
        image="/images/services-banner.jpg"
      />

      <section className="section">
        <div className="container svc-layout">
          <aside className="svc-aside">
            <span className="eyebrow">What we do</span>
            <h2 className="h2">Catering for every occasion</h2>
            <p className="lead">
              Tell us about your event and we will shape the menu, the service
              and the team around it.
            </p>
            <Link href="/quote-request" className="more-link">
              Request a quote
            </Link>
          </aside>

          <ul className="svc-list">
            {services.map((service, index) => (
              <li key={service.title}>
                <Link href="/quote-request" className="svc-row">
                  <span className="svc-row-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <div className="svc-tags">
                      {service.includes.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <span className="svc-row-cta">
                    Get quote <i aria-hidden="true">→</i>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyChoose />
    </main>
  )
}
