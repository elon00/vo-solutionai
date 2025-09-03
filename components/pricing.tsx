import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tiers = [
  { name: "Free Trial", price: "$0", detail: "Up to 100 tickets / month", cta: "Start Free", featured: false },
  { name: "Pro", price: "$49/mo", detail: "5,000 tickets / month", cta: "Get Pro", featured: true },
  { name: "Enterprise", price: "Custom", detail: "SAML, SLAs, custom quotas", cta: "Contact Sales", featured: false },
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Pricing</h2>
        <p className="mt-2 text-muted-foreground">Start free, scale as you grow.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.name} className={t.featured ? "border-2 border-[rgb(var(--brand))]" : ""}>
            <CardHeader>
              <CardTitle className="flex items-baseline justify-between">
                <span>{t.name}</span>
                <span className="text-lg font-semibold">{t.price}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{t.detail}</CardContent>
            <CardFooter>
              <Button className={t.featured ? "w-full bg-[rgb(var(--brand))] hover:brightness-95" : "w-full"}>
                {t.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
