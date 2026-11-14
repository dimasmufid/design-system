import { TooltipProvider } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

import { ModeToggle } from "./mode-toggle"

export function SiteHeader() {
  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
        <div className="flex h-14 items-center gap-2 px-4 md:px-6">
          <a href="/ui/" className="text-sm font-semibold">
            Design System
          </a>
          <div className="ml-auto flex items-center gap-2">
            <Separator orientation="vertical" className="h-4!" />
            <ModeToggle />
          </div>
        </div>
      </header>
    </TooltipProvider>
  )
}
