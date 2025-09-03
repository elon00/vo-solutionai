"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"

type DemoResult = {
  summary: string
  classification: "Bug" | "Feature Request" | "Billing" | "Other"
}

export function LiveDemo() {
  const [input, setInput] = useState<string>(
    "I tried to upgrade to Pro and got charged twice. Please refund the duplicate charge. Also my invoice shows VAT incorrectly.",
  )
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<DemoResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onRun = async () => {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticket: input }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = (await res.json()) as DemoResult
      setResult(data)
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Live Demo</h2>
        <p className="mt-2 text-muted-foreground">Paste a ticket, get instant summary + classification.</p>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Try it now</CardTitle>
          <CardDescription>We’ll process your text with AI (or a safe mock if no key is set).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste a support ticket..."
            className="min-h-32"
          />
          <div className="flex items-center justify-between gap-3">
            <Button
              onClick={onRun}
              disabled={loading}
              className="bg-[rgb(var(--brand))] hover:brightness-95 rounded-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                </>
              ) : (
                "Summarize & Classify"
              )}
            </Button>
            {result && (
              <Badge variant="secondary" className="text-sm">
                {result.classification}
              </Badge>
            )}
          </div>

          {error && <p className="text-sm text-red-600">Error: {error}</p>}

          {result && (
            <div className="rounded-lg border bg-muted/30 p-4 text-sm">
              <div className="text-xs font-medium text-muted-foreground">AI Summary</div>
              <p className="mt-1">{result.summary}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
