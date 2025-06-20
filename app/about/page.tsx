import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
            <p className="mt-4 text-muted-foreground">
              Creative developer with a passion for building immersive digital experiences
            </p>
          </div>
          <div className="space-y-4">
            <p>
              I'm a creative developer with over 5 years of experience building modern web applications and interactive
              experiences. My work combines technical expertise with creative vision to deliver engaging digital
              solutions.
            </p>
            <p>
              I specialize in front-end development with React and Next.js, 3D web experiences with Three.js, and
              building performant, accessible websites that delight users.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              experimenting with creative coding and generative art.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto lg:h-full">
          <Image
            src="/placeholder.svg?height=800&width=800"
            alt="Portrait photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-24 space-y-12">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Experience & Education</h2>

        <div className="space-y-8">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
            <p className="text-muted-foreground">Creative Tech Agency • 2021 - Present</p>
            <p className="mt-4">
              Leading development of interactive web experiences and client projects using React, Three.js, and modern
              web technologies. Mentoring junior developers and establishing best practices for the team.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Web Developer</h3>
            <p className="text-muted-foreground">Digital Studio • 2018 - 2021</p>
            <p className="mt-4">
              Built responsive websites and web applications for clients across various industries. Specialized in
              creating performant and accessible user interfaces.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold">BSc Computer Science</h3>
            <p className="text-muted-foreground">University of Technology • 2014 - 2018</p>
            <p className="mt-4">
              Graduated with honors. Specialized in interactive media and web technologies. Thesis project focused on
              real-time 3D visualization techniques for the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
