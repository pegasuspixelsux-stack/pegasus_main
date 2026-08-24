import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Pegasus Pixels",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-[100dvh] bg-canvas">
      <div className="mx-auto max-w-2xl px-6 py-24">
        <Link
          href="/"
          className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
        >
          &larr; Back to home
        </Link>
        <h1 className="mt-8 text-3xl font-normal tracking-tighter text-foreground sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-6 leading-relaxed text-muted">
          This page is a placeholder. Our full terms of use, covering
          engagement scope, deliverables, and liability, will be published
          here before launch.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          In the meantime, reach us directly at{" "}
          <a
            href="mailto:hello@pegasuspixels.dev"
            className="text-foreground underline underline-offset-4 transition-colors duration-200 hover:text-accent"
          >
            hello@pegasuspixels.dev
          </a>{" "}
          with any questions about working with us.
        </p>
      </div>
    </main>
  );
}
