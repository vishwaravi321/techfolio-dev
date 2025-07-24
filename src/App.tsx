"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Experience } from "./components/experience"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { Communication } from "./components/communication"
import "./App.css"

export type PortfolioVersion = "tech" | "freelancing"

function HomePage() {
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

function CommunicationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Communication />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/communication" element={<CommunicationPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
