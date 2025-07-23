"use client"

import type { ThemeProviderProps } from "next-themes"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * Wrapper around `next-themes` <ThemeProvider> so we can
 * re-export it as a named export and keep the rest of our
 * codebase unchanged.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
