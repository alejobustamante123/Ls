"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Asegurarse de que el componente está montado para evitar errores de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img src="/placeholder.svg?height=40&width=40" alt="Logo LSA" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Hola, soy LSA.</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">¿Qué quieres hacer hoy?</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" aria-label="Cambiar tema">
          <Sun className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10">
          <img src="/placeholder.svg?height=40&width=40" alt="Logo LSA" className="w-full h-full object-contain" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Hola, soy LSA.</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">¿Qué quieres hacer hoy?</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Cambiar tema">
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </div>
  )
}
