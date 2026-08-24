"use client";

import { useEffect } from "react";

/**
 * Sets the <html lang> attribute for a specific route without forcing the
 * root layout into dynamic rendering (headers()-based approaches make the
 * entire app opt out of static generation). A tiny, cheap client-side
 * correction instead — the static shell still ships as lang="en".
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}
