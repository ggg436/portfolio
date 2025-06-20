"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.3} speed={1.5} roughness={0.4} />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05
      points.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#8b5cf6" sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

function Scene3D() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />

      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
      <ParticleField />
      <AnimatedSphere />

      <Text
        position={[0, -3, 0]}
        fontSize={0.5}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        Creative Developer
      </Text>
    </>
  )
}

function CanvasLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-500/10" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 h-20 w-20 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 grid h-full min-h-[calc(100vh-4rem)] items-center py-8 md:py-12">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="vertical-rhythm-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-block rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                ✨ Available for freelance work
              </motion.div>

              <h1 className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-foreground via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Creative Developer
                </span>
                <br />
                <span className="text-foreground/80">& 3D Specialist</span>
              </h1>

              <p className="mt-6 max-w-[600px] text-lg text-muted-foreground md:text-xl">
                I craft immersive digital experiences with cutting-edge technologies, specializing in interactive 3D
                content and modern web solutions that push the boundaries of what's possible.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full sm:w-auto"
                >
                  <Link href="/projects" className="flex items-center justify-center gap-2">
                    View My Work <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-purple-500/20 hover:bg-purple-500/10 w-full"
                >
                  <Link href="/contact" className="flex items-center justify-center">
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative aspect-square h-full min-h-[400px] w-full lg:min-h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 backdrop-blur-sm" />
            <Suspense fallback={<CanvasLoader />}>
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }} className="h-full w-full rounded-3xl">
                <Scene3D />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 1.5}
                />
              </Canvas>
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
