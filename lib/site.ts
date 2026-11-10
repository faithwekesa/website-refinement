export const SITE = {
  name: 'Jawaka Catering',
  url: 'https://jawaka.co.ke',
  whatsapp: '254799194973',
  phones: [
    { label: '+254 799 194 973', href: 'tel:+254799194973' },
    { label: '+254 20 267 4048', href: 'tel:+254202674048' },
  ],
  emails: ['info@jawaka.co.ke', 'chef@jawaka.co.ke'],
  address: 'Choka Estate, Kangundo Road, Nairobi, Kenya',
}

export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

const KENYAN_MOBILE = /^(?:254|0)?[17]\d{8}$/

export function isKenyanMobile(value: string) {
  return KENYAN_MOBILE.test(value.replace(/[\s\-+()]/g, ''))
}

export function checkPhone(form: HTMLFormElement) {
  const input = form.elements.namedItem('phone')
  if (!(input instanceof HTMLInputElement)) return true
  if (isKenyanMobile(input.value)) {
    input.setCustomValidity('')
    return true
  }
  input.setCustomValidity('Enter a valid Kenyan mobile number, for example 0712 345 678')
  input.reportValidity()
  return false
}

export function clearPhoneError(input: HTMLInputElement) {
  input.setCustomValidity('')
}

export const mailtoLink = (to: string, subject = '', body = '') => {
  const query = [
    subject && `subject=${encodeURIComponent(subject)}`,
    body && `body=${encodeURIComponent(body)}`,
  ]
    .filter(Boolean)
    .join('&')
  return `mailto:${to}${query ? `?${query}` : ''}`
}

export const gmailLink = (to: string, subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export function openEmail(to: string, subject = '', body = '') {
  const touch = window.matchMedia('(pointer: coarse)').matches
  if (touch) {
    window.location.href = mailtoLink(to, subject, body)
  } else {
    window.open(gmailLink(to, subject, body), '_blank', 'noopener,noreferrer')
  }
}
