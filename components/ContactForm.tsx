'use client'

import { FormEvent, useState } from 'react'
import { SITE, openEmail, whatsappLink } from '@/lib/site'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const subject = String(data.get('subject') || '')
    const message = String(data.get('message') || '')
    const body = [
      'Hello Jawaka,',
      '',
      message,
      '',
      `Name: ${name}`,
      `Reply to: ${email}`,
    ].join('\n')
    openEmail(SITE.emails[0], subject, body)
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <form className="qf contact-form" onSubmit={onSubmit}>
      <h2>Send us a message</h2>
      <div className="qf-grid">
        <div className="qf-field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="qf-field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="qf-field wide">
          <label htmlFor="c-subject">Subject</label>
          <input id="c-subject" name="subject" type="text" placeholder="How can we help?" required />
        </div>
        <div className="qf-field wide">
          <label htmlFor="c-message">Message</label>
          <textarea id="c-message" name="message" rows={5} placeholder="Tell us a little about your event or question" required />
        </div>
      </div>
      <button type="submit" className="btn btn-primary qf-submit">
        Send message
      </button>
      {sent ? (
        <p className="qf-note" role="status">
          Your email is ready in a new window, just press send there.
        </p>
      ) : (
        <p className="qf-note">
          Prefer WhatsApp?{' '}
          <a href={whatsappLink('Hello Jawaka, I would like to ask about your catering.')} target="_blank" rel="noopener noreferrer">
            Chat with us
          </a>
        </p>
      )}
    </form>
  )
}
