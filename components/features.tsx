import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Timer, Sparkles, Zap, Plug } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Summaries",
    text: "Condense long, noisy tickets into crisp, actionable summaries.",
  },
  {
    icon: Zap,
    title: "Instant Categorization",
    text: "Automatic classification into Bug, Feature Request, or Billing.",
  },
  {
    icon: Timer,
    title: "Boost Productivity & CSAT",
    text: "Reply faster with higher accuracy and happier customers.",
  },
  {
    icon: Plug,
    title: "Easy API Integration",
    text: "Drop-in endpoint with copy-paste code and secure auth.",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Features</h2>
        <p className="mt-2 text-muted-foreground">Built for SaaS teams drowning in tickets.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {features.map(({ icon: Icon, title, text }) => (
          <Card key={title} className="border bg-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[rgb(var(--brand))]/15 to-[rgb(var(--accent))]/15 text-[rgb(var(--brand))]">
                  <Icon size={18} />
                </span>
                <CardTitle className="text-base">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{text}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
