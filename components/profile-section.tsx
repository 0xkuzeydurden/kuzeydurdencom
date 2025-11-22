"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"
import { MouseEvent, useRef } from "react"

export function ProfileSection() {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        const xPct = (clientX - left) / width - 0.5
        const yPct = (clientY - top) / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    function onMouseLeave() {
        x.set(0)
        y.set(0)
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"])

    return (
        <section className="mb-16 flex flex-col items-start justify-center pt-20 md:pt-32">
            <motion.div
                ref={ref}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    rotateX,
                    rotateY,
                }}
                className="group relative"
            >
                <div style={{ transform: "translateZ(20px)" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                    >
                        <h1 className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-5xl font-bold tracking-tighter text-transparent drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
                            Kuzey Durden
                        </h1>
                        <p className="text-xl font-medium text-zinc-400 sm:text-2xl">
                            Content Creator and Developer
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 flex space-x-4"
                    >
                        <SocialLink href="https://github.com/0xkuzeydurden" icon={<Github className="h-6 w-6" />} label="GitHub" />
                        <SocialLink href="https://x.com/islakwcterlii/" icon={<Twitter className="h-6 w-6" />} label="X" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all hover:bg-white/10 hover:text-white hover:scale-110"
        >
            <span className="sr-only">{label}</span>
            {icon}
        </Link>
    )
}
