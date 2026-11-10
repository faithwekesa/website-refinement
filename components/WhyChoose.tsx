const reasons = [
  {
    title: 'Quality ingredients',
    text: 'Fresh, locally-sourced ingredients for exceptional taste.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12.5 2.6 2.6L16 9.6" />
      </>
    ),
  },
  {
    title: 'Timely service',
    text: 'Punctual and professional service delivery.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: 'Custom menus',
    text: 'Tailored menus to match your preferences.',
    icon: (
      <>
        <rect x="6" y="4.5" width="12" height="16" rx="2" />
        <path d="M9.5 4.5h5v2h-5zM9 11h6M9 15h4" />
      </>
    ),
  },
  {
    title: 'Expert staff',
    text: 'Professional and experienced team.',
    icon: (
      <>
        <circle cx="12" cy="8" r="2.5" />
        <circle cx="6.5" cy="10" r="2" />
        <circle cx="17.5" cy="10" r="2" />
        <path d="M7.5 18c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4M3.5 17c0-1.7 1.2-3 3-3M20.5 17c0-1.7-1.2-3-3-3" />
      </>
    ),
  },
]

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head-left">
          <span className="eyebrow">Why Jawaka</span>
          <h2 className="h2">Why choose our catering services?</h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="why">
              <span className="why-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {reason.icon}
                </svg>
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
