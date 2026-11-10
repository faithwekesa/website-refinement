'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/menu', label: 'Menu' },
  { href: '/accommodation', label: 'Accommodation' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className={`nav-wrap ${pathname === '/' ? '' : 'nav-top'}`}>
      <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
        <Link href="/" className="nav-brand" aria-label="Jawaka Catering home">
          <img src="/images/logo.png" alt="Jawaka Catering" />
        </Link>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive(link.href) ? 'is-active' : undefined}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/quote-request" className="nav-cta">
          Book an event
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-label">{open ? 'Close' : 'Menu'}</span>
          <span className="nav-toggle-bars" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>

        <div id="nav-panel" className="nav-panel">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive(link.href) ? 'is-active' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/quote-request" className="btn btn-primary nav-panel-cta">
            Book an event
          </Link>
        </div>
      </nav>
    </header>
  )
}
