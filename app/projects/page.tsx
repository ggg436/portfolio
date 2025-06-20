import ProjectGrid from "@/components/project-grid"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or API
const projects = [
  {
    id: 1,
    title: "Immersive 3D Product Configurator",
    description: "Interactive 3D product visualization tool built with React Three Fiber and Next.js",
    image: "/placeholder.svg?height=600&width=800",
    category: "3D",
    link: "/projects/immersive-3d-product-configurator",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with real-time inventory and payment processing",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web App",
    link: "/projects/e-commerce-platform",
  },
  {
    id: 3,
    title: "Interactive Data Visualization",
    description: "Dynamic data visualization dashboard with real-time updates and filtering",
    image: "/placeholder.svg?height=600&width=800",
    category: "Data Viz",
    link: "/projects/interactive-data-visualization",
  },
  {
    id: 4,
    title: "AR Product Showcase",
    description: "Augmented reality experience for showcasing products in real-world environments",
    image: "/placeholder.svg?height=600&width=800",
    category: "AR/VR",
    link: "/projects/ar-product-showcase",
  },
  {
    id: 5,
    title: "AI-Powered Content Platform",
    description: "Content management system with AI-powered content generation and optimization",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web App",
    link: "/projects/ai-powered-content-platform",
  },
  {
    id: 6,
    title: "3D Interactive Portfolio",
    description: "Creative portfolio website with interactive 3D elements and animations",
    image: "/placeholder.svg?height=600&width=800",
    category: "3D",
    link: "/projects/3d-interactive-portfolio",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Explore my recent work across web development, 3D experiences, and interactive design
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button variant="outline" className="rounded-full">
          All
        </Button>
        <Button variant="outline" className="rounded-full">
          3D
        </Button>
        <Button variant="outline" className="rounded-full">
          Web App
        </Button>
        <Button variant="outline" className="rounded-full">
          Data Viz
        </Button>
        <Button variant="outline" className="rounded-full">
          AR/VR
        </Button>
      </div>

      <ProjectGrid projects={projects} />
    </div>
  )
}
