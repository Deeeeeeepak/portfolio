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
    // const isSecOnScreen = useOnScreen(sectionRef);

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
        <section
            ref={sectionRef}
            id="contact"
            className="section min-h-[700px] text-center"
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
            <div className="mt-8 mb-20">
                <h3 className="font-medium text-lg mb-2 md:text-3xl" ref={elementRef}>
                    Let&apos;s be awesome together!
                </h3>
                <p className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose">
                    As a dev, I am driven by my love for co&apos;ding and my desire for new
                    challenges. If you have opportunities for collaboration or want to
                    build something amazing, dont hesitate to contact me!
                </p>
                <LinkButton  href={mailtoGmail}
          targetBlank="_blank"
          rel="noopener noreferrer">
                    Get in touch!
                </LinkButton>
            </div>
        </section>
    );
};

export default ContactSection;
