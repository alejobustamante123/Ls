"use client"

import { useEffect, useRef } from "react"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatMessagesProps {
  messages: Message[]
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="text-slate-500 dark:text-slate-400 text-center">
          Envía un mensaje para comenzar una conversación con LSA.
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message) => (
        <div key={message.id} className={`mb-4 max-w-[80%] ${message.sender === "user" ? "ml-auto" : "mr-auto"}`}>
          <div
            className={`p-3 rounded-lg ${
              message.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            }`}
          >
            {message.content}
          </div>
          <div className={`text-xs mt-1 text-slate-500 ${message.sender === "user" ? "text-right" : "text-left"}`}>
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
