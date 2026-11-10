import type { Metadata } from 'next'
import MenuBrowser from '@/components/MenuBrowser'

export const metadata: Metadata = {
  title: 'Menu | Jawaka Catering',
  description:
    'Breakfast, lunch, dinner and supper menus in three price tiers, prepared with passion and premium ingredients.',
}

export default function MenuPage() {
  return (
    <main className="menu-page">
      <div className="container">
        <div className="menu-head">
          <span className="eyebrow">Our menu</span>
          <h1>Our culinary selection</h1>
        </div>
        <MenuBrowser />
      </div>
    </main>
  )
}
