import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.12),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-pretty text-3xl font-bold tracking-tight md:text-5xl">
            Turn Support Chaos into Clarity with AI
          </h1>
          <p className="mt-4 text-balance text-base text-muted-foreground md:text-lg">
            Summarize and classify tickets instantly — boost response speed, cut costs, and improve CSAT scores.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-[rgb(var(--brand))] hover:brightness-95 rounded-lg">
              <Link href="#pricing">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg bg-transparent">
              <Link href="#demo">Book Demo</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            47-line AI that summarizes and classifies: Bug • Feature Request • Billing
          </p>
        </div>
      </div>
    </section>
  )
}
