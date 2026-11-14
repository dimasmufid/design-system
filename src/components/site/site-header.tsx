import { TooltipProvider } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

import { ModeToggle } from "./mode-toggle"

export function SiteHeader() {
  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
        <div className="flex h-14 items-center gap-2 px-4 md:px-6">
          <a href="/ui/" className="flex items-center gap-2 font-heading text-base font-bold">
            <img
              src="/brand/icon-192.png"
              alt=""
              width={28}
              height={28}
              className="size-7 rounded-full -outline-offset-1 outline-1 outline-black/10 dark:outline-white/10"
            />
            Dimas Mufid
          </a>
          <div className="ml-auto flex items-center gap-2">
            <Separator orientation="vertical" className="data-vertical:h-4 data-vertical:self-center" />
            <ModeToggle />
          </div>
        </div>
      </header>
    </TooltipProvider>
  )
}
