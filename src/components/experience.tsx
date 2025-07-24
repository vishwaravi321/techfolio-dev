import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, MapPin } from "lucide-react"
import type { PortfolioVersion } from "../App"

interface ExperienceProps {
  version: PortfolioVersion
}

export function Experience({ version }: ExperienceProps) {
  const experiences = {
    tech: [
      {
        title: "Senior Full-Stack Developer",
        company: "TechCorp Solutions",
        location: "San Francisco, CA",
        period: "2022 - Present",
        description:
          "Lead full-stack development initiatives combining DevOps practices with ERPNext implementations for enterprise clients.",
        achievements: [
          "Reduced deployment time from 2 hours to 15 minutes using CI/CD pipelines",
          "Implemented 25+ ERPNext customizations for manufacturing clients",
          "Led migration to Kubernetes, improving scalability by 300%",
          "Developed custom ERPNext modules serving 10,000+ users",
        ],
        technologies: ["AWS", "Kubernetes", "ERPNext", "Python", "Docker", "Terraform"],
      },
      {
        title: "DevOps Engineer & ERP Specialist",
        company: "StartupXYZ",
        location: "Austin, TX",
        period: "2020 - 2022",
        description:
          "Built cloud infrastructure and implemented ERPNext solutions, bridging the gap between operations and business applications.",
        achievements: [
          "Set up comprehensive monitoring reducing MTTR by 60%",
          "Successfully implemented ERPNext for 15+ organizations",
          "Automated infrastructure provisioning saving 20 hours/week",
          "Developed custom integrations between ERPNext and third-party systems",
        ],
        technologies: ["Azure", "ERPNext", "Frappe", "Ansible", "Python", "JavaScript"],
      },
      {
        title: "Systems Administrator & Developer",
        company: "Enterprise Inc",
        location: "Chicago, IL",
        period: "2019 - 2020",
        description:
          "Managed infrastructure while developing business applications, gaining experience in both technical operations and business processes.",
        achievements: [
          "Migrated legacy systems to cloud reducing costs by 40%",
          "Built custom business applications using Python and JavaScript",
          "Maintained 99.9% uptime for critical systems",
          "Automated business processes reducing manual work by 70%",
        ],
        technologies: ["Linux", "Python", "JavaScript", "AWS", "MySQL", "Docker"],
      },
    ],
    freelancing: [
      {
        title: "Independent Technical Consultant",
        company: "Freelance Practice",
        location: "Remote (Global)",
        period: "2021 - Present",
        description:
          "Providing comprehensive technical consulting services to businesses worldwide, specializing in DevOps automation and ERPNext implementations.",
        achievements: [
          "Successfully completed 100+ projects across 15 countries",
          "Maintained 98% client satisfaction rate with 5-star reviews",
          "Generated $200K+ in annual revenue through diverse project portfolio",
          "Built long-term relationships with 50+ recurring clients",
        ],
        technologies: ["Project Management", "Client Relations", "Technical Consulting", "Remote Collaboration"],
      },
      {
        title: "ERP Implementation Specialist",
        company: "Various Clients",
        location: "Remote",
        period: "2020 - Present",
        description:
          "Specialized freelance services for ERPNext implementations, customizations, and business process optimization.",
        achievements: [
          "Implemented ERPNext for 40+ businesses across various industries",
          "Reduced client operational costs by average of 35%",
          "Developed 20+ custom ERPNext applications",
          "Trained 200+ end users across multiple organizations",
        ],
        technologies: ["ERPNext", "Business Analysis", "Training", "Custom Development"],
      },
      {
        title: "DevOps Automation Consultant",
        company: "Startup & SME Clients",
        location: "Remote",
        period: "2019 - Present",
        description:
          "Helping small to medium businesses implement DevOps practices and automate their infrastructure on a freelance basis.",
        achievements: [
          "Automated deployment processes for 30+ client applications",
          "Reduced infrastructure costs by 50% for multiple clients",
          "Set up monitoring and alerting systems for 25+ applications",
          "Provided 24/7 support across different time zones",
        ],
        technologies: ["AWS", "Docker", "CI/CD", "Infrastructure Automation"],
      },
    ],
  }

  const currentExperiences = experiences[version]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {version === "tech" ? "Technical Experience" : "Freelancing Journey"}
          </h2>

          <div className="space-y-8">
            {currentExperiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
