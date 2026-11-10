import type { Metadata } from 'next'
import { Suspense } from 'react'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Request a quote | Jawaka Catering',
  description: 'Tell us about your event and we will reply with a customised quote.',
}

export default function QuoteRequestPage() {
  return (
    <main className="quote-page">
      <div className="quote-wrap">
        <div className="quote-head">
          <span className="eyebrow">Get a quote</span>
          <h1>Request a quote</h1>
          <p className="lead">
            Fill out the form below and we will get back to you with a
            customised quote for your event.
          </p>
        </div>
        <Suspense>
          <QuoteForm />
        </Suspense>
      </div>
    </main>
  )
}
