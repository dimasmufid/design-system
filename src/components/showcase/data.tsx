import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert02Icon,
  CheckmarkCircle02Icon,
  Folder01Icon,
  ArrowUpRight01Icon,
  Home01Icon,
  Settings01Icon,
  InboxIcon,
  Calendar03Icon,
  Search01Icon,
  CloudUploadIcon,
  ChartUpIcon,
} from "@hugeicons/core-free-icons"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const people = [
  { name: "shadcn", initials: "CN", src: "https://github.com/shadcn.png" },
  { name: "Max Leiter", initials: "ML", src: "https://github.com/maxleiter.png" },
  { name: "Evil Rabbit", initials: "ER", src: "https://github.com/evilrabbit.png" },
]

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-2)" },
  mobile: { label: "Mobile", color: "var(--chart-4)" },
} satisfies ChartConfig

const invoices = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
]

const tags = Array.from({ length: 40 }, (_, i) => `v1.2.0-beta.${40 - i}`)

const snippet = `import { Button } from "@/components/ui/button"

export function App() {
  return <Button>Click me</Button>
}`

export function ChartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visitors</CardTitle>
        <CardDescription>January – June 2026</CardDescription>
        <CardAction>
          <Badge variant="secondary">
            <HugeiconsIcon icon={ChartUpIcon} strokeWidth={2} data-icon="inline-start" />
            +5.2%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-56 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function TeamCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>Invite your team to collaborate.</CardDescription>
        <CardAction>
          <AvatarGroup>
            {people.map((p) => (
              <Avatar key={p.name} size="sm">
                <AvatarImage src={p.src} alt={p.name} />
                <AvatarFallback>{p.initials}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          {people.map((p, i) => (
            <div key={p.name}>
              {i > 0 && <ItemSeparator />}
              <Item size="sm">
                <ItemMedia>
                  <Avatar>
                    <AvatarImage src={p.src} alt={p.name} />
                    <AvatarFallback>{p.initials}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{p.name}</ItemTitle>
                  <ItemDescription>{p.name.toLowerCase().replace(" ", "")}@example.com</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge variant={i === 0 ? "default" : "outline"}>{i === 0 ? "Owner" : "Member"}</Badge>
                </ItemActions>
              </Item>
            </div>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  )
}

export function BadgesCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Loading
          </Button>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Press
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          to open the command menu.
        </div>
      </CardContent>
    </Card>
  )
}

export function ProgressCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Storage</CardTitle>
        <CardDescription>You&apos;ve used 68% of your plan.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <Progress value={68}>
          <ProgressLabel>Upload progress</ProgressLabel>
          <ProgressValue />
        </Progress>
        <div className="flex items-center gap-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function AlertsCard() {
  return (
    <div className="flex flex-col gap-4">
      <Alert>
        <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>Your payment of $29.99 has been processed.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
        <AlertTitle>Unable to process payment</AlertTitle>
        <AlertDescription>Please verify your billing information and try again.</AlertDescription>
      </Alert>
    </div>
  )
}

export function EmptyCard() {
  return (
    <Card>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={Folder01Icon} strokeWidth={2} />
          </EmptyMedia>
          <EmptyTitle>No projects yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any projects. Get started by creating your first one.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button>Create project</Button>
            <Button variant="outline">Import</Button>
          </div>
          <Button variant="link" size="sm" className="text-muted-foreground">
            Learn more
            <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} data-icon="inline-end" />
          </Button>
        </EmptyContent>
      </Empty>
    </Card>
  )
}

export function TableCard() {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium">{inv.id}</TableCell>
                <TableCell>
                  <Badge variant={inv.status === "Paid" ? "secondary" : "outline"}>{inv.status}</Badge>
                </TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right tabular-nums">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right tabular-nums">$1,200.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  )
}

export function TabsAccordionCard() {
  return (
    <Card>
      <CardContent>
        <Tabs defaultValue="faq">
          <TabsList className="w-full">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="nav">Navigation</TabsTrigger>
          </TabsList>
          <TabsContent value="faq">
            <Accordion defaultValue={["shipping"]}>
              <AccordionItem value="shipping">
                <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                <AccordionContent>
                  We offer standard (5-7 days), express (2-3 days), and overnight shipping.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  Returns are accepted within 30 days of purchase with the original receipt.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support">
                <AccordionTrigger>How can I contact support?</AccordionTrigger>
                <AccordionContent>Reach us by email or live chat, 24/7.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="nav" className="flex flex-col gap-6 pt-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Separator />
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export function CarouselCard() {
  return (
    <Card>
      <CardContent className="px-12">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }, (_, i) => (
              <CarouselItem key={i}>
                <AspectRatio ratio={16 / 9}>
                  <div className="flex size-full items-center justify-center rounded-lg bg-muted text-3xl font-semibold">
                    {i + 1}
                  </div>
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  )
}

export function ScrollResizableCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <ResizablePanelGroup orientation="horizontal" className="min-h-40 rounded-lg border">
          <ResizablePanel defaultSize="40%">
            <ScrollArea className="h-40">
              <div className="p-3">
                <h4 className="mb-2 text-sm font-medium">Tags</h4>
                {tags.map((tag) => (
                  <div key={tag}>
                    <div className="text-sm">{tag}</div>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="60%">
            <div className="flex h-full items-center justify-center p-6 text-sm text-muted-foreground">
              Drag the handle
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </CardContent>
    </Card>
  )
}

const navItems = [
  { title: "Home", icon: Home01Icon, active: true },
  { title: "Inbox", icon: InboxIcon, badge: "24" },
  { title: "Calendar", icon: Calendar03Icon },
  { title: "Search", icon: Search01Icon },
  { title: "Settings", icon: Settings01Icon },
]

export function SidebarCard() {
  return (
    <Card className="overflow-hidden p-0">
      <SidebarProvider className="min-h-0">
        <Sidebar collapsible="none" className="w-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={item.active}>
                        <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                      {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </Card>
  )
}

export function CodeBlockCard() {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockTitle>app.tsx</CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={snippet} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent lineNumbers>{snippet}</CodeBlockContent>
    </CodeBlock>
  )
}

export function UploadCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload files</CardTitle>
        <CardDescription>Drag and drop or browse.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
          <HugeiconsIcon icon={CloudUploadIcon} strokeWidth={2} className="size-6" />
          PNG, JPG or PDF up to 10MB
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Browse files
        </Button>
      </CardFooter>
    </Card>
  )
}
