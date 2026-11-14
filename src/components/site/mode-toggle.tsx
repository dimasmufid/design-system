import * as React from "react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

// Theme is "light" | "dark" in localStorage, or absent to follow the system.
// The inline script in layouts/main.astro applies it before first paint.
function isDark() {
  return document.documentElement.classList.contains("dark")
}

function applyTheme(dark: boolean) {
  // Suppress transitions while the theme flips, like next-themes.
  const style = document.createElement("style")
  style.textContent = "*,*::before,*::after{transition:none!important}"
  document.head.appendChild(style)
  document.documentElement.classList.toggle("dark", dark)
  document.documentElement.style.colorScheme = dark ? "dark" : "light"
  window.getComputedStyle(document.body)
  setTimeout(() => style.remove(), 1)
}

export function ModeToggle() {
  const toggle = React.useCallback(() => {
    const dark = !isDark()
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    try {
      if (dark === systemDark) localStorage.removeItem("theme")
      else localStorage.setItem("theme", dark ? "dark" : "light")
    } catch {
      // Storage blocked; the choice lasts for this page only.
    }
    applyTheme(dark)
  }, [])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "d" || e.metaKey || e.ctrlKey || e.altKey || e.repeat) return
      const t = e.target as HTMLElement | null
      if (t?.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t?.tagName ?? "")) return
      e.preventDefault()
      toggle()
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onSystem = () => {
      let stored: string | null = null
      try {
        stored = localStorage.getItem("theme")
      } catch {
      // Storage blocked; the choice lasts for this page only.
    }
      if (!stored) applyTheme(media.matches)
    }
    document.addEventListener("keydown", onKey)
    media.addEventListener("change", onSystem)
    return () => {
      document.removeEventListener("keydown", onKey)
      media.removeEventListener("change", onSystem)
    }
  }, [toggle])

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="ghost" size="icon" className="size-8" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4.5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 3l0 18" />
              <path d="M12 9l4.65 -4.65" />
              <path d="M12 14.3l7.37 -7.37" />
              <path d="M12 19.6l8.85 -8.85" />
            </svg>
            <span className="sr-only">Toggle theme</span>
          </Button>
        }
      />
      <TooltipContent className="flex items-center gap-2 pr-1">
        Toggle Mode
        <kbd className="pointer-events-none flex h-5 items-center rounded-sm bg-background/20 px-1.5 font-mono text-[0.7rem] font-medium">
          D
        </kbd>
      </TooltipContent>
    </Tooltip>
  )
}
