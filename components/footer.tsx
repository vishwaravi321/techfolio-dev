import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© {currentYear} VISHWA R. Built with Next.js, Tailwind CSS and v0.dev</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/vishwaravi321"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/vishwa-ravichandran"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com/cmd.line.junkie"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:vishwaravi321@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
