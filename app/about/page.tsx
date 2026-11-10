import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Jawaka Catering',
  description:
    'For nearly a decade Jawaka has been redefining excellence in hospitality across East Africa.',
}

const story = [
  'For nearly a decade, JAWAKA has been redefining excellence in the hospitality industry. What began as a vision nine years ago has evolved into a trusted partnership with an impressive portfolio of clients who continue to choose us for their most important occasions.',
  "In the competitive landscape of hospitality, we don't just survive—we thrive. Our success stems from a simple yet powerful philosophy: genuine relationships drive exceptional results. Every client interaction, every community connection, and every service delivery is an opportunity to strengthen the bonds that have become the foundation of our growth.",
  "We believe that meeting expectations is just the starting point. Our mission is to consistently exceed what our customers envision, transforming their events and experiences into memorable moments that last a lifetime. This commitment to excellence isn't just a goal—it's embedded in everything we do.",
  'Quality service meets cutting-edge technology in our approach to hospitality. Our advanced customer feedback system creates a continuous loop of improvement, ensuring that every voice is heard and every insight shapes our operations. This technology-driven approach allows us to stay ahead of trends while maintaining the personal touch that defines exceptional hospitality.',
  'As we continue to grow, our focus remains unchanged: building lasting relationships, delivering unparalleled service, and creating experiences that exceed expectations. The trust our clients and communities place in us drives our commitment to constant innovation and service excellence.',
]

const directors = [
  {
    name: 'John Doe',
    role: 'Managing Director',
    initials: 'JD',
    quote: 'Our commitment to excellence drives everything we do.',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Director',
    initials: 'JS',
    quote: 'Innovation and tradition go hand in hand.',
  },
  {
    name: 'David Wilson',
    role: 'Creative Director',
    initials: 'DW',
    quote: 'Creativity is at the heart of great cuisine.',
  },
]

const values = [
  {
    title: 'Excellence',
    text: 'We source only the finest ingredients and maintain the highest standards in food preparation and service delivery.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12.5 2.6 2.6L16 9.6" />
      </>
    ),
  },
  {
    title: 'Innovation',
    text: 'We constantly explore new culinary trends and innovative presentation techniques to exceed expectations.',
    icon: (
      <>
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
      </>
    ),
  },
  {
    title: 'Relationships',
    text: 'Building genuine relationships with our clients and communities drives our exceptional results.',
    icon: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  },
]

const team = [1, 2, 3, 4]

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export default function AboutPage() {
  return (
    <main className="menu-page">
      <div className="container">
        <div className="menu-head">
          <span className="eyebrow">Our story</span>
          <h1>About Jawaka</h1>
        </div>

        <div className="about-story">
          {story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="about-tag">At JAWAKA, your vision becomes our mission.</p>
        </div>

        <section className="about-block">
          <h2 className="about-title">Our directors</h2>
          <div className="dir-grid">
            {directors.map((director) => (
              <article key={director.name} className="dir">
                <span className="dir-avatar" aria-hidden="true">
                  {director.initials}
                </span>
                <h3>{director.name}</h3>
                <p className="dir-role">{director.role}</p>
                <blockquote>“{director.quote}”</blockquote>
              </article>
            ))}
          </div>
        </section>

        <section className="about-block">
          <div className="mv-grid">
            <article className="mv">
              <span className="mv-icon">
                <Svg>
                  <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />
                </Svg>
              </span>
              <h3>Our mission</h3>
              <p>
                JAWAKA exemplifies a range of diversified concepts attached together by a
                shared commitment to providing our clients with memorable events and
                catering experiences. Guided by the belief that the legacy and inspirations
                of the founders remain the underlying force behind the innovation and
                creativity that define our business operations, JAWAKA’s mission is to
                deliver cutting-edge catering and event services in a work environment rich
                of opportunities for the staff and yielding best results for clients.
              </p>
            </article>
            <article className="mv">
              <span className="mv-icon">
                <Svg>
                  <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                  <circle cx="12" cy="12" r="2.8" />
                </Svg>
              </span>
              <h3>Our vision</h3>
              <p>
                To lead the hospitality industry in East Africa by providing superior food
                quality, event services, and value addition in an attractive environment. We
                seek to combine hospitality management with a commitment to innovation,
                teamwork, and customer-driven excellence while providing our staff and
                business partners with opportunities for development and growth.
              </p>
            </article>
          </div>
        </section>

        <section className="about-block">
          <h2 className="about-title">Our core values</h2>
          <div className="val-grid">
            {values.map((value) => (
              <article key={value.title} className="val">
                <span className="val-icon">
                  <Svg>{value.icon}</Svg>
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-block">
          <h2 className="about-title">Meet our team</h2>
          <div className="team-grid">
            {team.map((n) => (
              <article key={n} className="member">
                <div className="member-photo">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8.5" r="3.6" />
                    <path d="M4.5 20.5c.6-4 3.6-6 7.5-6s6.9 2 7.5 6" />
                  </svg>
                </div>
                <h3>John Doe</h3>
                <p>Executive Chef</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
