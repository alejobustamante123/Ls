"use client"

import { useState, useCallback } from "react"
import { sendMessageToLLM } from "@/lib/llm-service"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function useChatState() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addMessage = useCallback((content: string, sender: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
    return newMessage
  }, [])

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim()) return

      // Agregar mensaje del usuario
      addMessage(content, "user")

      // Simular respuesta del bot
      setIsLoading(true)
      try {
        const response = await sendMessageToLLM(content)
        addMessage(response.text, "bot")
      } catch (error) {
        console.error("Error al enviar mensaje al LLM:", error)
        addMessage("Lo siento, ha ocurrido un error al procesar tu mensaje.", "bot")
      } finally {
        setIsLoading(false)
      }
    },
    [addMessage],
  )

  const clearChat = useCallback(() => {
    setMessages([])
  }, [])

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
  }
}
