import { HugeiconsIcon } from "@hugeicons/react"
import {
  File01Icon,
  Image01Icon,
  Cancel01Icon,
  Search01Icon,
  CheckmarkCircle02Icon,
  Globe02Icon,
} from "@hugeicons/core-free-icons"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bubble, BubbleContent, BubbleReactions } from "@/components/ui/bubble"
import { Card, CardContent } from "@/components/ui/card"
import { Marker, MarkerContent } from "@/components/ui/marker"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { Spinner } from "@/components/ui/spinner"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"

const thread = [
  { id: "1", from: "them", text: "Hey! Did you get a chance to look at the new design system?" },
  { id: "2", from: "me", text: "Yes, the components look great. Love the new green accent." },
  { id: "3", from: "them", text: "Nice. I'll ship the /ui page today so everyone can review." },
  { id: "4", from: "me", text: "Perfect. Ping me when it's live 🚀" },
  { id: "5", from: "them", text: "Will do!" },
] as const

export function ChatCard() {
  return (
    <Card className="h-[28rem] p-0">
      <MessageScrollerProvider>
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              <MessageScrollerItem>
                <Marker variant="separator">
                  <MarkerContent>Today</MarkerContent>
                </Marker>
              </MessageScrollerItem>
              {thread.map((m) => (
                <MessageScrollerItem key={m.id} messageId={m.id}>
                  <Message align={m.from === "me" ? "end" : "start"}>
                    {m.from === "them" && (
                      <MessageAvatar>
                        <Avatar size="sm">
                          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </MessageAvatar>
                    )}
                    <MessageContent>
                      <Bubble
                        variant={m.from === "me" ? "default" : "muted"}
                        align={m.from === "me" ? "end" : "start"}
                      >
                        <BubbleContent>{m.text}</BubbleContent>
                        {m.id === "2" && (
                          <BubbleReactions align="start">❤️</BubbleReactions>
                        )}
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </Card>
  )
}

export function AgentCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <MessageGroup>
          <Message align="end">
            <MessageContent>
              <MessageHeader>You</MessageHeader>
              <Bubble variant="secondary" align="end">
                <BubbleContent>Summarize these files for me.</BubbleContent>
              </Bubble>
              <AttachmentGroup>
                <Attachment size="sm">
                  <AttachmentMedia>
                    <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
                  </AttachmentMedia>
                  <AttachmentContent>
                    <AttachmentTitle>report.pdf</AttachmentTitle>
                    <AttachmentDescription>2.4 MB</AttachmentDescription>
                  </AttachmentContent>
                  <AttachmentActions>
                    <AttachmentAction aria-label="Remove">
                      <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
                    </AttachmentAction>
                  </AttachmentActions>
                </Attachment>
                <Attachment size="sm" state="uploading">
                  <AttachmentMedia>
                    <Spinner />
                  </AttachmentMedia>
                  <AttachmentContent>
                    <AttachmentTitle>screenshot.png</AttachmentTitle>
                    <AttachmentDescription>Uploading…</AttachmentDescription>
                  </AttachmentContent>
                </Attachment>
                <Attachment size="sm" state="error">
                  <AttachmentMedia>
                    <HugeiconsIcon icon={Image01Icon} strokeWidth={2} />
                  </AttachmentMedia>
                  <AttachmentContent>
                    <AttachmentTitle>photo.heic</AttachmentTitle>
                    <AttachmentDescription>Unsupported</AttachmentDescription>
                  </AttachmentContent>
                </Attachment>
              </AttachmentGroup>
            </MessageContent>
          </Message>
          <Message>
            <MessageContent>
              <MessageHeader>Assistant</MessageHeader>
              <Trace>
                <TraceLine>
                  <TraceIcon>
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
                  </TraceIcon>
                  <TraceTitle>Read report.pdf</TraceTitle>
                  <TraceDescription>1.2s</TraceDescription>
                </TraceLine>
                <TraceCollapsible>
                  <TraceCollapsibleTrigger>
                    <TraceLine>
                      <TraceIcon>
                        <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
                      </TraceIcon>
                      <TraceTitle>Searched the web</TraceTitle>
                      <TraceDescription>3 results</TraceDescription>
                    </TraceLine>
                  </TraceCollapsibleTrigger>
                  <TraceCollapsibleContent>
                    Found quarterly revenue figures and two analyst summaries.
                  </TraceCollapsibleContent>
                </TraceCollapsible>
                <TraceLine status="running">
                  <TraceIcon>
                    <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                  </TraceIcon>
                  <TraceTitle>Writing summary</TraceTitle>
                </TraceLine>
              </Trace>
              <Bubble variant="ghost">
                <BubbleContent>
                  Revenue grew 18% quarter over quarter, driven mostly by new enterprise
                  accounts.
                </BubbleContent>
              </Bubble>
              <MessageFooter>Just now</MessageFooter>
            </MessageContent>
          </Message>
        </MessageGroup>
      </CardContent>
    </Card>
  )
}
