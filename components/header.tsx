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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b shadow-lg transform-gpu" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-all duration-300 hover:scale-105">
            VISHWA R
          </Link>

          {/* Version Selector - Only show on home page */}
          {isHomePage && version && setVersion && (
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant={version === "tech" ? "default" : "outline"}
                size="sm"
                onClick={() => setVersion("tech")}
                className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
              >
                <Code className="h-4 w-4" />
                <span>Tech Portfolio</span>
              </Button>
              <Button
                variant={version === "freelancing" ? "default" : "outline"}
                size="sm"
                onClick={() => setVersion("freelancing")}
                className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
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
                      className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ))
                : pageNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`transition-all duration-300 relative group ${
                        pathname === item.href
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                          pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  ))}
            </nav>
            <div className="animate-fade-in">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
              />
              <X
                className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t">
            {/* Version Selector Mobile - Only show on home page */}
            {isHomePage && version && setVersion && (
              <div className="flex space-x-2 mb-4 animate-slide-down">
                <Button
                  variant={version === "tech" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setVersion("tech")}
                  className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Code className="h-4 w-4" />
                  <span>Tech</span>
                </Button>
                <Button
                  variant={version === "freelancing" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setVersion("freelancing")}
                  className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Freelancing</span>
                </Button>
              </div>
            )}

            {/* Navigation Items */}
            {(isHomePage ? navItems : pageNavItems).map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 transition-all duration-300 hover:translate-x-2 ${
                  !isHomePage && pathname === item.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t animate-fade-in">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
