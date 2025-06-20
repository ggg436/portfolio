"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === "undefined") return

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 h-16",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50" : "bg-transparent border-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex h-full items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={route.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-foreground/80",
                  pathname === route.href ? "text-foreground" : "text-foreground/60",
                )}
              >
                {route.name}
                {pathname === route.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <ModeToggle />
        </nav>

        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            className="ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="container md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 py-4">
              {routes.map((route, index) => (
                <motion.div
                  key={route.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={route.href}
                    className={cn(
                      "block py-2 text-base font-medium transition-colors hover:text-foreground/80",
                      pathname === route.href ? "text-foreground" : "text-foreground/60",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
