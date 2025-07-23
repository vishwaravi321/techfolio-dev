import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import type { PortfolioVersion } from "@/app/page"

interface HeroProps {
  version: PortfolioVersion
}

export function Hero({ version }: HeroProps) {
  const content = {
    tech: {
      title: "Site Reliability Engineer",
      subtitle: "ERPNext Specialist",
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
            <Button size="lg" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Link href="https://github.com/vishwaravi321" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/vishwa-ravichandran" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://instagram.com/cmd.line.junkie"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:vishwaravi321@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>

          <Link
            href="#about"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
