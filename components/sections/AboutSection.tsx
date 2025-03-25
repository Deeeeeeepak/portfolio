"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import deepak from "@/public/deepak.jpeg";
import AboutBgSvg from "@/components/AboutBgSvg";
import EduGroup from "@/components/EduGroup";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import { useSection } from "@/context/section";

interface Education {
  id: number;
  title: string;
  subTitle: string;
  list: string[];
}

const educationInfo: Education[] = [
    {
        id: 1,
        title: "B.E. in Computer Engineering with Major in AI & ML",
        subTitle: "Padre Conceicao College of Engineering | 2021 ~ 2025",
        list: [
            "Focused on full-stack development, web technologies, and databases",
            "Proficient in Next.js, TypeScript, SQL, DBMS, DSA, and OOPs",
            "Maintained a GPA of 9.0/10",
            "Actively learning and exploring new technologies"
        ]
    },
    
    {
        id: 2,
        title: "Higher Secondary Education (Science)",
        subTitle: "St. Andrew's Higher Secondary School | 2019 - 2021",
        list: [
            "Studied core subjects: Mathematics, Physics, and Chemistry",
            "Developed logical thinking and problem-solving skills",
            "Explored computer programming independently alongside academics",
            "Achieved excellent academic performance"
        ]
    }
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);
  const { theme } = useTheme();
  const eduRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animations
    gsap.fromTo(
      q(".profile-picture"),
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: q(".profile-picture"),
          start: "20% bottom",
        },
      }
    );

    const fromAnimation = {
      y: 100,
      opacity: 0,
    };

    const toAnimation = (triggerTarget: string) => ({
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        start: "top bottom",
      },
    });

    gsap.fromTo(q(".about-intro"), fromAnimation, toAnimation("about-intro"));
    gsap.fromTo(q(".edu-bg"), fromAnimation, toAnimation("edu-bg"));

    gsap.fromTo(
      q(".bg-svg"),
      { y: -80 },
      {
        scrollTrigger: {
          trigger: q(".bg-svg"),
          scrub: true,
        },
        y: 65,
        duration: 3,
      }
    );

    gsap.fromTo(
      q(".img-svg"),
      { y: -30 },
      {
        scrollTrigger: {
          trigger: q(".img-svg"),
          start: "80% 75%",
          scrub: true,
        },
        y: 30,
      }
    );
  }, []);
  const aboutSection = useScrollActive(sectionRef as React.RefObject<HTMLDivElement>);
  const { onSectionChange } = useSection();
  
  useEffect(() => {
    if (onSectionChange && typeof onSectionChange === 'function') {
      onSectionChange(aboutSection ? "who am i?" : "");
    }
  }, [aboutSection, onSectionChange]);

  return (
    <div ref={sectionRef} className="about-panel bg-white dark:bg-[#1B2731] relative overflow-hidden">
      <section id="whoami" className="section">
        <RoughNotationGroup>
          <div className="text-center">
            <RoughNotation
              type="underline"
              color={theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}
              strokeWidth={2}
              order={1}
              show={isSecOnScreen}
            >
              <h2 className="section-heading">Who am I?</h2>
            </RoughNotation>
          </div>
          <div className="md:grid grid-rows-5 lg:grid-rows-6 grid-cols-5">
            <div className="col-start-1 col-end-3 row-start-1 row-end-4 lg:row-end-7 lg:col-start-1 lg:col-end-3 flex justify-center items-center py-4 lg:mb-[20%]">
              <div className="relative w-[95%] max-w-md">
                {/* Decorative elements around image */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200/30 rounded-full blur-xl" />
                <div className="absolute top-1/2 -right-8 w-20 h-20 bg-blue-200/30 rounded-full blur-xl" />
                <div className="absolute -bottom-6 left-1/2 w-28 h-28 bg-green-200/30 rounded-full blur-xl" />
                
                {/* Image container with gradient borders */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 via-green-200/30 to-blue-200/50 rounded-xl transform rotate-3" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-purple-200/30 via-pink-200/30 to-blue-200/50 rounded-xl transform -rotate-3" />
                  
                  <div className="profile-picture relative z-10 overflow-hidden rounded-xl shadow-2xl border-4 border-white/50 dark:border-slate-700/50">
                    <Image
                      src={deepak}
                      width={1700}
                      height={1790}
                      priority
                      alt="Sat Naing profile picture"
                      className="rounded-lg transform transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="col-start-1 col-end-3 row-start-4 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto about-intro">
              As a Computer Science Engineering student, I have gained hands-on experience, focusing on both frontend and backend technologies. In addition to my practical skills, my education has provided a strong foundation, allowing me to continually grow and adapt in the tech field.
            </p>

            <div
              className="col-start-3 col-end-6 row-start-1 row-end-6 lg:row-start-2 lg:row-end-7 md:ml-8 place-content-end"
              ref={eduRef}
            >
              <p className="edu-bg my-4">Here is my educational background.</p>
              {educationInfo.map((edu) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}
            </div>
          </div>
        </RoughNotationGroup>
      </section>
      <AboutBgSvg />
    </div>
  );
}