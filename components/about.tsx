import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Zap, Globe, Star, Clock } from "lucide-react"
import type { PortfolioVersion } from "@/app/page"

interface AboutProps {
  version: PortfolioVersion
}

export function About({ version }: AboutProps) {
  const content = {
    tech: {
      highlights: [
        {
          icon: <Award className="h-6 w-6" />,
          title: "3+ Years Experience",
          description: "Extensive experience in DevOps, cloud technologies, and ERP systems",
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Full-Stack Expertise",
          description: "From infrastructure automation to business application development",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Performance Optimization",
          description: "Reduced deployment times by 80% and improved system reliability",
        },
      ],
      description: [
        "I've been pushing boundaries in tech for over 3 years. I'm a Full-Stack Developer with a DevOps mindset, focused on ERPNext implementations and infrastructure automation.",

"My career has taken me deep into the guts of systems from managing cloud platforms and containerization to setting up CI/CD pipelines and building full-fledged ERP solutions. I don’t just write code; I architect systems that are scalable, maintainable, and built to last.",

"I bring a blend of backend grit, frontend sharpness, and infrastructure discipline so the products I build don’t just function, they deliver actual business impact."
      ],
      badges: ["Linux Expert", "ERPNext Specialist", "Python Developer",],
    },
    freelancing: {
      highlights: [
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Client Base",
          description: "Successfully delivered projects for clients across 15+ countries",
        },
        {
          icon: <Star className="h-6 w-6" />,
          title: "20+ Projects Completed",
          description: "From small automation scripts to enterprise-level ERP implementations",
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: "24/7 Support",
          description: "Providing ongoing maintenance and support across different time zones",
        },
      ],
      description: [
        "I'm not here to waste your time or mine. I take freelancing seriously,this isn't a side hustle; it's part of how I sharpen my edge. I’ve helped businesses streamline operations with ERPNext, automated infrastructure setups from bare metal to cloud, and built full-stack apps that don’t fall apart when things scale.You need someone who can think like an engineer, not a button pusher. I handle the entire pipeline from setting up CI/CD with GitHub Actions to containerizing your app, writing custom ERP modules, or even cleaning up the mess someone else left behind.No fluff. Just working systems, delivered on time, with zero hand-holding."
      ],
      badges: ["Freelance Expert", "Business Consultant", "Project Manager", "Client Relations", "Remote Work Pro"],
    },
  }

  const currentContent = content[version]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="text-center mb-16">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <img
                src="/profile.jpeg?height=192&width=192"
                alt="VISHWA R - Professional Photo"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">VISHWA R</h3>
            <p className="text-muted-foreground mb-4">A Professional Knowledge Hunter</p>

            {/* Funny joke section */}
            <div className="bg-muted/50 dark:bg-muted/20 rounded-lg p-6 max-w-2xl mx-auto border border-border/50">
              <h4 className="font-semibold mb-3 text-lg">A Little Humor About Me 😄</h4>
              <p className="text-muted-foreground italic">
                "At 6'1", I'm tall enough to reach the top shelf and see over cubicle walls, but somehow I still can't
                reach that one bug that's been hiding in production for weeks. They say height gives you perspective,
                but apparently not the kind that helps you spot why the server crashes every Tuesday at 3 PM. Good thing
                I'm better at scaling applications than I am at finding step ladders! 🪜"
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              {currentContent.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground mb-6">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-2">
                {currentContent.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {currentContent.highlights.map((highlight, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary">{highlight.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
