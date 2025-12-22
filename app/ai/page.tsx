"use client"

import { useState, useRef, useEffect } from "react"
import type React from "react"
import { useRouter } from "next/navigation"
import { Send, Sparkles, Trash2 } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import Navigation from "@/components/navigation"

export default function AIChatPage() {
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()
  type ChatMessage = { role: "user" | "assistant"; content: string }
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  if (authLoading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </main>
    )
  }

  if (!user) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">Redirection...</p>
        </div>
      </main>
    )
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMsg: ChatMessage = { role: "user", content: input.trim() }
    const newMessages: ChatMessage[] = [...messages, userMsg]
    setMessages(newMessages)
    setInput("")
    setLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      if (!res.ok) {
        const msg = (data?.error as string) || "Erreur réseau"
        throw new Error(msg)
      }
      const aiMsg: ChatMessage = { role: "assistant", content: data.reply }
      setMessages((prev) => [...prev, aiMsg])
    } catch (e: any) {
      const message = e?.message || "Désolé, une erreur est survenue."
      const errorMsg: ChatMessage = { role: "assistant", content: message }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([])
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <Navigation />
      <section className="min-h-screen px-4 py-10 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Assistant IA - Propulsé par Hugging Face</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Discuter avec l'IA</h1>
          <p className="text-foreground/70">Posez vos questions, obtenez de l'aide sur le site, ou discutez librement</p>
        </div>

        {/* Chat Container */}
        <div className="border border-border rounded-2xl bg-card shadow-xl overflow-hidden">
          {/* Messages Area */}
          <div className="p-6 space-y-4 h-[65vh] overflow-y-auto bg-gradient-to-b from-card to-background/50">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Commencez la conversation</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Essayez : "Comment publier un produit ?" ou "Quels sont les plans disponibles ?"
                  </p>
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-sm ${
                  m.role === "user" 
                    ? "bg-gradient-to-br from-accent to-accent/90 text-accent-foreground" 
                    : "bg-muted border border-border text-foreground"
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="max-w-[80%] px-5 py-3 rounded-2xl bg-muted border border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                    <span className="text-sm text-muted-foreground">L'IA réfléchit...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
            <div className="flex gap-2">
              <input
                className="flex-1 px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Tapez votre message…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                disabled={loading}
              />
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition flex items-center gap-2"
                  title="Effacer la conversation"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Envoyer</span>
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Première réponse peut prendre 10-20s · Modèle: Mistral-7B-Instruct
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-sm mb-1">💡 Suggestions</h4>
            <p className="text-xs text-muted-foreground">Demandez de l'aide sur les fonctionnalités du site</p>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-sm mb-1">🔒 Confidentialité</h4>
            <p className="text-xs text-muted-foreground">Vos conversations ne sont pas sauvegardées</p>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-sm mb-1">⚡ Gratuit</h4>
            <p className="text-xs text-muted-foreground">Propulsé par Hugging Face, sans limite</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
