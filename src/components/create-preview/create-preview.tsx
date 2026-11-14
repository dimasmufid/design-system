import { TooltipProvider } from "@/components/ui/tooltip"

import Preview from "./preview"
import Preview02 from "./preview-02"

// The two component previews from ui.shadcn.com/create (preview-02 is the
// default there), without the customizer panel.
export function CreatePreview() {
  return (
    <TooltipProvider>
      <Preview02 />
      <Preview />
    </TooltipProvider>
  )
}
