import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border-2 border-transparent bg-clip-padding font-heading text-sm font-bold tracking-wide whitespace-nowrap transition-[translate,box-shadow,background-color,color] duration-75 ease-out outline-none select-none [--press-x:3px] focus-visible:ring-3 focus-visible:ring-ring/50 [font-stretch:108%] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary),var(--foreground)_12%)] border-edge shadow-[var(--press-x)_var(--press-x)_0_0_var(--press)] active:not-aria-[haspopup]:translate-x-(--press-x) active:not-aria-[haspopup]:translate-y-(--press-x) active:not-aria-[haspopup]:shadow-none",
        outline:
          "bg-card text-foreground hover:bg-accent aria-expanded:bg-accent border-edge shadow-[var(--press-x)_var(--press-x)_0_0_var(--press)] active:not-aria-[haspopup]:translate-x-(--press-x) active:not-aria-[haspopup]:translate-y-(--press-x) active:not-aria-[haspopup]:shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_8%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground border-edge shadow-[var(--press-x)_var(--press-x)_0_0_var(--press)] active:not-aria-[haspopup]:translate-x-(--press-x) active:not-aria-[haspopup]:translate-y-(--press-x) active:not-aria-[haspopup]:shadow-none",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40 border-destructive shadow-[var(--press-x)_var(--press-x)_0_0_var(--press)] active:not-aria-[haspopup]:translate-x-(--press-x) active:not-aria-[haspopup]:translate-y-(--press-x) active:not-aria-[haspopup]:shadow-none",
        link: "text-primary underline decoration-2 underline-offset-4 hover:decoration-[3px]",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 [--press-x:2px] rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 [--press-x:2px] rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 [--press-x:2px] rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 [--press-x:2px] rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
