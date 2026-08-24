import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "mailto:hello@pegasuspixels.dev" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-canvas-deep">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Pegasus Pixels
        </div>

        <nav className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Pegasus Pixels. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
