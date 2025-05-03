"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ChatMessages } from "@/components/chat-messages"
import { MessageInput } from "@/components/message-input"
import { useMobile } from "@/hooks/use-mobile"
import { useChatState } from "@/hooks/use-chat-state"

export default function Home() {
  const { messages, isLoading, sendMessage, clearChat } = useChatState()
  const isMobile = useMobile()

  return (
    <div className="flex h-screen bg-white dark:bg-slate-950">
      {!isMobile && <Sidebar />}
      <div className="flex-1 flex flex-col h-full">
        <Header />
        <ChatMessages messages={messages} />
        <MessageInput onSendMessage={sendMessage} isLoading={isLoading} />
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 py-1">
          AI-generated, for reference only
        </div>
      </div>
    </div>
  )
}
