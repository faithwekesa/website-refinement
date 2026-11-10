'use client'

import { useEffect, useRef, useState } from 'react'
import { whatsappLink } from '@/lib/site'

type Room = {
  slug: string
  name: string
  text: string
  location: string
  guests: number
  type: string
  board: string
  price: number
  amenities: string[]
}


export default function RoomCard({ room }: { room: Room }) {
  const [failed, setFailed] = useState(false)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const message = `Hello Jawaka, I would like to enquire about the ${room.name} room (${room.type}, ${room.board}) at Ksh ${room.price.toLocaleString('en-KE')} per night.`
  const href = whatsappLink(message)

  return (
    <article className="room">
      <div className="room-photo">
        {failed ? (
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 18V8M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" />
            <circle cx="7" cy="11.5" r="1.5" />
          </svg>
        ) : (
          <button
            type="button"
            className="room-zoom"
            onClick={() => setOpen(true)}
            aria-label={`View ${room.name} photo full size`}
          >
            <img
              ref={ref}
              src={`/images/rooms/${room.slug}.jpg`}
              alt={room.name}
              onError={() => setFailed(true)}
            />
            <span className="room-zoom-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="room-body">
        <div className="room-top">
          <div>
            <h2>{room.name}</h2>
            <p className="room-text">{room.text}</p>
          </div>
          <div className="room-price">
            <b>Ksh {room.price.toLocaleString('en-KE')}</b>
            <span>per night</span>
          </div>
        </div>

        <dl className="room-facts">
          <div>
            <dt>Location</dt>
            <dd>{room.location}</dd>
          </div>
          <div>
            <dt>Capacity</dt>
            <dd>{room.guests} guests</dd>
          </div>
          <div>
            <dt>Room type</dt>
            <dd>{room.type}</dd>
          </div>
          <div>
            <dt>Meal plan</dt>
            <dd>{room.board}</dd>
          </div>
        </dl>

        <div className="room-tags">
          {room.amenities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <a href={href} target="_blank" rel="noopener noreferrer" className="room-book">
          Book on WhatsApp
        </a>
      </div>
      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${room.name} photo`}
          onClick={() => setOpen(false)}
        >
          <button type="button" className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">
            ×
          </button>
          <img src={`/images/rooms/${room.slug}.jpg`} alt={room.name} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </article>
  )
}
