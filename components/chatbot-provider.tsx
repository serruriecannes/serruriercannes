"use client"

import { useChatbot } from "@/hooks/useChatbot"

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  useChatbot()
  return <>{children}</>
}

