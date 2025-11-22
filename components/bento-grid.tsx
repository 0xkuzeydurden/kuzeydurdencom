"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { Code2, Coffee, GraduationCap, Layout, Play, CheckCircle2, Terminal, Settings2 } from "lucide-react"

export function BentoGrid() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {/* Arc Playground */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <ProjectCard
                    title="Arc Playground"
                    description="A sleek, technical playground for Arc browser experiments."
                    href="https://arcplayground.kuzeydurden.com"
                    colorTheme="#0D203F"
                    icon={<Code2 className="h-6 w-6 text-white" />}
                    className="h-full min-h-[400px]"
                >
                    {/* Code Editor Visualization */}
                    <div className="space-y-2 font-mono text-[10px] text-zinc-400">
                        <div className="flex items-center space-x-2 text-purple-400">
                            <Terminal className="h-3 w-3" />
                            <span>npm run dev</span>
                        </div>
                        <div className="pl-4">
                            <span className="text-blue-400">const</span> <span className="text-yellow-400">arc</span> = <span className="text-green-400">new</span> <span className="text-yellow-400">Browser</span>();
                        </div>
                        <div className="pl-4">
                            <span className="text-yellow-400">arc</span>.<span className="text-blue-400">init</span>({'{'} theme: <span className="text-green-400">'dark'</span> {'}'});
                        </div>
                        <div className="h-2 w-1/2 rounded bg-white/10 animate-pulse" />
                    </div>
                </ProjectCard>
            </motion.div>

            {/* Base Morning */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full"
            >
                <ProjectCard
                    title="Base Morning"
                    description="Start your day with a fresh routine."
                    href="https://basemorning.kuzeydurden.com"
                    colorTheme="#007AFF"
                    icon={<Coffee className="h-6 w-6 text-white" />}
                    className="h-full min-h-[400px]"
                >
                    {/* Checklist Visualization */}
                    <div className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center space-x-3 rounded-lg bg-white/5 p-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-500" />
                                <div className="h-2 w-16 rounded-full bg-white/20" />
                            </div>
                        ))}
                    </div>
                </ProjectCard>
            </motion.div>

            {/* Stable Playground */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full"
            >
                <ProjectCard
                    title="Stable Playground"
                    description="Grounded experiments."
                    href="https://stableplayground.kuzeydurden.com"
                    colorTheme="#142323"
                    icon={<Layout className="h-6 w-6 text-white" />}
                    className="h-full min-h-[400px]"
                >
                    {/* Sliders Visualization */}
                    <div className="space-y-4 py-2">
                        <div className="flex items-center space-x-2">
                            <Settings2 className="h-3 w-3 text-zinc-500" />
                            <div className="h-1 w-full rounded-full bg-white/10">
                                <div className="h-full w-2/3 rounded-full bg-green-500" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-full rounded-full bg-white/10">
                                <div className="h-full w-1/3 rounded-full bg-green-500" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-full rounded-full bg-white/10">
                                <div className="h-full w-3/4 rounded-full bg-green-500" />
                            </div>
                        </div>
                    </div>
                </ProjectCard>
            </motion.div>

            {/* Base Learn App */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full"
            >
                <ProjectCard
                    title="Base Learn"
                    description="Master new skills."
                    href="https://baselearnapp.kuzeydurden.com"
                    colorTheme="#007AFF"
                    icon={<GraduationCap className="h-6 w-6 text-white" />}
                    className="h-full min-h-[400px]"
                >
                    {/* Video Player Mock */}
                    <div className="relative flex aspect-video w-full items-center justify-center rounded-lg bg-black/40">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                            <Play className="h-3 w-3 fill-white text-white" />
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 h-1 rounded-full bg-white/20">
                            <div className="h-full w-1/2 rounded-full bg-blue-500" />
                        </div>
                    </div>
                </ProjectCard>
            </motion.div>
        </div>
    )
}
