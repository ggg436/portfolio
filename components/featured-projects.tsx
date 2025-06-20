"use client"

import { useRef, Suspense } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, OrbitControls } from "@react-three/drei"

function ProjectModel({ geometry, color }: { geometry: string; color: string }) {
  const modelRef = useRef()

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      modelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  const getGeometry = () => {
    switch (geometry) {
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />
      default:
        return <boxGeometry args={[1.5, 1.5, 1.5]} />
    }
  }

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={modelRef} scale={1.5}>
        {getGeometry()}
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  )
}

function ModelLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
    </div>
  )
}

const featuredProjects = [
  {
    id: 1,
    title: "Immersive 3D Product Configurator",
    description: "Interactive 3D product visualization tool with real-time customization and photorealistic rendering",
    image: "/placeholder.svg?height=600&width=800",
    category: "3D Experience",
    link: "/projects/immersive-3d-product-configurator",
    geometry: "dodecahedron",
    color: "#8b5cf6",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "AI-Powered E-commerce Platform",
    description: "Next-generation shopping experience with AI recommendations and AR try-on features",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web Application",
    link: "/projects/ai-ecommerce-platform",
    geometry: "icosahedron",
    color: "#06b6d4",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Interactive Data Visualization",
    description: "Real-time 3D data visualization dashboard with immersive analytics and insights",
    image: "/placeholder.svg?height=600&width=800",
    category: "Data Visualization",
    link: "/projects/interactive-data-viz",
    geometry: "octahedron",
    color: "#10b981",
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl" style={{ y }}>
            <span className="bg-gradient-to-r from-foreground via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore my latest work showcasing the intersection of creativity and technology
          </motion.p>
        </motion.div>

        <div className="flex flex-col space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="space-y-4">
                  <motion.div
                    className={`inline-block rounded-full bg-gradient-to-r ${project.gradient} px-4 py-2 text-sm font-medium text-white`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.div>

                  <h3 className="text-3xl font-bold tracking-tighter md:text-4xl">{project.title}</h3>

                  <p className="text-lg text-muted-foreground">{project.description}</p>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="ghost" className="group p-0 text-lg hover:bg-transparent">
                    <Link href={project.link} className="flex items-center gap-3">
                      <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        Explore Project
                      </span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className={`relative aspect-video overflow-hidden rounded-3xl ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                <div className="absolute inset-0 backdrop-blur-sm" />

                <Suspense fallback={<ModelLoader />}>
                  <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="h-full w-full">
                    <Environment preset="city" />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <ProjectModel geometry={project.geometry} color={project.color} />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
                  </Canvas>
                </Suspense>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" variant="outline" className="border-purple-500/20 hover:bg-purple-500/10">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}