"use client";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import LinkButton from "@/components/LinkButton";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import { useSection } from "@/context/section";

const ContactSection: React.FC = () => {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);

    // Set active link for contact section
    const contactSection = useScrollActive(sectionRef as React.RefObject<HTMLDivElement>);
    const { onSectionChange } = useSection();
    const mailtoGmail = "https://mail.google.com/mail/?view=cm&fs=1&to=boranadeepak84@gmail.com";
    useEffect(() => {
        // Check if onSectionChange exists before calling it
        if (contactSection && onSectionChange) {
            onSectionChange("contact");
        }
    }, [contactSection, onSectionChange]); // Add onSectionChange to dependency array

    return (
        <div className="bg-white dark:bg-[#1B2731] relative overflow-hidden">
            <section
                ref={sectionRef}
                id="contact"
                className="section min-h-[600px]"
            >
                <div className="text-center">
                    <RoughNotation
                        type="underline"
                        color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
                        strokeWidth={2}
                        order={1}
                        show={isOnScreen}
                    >
                        <h2 className="text-2xl inline-block my-6 font-medium">Contact</h2>
                    </RoughNotation>
                </div>
                
                <div className="mt-8 mb-20 flex flex-col items-center">
                    <div className="w-full max-w-2xl bg-gradient-to-br from-blue-100 to-teal-100 dark:from-slate-800 dark:to-slate-700 p-8 py-12 rounded-2xl shadow-lg flex flex-col justify-between h-[400px] border-2 border-marrsgreen/30 dark:border-carrigreen/30 hover:border-marrsgreen dark:hover:border-carrigreen transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h3 className="font-medium text-xl mb-4 md:text-3xl text-marrsgreen dark:text-carrigreen" ref={elementRef}>
                                Let&apos;s be awesome together!
                            </h3>
                            <div className="w-24 h-1 bg-gradient-to-r from-marrsgreen to-carrigreen mx-auto"></div>
                        </div>
                        
                        <div className="flex-grow flex flex-col justify-center">
                            <p className="mb-10 mx-auto max-w-xl text-center leading-relaxed text-gray-700 dark:text-gray-300">
                                As a dev, I am driven by my love for co&apos;ding and my desire for new
                                challenges. If you have opportunities for collaboration or want to
                                build something amazing, dont hesitate to contact me!
                            </p>
                        </div>
                        
                        <div className="flex justify-center">
                            <LinkButton  
                                href={mailtoGmail}
                                targetBlank={true}
                                rel="noopener noreferrer"
                                className="px-8 py-3 !bg-gradient-to-r from-marrsgreen to-carrigreen hover:from-carrigreen hover:to-marrsgreen transition-all"
                            >
                                Get in touch!
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Add subtle background decorative elements similar to AboutSection */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-200/5 rounded-full blur-3xl dark:bg-blue-500/5" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-200/5 rounded-full blur-3xl dark:bg-teal-500/5" />
        </div>
    );
};

export default ContactSection;
