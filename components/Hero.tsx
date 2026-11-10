'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    src: '/images/hero.jpg',
    title: 'Jawaka Catering',
    text: 'Exquisite culinary experiences crafted with passion',
  },
  {
    src: '/images/hero1.jpg',
    title: 'Unforgettable Events',
    text: 'Every detail perfected, every moment cherished',
  },
  {
    src: '/images/unsplash-photo.jpg',
    title: 'Culinary Excellence',
    text: 'Fresh, thoughtful food for every occasion',
  },
]

const INTERVAL = 5000

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % slides.length),
      INTERVAL,
    )
    return () => window.clearTimeout(timer)
  }, [active])

  return (
    <section className="hero" aria-label="Welcome">
      <h1 className="sr-only">Jawaka Catering</h1>

      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`hero-slide ${index === active ? 'on' : ''}`}
          aria-hidden="true"
        >
          <Image
            src={slide.src}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
      <div className="hero-shade" />

      <div className="hero-copy">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-text ${index === active ? 'on' : ''}`}
            aria-hidden={index !== active}
          >
            <div className="hero-title">{slide.title}</div>
            <p>{slide.text}</p>
            <span className="hero-rule" />
          </div>
        ))}
      </div>
    </section>
  )
}
