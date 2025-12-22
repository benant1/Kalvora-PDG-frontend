"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useRef, useState } from "react"
import { Cpu, Info, Mail, Menu, PenTool, ShieldCheck, ShoppingBag, Sparkles, Wand2, Wrench, X } from "lucide-react"
import { AnimatedText } from "./animated-text"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"
import UserProfile from "./user-profile"
import { useAuth } from "@/lib/auth-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [divisionsOpen, setDivisionsOpen] = useState(false)
  const divisionsCloseTimer = useRef<NodeJS.Timeout | null>(null)
  const { user, loading, token } = useAuth()

  const handleDivisionsEnter = () => {
    if (divisionsCloseTimer.current) {
      clearTimeout(divisionsCloseTimer.current)
      divisionsCloseTimer.current = null
    }
    setDivisionsOpen(true)
  }

  const handleDivisionsLeave = () => {
    if (divisionsCloseTimer.current) {
      clearTimeout(divisionsCloseTimer.current)
    }
    divisionsCloseTimer.current = setTimeout(() => setDivisionsOpen(false), 220)
  }

  const navLinks = useMemo(
    () => [
      {
        href: "/services",
        label: "Services",
        icon: Wrench,
        desktopClasses: "text-blue-600 dark:text-blue-300 hover:text-blue-500",
        mobileClasses: "text-foreground hover:bg-primary/5",
      },
      {
        href: "/about",
        label: "À propos",
        icon: Info,
        desktopClasses: "text-emerald-600 dark:text-emerald-300 hover:text-emerald-500",
        mobileClasses: "text-foreground hover:bg-primary/5",
      },
      {
        href: "/ai",
        label: "Assistant IA",
        icon: Wand2,
        desktopClasses: "text-cyan-600 dark:text-cyan-300 hover:text-cyan-500",
        mobileClasses: "text-foreground hover:bg-primary/5",
      },
      {
        href: "/contact",
        label: "Contact",
        icon: Mail,
        desktopClasses: "text-amber-600 dark:text-amber-300 hover:text-amber-500",
        mobileClasses: "text-foreground hover:bg-primary/5",
      },
    ],
    []
  )

  const divisions = useMemo(
    () => [
      { href: "/tech", label: "Tech", badge: "Nouveau", tone: "from-cyan-500/30 to-sky-500/10", icon: Cpu },
      { href: "/design", label: "Design", badge: "UI/UX", tone: "from-fuchsia-500/30 to-purple-500/10", icon: PenTool },
      { href: "/market", label: "Market", badge: "Live", tone: "from-amber-500/30 to-orange-500/10", icon: ShoppingBag },
      { href: "/ai", label: "Assistant IA", badge: "Beta", tone: "from-emerald-500/30 to-green-500/10", icon: Sparkles },
    ],
    []
  )

  const isAuthenticated = !!user

  const Logo = (
    <Link href="/" className="flex items-center gap-3 group">
      <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 ring-1 ring-primary/30">
        <Image src="/kalvora-logo.png" alt="Kalvora" fill className="object-cover" priority />
        <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </span>
      <div className="flex flex-col leading-tight">
        <AnimatedText text="Kalvora" className="text-lg font-bold tracking-tight" />
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Sparkles size={14} className="text-primary" />
          Build. Design. Ship.
        </span>
      </div>
    </Link>
  )

  if (loading) {
    return (
      <nav className="sticky top-0 z-50 backdrop-blur border-b border-border bg-gradient-to-r from-background/92 via-background/88 to-background/84">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {Logo}
            {token && (
              <div className="animate-pulse flex items-center gap-3">
                <div className="h-10 w-24 rounded-full bg-muted" />
                <div className="h-10 w-10 rounded-full bg-muted" />
              </div>
            )}
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur border-b border-border bg-gradient-to-r from-background/92 via-background/88 to-background/84">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {Logo}

          {/* Desktop navigation */}
          {isAuthenticated && (
            <div className="hidden lg:flex items-center gap-6">
              <div
                className="relative"
                onMouseEnter={handleDivisionsEnter}
                onMouseLeave={handleDivisionsLeave}
              >
                <button
                  className="text-sm font-medium text-foreground hover:text-primary transition flex items-center gap-2"
                  onClick={() => setDivisionsOpen((v) => !v)}
                  aria-expanded={divisionsOpen}
                >
                  Divisions
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary text-xs">
                    {divisions.length}
                  </span>
                </button>
                {divisionsOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl transition-all duration-200"
                    onMouseEnter={handleDivisionsEnter}
                    onMouseLeave={handleDivisionsLeave}
                  >
                    <div className="p-2 grid grid-cols-1 gap-2">
                      {divisions.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                            className={`flex items-center justify-between rounded-xl border border-border/70 bg-gradient-to-r px-3 py-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/15 transition ${item.tone}`}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-4 w-4 text-primary" />
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-foreground">{item.label}</span>
                              <span className="text-xs text-muted-foreground">Solutions {item.label}</span>
                            </div>
                          </div>
                          <span className="text-[11px] rounded-full px-2 py-1 font-semibold bg-white/5 text-primary">
                            {item.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition inline-flex items-center gap-2 ${link.desktopClasses} px-2 py-1 rounded-md`}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}

              {user?.vendorStatus && (
                <Link
                  href={user.vendorStatus === "approved" ? "/market/publication-space" : "/profile/vendor-status"}
                  className="text-sm font-semibold text-accent hover:text-primary transition inline-flex items-center gap-2"
                >
                  <ShieldCheck className="h-4 w-4" />
                  {user.vendorStatus === "approved" ? "Espace de Publication" : "État du Compte"}
                </Link>
              )}
            </div>
          )}

          {/* Right block */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            {isAuthenticated ? (
              <>
                <UserProfile />
                <LanguageSwitcher />
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-xl border border-border bg-card text-foreground hover:border-primary/50 hover:text-primary transition"
                >
                  Connexion
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
                >
                  S'inscrire
                </Link>
                <LanguageSwitcher />
              </>
            )}
          </div>

          {/* Mobile toggles */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            {isAuthenticated ? (
              <>
                <UserProfile />
                <button
                  onClick={() => setIsOpen((v) => !v)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60"
                  aria-label="Ouvrir le menu"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">
                  Connexion
                </Link>
                <Link href="/signup" className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded-lg">
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile sheet */}
        {isOpen && isAuthenticated && (
          <div className="md:hidden mt-2 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-4 space-y-4 shadow-2xl">
            {/* Language selector visible at top of mobile menu for easy access */}
            <div className="px-2 pb-2 border-b border-border flex justify-center">
              <LanguageSwitcher />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {divisions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-border/70 bg-card px-3 py-3 hover:border-primary/50 hover:text-primary transition flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 md:h-4 md:w-4 md:text-primary text-muted-foreground" />
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                    <span className="text-[11px] rounded-full px-2 py-1 bg-primary/10 text-primary font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Solutions {item.label}</p>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${link.mobileClasses} hover:bg-primary/5`}
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="h-5 w-5 md:h-4 md:w-4 md:text-primary text-muted-foreground" />
                    <span className="text-base md:text-sm">{link.label}</span>
                  </div>
                </Link>
              ))}
              {user?.vendorStatus && (
                <Link
                  href={user.vendorStatus === "approved" ? "/market/publication-space" : "/profile/vendor-status"}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-accent hover:text-primary transition inline-flex items-center gap-2"
                >
                  <ShieldCheck className="h-4 w-4" />
                  {user.vendorStatus === "approved" ? "Espace de Publication" : "État du Compte"}
                </Link>
              )}
              <Link href="/profile" className="rounded-xl px-3 py-2 text-sm text-foreground hover:bg-primary/10 transition">
                Profil
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
