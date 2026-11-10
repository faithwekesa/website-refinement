import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import TrustedBy from '@/components/TrustedBy'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <TrustedBy />
      <Testimonials />
    </main>
  )
}
