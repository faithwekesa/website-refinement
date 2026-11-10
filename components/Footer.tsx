import Link from 'next/link'
import EmailLink from '@/components/EmailLink'
import { SITE, whatsappLink } from '@/lib/site'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/menu', label: 'Menu' },
  { href: '/accommodation', label: 'Accommodation' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Corporate catering',
  'Staff breakfast & lunch',
  'Company canteens management',
  'Social events',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-about">
          <Link href="/" className="footer-brand" aria-label="Jawaka Catering home">
            <img src="/images/logo.png" alt="" />
            <span>Jawaka Catering</span>
          </Link>
          <p>Creating memorable experiences through exceptional catering services.</p>
          <a
            className="footer-wa"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3.5 20.5l1.2-4.1A8.5 8.5 0 1 1 8 19.4l-4.5 1.1Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9.2 8.6c.2-.4.5-.4.8-.3.2.5.6 1.3.7 1.5.1.3-.1.5-.3.8-.2.2-.3.4-.1.7.5.9 1.3 1.6 2.3 2 .3.1.5 0 .7-.2.2-.3.4-.6.7-.5.4.2 1 .5 1.4.7.1.3 0 .8-.3 1.2-.5.6-1.2.8-2 .6-2.5-.7-4.3-2.3-5.1-4.2-.3-.7-.2-1.5.2-2.3Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Our services</h4>
          <ul>
            {services.map((item) => (
              <li key={item}>
                <Link href="/services">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact us</h4>
          <ul>
            <li>{SITE.address.replace(', Kenya', '')}</li>
            <li>
              {SITE.phones.map((phone, index) => (
                <span key={phone.href}>
                  {index > 0 && <span> / </span>}
                  <a href={phone.href}>{phone.label}</a>
                </span>
              ))}
            </li>
            {SITE.emails.map((email) => (
              <li key={email}>
                <EmailLink email={email} subject="Enquiry from the Jawaka website" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jawaka Catering. All rights reserved.</span>
      </div>
    </footer>
  )
}
