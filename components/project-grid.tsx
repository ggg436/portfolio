import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  link: string
}

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardHeader>
            <div className="inline-block rounded-full bg-muted px-3 py-1 text-xs">{project.category}</div>
            <CardTitle className="mt-2">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
              <Link href={project.link} className="flex items-center gap-2">
                View Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
