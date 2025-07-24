import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, DollarSign, Users, Clock } from "lucide-react"
import Link from "next/link"
import type { PortfolioVersion } from "@/app/page"

interface ProjectsProps {
  version: PortfolioVersion
}

export function Projects({ version }: ProjectsProps) {
  const projects = {
    tech: [
      {
        title: "Enterprise ERPNext with DevOps Pipeline",
        description:
          "Complete ERPNext implementation with automated CI/CD pipeline, containerized deployment, and multi-environment setup for a manufacturing company.",
        technologies: ["ERPNext", "Docker", "Kubernetes", "GitLab CI", "AWS", "Terraform"],
        github: "https://github.com",
        demo: "https://demo.example.com",
        highlights: [
          "Reduced deployment time from 4 hours to 20 minutes",
          "Implemented automated testing for custom ERPNext apps",
          "Set up multi-environment (dev/staging/prod) infrastructure",
          "Achieved 99.9% uptime with automated monitoring",
        ],
      },
      {
        title: "Multi-Cloud Infrastructure Automation",
        description:
          "Comprehensive Infrastructure as Code solution managing resources across AWS, Azure, and GCP with automated deployment pipelines.",
        technologies: ["Terraform", "AWS", "Azure", "GCP", "Jenkins", "Python", "Ansible"],
        github: "https://github.com",
        demo: "https://monitoring.example.com",
        highlights: [
          "Reduced infrastructure provisioning time by 75%",
          "Implemented cross-cloud disaster recovery",
          "Automated cost optimization saving $50k annually",
          "Built reusable Terraform modules for rapid deployment",
        ],
      },
      {
        title: "Custom ERPNext Manufacturing Suite",
        description:
          "Developed comprehensive manufacturing modules for ERPNext including production planning, quality control, and real-time inventory tracking.",
        technologies: ["ERPNext", "Frappe Framework", "Python", "JavaScript", "MariaDB", "Redis"],
        github: "https://github.com",
        highlights: [
          "Reduced production planning time by 60%",
          "Implemented real-time inventory tracking for 10,000+ items",
          "Automated quality control processes",
          "Integrated with IoT sensors for real-time monitoring",
        ],
      },
    ],
    freelancing: [
      {
        title: "Global E-commerce ERP Implementation",
        description:
          "Led a 6-month freelance project implementing ERPNext for an international e-commerce company with multi-currency and multi-warehouse requirements.",
        technologies: ["ERPNext", "E-commerce Integration", "Multi-currency", "Project Management"],
        client: "International E-commerce Co.",
        value: "$45,000",
        duration: "6 months",
        highlights: [
          "Managed remote team of 5 developers across 3 time zones",
          "Integrated with Shopify, Amazon, and eBay platforms",
          "Implemented multi-currency accounting system",
          "Delivered project 2 weeks ahead of schedule",
        ],
      },
      {
        title: "Startup DevOps Transformation",
        description:
          "Complete DevOps transformation for a fintech startup, implementing CI/CD pipelines, cloud infrastructure, and monitoring solutions.",
        technologies: ["AWS", "Docker", "Jenkins", "Terraform", "Monitoring"],
        client: "FinTech Startup",
        value: "$32,000",
        duration: "4 months",
        highlights: [
          "Reduced deployment time from 3 hours to 10 minutes",
          "Implemented automated testing and security scanning",
          "Set up cost-optimized cloud infrastructure",
          "Provided ongoing support and maintenance",
        ],
      },
      {
        title: "Healthcare ERP Customization",
        description:
          "Customized ERPNext for a healthcare provider with patient management, appointment scheduling, and billing integration.",
        technologies: ["ERPNext", "Healthcare Module", "Custom Development", "API Integration"],
        client: "Healthcare Provider",
        value: "$28,000",
        duration: "5 months",
        highlights: [
          "Developed HIPAA-compliant patient management system",
          "Integrated with existing billing software",
          "Automated appointment scheduling and reminders",
          "Trained 50+ staff members on the new system",
        ],
      },
    ],
  }

  const currentProjects = projects[version]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {version === "tech" ? "Featured Technical Projects" : "Freelancing Success Stories"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>

                  {version === "freelancing" && (
                    <div className="flex flex-wrap gap-4 mt-3 text-sm">
                      {"client" in project && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{project.client}</span>
                        </div>
                      )}
                      {"value" in project && (
                        <div className="flex items-center gap-1 text-green-600">
                          <DollarSign className="h-4 w-4" />
                          <span>{project.value}</span>
                        </div>
                      )}
                      {"duration" in project && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.highlights.map((highlight, hlIndex) => (
                        <li key={hlIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {version === "tech" && (
                      <>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.github || "#"} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        {"demo" in project && project.demo && (
                          <Button size="sm" asChild>
                            <Link href={project.demo} target="_blank">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </Link>
                          </Button>
                        )}
                      </>
                    )}
                    {version === "freelancing" && (
                      <Button size="sm" asChild>
                        <Link href="#contact">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Similar Project?
                        </Link>
                      </Button>
                    )}
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
