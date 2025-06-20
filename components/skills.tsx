"use client"

import { useRef, Suspense, useEffect, useState } from "react"
import { Code, Layers, Palette, PenTool, Smartphone, Globe, Zap, Cpu } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei"

function SkillOrb({ color }: { color: string }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[0.8, 64, 64]}>
        <MeshDistortMaterial color={color} attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
      </Sphere>
    </Float>
  )
}

function OrbLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-4 w-4 animate-pulse rounded-full bg-purple-500/50" />
    </div>
  )
}

const skills = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Development",
    description:
      "Building responsive and accessible web applications with React, Next.js, and modern JavaScript frameworks.",
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "3D Development",
    description: "Creating immersive 3D experiences with Three.js, React Three Fiber, and advanced WebGL techniques.",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces with a focus on user experience, accessibility, and modern aesthetics.",
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Creative Coding",
    description:
      "Exploring generative art, interactive installations, and the creative possibilities of code and mathematics.",
    color: "#10b981",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications with React Native and progressive web app technologies.",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Performance",
    description:
      "Optimizing applications for speed, SEO, and accessibility using modern web standards and best practices.",
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-time Systems",
    description: "Building real-time applications with WebSockets, WebRTC, and modern streaming technologies.",
    color: "#eab308",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI Integration",
    description:
      "Integrating AI and machine learning capabilities into web applications for enhanced user experiences.",
    color: "#dc2626",
    gradient: "from-red-500 to-pink-500",
  },
]

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  useEffect(() => {
    setMounted(true)
  }, [])

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
              Skills & Expertise
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Specialized in creating cutting-edge digital experiences with modern technologies
          </motion.p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border bg-card/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl">
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />

                {/* 3D Icon Container */}
                <div className="relative mb-4 h-16 w-16">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm" />
                  {mounted && (
                    <Suspense fallback={<OrbLoader />}>
                      <Canvas camera={{ position: [0, 0, 3], fov: 50 }} className="h-full w-full rounded-xl">
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={0.5} />
                        <SkillOrb color={skill.color} />
                      </Canvas>
                    </Suspense>
                  )}

                  {/* Icon overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center text-white`}>{skill.icon}</div>
                </div>

                <h3 className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-purple-500">
                  {skill.title}
                </h3>

                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                  {skill.description}
                </p>

                {/* Hover effect border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20 -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
