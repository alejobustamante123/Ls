"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquarePlus, Clock } from "lucide-react"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

export function Sidebar() {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()

  const handleNewChat = () => {
    setActiveIcon("newChat")
    // Lógica para crear un nuevo chat
  }

  const handleHistory = () => {
    setActiveIcon("history")
    // Lógica para mostrar el historial
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="h-full flex flex-col justify-between bg-slate-50 dark:bg-slate-900 w-[70px] border-r border-slate-200 dark:border-slate-800">
      <div className="flex flex-col items-center pt-6 gap-6">
        <div className="w-10 h-10">
          <img src="/placeholder.svg?height=40&width=40" alt="Logo LSA" className="w-full h-full object-contain" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNewChat}
          className={`${activeIcon === "newChat" ? "bg-slate-200 dark:bg-slate-800" : ""}`}
          aria-label="Nuevo chat"
        >
          <MessageSquarePlus className="h-5 w-5 text-blue-500" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleHistory}
          className={`${activeIcon === "history" ? "bg-slate-200 dark:bg-slate-800" : ""}`}
          aria-label="Historial"
        >
          <Clock className="h-5 w-5 text-blue-500" />
        </Button>
      </div>
      <div className="flex flex-col items-center gap-4 pb-6">
        {isMobile && <span className="text-xs text-slate-500 dark:text-slate-400 rotate-90">Versión móvil</span>}
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
          U
        </div>
      </div>
    </div>
  )
}
