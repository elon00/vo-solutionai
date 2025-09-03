import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { LiveDemo } from "@/components/live-demo"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <LiveDemo />
      <Pricing />
      <Testimonials />
      <SiteFooter />
    </main>
  )
}
