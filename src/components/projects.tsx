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
  title: "Internal Developer Platform (IDP) for Frappe",
  description:
    "Built an Internal Developer Platform using Docker and Docker Compose to let devs spin up Frappe apps on their machines without begging SREs.",
  technologies: ["Docker", "Docker Compose", "GitHub Actions", "Frappe", "CI/CD"],
  github: "https://github.com/vishwaravi321/frappe_docker", 
  highlights: [
    "Abstracted dev environment setup into a single Docker Compose file",
    "Integrated GitHub Actions to build & push Docker images daily",
    "Reduced environment setup time from hours to minutes",
    "Made devs independent of infra team for local testing",
  ],
}
,
      {
  title: "Bare-Metal Frappe Installation Script",
  description:
    "Created a raw Bash script to automate Frappe installation with all dependencies on bare-metal Linux servers. No containers, no crap.",
  technologies: ["Bash", "Frappe", "Bench","Linux"],
  github: "https://github.com/vishwaravi321/ERP-installation.git",
  highlights: [
    "Automated setup of Frappe, Bench, and system dependencies",
    "Handled Redis, MariaDB, Node, and Python environment installs",
    "Built for non-containerized, production-ready environments",
    "Simple, fast, and reproducible install process",
  ],
},
{
  title: "Complete SRE Monitoring Stack with Alerting",
  description:
    "Deployed a full observability stack using Prometheus, Grafana, Node Exporter, Blackbox Exporter, and Alertmanager integrated with Telegram for real-time alerting.",
  technologies: ["Prometheus", "Grafana", "Node Exporter", "Blackbox Exporter", "Alertmanager", "Telegram", "Docker", "Linux"],
  highlights: [
    "Provisioned production-grade monitoring for bare metal and cloud instances",
    "Configured custom alerts and routing in Alertmanager for Telegram notifications",
    "Implemented Blackbox probes for HTTP/HTTPS endpoint monitoring",
    "Set up Grafana dashboards for infrastructure and service metrics",
  ],
},
{
  title: "Self-Hosted Passbolt for Business Credential Management",
  description:
    "Manually deployed and configured Passbolt on a Linux server to securely manage business credentials and enable team-based access.",
  technologies: ["Passbolt", "Nginx", "GPG", "Linux", "PostgreSQL"],
  highlights: [
    "Installed and configured Passbolt on bare-metal without containerization",
    "Set up HTTPS with proper domain and TLS configuration via Nginx",
    "Managed GPG key setup and secure user access workflows",
    "Implemented regular backups and basic monitoring for uptime assurance",
  ],
},
{
  title: "WhatsApp Messaging Integration via WABA",
  description:
    "Developed a custom Frappe app to send WhatsApp messages using Meta's WhatsApp Business API (WABA) for automated customer communication.",
  technologies: ["Frappe", "Meta's WABA", "REST API", "WhatsApp Business","Python"],
  highlights: [
    "Built a reusable Frappe module for sending templated WhatsApp messages",
    "Integrated with Meta WABA using access tokens and message templates",
    "Enabled real-time customer notifications for key workflows",
    "Tested and deployed on production with scalable API usage",
  ],
},
      {
        title: "Enterprise ERPNext with DevOps Pipeline",
        description:
          "Complete ERPNext implementation with automated CI/CD pipeline, containerized deployment, and multi-environment setup for a manufacturing company.",
        technologies: ["ERPNext", "Docker", "GitHub Actions", "Hetzner", "Terraform","Ansible"],
        highlights: [
          "Reduced deployment time from 4 hours to 20 minutes",
          "Implemented automated testing for custom ERPNext apps",
          "Set up multi-environment (dev/staging/prod) infrastructure",
          "Achieved 99.9% uptime with automated monitoring",
        ],
      },
      {
        title: "Cloud Infrastructure Automation",
        description:
          "Comprehensive Infrastructure as Code solution managing resources in Hetzner with automated deployment pipelines.",
        technologies: ["Terraform", "Hetzner", "GitHub","GitHub Actions","Ansible"],
        highlights: [
          "Reduced infrastructure provisioning time by 75%",
          "Implemented cross-cloud disaster recovery",
          "Automated cost optimization saving $50k annually",
          "Built reusable Terraform modules for rapid deployment",
        ],
      },
    ],
    freelancing: [
      {
        title: "ERPNext Version Migration (v12 to v15)",
        description:
        "Handled a full-stack ERPNext migration for a mid-sized enterprise, upgrading core and custom modules from v12 through v15 while preserving data integrity and business continuity.",
        technologies: ["Linux", "Bench", "MariaDB", "Version Control"],
        client: "Mid-sized Enterprise Client",
        value: "$150",
        duration: "3 hours",
        highlights: [
          "Migrated from v12 to v15 with zero data loss",
          "Resolved deprecated API and breaking changes across custom apps",
          "Optimized database performance post-migration",
          "Documented and trained internal devs for future upgrades",
        ],
},
      {
  title: "ERPNext Local-to-Cloud Migration",
  description:
    "Migrated a legacy on-prem ERPNext setup to a production-ready cloud infrastructure, ensuring uptime, data security, and scalability for a growing business.",
  technologies: ["ERPNext", "Hetzner", "Nginx", "SSL", "MariaDB", "Bench"],
  client: "Customs Clearance Company",
  value: "$150",
  duration: "2 hrs",
  highlights: [
    "Lifted and shifted ERPNext from local server to Hetzner instance with zero downtime",
    "Configured production-grade Nginx reverse proxy with SSL",
    "Automated daily backups and disaster recovery processes",
    "Optimized instance performance and cost for sustained usage",
  ],
},
      {
  title: "ERPNext Customization & Print Format Development",
  description:
    "Delivered tailored customizations and print formats for a small business using ERPNext, improving usability and client-specific workflows.",
  technologies: ["ERPNext", "Jinja", "Custom Scripts", "Print Format Builder"],
  client: "Customs Clearance Company",
  value: "£100",
  duration: "2 weeks",
  highlights: [
    "Created dynamic custom print formats with conditional logic",
    "Implemented client-specific field customizations and validations",
    "Enhanced document layout for invoices and delivery notes",
    "Delivered complete solution under tight budget and timeline",
  ],
}
,
      {
  title: "ERPNext Manufacturing & Stock Module Implementation",
  description:
    "Implemented ERPNext’s manufacturing and stock modules for a local sticker manufacturing company, streamlining their production and inventory workflows.",
  technologies: ["ERPNext", "Manufacturing", "Stock", "BOM", "Warehouse Management"],
  client: "Sticker Manufacturing Firm",
  value: "$200", 
  duration: "1 month",
  highlights: [
    "Configured Bill of Materials and Work Orders for production",
    "Set up warehouse structures and item movement tracking",
    "Trained staff on using manufacturing workflows",
    "Enabled accurate stock valuation and reporting",
  ],
}
,
      {
  title: "HRMS Implementation",
  description:
    "Implemented ERPNext’s HRMS module for a boutique law firm, including setup for employee records, leave structures, and basic payroll configuration.",
  technologies: ["ERPNext", "HRMS", "Leave Management", "Payroll"],
  client: "Law Firm",
  value: "$170",
  duration: "10 days",
  highlights: [
    "Deployed HR module covering core employee processes",
    "Configured leave and attendance systems",
    "Set up simple payroll for monthly disbursement",
    "Delivered full implementation under 10-day deadline",
  ],
}


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

          <div className="grid md:grid-cols-2 gap-8">
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
    {"github" in project && project.github && (
      <Button size="sm" variant="outline" asChild>
        <Link href={project.github} target="_blank">
          <Github className="mr-2 h-4 w-4"/>
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
