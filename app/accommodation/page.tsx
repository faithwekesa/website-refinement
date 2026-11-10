import type { Metadata } from 'next'
import Link from 'next/link'
import RoomCard from '@/components/RoomCard'

export const metadata: Metadata = {
  title: 'Accommodation | Jawaka Catering',
  description:
    'Comfortable rooms on Thika Road, behind TRM mall, with Wi-Fi, parking and a smart TV.',
}

const rooms = [
  {
    slug: 'new-one',
    name: 'New one',
    text: 'Very nice.',
    location: 'Thika Road, behind TRM mall',
    guests: 2,
    type: 'Standard Single',
    board: 'Bed & Breakfast (BB)',
    price: 3000,
    amenities: ['Free WiFi', 'Parking', 'Smart TV'],
  },
  {
    slug: 'cosy',
    name: 'Cosy',
    text: 'Nice rooms.',
    location: 'Thika Road, behind TRM mall',
    guests: 2,
    type: 'Deluxe Single',
    board: 'Full Board (FB)',
    price: 2345,
    amenities: ['Free WiFi', 'Parking', 'Smart TV'],
  },
]

const childRates = [
  ['0 – 4 years sharing with parents', 'Free'],
  ['5 – 11 years sharing with parents', '50% adult rate'],
  ['5 – 17 years', '75% adult rate'],
]

const boards = [
  ['BB', 'Bed & Breakfast'],
  ['HB', 'Half Board'],
  ['FB', 'Full Board'],
]

export default function AccommodationPage() {
  return (
    <main className="menu-page">
      <div className="container">
        <div className="menu-head">
          <span className="eyebrow">Accommodation</span>
          <h1>Premium accommodations</h1>
        </div>

        <div className="rooms">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>

        <section className="acc-info">
          <div>
            <h3>Additional charges</h3>
            <ul className="acc-rates">
              {childRates.map(([label, rate]) => (
                <li key={label}>
                  <span>{label}</span>
                  <i aria-hidden="true" />
                  <b>{rate}</b>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Board type guide</h3>
            <ul className="acc-boards">
              {boards.map(([code, label]) => (
                <li key={code}>
                  <em>{code}</em>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Conference package</h3>
            <p>
              Available upon request with comprehensive meeting facilities and
              catering options.
            </p>
            <Link href="/quote-request" className="more-link">
              Request a quote
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
