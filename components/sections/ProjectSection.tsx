"use client"
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";


import todo from "@/public/projects/Todo.png";
import united from "@/public/projects/unitedFA.png";
import sparklingstar from "@/public/projects/SparklingStar.png";
import calculator from "@/public/projects/calculator.png";
import drawmath from "@/public/projects/drawmath.jpg";
import useOnScreen from "@/hooks/useOnScreen";
import drowsiness from "@/public/projects/drowsiness.png";

import ProjectCard from "../ProjectCard";
import { useRef } from "react";


const ProjectSection: React.FC = () => {
    const { theme } = useTheme();

    const sectionRef = useRef<HTMLDivElement>(null);

    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);

    // Set active link for project section

    return (
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
                “Talk is cheap. Show me the code”? I got you. <br />
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
    );
};

const projects = [
    {
        title: "United FA",
        type: "Frontend",
        image: (
            <Image
                src={united}
                sizes="100vw"
                fill
                alt="United FA"
                className="transition-transform duration-500 hover:scale-110 object-cover"
            />
        ),
        desc: "A simple and easy-to-use website for a children's football coach. It includes a secure login system, program details, testimonials, and event updates. Parents can book sessions and stay informed about training schedules. The site is fast, mobile-friendly, and helps the coach connect with young players and their families.",
        tags: ["Shadcn", "TypeScript", "NextJS", "TailwindCSS","Prisma"],
        liveUrl: "https://unitedfa.netlify.app/",
        codeUrl: "https://github.com/designedbits/united-fa.git",
        bgColor: "bg-[#9FD0E3]",
    },
    {
        title: "Sparkling Star",
        type: "Frontend",
        image: (
            <Image
                src={sparklingstar}
                sizes="100vw"
                fill
                alt="Sparkling Star"
                className="transition-transform duration-500 hover:scale-110 object-cover"
            />
        ),
        desc:"Sparkling Star, a company specializing in interior and exterior design. The site showcases their projects, services, and expertise in transforming spaces with creativity and precision. It features a clean and modern layout, smooth navigation, and engaging visuals to highlight their work. The website ensures a seamless user experience, making it easy for visitors to explore their portfolio and connect with the company. ",
        tags: ["React", "TypeScript", "Styled-Components","Cloudinary"],
        liveUrl: "https://sparklingstaruae.com/",
        codeUrl: "https://github.com/designedbits/sparkling-web.git",
        bgColor: "bg-[#B4BEE0]",
    },
    {
        title: "DrawMath",
        type: "Frontend + Backend",
        image: (
            <Image
                src={drawmath}
                sizes="100vw"
                fill
                alt="DrawMath"
                className="transition-transform duration-500 hover:scale-110 object-cover"
            />
        ),
        desc: "DrawMath is an AI-powered calculator that transforms your hand-drawn mathematical expressions into solutions. Inspired by iPad Math, this innovative application interprets your drawings and brings them to life, providing a seamless and engaging problem-solving experience..",
        tags: ["python","react","typescript","Gemini API"],
        liveUrl: "/",
        codeUrl: "https://github.com/Deeeeeeepak/DrawMath.git",
        bgColor: "bg-[#EBF4F4]",
    },
    {
        title: "EyeOnYou",
        type: "Backend",
        image: (
            <Image
                src={drowsiness}
                sizes="100vw"
                fill
                alt="Backend"
                className="transition-transform duration-500 hover:scale-110 object-cover"
            />
        ),
        desc: "EyeOnYou is a real-time drowsiness detection system that monitors driver alertness by analyzing Eye Aspect Ratio (EAR) through webcam input. If drowsiness is detected, an alarm is triggered to alert the driver.",
        tags: ["python","OpenCV","Dlib","Scipy","Pygame"],
        liveUrl: "/",
        codeUrl: "https://github.com/Deeeeeeepak/EyeOnYou.git",
        bgColor: "bg-[#FBFBFB]",
    },  
    {
        title: "Calculator",
        type: "Frontend",
        image: (
            <Image
                src={calculator}
                sizes="100vw"
                fill
                alt="Calculator"
                className="transition-transform duration-500 hover:scale-110 object-cover"
            />
        ),
        desc: "A simple calculator website built with HTML, CSS, and JavaScript. It performs basic arithmetic operations with a clean, user-friendly design and smooth functionality.",
        tags: ["html", "css", "javascript"],
        liveUrl: "https://deeeeeeepak.github.io/OIBSIP/TASK1/",
        codeUrl: "https://github.com/Deeeeeeepak/OIBSIP",
        bgColor: "bg-[#A6CECE]",
    },
    {
        title: "TODO website",
        type: "Frontend",
        image: (
            <Image
                src={todo}
                sizes="100vw"
                fill
                alt="TODO App"
                className="transition-transform duration-500 hover:scale-110 object-cover"
            />
        ),
        desc: "A simple To-Do website built with HTML, CSS, and JavaScript. It lets users add, edit, and delete tasks with a clean and easy-to-use interface.",
        tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
        liveUrl: "https://deeeeeeepak.github.io/OIBSIP/TASK3/",
        codeUrl: "https://github.com/Deeeeeeepak/OIBSIP",
        bgColor: "bg-[#C5E4E7]",
    },


];

export default ProjectSection;
