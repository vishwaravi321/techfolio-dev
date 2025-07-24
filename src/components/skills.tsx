import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cloud,
  Database,
  GitBranch,
  Monitor,
  Container,
  Building,
  Zap,
  BarChart,
  Shield,
  Users,
  Cog,
  Globe,
  MessageSquare,
  DollarSign,
  Calendar,
  FileText,
} from "lucide-react"
import type { PortfolioVersion } from "@/app/page"

interface SkillsProps {
  version: PortfolioVersion
}

export function Skills({ version }: SkillsProps) {
  const skillCategories = {
    tech: [
          {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"],
    },
    {
      icon: <Container className="h-6 w-6" />,
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "OpenShift", "Helm", "Docker Compose"],
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "CI/CD & Version Control",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Git", "ArgoCD"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi", "Chef"],
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      skills: ["HashiCorp Vault", "OWASP", "SSL/TLS", "IAM", "Security Scanning"],
    },
    // ERPNext
    {
      icon: <Building className="h-6 w-6" />,
      title: "ERPNext Core Modules",
      skills: ["Accounting", "Sales", "Purchase", "Inventory", "Manufacturing", "HR"],
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Customization & Development",
      skills: ["Frappe Framework", "Python", "JavaScript", "Custom Apps", "DocTypes"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database & Integration",
      skills: ["MariaDB", "MySQL", "REST API", "Webhooks", "Data Migration"],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Business Process",
      skills: ["Workflow Design", "User Training", "Change Management", "Process Optimization"],
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Reporting & Analytics",
      skills: ["Custom Reports", "Dashboards", "Query Builder", "Data Visualization"],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Deployment & Maintenance",
      skills: ["Frappe Bench", "Docker", "Linux", "Backup Strategies", "Performance Tuning"],
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
