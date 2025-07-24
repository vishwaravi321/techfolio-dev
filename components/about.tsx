import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Zap, Globe, Star, Clock } from "lucide-react"
import type { PortfolioVersion } from "@/app/page"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"

interface AboutProps {
  version: PortfolioVersion
}

export function About({ version }: AboutProps) {
  const content = {
    tech: {
      highlights: [
        {
          icon: <Award className="h-6 w-6" />,
          title: "5+ Years Experience",
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
        "Hi, I'm VISHWA R! Standing at 6'1\", I've been reaching new heights in technology for over 5 years. I'm a passionate Full-Stack Developer specializing in DevOps practices and ERPNext implementations, combining infrastructure expertise with business application development.",
        "My technical journey spans cloud platforms, containerization, CI/CD pipelines, and comprehensive ERP solutions. I believe in creating robust, scalable systems that not only solve technical challenges but also drive real business value.",
      ],
      badges: ["AWS Certified", "Kubernetes Expert", "ERPNext Specialist", "Python Developer", "Terraform Expert"],
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
          title: "100+ Projects Completed",
          description: "From small automation scripts to enterprise-level ERP implementations",
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: "24/7 Support",
          description: "Providing ongoing maintenance and support across different time zones",
        },
      ],
      description: [
        "Hi, I'm VISHWA R! Standing at 6'1\", I've been reaching new heights in the freelancing world for over 3 years. As an independent consultant, I help businesses transform their operations through custom technology solutions and strategic consulting.",
        "My freelancing journey has taken me across diverse industries - from startups needing rapid deployment solutions to enterprises requiring complex ERP customizations. I pride myself on delivering high-quality solutions on time and within budget.",
      ],
      badges: ["Freelance Expert", "Business Consultant", "Project Manager", "Client Relations", "Remote Work Pro"],
    },
  }

  const currentContent = content[version]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
          </FadeIn>

          <div className="text-center mb-16">
            <FadeIn delay={200}>
              <div className="relative w-48 h-48 mx-auto mb-8 group">
                <img
                  src="/placeholder.svg?height=192&width=192"
                  alt="VISHWA R - Professional Photo"
                  className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary/40"
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <h3 className="text-2xl font-bold mb-2">VISHWA R</h3>
              <p className="text-muted-foreground mb-4">Height: 6'1" | Professional Developer & Problem Solver</p>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="bg-muted/50 dark:bg-muted/20 rounded-lg p-6 max-w-2xl mx-auto border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <h4 className="font-semibold mb-3 text-lg">A Little Humor About Me 😄</h4>
                <p className="text-muted-foreground italic">
                  "At 6'1", I'm tall enough to reach the top shelf and see over cubicle walls, but somehow I still can't
                  reach that one bug that's been hiding in production for weeks. They say height gives you perspective,
                  but apparently not the kind that helps you spot why the server crashes every Tuesday at 3 PM. Good
                  thing I'm better at scaling applications than I am at finding step ladders! 🪜"
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn direction="left" delay={200}>
              <div>
                {currentContent.description.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground mb-6">
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap gap-2">
                  {currentContent.badges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:scale-105 transition-transform duration-200 cursor-default"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <StaggerContainer staggerDelay={150}>
                {currentContent.highlights.map((highlight, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                          {highlight.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{highlight.title}</h3>
                          <p className="text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
