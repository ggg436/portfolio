"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 h-20 w-20 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/3 right-1/2 h-40 w-40 rounded-full bg-gradient-radial from-purple-500/5 via-pink-500/5 to-transparent blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
