"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

const languages = [
  { code: "fr", name: "Français", image: "/flags/france.svg" },
  { code: "en", name: "English", image: "/flags/uk.svg" },
  { code: "es", name: "Español", image: "/flags/spain.svg" },
]

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const currentLang = pathname.split("/")[1] || "fr"
  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0]

  const changeLanguage = (langCode: string) => {
    const segments = pathname.split("/").filter(Boolean)
    if (segments.length > 0 && ["fr", "en", "es"].includes(segments[0])) {
      segments[0] = langCode
    } else {
      segments.unshift(langCode)
    }
    router.push("/" + segments.join("/"))
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 flex items-center gap-2"
        aria-label="Changer de langue"
        title="Sélectionner la langue"
      >
        <Image
          src={currentLanguage.image}
          alt={currentLanguage.name}
          width={28}
          height={20}
          className="w-7 h-5 rounded object-cover"
          priority
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-muted transition-all duration-200 ${currentLanguage.code === lang.code ? "bg-primary/10 text-primary" : "text-foreground"}`}
            >
              <Image
                src={lang.image}
                alt={lang.name}
                width={32}
                height={20}
                className="w-8 h-5 rounded object-cover"
              />
              <span className="flex-1 text-left">{lang.name}</span>
              {currentLanguage.code === lang.code && <span className="text-primary">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
