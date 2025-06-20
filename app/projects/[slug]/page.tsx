"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"

function Model() {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const modelRef = useRef()

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive ref={modelRef} object={scene} scale={2} position={[0, -1, 0]} />
    </Float>
  )
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch project data based on the slug
  const project = {
    title: "Immersive 3D Product Configurator",
    description:
      "An interactive 3D product visualization tool that allows users to customize and explore products in real-time. Built with React Three Fiber and Next.js, this project showcases the power of 3D on the web.",
    longDescription:
      "This project was developed to solve the challenge of visualizing products online in a more engaging way. Traditional e-commerce experiences often fail to give customers a true sense of the product, leading to returns and customer dissatisfaction. The 3D Product Configurator addresses this by providing an immersive, interactive experience where users can customize colors, materials, and features while seeing the changes in real-time.\n\nThe technical implementation uses React Three Fiber (a React renderer for Three.js) for the 3D visualization, with custom shaders for realistic materials and lighting. The UI is built with React and styled with Tailwind CSS, while the state management is handled with Zustand for a smooth, responsive experience.",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: ["Next.js", "React Three Fiber", "Three.js", "Tailwind CSS", "Zustand"],
    liveUrl: "https://example.com/project",
    githubUrl: "https://github.com/username/project",
    year: "2023",
    client: "E-commerce Company",
  }

  return (
    <div className="container py-12 md:py-24">
      <Button variant="ghost" asChild className="mb-8 pl-0 hover:bg-transparent">
        <Link href="/projects" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="mb-8 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="aspect-video h-[400px] overflow-hidden rounded-xl bg-muted/40 lg:h-[500px]">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <Environment preset="city" />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <Model />
              <OrbitControls
                enableZoom={true}
                enablePan={true}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
              />
            </Canvas>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Project Details</h2>
            <div className="space-y-4">
              <p>{project.longDescription}</p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project screenshot"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project screenshot"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border p-6">
            <h3 className="mb-4 text-lg font-semibold">Project Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Client</p>
                <p>{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p>{project.year}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-muted px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> View Live Project
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> View Source Code
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-4 text-lg font-semibold">Need a similar project?</h3>
            <p className="text-muted-foreground">
              I'm available for freelance projects and collaborations. Let's discuss how I can help bring your ideas to
              life.
            </p>
            <Button className="mt-4" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
