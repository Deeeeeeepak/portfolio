"use client"
import { useSection } from "@/context/section";

const NavDots = () => {
  const { currentSection } = useSection();
  
  const sections = [
    { id: "welcome", name: "Welcome" },
    { id: "whoami", name: "Who am I?" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" }
  ];

  const scrollToSection = (id: string) => {
    // Update URL hash
    history.pushState({}, '', `#${id}`)
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="hidden fixed left-8 top-1/2 -translate-y-1/2 md:flex flex-col gap-6 z-50">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`w-3 h-3 transition-all duration-300 hover:scale-125 border-2 
            border-marrsgreen dark:border-carrigreen
            ${currentSection === section.name.toLowerCase() 
              ? 'bg-marrsgreen dark:bg-carrigreen rotate-0' 
              : 'rotate-45 hover:bg-marrsgreen/50 dark:hover:bg-carrigreen/50'}`}
          aria-label={`Navigate to ${section.name}`}
        />
      ))}
    </div>
  );
};

export default NavDots;