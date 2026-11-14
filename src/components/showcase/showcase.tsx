import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"

import { AgentCard, ChatCard } from "./chat"
import {
  AlertsCard,
  BadgesCard,
  CarouselCard,
  ChartCard,
  CodeBlockCard,
  EmptyCard,
  ProgressCard,
  ScrollResizableCard,
  SidebarCard,
  TableCard,
  TabsAccordionCard,
  TeamCard,
  UploadCard,
} from "./data"
import {
  CalendarCard,
  InputsCard,
  LoginForm,
  OtpCard,
  PaymentForm,
  PreferencesCard,
  QuestionnaireCard,
} from "./forms"
import { CommandCard, MenusCard, NavigationCard, OverlaysCard } from "./overlays"

const blocks = [
  PaymentForm,
  ChartCard,
  ChatCard,
  TeamCard,
  OverlaysCard,
  CalendarCard,
  BadgesCard,
  InputsCard,
  AgentCard,
  EmptyCard,
  PreferencesCard,
  TableCard,
  CommandCard,
  QuestionnaireCard,
  MenusCard,
  AlertsCard,
  TabsAccordionCard,
  LoginForm,
  CodeBlockCard,
  ProgressCard,
  SidebarCard,
  OtpCard,
  CarouselCard,
  NavigationCard,
  ScrollResizableCard,
  UploadCard,
]

export function Showcase() {
  return (
    <TooltipProvider>
      <Toaster>
        <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6">
          <header className="mb-8 flex flex-col gap-1">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">Components</h1>
            <p className="text-sm text-muted-foreground">
              Every component in the design system, rendered with the project theme.
            </p>
          </header>
          <div className="columns-1 gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
            {blocks.map((Block, i) => (
              <div key={i} className="mb-4 break-inside-avoid">
                <Block />
              </div>
            ))}
          </div>
        </div>
      </Toaster>
    </TooltipProvider>
  )
}
