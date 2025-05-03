"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Brain, Globe, Paperclip, Send } from "lucide-react"

interface MessageInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
}

export function MessageInput({ onSendMessage, isLoading }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !isLoading) {
      onSendMessage(message)
      setMessage("")
    }
  }

  return (
    <div className="p-4 border-t border-slate-200 dark:border-slate-800">
      <div className="flex gap-2 mb-2">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-blue-500 border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-blue-900 dark:hover:bg-blue-950"
        >
          <Brain className="h-4 w-4" />
          <span>Razonar</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-blue-500 border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-blue-900 dark:hover:bg-blue-950"
        >
          <Globe className="h-4 w-4" />
          <span>Búsqueda</span>
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensaje LSA"
            className="w-full p-3 pr-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <Button type="button" variant="ghost" size="icon" aria-label="Adjuntar archivo">
          <Paperclip className="h-5 w-5 text-slate-500" />
        </Button>
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          disabled={!message.trim() || isLoading}
          aria-label="Enviar mensaje"
        >
          <Send className="h-5 w-5 text-blue-500" />
        </Button>
      </form>
    </div>
  )
}
