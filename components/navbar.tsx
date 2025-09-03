"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="h-6 w-6 rounded-md bg-gradient-to-br from-[rgb(var(--brand))] to-[rgb(var(--accent))]"
            aria-hidden
          />
          <span className="font-semibold">AI Support Ticket</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#how" className="text-sm text-muted-foreground hover:text-foreground">
            How it works
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
          <Link href="#demo" className="text-sm text-muted-foreground hover:text-foreground">
            Live demo
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="#demo">Book Demo</Link>
          </Button>
          <Button asChild className="bg-[rgb(var(--brand))] hover:brightness-95 rounded-lg">
            <Link href="#pricing">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
