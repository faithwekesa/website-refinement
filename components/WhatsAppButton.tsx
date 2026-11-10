'use client'

import { usePathname } from 'next/navigation'
import { whatsappLink } from '@/lib/site'

export default function WhatsAppButton() {
  const pathname = usePathname()
  if (pathname === '/menu') return null

  return (
    <a
      className="wa"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3.5 20.5l1.2-4.1A8.5 8.5 0 1 1 8 19.4l-4.5 1.1Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 8.6c.2-.4.5-.4.8-.3.2.5.6 1.3.7 1.5.1.3-.1.5-.3.8-.2.2-.3.4-.1.7.5.9 1.3 1.6 2.3 2 .3.1.5 0 .7-.2.2-.3.4-.6.7-.5.4.2 1 .5 1.4.7.1.3 0 .8-.3 1.2-.5.6-1.2.8-2 .6-2.5-.7-4.3-2.3-5.1-4.2-.3-.7-.2-1.5.2-2.3Z"
          fill="currentColor"
        />
      </svg>
    </a>
  )
}
