"use client"
import { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import { useSection } from "@/context/section";

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer Intern",
        company: "DesignableBits",
        duration: "November 2024 - Present",
        highlights: [
            "Developed and maintained web applications using Next.js and TypeScript",
            "Worked on live client projects and collaborated with designers and developers",
            "Worked with PostgreSQL databases and Prisma ORM",
            "Collaborated with team members using Git for version control"
        ]
    },
    {
        id: 2,
        role: "Software Engineer Intern",
        company: "Megalon Software Pvt. Ltd.",
        duration: "July 2024 - August 2024",
        highlights: [
            "Gained hands-on experience with .NET technologies, including C#, Entity Framework, and Blazor for developing scalable applications.",
            "Integrated Tally Prime with .NET using XML requests, facilitating real-time data retrieval for financial transactions.",
            "Contributed to web development projects, improving front-end and back-end performance using HTML, CSS, JavaScript, and MySQL.",
            "Collaborated with team members using Git for version control."
        ]
    }
];

interface Experience {
    id: number;
    role: string;
    company: string;
    duration: string;
    highlights: string[];
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
    return (
        <div className="group relative mb-8 md:mb-10">
            {/* Timeline dot and line */}
            <div className="hidden md:block absolute left-[-35px] top-0 h-full w-[2px] bg-marrsgreen/20 dark:bg-carrigreen/20">
                <div className="sticky top-0 h-[15px] w-[15px] rounded-full bg-marrsgreen dark:bg-carrigreen transform translate-x-[-6.5px]" />
            </div>
            
            {/* Card content */}
            <div className="p-6 rounded-lg border border-marrsgreen/20 dark:border-carrigreen/20 
                                        hover:border-marrsgreen dark:hover:border-carrigreen transition-all duration-300
                                        bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm
                                        hover:shadow-lg hover:shadow-marrsgreen/10 dark:hover:shadow-carrigreen/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-1 text-marrsgreen dark:text-carrigreen">
                            {experience.role}
                        </h3>
                        <p className="text-base font-medium mb-2">{experience.company}</p>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full bg-marrsgreen/10 dark:bg-carrigreen/10 
                                                 text-marrsgreen dark:text-carrigreen font-medium">
                        {experience.duration}
                    </span>
                </div>
                
                <ul className="list-none space-y-2">
                    {experience.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1.5">•</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ExperienceSection: React.FC = () => {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);
    const experienceSection = useScrollActive(sectionRef as React.RefObject<HTMLDivElement>);
    const { onSectionChange } = useSection();

    useEffect(() => {
        if (experienceSection && onSectionChange) {
            onSectionChange("experience");
        }
    }, [experienceSection, onSectionChange]);

    useEffect(() => {
        const q = gsap.utils.selector(sectionRef);
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            q(".experience-card"),
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: q(".experience-card"),
                    start: "top bottom",
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="experience" className="section relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-marrsgreen/[0.05] dark:bg-grid-carrigreen/[0.05] -z-10" />
            
            <div className="text-center mb-12">
                <RoughNotation
                    type="underline"
                    color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
                    strokeWidth={2}
                    order={1}
                    show={isOnScreen}
                >
                    <h2 className="section-heading">Professional Experience</h2>
                </RoughNotation>
            </div>

            <div className="mt-8 md:mt-12 md:ml-[35px]" ref={elementRef}>
                <RoughNotationGroup>
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card">
                            <ExperienceCard experience={exp} />
                        </div>
                    ))}
                </RoughNotationGroup>
            </div>
        </section>
    );
};

export default ExperienceSection;