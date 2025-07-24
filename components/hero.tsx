import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import type { PortfolioVersion } from "@/app/page"
import { FadeIn } from "@/components/animations/fade-in"
import { FloatingElement } from "@/components/animations/floating-element"

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

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 dark:to-muted/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
        <FloatingElement className="absolute top-40 right-20 w-32 h-32 bg-primary/3 rounded-full blur-2xl animation-delay-2000" />
        <FloatingElement className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/4 rounded-full blur-xl animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-text-reveal">
              <span className="inline-block animate-slide-up">{currentContent.title}</span>
              <span className="block text-primary animate-slide-up animation-delay-300">{currentContent.subtitle}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
              {currentContent.description}
            </p>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-800">
              <Button size="lg" asChild className="group hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent"
              >
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={1000}>
            <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-1000">
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com/vishwa_r_dev"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={1200}>
            <Link
              href="#about"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 animate-fade-in-up animation-delay-1200"
            >
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
