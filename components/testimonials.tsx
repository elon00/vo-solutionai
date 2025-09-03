import { Card, CardContent } from "@/components/ui/card"

const quotes = [
  {
    quote: "We cut first-response time by 42%. The summaries are gold.",
    author: "Amelia R., Support Lead @ Fintech SaaS",
  },
  {
    quote: "Clear classifications cleaned up our backlog overnight.",
    author: "Jordan K., Head of Product @ DevTools Startup",
  },
  {
    quote: "Happier customers, happier team. Worth every dollar.",
    author: "Priya M., Founder @ B2B SaaS",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">What users say</h2>
        <p className="mt-2 text-muted-foreground">Social proof from teams like yours.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Card key={i}>
            <CardContent className="p-5">
              <p className="text-pretty">“{q.quote}”</p>
              <p className="mt-3 text-sm text-muted-foreground">— {q.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
