import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Search01Icon,
  Mail01Icon,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  ArrowUp02Icon,
  Add01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const months = [
  { label: "MM", value: null },
  ...Array.from({ length: 12 }, (_, i) => {
    const value = String(i + 1).padStart(2, "0")
    return { label: value, value }
  }),
]

const years = [
  { label: "YYYY", value: null },
  ...Array.from({ length: 6 }, (_, i) => {
    const value = String(2026 + i)
    return { label: value, value }
  }),
]

const frameworks = ["Astro", "Next.js", "Remix", "SvelteKit", "Nuxt", "Vite"]

export function PaymentForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment method</CardTitle>
        <CardDescription>All transactions are secure and encrypted.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-name">Name on card</FieldLabel>
              <Input id="card-name" placeholder="Evil Rabbit" required />
            </Field>
            <div className="grid grid-cols-3 gap-4">
              <Field className="col-span-2">
                <FieldLabel htmlFor="card-number">Card number</FieldLabel>
                <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                <FieldDescription>Enter your 16-digit number.</FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="cvv">CVV</FieldLabel>
                <Input id="cvv" placeholder="123" required />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Month</FieldLabel>
                <Select items={months}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {months.map((m) => (
                        <SelectItem key={m.label} value={m.value}>
                          {m.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Year</FieldLabel>
                <Select items={years}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {years.map((y) => (
                        <SelectItem key={y.label} value={y.value}>
                          {y.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <FieldSeparator />
            <Field orientation="horizontal">
              <Checkbox id="same-address" defaultChecked />
              <FieldLabel htmlFor="same-address" className="font-normal">
                Same as shipping address
              </FieldLabel>
            </Field>
            <Field>
              <FieldLabel htmlFor="comments">Comments</FieldLabel>
              <Textarea id="comments" placeholder="Add any additional comments" />
            </Field>
            <Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

export function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="login-email">Email</FieldLabel>
            <Input id="login-email" type="email" placeholder="m@example.com" />
          </Field>
          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="login-password">Password</FieldLabel>
              <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                Forgot password?
              </a>
            </div>
            <Input id="login-password" type="password" />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}

export function OtpCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify your login</CardTitle>
        <CardDescription>Enter the code we sent to your email.</CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <FieldLabel htmlFor="otp">Verification code</FieldLabel>
          <InputOTP id="otp" maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            Didn&apos;t get it? <a href="#">Resend code</a>
          </FieldDescription>
        </Field>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Verify</Button>
      </CardFooter>
    </Card>
  )
}

export function PreferencesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>Plans, notifications and limits.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <FieldSet>
            <FieldLegend variant="label">Plan</FieldLegend>
            <RadioGroup defaultValue="pro">
              <FieldLabel htmlFor="plan-starter">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Starter</FieldTitle>
                    <FieldDescription>For individuals.</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="starter" id="plan-starter" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="plan-pro">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Pro</FieldTitle>
                    <FieldDescription>For growing teams.</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="pro" id="plan-pro" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
          <FieldSeparator />
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="notify">Email notifications</FieldLabel>
              <FieldDescription>Receive a weekly digest.</FieldDescription>
            </FieldContent>
            <Switch id="notify" defaultChecked />
          </Field>
          <Field>
            <FieldTitle>Monthly budget</FieldTitle>
            <Slider defaultValue={[200, 800]} max={1000} step={10} />
            <FieldDescription>Set your spending range.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="region">Region</FieldLabel>
            <NativeSelect id="region" defaultValue="apac">
              <NativeSelectOption value="us">United States</NativeSelectOption>
              <NativeSelectOption value="eu">Europe</NativeSelectOption>
              <NativeSelectOption value="apac">Asia Pacific</NativeSelectOption>
            </NativeSelect>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}

export function InputsCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupTextarea placeholder="Ask, search or chat..." />
          <InputGroupAddon align="block-end">
            <InputGroupButton variant="outline" size="icon-xs" className="rounded-full">
              <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
            </InputGroupButton>
            <InputGroupText className="ml-auto">52% used</InputGroupText>
            <InputGroupButton variant="default" size="icon-xs" className="rounded-full">
              <HugeiconsIcon icon={ArrowUp02Icon} strokeWidth={2} />
              <span className="sr-only">Send</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Field>
          <Label>Framework</Label>
          <Combobox items={frameworks}>
            <ComboboxInput placeholder="Select a framework" />
            <ComboboxContent>
              <ComboboxEmpty>No framework found.</ComboboxEmpty>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>
        <ButtonGroup className="w-full">
          <Input placeholder="you@example.com" />
          <Button variant="outline">
            <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} data-icon="inline-start" />
            Subscribe
          </Button>
        </ButtonGroup>
        <div className="flex flex-wrap items-center gap-2">
          <ToggleGroup variant="outline" multiple defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <HugeiconsIcon icon={TextUnderlineIcon} strokeWidth={2} />
            </ToggleGroupItem>
          </ToggleGroup>
          <Toggle variant="outline" aria-label="Toggle italic">
            <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
            Italic
          </Toggle>
        </div>
      </CardContent>
    </Card>
  )
}

export function CalendarCard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Card className="items-center">
      <CardContent>
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </CardContent>
    </Card>
  )
}

export function QuestionnaireCard() {
  return (
    <Card>
      <CardContent>
        <Questionnaire onSubmit={(e) => e.preventDefault()}>
          <QuestionnaireProgress />
          <QuestionnaireItem name="role" required>
            <QuestionnaireTitle>What best describes your role?</QuestionnaireTitle>
            <QuestionnaireDescription>
              We&apos;ll tailor the setup to you.
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="design">
                Designer
                <QuestionnaireChoiceDescription>
                  Interfaces and systems
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="engineering">
                Engineer
                <QuestionnaireChoiceDescription>
                  Shipping product code
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="product">
                Product manager
                <QuestionnaireChoiceDescription>
                  Roadmaps and specs
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
            </QuestionnaireChoices>
          </QuestionnaireItem>
          <QuestionnaireItem name="team" multiple>
            <QuestionnaireTitle>Which tools does your team use?</QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="figma">Figma</QuestionnaireChoice>
              <QuestionnaireChoice value="linear">Linear</QuestionnaireChoice>
              <QuestionnaireChoice value="github">GitHub</QuestionnaireChoice>
            </QuestionnaireChoices>
          </QuestionnaireItem>
          <QuestionnaireActions>
            <QuestionnairePrevious />
            <QuestionnaireNext />
            <QuestionnaireSubmit />
          </QuestionnaireActions>
        </Questionnaire>
      </CardContent>
    </Card>
  )
}
