"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Briefcase } from "lucide-react"
import type { PortfolioVersion } from "@/app/page"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  version?: PortfolioVersion
  setVersion?: (version: PortfolioVersion) => void
}

export function Header({ version, setVersion }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const pageNavItems = [
    { href: "/", label: "Home" },
    { href: "/communication", label: "Communication" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            VISHWA R
          </Link>

          {/* Version Selector - Only show on home page */}
          {isHomePage && version && setVersion && (
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant={version === "tech" ? "default" : "outline"}
                size="sm"
                onClick={() => setVersion("tech")}
                className="flex items-center space-x-2"
              >
                <Code className="h-4 w-4" />
                <span>Tech Portfolio</span>
              </Button>
              <Button
                variant={version === "freelancing" ? "default" : "outline"}
                size="sm"
                onClick={() => setVersion("freelancing")}
                className="flex items-center space-x-2"
              >
                <Briefcase className="h-4 w-4" />
                <span>Freelancing</span>
              </Button>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-8">
              {isHomePage
                ? navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))
                : pageNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`transition-colors ${
                        pathname === item.href
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {/* Version Selector Mobile - Only show on home page */}
            {isHomePage && version && setVersion && (
              <div className="flex space-x-2 mb-4">
                <Button
                  variant={version === "tech" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setVersion("tech")}
                  className="flex items-center space-x-2"
                >
                  <Code className="h-4 w-4" />
                  <span>Tech</span>
                </Button>
                <Button
                  variant={version === "freelancing" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setVersion("freelancing")}
                  className="flex items-center space-x-2"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Freelancing</span>
                </Button>
              </div>
            )}

            {/* Navigation Items */}
            {(isHomePage ? navItems : pageNavItems).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 transition-colors ${
                  !isHomePage && pathname === item.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
