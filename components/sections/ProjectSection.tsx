"use client"
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import useOnScreen from "@/hooks/useOnScreen";
import ProjectCard from "../ProjectCard";
import { useRef } from "react";

const ProjectSection: React.FC = () => {
    const { theme } = useTheme();

    const sectionRef = useRef<HTMLDivElement>(null);

    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);

    // Set active link for project section

    return (
        <div className="bg-white dark:bg-[#1B2731] relative overflow-hidden">
            <section ref={sectionRef} id="projects" className="section">
                <div className="project-title text-center">
                    <RoughNotation
                        type="underline"
                        color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
                        strokeWidth={2}
                        order={1}
                        show={isOnScreen}
                    >
                        <h2 className="section-heading">Featured Projects</h2>
                    </RoughNotation>
                </div>
                <span className="project-desc text-center block mb-4" ref={elementRef}>
                    "Talk is cheap. Show me the code"? I got you. <br />
                    Here are some of my projects you shouldn&apos;t miss
                </span>
                <div className="flex flex-wrap">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} index={index} project={project} />
                    ))}
                </div>
                <div className="others text-center mb-16">
                    Other projects can be explored in{" "}
                    <a
                        href="https://github.com/Deeeeeeepak/"
                        className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
                    >
                        my github profile
                    </a>
                </div>
            </section>
            
            {/* Add subtle background decorative elements similar to AboutSection */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-200/5 rounded-full blur-3xl dark:bg-blue-500/5" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-200/5 rounded-full blur-3xl dark:bg-teal-500/5" />
        </div>
    );
};

const projects = [
    {
        title: "Designable Bits",
        type: "Frontend + Backend",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-5xl font-bold opacity-20">DB</div>
            </div>
        ),
        desc: "A software company portfolio page showcasing modern web solutions.",
        tags: ["NextJS", "TailwindCSS", "TypeScript", "Prisma ORM"],
        liveUrl: "https://designablebits.com/",
        bgColor: "bg-gradient-to-br from-blue-400 to-cyan-300",
    },
    {
        title: "Graceful Leaf Tea",
        type: "Frontend + Backend",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-5xl font-bold opacity-20">GLT</div>
            </div>
        ),
        desc: "An e-commerce website for selling tea products.",
        tags: ["NextJS", "TailwindCSS", "TypeScript", "Prisma ORM"],
        liveUrl: "#",
        bgColor: "bg-gradient-to-br from-green-400 to-emerald-300",
    },
    {
        title: "Heritage Primary School",
        type: "Frontend + Backend",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-5xl font-bold opacity-20">HPS</div>
            </div>
        ),
        desc: "A primary school website offering quality education.",
        tags: ["NextJS", "TailwindCSS", "TypeScript", "Prisma ORM"],
        liveUrl: "https://heritageschool.netlify.app/",
        bgColor: "bg-gradient-to-br from-amber-400 to-yellow-300",
    },
    {
        title: "Sparkling Space",
        type: "Frontend",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-5xl font-bold opacity-20">SS</div>
            </div>
        ),
        desc:"Showcases design projects with a modern layout and engaging visuals.",
        tags: ["React", "TypeScript", "Styled-Components","Cloudinary"],
        liveUrl: "https://sparklingspaceuae.com/",
        bgColor: "bg-gradient-to-br from-purple-400 to-violet-300",
    },
    {
        title: "United FA",
        type: "Frontend",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-5xl font-bold opacity-20">UFA</div>
            </div>
        ),
        desc: "A user-friendly site for a children's football coach with secure login and event updates.",
        tags: ["Shadcn", "TypeScript", "NextJS", "TailwindCSS","Prisma"],
        liveUrl: "https://unitedfa.netlify.app/",
        bgColor: "bg-gradient-to-br from-red-400 to-rose-300",
    },
    {
        title: "DrawMath",
        type: "Frontend + Backend",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-5xl font-bold opacity-20">DM</div>
            </div>
        ),
        desc: "AI-powered calculator that interprets hand-drawn math expressions.",
        tags: ["python","react","typescript","Gemini API"],
        liveUrl: "/",
        codeUrl: "https://github.com/Deeeeeeepak/DrawMath.git",
        bgColor: "bg-gradient-to-br from-indigo-400 to-blue-300",
    },
];

export default ProjectSection;
