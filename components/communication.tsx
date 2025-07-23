import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, MessageSquare, Users, Lightbulb } from "lucide-react"
import Link from "next/link"

export function Communication() {
  const blogPosts = [
    {
      title: "DevOps Best Practices for 2024",
      excerpt:
        "Exploring the latest trends and practices in DevOps, including GitOps, platform engineering, and observability strategies.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "DevOps",
      tags: ["DevOps", "GitOps", "Observability"],
    },
    {
      title: "ERPNext Implementation Guide",
      excerpt:
        "A comprehensive guide to successfully implementing ERPNext in your organization, from planning to go-live.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "ERPNext",
      tags: ["ERPNext", "Implementation", "Business Process"],
    },
    {
      title: "Kubernetes Security Best Practices",
      excerpt:
        "Essential security practices for Kubernetes deployments, including RBAC, network policies, and container security.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Security",
      tags: ["Kubernetes", "Security", "DevSecOps"],
    },
    {
      title: "Custom ERPNext App Development",
      excerpt:
        "Learn how to develop custom applications for ERPNext using the Frappe framework, with practical examples.",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "Development",
      tags: ["ERPNext", "Frappe", "Python"],
    },
    {
      title: "Infrastructure as Code with Terraform",
      excerpt:
        "Deep dive into Terraform best practices, module development, and state management for scalable infrastructure.",
      date: "2023-12-20",
      readTime: "11 min read",
      category: "Infrastructure",
      tags: ["Terraform", "IaC", "Cloud"],
    },
    {
      title: "ERPNext Performance Optimization",
      excerpt:
        "Techniques and strategies to optimize ERPNext performance for large-scale deployments and high user loads.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Performance",
      tags: ["ERPNext", "Performance", "Optimization"],
    },
  ]

  const categories = [
    { name: "DevOps", count: 12, icon: <MessageSquare className="h-4 w-4" /> },
    { name: "ERPNext", count: 8, icon: <Users className="h-4 w-4" /> },
    { name: "Cloud", count: 15, icon: <Lightbulb className="h-4 w-4" /> },
    { name: "Security", count: 6, icon: <MessageSquare className="h-4 w-4" /> },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Communication & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge, experiences, and insights about DevOps, ERPNext, and modern technology solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-3 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>{post.title}</Link>
                      </CardTitle>
                      <p className="text-muted-foreground text-lg leading-relaxed">{post.excerpt}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/blog/category/${category.name.toLowerCase()}`}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            {category.icon}
                            <span>{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest insights and tutorials delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 border border-input rounded-md text-sm"
                      />
                      <Button size="sm" className="w-full">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["DevOps", "ERPNext", "Kubernetes", "AWS", "Python", "Terraform", "Docker", "Frappe"].map(
                        (tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            {tag}
                          </Badge>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
