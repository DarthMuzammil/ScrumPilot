"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function HeroAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div ref={ref} className="relative h-[500px] w-full overflow-hidden rounded-xl border bg-background shadow-xl">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {/* Dashboard UI Mockup */}
        <motion.div
          className="w-[90%] h-[80%] bg-background rounded-lg shadow-lg overflow-hidden border"
          variants={itemVariants}
        >
          {/* Header */}
          <div className="h-12 bg-muted/50 border-b flex items-center px-4">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 h-4 w-40 bg-muted rounded"></div>
          </div>

          {/* Content */}
          <div className="flex h-[calc(100%-3rem)]">
            {/* Sidebar */}
            <motion.div className="w-48 border-r bg-muted/30 p-4 flex flex-col gap-3" variants={itemVariants}>
              <div className="h-8 bg-primary/10 rounded-md w-full"></div>
              <div className="h-6 bg-muted rounded-md w-3/4"></div>
              <div className="h-6 bg-muted rounded-md w-5/6"></div>
              <div className="h-6 bg-muted rounded-md w-4/5"></div>
              <div className="h-6 bg-muted rounded-md w-3/4"></div>
              <div className="mt-auto h-10 bg-primary/20 rounded-md w-full"></div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 p-6 flex flex-col gap-6">
              {/* Stats Row */}
              <motion.div className="grid grid-cols-3 gap-4" variants={itemVariants}>
                <div className="h-24 bg-muted/50 rounded-lg border p-4">
                  <div className="h-4 w-1/2 bg-muted mb-2 rounded"></div>
                  <div className="h-8 w-1/3 bg-primary/20 rounded"></div>
                </div>
                <div className="h-24 bg-muted/50 rounded-lg border p-4">
                  <div className="h-4 w-1/2 bg-muted mb-2 rounded"></div>
                  <div className="h-8 w-1/3 bg-primary/20 rounded"></div>
                </div>
                <div className="h-24 bg-muted/50 rounded-lg border p-4">
                  <div className="h-4 w-1/2 bg-muted mb-2 rounded"></div>
                  <div className="h-8 w-1/3 bg-primary/20 rounded"></div>
                </div>
              </motion.div>

              {/* Chart */}
              <motion.div className="h-48 bg-muted/50 rounded-lg border p-4" variants={itemVariants}>
                <div className="h-4 w-1/4 bg-muted mb-4 rounded"></div>
                <div className="flex items-end h-28 gap-2 pt-4">
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "40%" }}
                    transition={{ delay: 1, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "65%" }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "30%" }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "80%" }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "50%" }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "60%" }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "75%" }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "45%" }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "90%" }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "35%" }}
                    transition={{ delay: 1.9, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "55%" }}
                    transition={{ delay: 2, duration: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="w-1/12 bg-primary/40 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "70%" }}
                    transition={{ delay: 2.1, duration: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* Task List */}
              <motion.div className="flex-1 bg-muted/50 rounded-lg border p-4" variants={itemVariants}>
                <div className="h-4 w-1/4 bg-muted mb-4 rounded"></div>
                <div className="space-y-3">
                  <div className="h-8 bg-background rounded border flex items-center px-3">
                    <div className="w-4 h-4 rounded-full border border-primary mr-3"></div>
                    <div className="h-3 w-2/3 bg-muted rounded"></div>
                  </div>
                  <div className="h-8 bg-background rounded border flex items-center px-3">
                    <div className="w-4 h-4 rounded-full border border-primary mr-3"></div>
                    <div className="h-3 w-1/2 bg-muted rounded"></div>
                  </div>
                  <div className="h-8 bg-background rounded border flex items-center px-3">
                    <div className="w-4 h-4 rounded-full border border-primary mr-3"></div>
                    <div className="h-3 w-3/4 bg-muted rounded"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 h-16 w-16 rounded-full bg-primary/30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 h-10 w-10 rounded-full bg-primary/20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
      />
      <motion.div
        className="absolute top-1/3 left-10 h-6 w-6 rounded-full bg-primary/10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
      />
    </div>
  )
}

