"use client"
import { Button } from "./ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail, Instagram } from "lucide-react"
import type { PortfolioVersion } from "../App"

interface HeroProps {
  version: PortfolioVersion
}

export function Hero({ version }: HeroProps) {
  const content = {
    tech: {
      title: "Full-Stack Developer",
      subtitle: "DevOps & ERPNext Specialist",
      description:
        "Building scalable applications, automating infrastructure, and implementing comprehensive ERP solutions that drive business growth and operational efficiency.",
    },
    freelancing: {
      title: "Freelance Consultant",
      subtitle: "& Technical Solutions Provider",
      description:
        "Helping businesses transform their operations through custom software solutions, process automation, and strategic technology consulting.",
    },
  }

  const currentContent = content[version]

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 dark:to-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            {currentContent.title}
            <span className="block text-primary">{currentContent.subtitle}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {currentContent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={handleScrollToContact}>
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/vishwa_r_dev"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button
            onClick={handleScrollToAbout}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
