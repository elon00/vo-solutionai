import Link from "next/link"

export function SiteFooter() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#docs", label: "Docs" },
    { href: "#blog", label: "Blog" },
    { href: "#demo", label: "Contact" },
    { href: "#privacy", label: "Privacy Policy" },
  ]
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 md:h-20 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AI Support Ticket. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center gap-4">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
