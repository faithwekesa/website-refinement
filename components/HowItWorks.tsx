import Link from 'next/link'

const steps = [
  {
    title: 'Tell us about your event',
    text: 'Share the date, the guest count and the kind of occasion. We listen first.',
  },
  {
    title: 'Choose your menu',
    text: 'Pick from our sample menus or let us shape one around your taste and budget.',
  },
  {
    title: 'We handle the rest',
    text: 'Preparation, serving and clean-up are taken care of, so you can enjoy the day.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section section-warm">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="h2">Simple from the first call</h2>
          <p className="lead">Three steps from an idea to a table that is ready.</p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={step.title} className="step">
              <span className="step-num">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className="more-wrap">
          <Link href="/quote-request" className="more-link">
            Start planning your event
          </Link>
        </div>
      </div>
    </section>
  )
}
