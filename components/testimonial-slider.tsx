"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    content:
      "ScrumAI has completely transformed how our team operates. The AI-powered sprint planning has increased our velocity by 30% and reduced planning time by half.",
    author: "Sarah Johnson",
    role: "Engineering Manager",
    company: "TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The automated standups feature is a game-changer. Our team can share updates asynchronously, and the AI summarizes everything perfectly for our records.",
    author: "Michael Chen",
    role: "Product Owner",
    company: "InnovateSoft",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "As a Scrum Master, ScrumAI has become my indispensable assistant. It handles the routine tasks so I can focus on coaching and removing impediments.",
    author: "Emily Rodriguez",
    role: "Agile Coach",
    company: "AgileWorks",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const nextTestimonial = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    //  => (prev - 1 + testimonials.length) % testimonials.length);
  }, [])

  useEffect(() => {
    // Auto-advance the testimonials
    timeoutRef.current = setTimeout(() => {
      nextTestimonial()
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current])

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-center">
        <Button variant="outline" size="icon" className="absolute left-4 z-10 rounded-full" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        <div className="w-full overflow-hidden px-4 py-12">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              <blockquote className="mb-6 max-w-2xl text-xl font-medium italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                  <AvatarFallback>
                    {testimonials[current].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <div className="font-semibold">{testimonials[current].author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Button variant="outline" size="icon" className="absolute right-4 z-10 rounded-full" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-muted"}`}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

