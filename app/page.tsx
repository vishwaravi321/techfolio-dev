"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export type PortfolioVersion = "tech" | "freelancing"

export default function Portfolio() {
  const [version, setVersion] = useState<PortfolioVersion>("tech")

  return (
    <div className="min-h-screen bg-background">
      <Header version={version} setVersion={setVersion} />
      <main>
        <Hero version={version} />
        <About version={version} />
        <Skills version={version} />
        <Experience version={version} />
        <Projects version={version} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
