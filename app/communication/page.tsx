import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Communication } from "@/components/communication"

export default function CommunicationPage() {
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
