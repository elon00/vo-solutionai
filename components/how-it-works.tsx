import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Brain, CheckCircle2 } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Mail,
      title: "Submit Ticket",
      text: "Users send support tickets via your helpdesk or API.",
    },
    {
      icon: Brain,
      title: "AI Summarizes & Classifies",
      text: "Clear summary + category: Bug, Feature Request, or Billing.",
    },
    {
      icon: CheckCircle2,
      title: "Actionable Output",
      text: "Your team gets structured, high-signal details to act fast.",
    },
  ]

  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">How it Works</h2>
        <p className="mt-2 text-muted-foreground">From chaos to clarity in three simple steps.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, text }) => (
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
