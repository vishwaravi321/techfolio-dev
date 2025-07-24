import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import type { PortfolioVersion } from "@/app/page"
import { title } from "process"
import { Description } from "@radix-ui/react-toast"

interface ExperienceProps {
  version: PortfolioVersion
}

export function Experience({ version }: ExperienceProps) {
  const experiences = {
    tech: [
      {
  title: "ERPNext Developer",
  company: "Hyper Ready Technology",
  location: "Coimbatore, Tamil Nadu",
  period: "2024 - Present",
  description:
    "Focused on custom app development and ERPNext customization to support business processes. Collaborated with other teams to build scalable, maintainable modules.",
  achievements: [
    "Developed custom ERPNext apps tailored to client workflows",
    "Wrote client-side and server-side scripts to extend core ERPNext features",
    "Optimized DocTypes, reports, and workflows to match business logic",
    "Provided technical support and resolved system-level bugs efficiently",
  ],
  technologies: ["ERPNext", "Frappe", "JavaScript", "Python", "MariaDB", "Redis"],
},
      {
  title: "Principal Site Reliability Engineer",
  company: "Nxweb",
  location: "Coimbatore, Tamil Nadu",
  period: "2022 - 2024",
  description:
    "Solely handled infrastructure, automation, and reliability for all production workloads. Owned everything from CI/CD to backups and monitoring, making sure devs didn’t burn the place down.",
  achievements: [
    "Built and maintained production systems from scratch",
    "Automated deployments and infrastructure using Ansible, Terraform, and shell scripts",
    "Monitored and debugged incidents, reducing downtime and improving reliability",
    "Created custom Docker images and pipelines to streamline dev workflows",
    "Performed ERPNext version upgrades (v12 to v15) with minimal disruptions",
    "Built internal developer platform (IDP) to standardize local dev environments",
  ],
  technologies: [
    "ERPNext",
    "Docker",
    "Ansible",
    "Terraform",
    "GitHub Actions",
    "MariaDB",
    "Redis",
    "Linux",
    "Prometheus",
    "Grafana"
  ],
},

{
  title: "EDP Coordinator & ERPNext Consultant",
  company: "Sri Sasthaa Constructions",
  location: "Coimbatore, Tamil Nadu",
  period: "2021 - 2022",
  description:
    "Led ERPNext implementation and supported day-to-day tech operations. This role marked the beginning of my journey into tech, where I balanced software deployment with basic hardware troubleshooting.",
  achievements: [
    "Implemented ERPNext modules for HR, Inventory, and Project Management",
    "Trained staff to use ERPNext effectively, reducing paperwork and confusion",
    "Handled basic tech issues like PC troubleshooting, printer setup, and network hiccups",
    "Created basic scripts and templates to support repetitive tasks",
  ],
  technologies: ["ERPNext", "PC and Hardwares"]
}

    ],
    freelancing: [
      {
        title: "Independent PC Hardware Consultant",
        company: "Local Clients",
        location: "Devakottai",
        period: "2022",
        description: "Providing custom PC building, optimization, and consulting services tailored for power users, gamers, developers, and businesses worldwide.",
        achievements: ["Built 25+ custom PCs tailored for gaming, development, and productivity use-cases","Specialized in budget-to-midrange optimization, delivering maximum power per rupee","Handled end-to-end service: requirement analysis, component sourcing, assembly, OS setup, and post-build support","Built a loyal client base through referrals and word-of-mouth, leading to repeat business","Known locally for fast builds, clean cable management, and no-bullshit advice"],
        technologies: ["Custom PC Assembly & Optimization","Hardware Compatibility & Troubleshooting","OS Installation & Driver Configuration","Client Support & Post-Build Maintenance"]

      },
      {
        title: "Independent Technical Consultant",
        company: "Freelance Practice",
        location: "Remote (Global)",
        period: "2023 - Present",
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
        period: "2023 - Present",
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
        period: "2024 - Present",
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
