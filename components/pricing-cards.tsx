"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div variants={cardVariants}>
        <Card className="flex h-full flex-col">
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <CardDescription>Perfect for small teams just getting started with Agile.</CardDescription>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              $19
              <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Up to 5 team members</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Basic sprint planning</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Automated standups</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Simple retrospectives</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Email support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Free Trial</Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants}>
        <Card className="flex h-full flex-col border-primary">
          <CardHeader className="bg-primary/5 rounded-t-lg">
            <div className="text-center text-sm font-medium text-primary mb-2">MOST POPULAR</div>
            <CardTitle>Professional</CardTitle>
            <CardDescription>Ideal for growing teams that need more advanced features.</CardDescription>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              $49
              <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Up to 15 team members</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Advanced sprint planning</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Automated standups with insights</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Detailed retrospectives</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Performance analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Priority email support</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Jira & GitHub integration</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Free Trial</Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants}>
        <Card className="flex h-full flex-col">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For large organizations with complex Agile workflows.</CardDescription>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              $99
              <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>AI-powered sprint planning</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Advanced standups with insights</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Comprehensive retrospectives</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Advanced analytics & reporting</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>24/7 priority support</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Full integration ecosystem</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Custom workflows</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}

