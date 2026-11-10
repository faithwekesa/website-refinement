import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import EmailLink from '@/components/EmailLink'
import { SITE, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Jawaka Catering',
  description: 'Find Jawaka Catering on Kangundo Road, Nairobi, or send us a message.',
}

const mapQuery = SITE.address
const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`

const icons = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  chat: <path d="M4 20l1.3-4.2A8.5 8.5 0 1 1 8.2 18.7L4 20Z" />,
}

function Icon({ name }: { name: keyof typeof icons }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default function ContactPage() {
  return (
    <main className="menu-page">
      <div className="container">
        <div className="menu-head">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
        </div>

        <div className="contact-grid">
          <div className="contact-side">
            <div className="map-card">
              <iframe
                title="Jawaka Catering location map"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="map-pin">
                <span>Find us</span>
                <b>Choka Estate, Kangundo Road</b>
                <em>Nairobi, Kenya</em>
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="more-link">
                  Open in Google Maps
                </a>
              </div>
            </div>

            <ul className="contact-list">
              <li>
                <span className="contact-ico"><Icon name="phone" /></span>
                <div>
                  <small>Phone</small>
                  {SITE.phones.map((phone, index) => (
                    <span key={phone.href}>
                      {index > 0 && <span> / </span>}
                      <a href={phone.href}>{phone.label}</a>
                    </span>
                  ))}
                </div>
              </li>
              <li>
                <span className="contact-ico"><Icon name="mail" /></span>
                <div>
                  <small>Email</small>
                  <EmailLink email={SITE.emails[0]} subject="Enquiry from the Jawaka website" />
                </div>
              </li>
              <li>
                <span className="contact-ico"><Icon name="chat" /></span>
                <div>
                  <small>WhatsApp</small>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    Chat with us
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </main>
  )
}
