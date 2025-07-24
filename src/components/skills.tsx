import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import {
  Cloud,
  Database,
  GitBranch,
  Monitor,
  Shield,
  Users,
  Cog,
  Globe,
  MessageSquare,
  DollarSign,
  Calendar,
  FileText,
} from "lucide-react"
import type { PortfolioVersion } from "../App"

interface SkillsProps {
  version: PortfolioVersion
}

export function Skills({ version }: SkillsProps) {
  const skillCategories = {
    tech: [
      {
        icon: <Cloud className="h-6 w-6" />,
        title: "Cloud & Infrastructure",
        skills: ["AWS", "Azure", "Google Cloud", "Terraform", "Ansible", "Docker", "Kubernetes"],
      },
      {
        icon: <GitBranch className="h-6 w-6" />,
        title: "DevOps & CI/CD",
        skills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "Helm", "Docker Compose"],
      },
      {
        icon: <Database className="h-6 w-6" />,
        title: "ERPNext & ERP Systems",
        skills: ["ERPNext", "Frappe Framework", "Custom Apps", "Workflow Design", "Data Migration"],
      },
      {
        icon: <Cog className="h-6 w-6" />,
        title: "Programming & Development",
        skills: ["Python", "JavaScript", "Node.js", "React", "FastAPI", "REST APIs"],
      },
      {
        icon: <Monitor className="h-6 w-6" />,
        title: "Monitoring & Analytics",
        skills: ["Prometheus", "Grafana", "ELK Stack", "Custom Reports", "Dashboards"],
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Security & Compliance",
        skills: ["HashiCorp Vault", "SSL/TLS", "IAM", "Security Scanning", "OWASP"],
      },
    ],
    freelancing: [
      {
        icon: <Users className="h-6 w-6" />,
        title: "Client Management",
        skills: ["Requirement Analysis", "Stakeholder Communication", "Project Planning", "Client Relations"],
      },
      {
        icon: <MessageSquare className="h-6 w-6" />,
        title: "Communication & Collaboration",
        skills: ["Technical Writing", "Documentation", "Remote Collaboration", "Presentation Skills"],
      },
      {
        icon: <DollarSign className="h-6 w-6" />,
        title: "Business & Finance",
        skills: ["Project Estimation", "Budget Management", "Invoice Management", "Cost Optimization"],
      },
      {
        icon: <Calendar className="h-6 w-6" />,
        title: "Project Management",
        skills: ["Agile Methodology", "Scrum", "Timeline Management", "Resource Planning"],
      },
      {
        icon: <Globe className="h-6 w-6" />,
        title: "Marketing & Sales",
        skills: ["Portfolio Development", "Client Acquisition", "Proposal Writing", "Networking"],
      },
      {
        icon: <FileText className="h-6 w-6" />,
        title: "Legal & Contracts",
        skills: ["Contract Negotiation", "SLA Management", "Intellectual Property", "Compliance"],
      },
    ],
  }

  const currentSkills = skillCategories[version]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {version === "tech" ? "Technical Skills" : "Freelancing Skills"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSkills.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="text-primary">{category.icon}</div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
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
