"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { useSection } from "@/providers/section-provider";
import useScrollListener from "@/hooks/useScrollListener";

interface NavLink {
  url: string;
  svg: JSX.Element;
  text: string;
}

const navLinks: NavLink[] = [
  {
    url: "#whoami",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    text: "Who am i?",
  },
  {
    url: "#experience",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    text: "Experience",
  },
  {
    url: "#projects",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
    text: "Projects",
  },
  {
    url: "#contact",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    text: "Contact",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { currentSection } = useSection();
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scroll = useScrollListener();

  const mainRef = useRef<HTMLDivElement>(null);
  const themeBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { top: -120 },
        { top: 0, duration: 0.7, delay: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    const themeBtn = themeBtnRef.current;
    if (themeBtn) {
      themeBtn.ariaLabel = theme ?? "light";
    }
  }, [theme]);

  useEffect(() => {
    const _classList = [];
    if (scroll.y > 100 && scroll.y - scroll.lastY > 0) {
      _classList.push("!shadow-lg");
      _classList.push("!backdrop-blur-lg");
      _classList.push("!bg-opacity-80");
      _classList.push("!dark:bg-opacity-80");
    }
    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  useEffect(() => {
    if (menuRef.current) {
      if (mobileMenuOpen) {
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(menuRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle resume download
  const handleDownloadResume = () => {
    // In a web context, we need to access files from the public directory
    // Local file paths like C:\Users\boran\Downloads\Deepak-Borana.pdf cannot be directly accessed
    // Instead, place your resume in the public folder and reference it with a relative URL
    const resumeUrl = "/Deepak-Borana.pdf";
    
    // Create anchor element and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Deepak-Borana.pdf';
    link.target = '_blank'; // Open in new tab if download doesn't start automatically
    
    // Add to document, click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="md:flex">
      <div
        ref={mainRef}
        className={`main-nav bg-bglight/95 dark:bg-bgdark/95 z-40 top-0 shadow-sm fixed transition-all duration-300 px-5 sm:px-8 h-16 w-full ${navClassList.join(
          " "
        )}`}
      >
        <div className="w-full h-full mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="group text-xl font-bold sm:text-2xl transition-all duration-300 relative"
          >
            <span className="relative z-10">Deepak Borana</span>
            <span className="text-marrsgreen dark:text-carrigreen">.dev</span>
            <span className="absolute bottom-0 left-0 w-0 h-[4px] bg-marrsgreen dark:bg-carrigreen group-hover:w-[105px] transition-all duration-300 rounded-full"></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex justify-evenly items-center">
              {navLinks.map((navLink) => (
                <li key={navLink.url}>
                  <a
                    href={navLink.url}
                    className={`relative text-base flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                      currentSection === navLink.text.toLowerCase()
                        ? "text-marrsgreen dark:text-carrigreen"
                        : "hover:text-marrsgreen dark:hover:text-carrigreen"
                    }`}
                  >
                    <span className="mr-2">{navLink.svg}</span>
                    <span className="whitespace-nowrap">{navLink.text}</span>
                    {currentSection === navLink.text.toLowerCase() && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-marrsgreen dark:bg-carrigreen rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
              
              {/* Resume Download Button */}
              <li>
                <button
                  onClick={handleDownloadResume}
                  className="ml-4 flex items-center gap-2 px-4 py-2 rounded-full bg-marrsgreen/10 dark:bg-carrigreen/10 text-marrsgreen dark:text-carrigreen border border-marrsgreen/20 dark:border-carrigreen/20 hover:bg-marrsgreen/20 dark:hover:bg-carrigreen/20 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Resume</span>
                </button>
              </li>
            </ul>
            
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggles light & dark theme"
              ref={themeBtnRef}
              aria-live="polite"
              className="w-10 h-10 ml-4 rounded-full flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                className="fill-textlight hidden dark:inline-block transform duration-300 md:dark:hover:fill-carrigreen"
              >
                <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                className="dark:hidden transform duration-300 md:hover:fill-marrsgreen"
              >
                <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" />
              </svg>
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleDownloadResume}
              className="mr-3 p-2 rounded-full bg-marrsgreen/10 dark:bg-carrigreen/10 text-marrsgreen dark:text-carrigreen"
              aria-label="Download Resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
            
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggles light & dark theme"
              ref={themeBtnRef}
              aria-live="polite"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="fill-textlight hidden dark:inline-block"
              >
                <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="dark:hidden"
              >
                <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" />
              </svg>
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="w-9 h-9 flex flex-col justify-center items-center rounded-lg"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 mt-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 mt-1 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`fixed top-16 right-0 z-30 w-full bg-bglight/95 dark:bg-bgdark/95 shadow-lg backdrop-blur-lg md:hidden transform opacity-0 -translate-y-5 ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <nav className="container mx-auto py-4 px-5">
          <ul className="space-y-3">
            {navLinks.map((navLink) => (
              <li key={navLink.url}>
                <a
                  href={navLink.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center p-2 rounded-lg ${
                    currentSection === navLink.text.toLowerCase()
                      ? "text-marrsgreen dark:text-carrigreen bg-marrsgreen/10 dark:bg-carrigreen/10"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="mr-3">{navLink.svg}</span>
                  <span>{navLink.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;