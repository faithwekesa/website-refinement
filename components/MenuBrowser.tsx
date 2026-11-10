'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { checkPhone, clearPhoneError, whatsappLink } from '@/lib/site'
import Link from 'next/link'

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Supper']

const tiers = [
  { name: 'Affordable', range: 'Ksh 150 – 250' },
  { name: 'Moderate', range: 'Ksh 300 – 500' },
  { name: 'Premium', range: 'Ksh 600+' },
]

type Item = {
  name: string
  text: string
  price: number
  icon: keyof typeof icons
  category: string
  tier: string
}

const icons = {
  cup: (
    <>
      <path d="M5 9h11v4a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V9Z" />
      <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5c0 1 .8 1.3.8 2.3M12 3.5c0 1 .8 1.3.8 2.3" />
    </>
  ),
  chapo: (
    <>
      <ellipse cx="12" cy="9" rx="8" ry="3.5" />
      <path d="M4 9v3c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V9M4 12.5v2.5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-2.5" />
    </>
  ),
  fries: (
    <>
      <path d="M6.5 11 5 4.5M10 11l-.7-7.5M14 11l.7-7.5M17.5 11 19 4.5" />
      <path d="M5 11h14l-1.5 9h-11L5 11Z" />
    </>
  ),
  mandazi: (
    <>
      <path d="M12 4.5 19.5 12 12 19.5 4.5 12 12 4.5Z" />
      <path d="M12 9v6M9 12h6" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
    </>
  ),
  bowl: (
    <>
      <path d="M4 11h16a8 8 0 0 1-16 0Z" />
      <path d="M9 7c0 1 .8 1.3.8 2.3M13 7c0 1 .8 1.3.8 2.3" />
    </>
  ),
  samosa: (
    <>
      <path d="M12 4.5 20 18.5H4L12 4.5Z" />
      <path d="M8 15.5h8" />
    </>
  ),
}

const items: Item[] = [
  {
    category: 'Breakfast',
    tier: 'Affordable',
    name: 'Chapo and Tea',
    icon: 'chapo',
    price: 150,
    text: 'Indulge in a classic comfort: soft, flaky chapati served alongside a steaming cup of your favorite tea.',
  },
  {
    category: 'Breakfast',
    tier: 'Affordable',
    name: 'French Fries',
    icon: 'fries',
    price: 150,
    text: 'Golden, crispy, and perfectly salted, our French Fries are the ultimate irresistible side dish.',
  },
  {
    category: 'Breakfast',
    tier: 'Affordable',
    name: 'Mandazi and Tea',
    icon: 'mandazi',
    price: 150,
    text: 'Treat yourself to the perfect pair: our light and fluffy Mandazi fried to golden perfection, served with a steaming cup of your favorite tea.',
  },
  {
    category: 'Breakfast',
    tier: 'Affordable',
    name: 'Masala tea',
    icon: 'cup',
    price: 160,
    text: 'Savor the warmth of our Masala Tea, a rich and aromatic blend of black tea, milk, and a carefully balanced mix of fragrant spices.',
  },
  {
    category: 'Breakfast',
    tier: 'Affordable',
    name: 'Samosa with sweet syrup',
    icon: 'samosa',
    price: 150,
    text: 'Elevate your senses with our sweet Samosa, a delightful twist on a classic, filled with a delicate mixture and drizzled with a rich, sugary syrup.',
  },
  {
    category: 'Lunch',
    tier: 'Affordable',
    name: 'Chapo minji',
    icon: 'bowl',
    price: 200,
    text: 'Warm your soul with Chapo Minji, a comforting classic of tender green peas simmered in a rich tomato and onion stew, served with soft, flaky chapati.',
  },
  {
    category: 'Lunch',
    tier: 'Affordable',
    name: 'Mbuzi and rice',
    icon: 'plate',
    price: 200,
    text: 'Savor the succulent flavor of our Mbuzi and Rice, a tender goat stew slow-cooked to perfection, served with fluffy white rice.',
  },
  {
    category: 'Lunch',
    tier: 'Affordable',
    name: 'Rice and beef stew',
    icon: 'plate',
    price: 180,
    text: 'Dig into our Rice and Beef Stew, a comforting classic featuring tender, slow-simmered beef in a rich, savory gravy, served over a bed of fluffy white rice.',
  },
  {
    category: 'Lunch',
    tier: 'Affordable',
    name: 'Veggie rice beef waru',
    icon: 'plate',
    price: 250,
    text: 'A delicious medley of flavors: our Veggie Rice, Beef, and Waru features tender beef, a rich vegetable and potato stew, all served over a bed of fragrant rice.',
  },
  {
    category: 'Lunch',
    tier: 'Affordable',
    name: 'Ugali sukuma beef',
    icon: 'plate',
    price: 180,
    text: 'Savor our classic comfort meal: Ugali, Sukuma, and Beef, a hearty plate of rich beef stew, sautéed collard greens, and a firm cornmeal staple.',
  },
  {
    category: 'Dinner',
    tier: 'Affordable',
    name: 'Chapo beans with beef',
    icon: 'bowl',
    price: 250,
    text: 'Enjoy our Chapo Beans with Beef, a hearty and satisfying combination of tender beef stewed with beans, served alongside soft, flaky chapati.',
  },
  {
    category: 'Dinner',
    tier: 'Affordable',
    name: 'Fried Matumbo',
    icon: 'plate',
    price: 200,
    text: 'Savor our Fried Matumbo, crispy and tender tripe pan-fried to perfection with a hint of spice.',
  },
  {
    category: 'Dinner',
    tier: 'Affordable',
    name: 'Ugali eggs Sukuma',
    icon: 'plate',
    price: 200,
    text: 'Enjoy a classic, satisfying meal with our Ugali, Eggs, and Sukuma, a hearty combination of a cornmeal staple, perfectly cooked eggs, and sautéed kale.',
  },
  {
    category: 'Dinner',
    tier: 'Affordable',
    name: 'Sukuma beef',
    icon: 'plate',
    price: 160,
    text: 'Sukuma beef.',
  },
  {
    category: 'Supper',
    tier: 'Affordable',
    name: 'Chapo Matumbo',
    icon: 'bowl',
    price: 200,
    text: 'Experience the taste of home with our Chapo Matumbo, a comforting and hearty stew of tripe simmered in a rich, flavorful tomato-based sauce, served alongside soft, flaky chapati.',
  },
  {
    category: 'Supper',
    tier: 'Affordable',
    name: 'Ugali Cabbage eggs',
    icon: 'plate',
    price: 180,
    text: 'Enjoy a simple and satisfying meal with our Ugali, Cabbage, and Eggs, a perfect combination of a hearty cornmeal staple, sautéed cabbage, and a perfectly cooked egg.',
  },
  {
    category: 'Supper',
    tier: 'Affordable',
    name: 'Ugali beef',
    icon: 'plate',
    price: 150,
    text: 'Dive into a Kenyan classic: Ugali and Beef, a hearty plate of slow-cooked beef stew and a firm cornmeal staple.',
  },
]

const slug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

function DishThumb({ item }: { item: Item }) {
  const [failed, setFailed] = useState(false)
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  return (
    <span className={`dish-thumb ${failed ? 'is-icon' : ''}`}>
      {failed ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[item.icon]}
        </svg>
      ) : (
        <img
          ref={ref}
          src={`/images/menu/${slug(item.name)}.jpg`}
          alt=""
          onError={() => setFailed(true)}
        />
      )}
    </span>
  )
}


const money = (value: number) => `Ksh ${value.toLocaleString('en-KE')}`

export default function MenuBrowser() {
  const [category, setCategory] = useState('Breakfast')
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState<Record<string, number>>({})
  const [open, setOpen] = useState(false)
  const [sentLink, setSentLink] = useState('')
  const [restored, setRestored] = useState(false)

  const q = query.trim().toLowerCase()
  const budget = /^\d+$/.test(q) ? Number(q) : null

  const matches = (item: Item) => {
    if (!q) return item.category === category
    if (budget !== null) return item.price <= budget
    return (
      item.name.toLowerCase().includes(q) ||
      item.text.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    )
  }

  const visible = items.filter(matches)
  const searching = q !== ''
  const groups = (searching ? categories : [category])
    .map((cat) => ({
      cat,
      tiers: tiers
        .map((tier) => ({
          tier,
          list: visible.filter((i) => i.category === cat && i.tier === tier.name),
        }))
        .filter((g) => g.list.length > 0),
    }))
    .filter((g) => g.tiers.length > 0)

  const change = (name: string, delta: number) =>
    setCart((current) => {
      const next = Math.max(0, (current[name] ?? 0) + delta)
      const copy = { ...current }
      if (next === 0) delete copy[name]
      else copy[name] = next
      return copy
    })

  const lines = items
    .filter((item) => cart[item.name])
    .map((item) => ({ item, qty: cart[item.name] }))
  const count = lines.reduce((sum, line) => sum + line.qty, 0)
  const total = lines.reduce((sum, line) => sum + line.qty * line.item.price, 0)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('jawaka-cart')
      if (saved) {
        const parsed = JSON.parse(saved) as Record<string, number>
        const valid = Object.fromEntries(
          Object.entries(parsed).filter(
            ([name, qty]) => items.some((item) => item.name === name) && Number.isInteger(qty) && qty > 0,
          ),
        )
        setCart(valid)
      }
    } catch {}
    setRestored(true)
  }, [])

  useEffect(() => {
    if (!restored) return
    try {
      if (Object.keys(cart).length) window.localStorage.setItem('jawaka-cart', JSON.stringify(cart))
      else window.localStorage.removeItem('jawaka-cart')
    } catch {}
  }, [cart, restored])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (open && count === 0 && !sentLink) setOpen(false)
  }, [open, count, sentLink])

  const closeSheet = () => {
    setOpen(false)
    setSentLink('')
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!checkPhone(event.currentTarget)) return
    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()

    const message = [
      'New food order',
      '',
      `Name: ${get('name')}`,
      `Phone: ${get('phone')}`,
      `Needed on: ${get('date')}`,
      `Location: ${get('location')}`,
      '',
      'Order:',
      ...lines.map(
        ({ item, qty }) =>
          `${qty} x ${item.name} (${money(item.price)}) = ${money(qty * item.price)}`,
      ),
      '',
      `Total: ${money(total)}`,
      get('note') ? `\nNote: ${get('note')}` : '',
    ].join('\n')

    const url = whatsappLink(message)
    setSentLink(url)
    setCart({})
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div className="menu-search">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a dish, or type a price like 200"
          aria-label="Search the menu"
        />
      </div>

      {!searching && (
        <div className="menu-tabs" role="tablist" aria-label="Meal">
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={category === name}
              className={category === name ? 'is-active' : undefined}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>
      )}

      <div className="menu-results" aria-live="polite">
        {searching && budget !== null && (
          <p className="menu-hint">Dishes up to Ksh {budget}</p>
        )}

        {groups.length === 0 && (
          <p className="menu-empty">
            {searching
              ? 'No dishes match your search. Try another word or price.'
              : 'The dishes for this meal are being prepared. Please check back soon.'}
          </p>
        )}

        {groups.map((group) => (
          <section key={group.cat} className="menu-cat">
            <h2>{group.cat}</h2>
            {group.tiers.map(({ tier, list }) => (
              <div key={tier.name} className="menu-tier">
                <div className="menu-tier-label">
                  <span>{tier.name}</span>
                  <i aria-hidden="true" />
                  <em>{tier.range}</em>
                </div>
                <ul className="dishes">
                  {list.map((item) => {
                    const qty = cart[item.name] ?? 0
                    return (
                      <li key={item.name} className="dish">
                        <DishThumb item={item} />
                        <div className="dish-body">
                          <div className="dish-line">
                            <h3>{item.name}</h3>
                            <i className="dish-dots" aria-hidden="true" />
                            <b>{money(item.price)}</b>
                          </div>
                          <p>{item.text}</p>
                        </div>
                        <div className="dish-act">
                          {qty === 0 ? (
                            <button
                              type="button"
                              className="dish-add"
                              aria-label={`Add ${item.name} to order`}
                              onClick={() => change(item.name, 1)}
                            >
                              +
                            </button>
                          ) : (
                            <div className="dish-step" role="group" aria-label={`${item.name} quantity`}>
                              <button
                                type="button"
                                aria-label={`Remove one ${item.name}`}
                                onClick={() => change(item.name, -1)}
                              >
                                −
                              </button>
                              <span>{qty}</span>
                              <button
                                type="button"
                                aria-label={`Add one ${item.name}`}
                                onClick={() => change(item.name, 1)}
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>

      {count > 0 && !open && (
        <div className="order-bar" role="region" aria-label="Your order">
          <span>
            {count} {count === 1 ? 'dish' : 'dishes'} · <b>{money(total)}</b>
          </span>
          <button type="button" onClick={() => setOpen(true)}>
            Place order
          </button>
        </div>
      )}

      <p className="menu-foot">
        Planning an event?{' '}
        <Link href="/quote-request">Request a quote</Link>
      </p>

      {open && (
        <div className="order-overlay" onClick={closeSheet}>
          <div
            className="order-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Place your order"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="order-close"
              aria-label="Close"
              onClick={closeSheet}
            >
              ×
            </button>

            {sentLink ? (
              <div className="order-done">
                <h2>Almost there</h2>
                <p>
                  Your order is ready in WhatsApp. Press send there to confirm
                  it with us. If it did not open,{' '}
                  <a href={sentLink} target="_blank" rel="noopener noreferrer">
                    tap here
                  </a>
                  .
                </p>
                <button type="button" className="btn btn-primary" onClick={closeSheet}>
                  Back to menu
                </button>
              </div>
            ) : (
              <>
                <h2>Your order</h2>
                <ul className="order-lines">
                  {lines.map(({ item, qty }) => (
                    <li key={item.name}>
                      <span>
                        {qty} × {item.name}
                      </span>
                      <b>{money(qty * item.price)}</b>
                      <button
                        type="button"
                        className="order-remove"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => change(item.name, -qty)}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="order-total">
                  <span>Total</span>
                  <b>{money(total)}</b>
                </div>

                <form className="qf order-form" onSubmit={submit}>
                  <div className="qf-field">
                    <label htmlFor="o-name">Name</label>
                    <input id="o-name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div className="qf-field">
                    <label htmlFor="o-phone">Phone</label>
                    <input
                      id="o-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="e.g. 0712 345 678"
                      onInput={(event) => clearPhoneError(event.currentTarget)}
                      required
                    />
                  </div>
                  <div className="qf-field">
                    <label htmlFor="o-date">Needed on</label>
                    <input id="o-date" name="date" type="date" required />
                  </div>
                  <div className="qf-field">
                    <label htmlFor="o-location">Delivery location</label>
                    <input id="o-location" name="location" type="text" required />
                  </div>
                  <div className="qf-field">
                    <label htmlFor="o-note">Note (optional)</label>
                    <textarea id="o-note" name="note" rows={2} />
                  </div>
                  <button type="submit" className="btn btn-primary qf-submit">
                    Send order on WhatsApp
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
