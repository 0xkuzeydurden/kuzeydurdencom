"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight, Globe, Zap } from "lucide-react"
import Link from "next/link"
import { MouseEvent, useRef } from "react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    title: string
    description: string
    href: string
    colorTheme: string
    className?: string
    icon?: React.ReactNode
    children?: React.ReactNode
}

export function ProjectCard({ title, description, href, colorTheme, className, icon, children }: ProjectCardProps) {
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
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className={cn(
                "group relative h-full w-full rounded-3xl bg-black/40 transition-all duration-200 ease-linear",
                className
            )}
        >
            {/* Rotating Light Border */}
            <div className="absolute -inset-[1px] -z-20 overflow-hidden rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <motion.div
                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#00fffb_360deg)]"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        filter: "blur(2px)",
                    }}
                />
            </div>

            {/* Background Glow */}
            <div
                className="absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at center, ${colorTheme}40, transparent 40%)`,
                    filter: "blur(20px)",
                    transform: "translateZ(-50px)",
                }}
            />

            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/90 backdrop-blur-md"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Header / Window Controls */}
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-3" style={{ transform: "translateZ(20px)" }}>
                    <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/20" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                        <div className="h-3 w-3 rounded-full bg-green-500/20" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium text-white/40">
                        <Globe className="h-3 w-3" />
                        <span>{new URL(href).hostname}</span>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative flex flex-1 flex-col p-6" style={{ transform: "translateZ(30px)" }}>
                    <div className="mb-6">
                        <div
                            className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 shadow-lg"
                            style={{ backgroundColor: colorTheme }}
                        >
                            {icon || <Zap className="h-6 w-6 text-white" />}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
                    </div>

                    {/* Custom Visualization Area */}
                    <div className="mt-auto overflow-hidden rounded-xl border border-white/5 bg-black/20 p-4 shadow-inner">
                        {children}
                    </div>
                </div>

                {/* Hover Overlay */}
                <div
                    className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                    style={{ transform: "translateZ(50px)" }}
                >
                    <div className="flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md">
                        <span>Visit Website</span>
                        <ArrowUpRight className="h-4 w-4" />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
