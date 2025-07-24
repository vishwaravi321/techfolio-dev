import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© {currentYear} VISHWA R. Built with Next.js and Tailwind CSS.</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com/vishwa_r_dev"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:contact@vishwar.dev"
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
