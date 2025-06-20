"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="rounded-xl bg-muted p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to bring your ideas to life?</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
              Let's collaborate on your next project and create something amazing together. I'm currently available for
              freelance work and new opportunities.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact" className="flex items-center justify-center">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/projects" className="flex items-center justify-center">
                    View My Work
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
