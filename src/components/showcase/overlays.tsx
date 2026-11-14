import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  Calendar03Icon,
  Settings01Icon,
  User02Icon,
  CreditCardIcon,
  Logout01Icon,
  Delete02Icon,
  InformationCircleIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { toast } from "@/components/ui/toast"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function CommandCard() {
  return (
    <Command className="rounded-xl border shadow-xs">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
            <span>Mail</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <HugeiconsIcon icon={User02Icon} strokeWidth={2} />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export function OverlaysCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overlays</CardTitle>
        <CardDescription>Dialogs, sheets, drawers and popovers.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>Dialog</DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>Make changes to your profile here.</DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="dialog-name">Name</FieldLabel>
                <Input id="dialog-name" defaultValue="Pedro Duarte" />
              </Field>
              <Field>
                <FieldLabel htmlFor="dialog-username">Username</FieldLabel>
                <Input id="dialog-username" defaultValue="@peduarte" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="destructive" />}>Delete</AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia className="bg-destructive/10 text-destructive">
                <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
              </AlertDialogMedia>
              <AlertDialogTitle>Delete project?</AlertDialogTitle>
              <AlertDialogDescription>
                This permanently deletes the project and all of its data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>Sheet</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here.</SheetDescription>
            </SheetHeader>
            <div className="px-4">
              <Field>
                <FieldLabel htmlFor="sheet-name">Name</FieldLabel>
                <Input id="sheet-name" defaultValue="Pedro Duarte" />
              </Field>
            </div>
            <SheetFooter>
              <Button>Save changes</Button>
              <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <Drawer>
          <DrawerTrigger render={<Button variant="outline" />}>Drawer</DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 text-center text-6xl font-semibold tabular-nums">350</div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>

        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>Popover</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
            </PopoverHeader>
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <FieldLabel htmlFor="pop-width" className="w-20">
                  Width
                </FieldLabel>
                <Input id="pop-width" defaultValue="100%" />
              </Field>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="pop-height" className="w-20">
                  Height
                </FieldLabel>
                <Input id="pop-height" defaultValue="25px" />
              </Field>
            </FieldGroup>
          </PopoverContent>
        </Popover>

        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" />}>
            <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
            <span className="sr-only">Info</span>
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>

        <Button
          variant="secondary"
          onClick={() =>
            toast.add({
              title: "Event created",
              description: "Sunday, December 3 at 9:00 AM",
              type: "success",
            })
          }
        >
          Show toast
        </Button>
      </CardContent>
    </Card>
  )
}

export function MenusCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Reload</MenubarItem>
              <MenubarItem>Toggle fullscreen</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div className="flex flex-wrap items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              <Avatar size="sm">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Account
              <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} data-icon="inline-end" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My account</DropdownMenuLabel>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={User02Icon} strokeWidth={2} />
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <HugeiconsIcon icon={Logout01Icon} strokeWidth={2} />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ButtonGroup>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
            <Button variant="outline">Snooze</Button>
          </ButtonGroup>
        </div>

        <ContextMenu>
          <ContextMenuTrigger className="flex h-24 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuItem>
              Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem defaultChecked>Show bookmarks</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show full URLs</ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>
      </CardContent>
    </Card>
  )
}

export function NavigationCard() {
  const [open, setOpen] = React.useState(false)
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-64 gap-1 p-1">
                  {["Introduction", "Installation", "Typography"].map((t) => (
                    <li key={t}>
                      <NavigationMenuLink href="#">
                        <div className="font-medium">{t}</div>
                        <div className="text-muted-foreground">Read the {t.toLowerCase()} guide.</div>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Docs</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="text-sm">
          Built by{" "}
          <HoverCard>
            <HoverCardTrigger render={<a href="#" className="font-medium underline underline-offset-4" />}>
              @shadcn
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold">@shadcn</h4>
                  <p className="text-sm">Creator of shadcn/ui.</p>
                  <div className="text-xs text-muted-foreground">Joined December 2021</div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          . Hover the handle.
        </div>

        <Collapsible open={open} onOpenChange={setOpen} className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">3 starred repositories</span>
            <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
              {open ? "Hide" : "Show"}
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-3 py-2 font-mono text-sm">@base-ui/react</div>
          <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-3 py-2 font-mono text-sm">@hugeicons/react</div>
            <div className="rounded-md border px-3 py-2 font-mono text-sm">recharts</div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
