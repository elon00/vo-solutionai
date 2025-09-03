import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

const hasKey = !!process.env.OPENAI_API_KEY

export async function POST(req: NextRequest) {
  try {
    const { ticket } = (await req.json()) as { ticket?: string }
    if (!ticket || ticket.trim().length === 0) {
      return NextResponse.json({ error: "Missing ticket" }, { status: 400 })
    }

    if (!hasKey) {
      const mock = mockSummarize(ticket)
      return NextResponse.json(mock)
    }

    const prompt = `
You are an assistant that reads a customer support ticket, writes a concise 1-2 sentence summary, 
and returns a single best-fit classification from: Bug, Feature Request, Billing, Other.

Return JSON with fields: summary, classification.
Ticket:
${ticket}
    `.trim()

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt,
    })

    let summary = ""
    let classification: "Bug" | "Feature Request" | "Billing" | "Other" = "Other"

    try {
      const parsed = JSON.parse(text)
      summary = parsed.summary ?? ""
      classification = parsed.classification ?? "Other"
    } catch {
      const lower = text.toLowerCase()
      if (
        lower.includes("billing") ||
        lower.includes("payment") ||
        lower.includes("invoice") ||
        lower.includes("refund")
      ) {
        classification = "Billing"
      } else if (
        lower.includes("bug") ||
        lower.includes("error") ||
        lower.includes("crash") ||
        lower.includes("issue")
      ) {
        classification = "Bug"
      } else if (lower.includes("feature") || lower.includes("request")) {
        classification = "Feature Request"
      }
      summary = text.split("\n")[0].slice(0, 280)
    }

    return NextResponse.json({ summary, classification })
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

function mockSummarize(ticket: string) {
  const t = ticket.toLowerCase()
  let classification: "Bug" | "Feature Request" | "Billing" | "Other" = "Other"
  if (t.includes("refund") || t.includes("invoice") || t.includes("charged") || t.includes("billing"))
    classification = "Billing"
  else if (t.includes("feature") || t.includes("request")) classification = "Feature Request"
  else if (t.includes("error") || t.includes("bug") || t.includes("crash") || t.includes("broken"))
    classification = "Bug"

  const summary = `User reports: ${ticket.trim().slice(0, 160)}${ticket.length > 160 ? "..." : ""}`
  return { summary, classification }
}
