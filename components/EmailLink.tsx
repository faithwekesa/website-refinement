'use client'

import type { MouseEvent, ReactNode } from 'react'
import { mailtoLink, openEmail } from '@/lib/site'

type EmailLinkProps = {
  email: string
  subject?: string
  className?: string
  children?: ReactNode
}

export default function EmailLink({ email, subject = '', className, children }: EmailLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    openEmail(email, subject)
  }

  return (
    <a href={mailtoLink(email, subject)} onClick={onClick} className={className}>
      {children ?? email}
    </a>
  )
}
