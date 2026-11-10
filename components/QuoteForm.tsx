'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { checkPhone, clearPhoneError, whatsappLink } from '@/lib/site'

const eventTypes = ['Corporate event', 'Wedding', 'Private party', 'Other']

export default function QuoteForm() {
  const router = useRouter()
  const params = useSearchParams()
  const fromMenu = params.get('from') === 'menu'
  const backHref = fromMenu ? '/menu' : '/services'
  const backLabel = fromMenu ? 'Back to menu' : 'Back to services'
  const chosenMenu = params.get('menu') ?? ''
  const [link, setLink] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!checkPhone(event.currentTarget)) return
    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()

    const lines = [
      'New quote request',
      '',
      `Name: ${get('fullName')}`,
      `Phone: ${get('phone')}`,
      `Email: ${get('email')}`,
      '',
      `Event type: ${get('eventType')}`,
      `Guests: ${get('guests')}`,
      `Date: ${get('date')}`,
      `Time: ${get('time') || '-'}`,
      `Venue: ${get('venue') || '-'}`,
      '',
      `Dietary restrictions: ${get('dietary') || '-'}`,
      `Preferred menu items: ${get('menuItems') || '-'}`,
      `Special requests: ${get('requests') || '-'}`,
      `Budget range: ${get('budget') || '-'}`,
    ]

    const url = whatsappLink(lines.join('\n'))
    setLink(url)
    window.open(url, '_blank', 'noopener,noreferrer')
    window.setTimeout(() => router.push(backHref), 700)
  }

  return (
    <form className="qf" onSubmit={onSubmit}>
      <section className="qf-section">
        <h2>Contact information</h2>
        <div className="qf-grid">
          <div className="qf-field">
            <label htmlFor="fullName">Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="qf-field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. 0712 345 678"
              onInput={(event) => clearPhoneError(event.currentTarget)}
              required
            />
          </div>
          <div className="qf-field wide">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email address"
              required
            />
          </div>
        </div>
      </section>

      <section className="qf-section">
        <h2>Event details</h2>
        <div className="qf-grid">
          <div className="qf-field">
            <label htmlFor="eventType">Event type</label>
            <select id="eventType" name="eventType" defaultValue="" required>
              <option value="" disabled>
                Select an event type
              </option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="qf-field">
            <label htmlFor="guests">Guest count</label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              inputMode="numeric"
              placeholder="Number of guests"
              required
            />
          </div>
          <div className="qf-field">
            <label htmlFor="date">Event date</label>
            <input id="date" name="date" type="date" required />
          </div>
          <div className="qf-field">
            <label htmlFor="time">Event time</label>
            <input id="time" name="time" type="time" />
          </div>
          <div className="qf-field wide">
            <label htmlFor="venue">Venue</label>
            <input
              id="venue"
              name="venue"
              type="text"
              placeholder="Event venue or location"
            />
          </div>
        </div>
      </section>

      <section className="qf-section">
        <h2>Menu preferences</h2>
        <div className="qf-grid">
          <div className="qf-field wide">
            <label htmlFor="dietary">Dietary restrictions</label>
            <textarea
              id="dietary"
              name="dietary"
              rows={3}
              placeholder="Any dietary restrictions or allergies?"
            />
          </div>
          <div className="qf-field wide">
            <label htmlFor="menuItems">Preferred menu items</label>
            <textarea
              id="menuItems"
              name="menuItems"
              defaultValue={chosenMenu}
              rows={3}
              placeholder="Any specific menu items you would like?"
            />
          </div>
          <div className="qf-field wide">
            <label htmlFor="requests">Special requests</label>
            <textarea
              id="requests"
              name="requests"
              rows={3}
              placeholder="Any special requests or additional information?"
            />
          </div>
          <div className="qf-field wide">
            <label htmlFor="budget">Budget range</label>
            <input
              id="budget"
              name="budget"
              type="text"
              placeholder="Your budget range"
            />
          </div>
        </div>
      </section>

      <button type="submit" className="btn btn-primary qf-submit">
        Submit quote request
      </button>

      {link ? (
        <p className="qf-note" role="status">
          Your request is ready in WhatsApp. Press send to reach us. If it did
          not open,{' '}
          <a href={link} target="_blank" rel="noopener noreferrer">
            tap here
          </a>
          .
        </p>
      ) : (
        <p className="qf-note">We will reply with a customised quote for your event.</p>
      )}

      <Link href={backHref} className="back-link">
        <span aria-hidden="true">←</span> {backLabel}
      </Link>
    </form>
  )
}
