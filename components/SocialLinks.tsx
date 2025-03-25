"use client"
import { useSection } from "@/context/section";

const SocialLinks: React.FC<{ page?: string }> = ({ page }) => {
    const { currentSection } = useSection();

    return (
        <>
            {page === "index" && (
                <div className="hidden fixed left-10 bottom-1/3 md:flex flex-col w-6 h-52 items-center justify-between z-50">
                    {navLinks.map((nav) => (
                        <a
                            title={nav.text}
                            href={nav.url}
                            key={nav.url}
                            className={`transition-all duration-300 outline-marrsdark dark:outline-textlight hover:shadow-lg ${
                                currentSection === nav.text.toLowerCase()
                                    ? "bg-marrsgreen dark:bg-carrigreen rotate-0 scale-125"
                                    : "opacity-70 hover:opacity-100 rotate-45 hover:rotate-0 hover:scale-110"
                            } w-3 h-3 border-2 border-marrsgreen dark:border-carrigreen`}
                        ></a>
                    ))}
                </div>
            )}
            
            <div className="hidden fixed right-10 bottom-0 md:flex flex-col w-6 h-[17rem] items-center justify-between z-50">
                <div className="flex flex-col space-y-7">
                    {socialLinks.map((social) => (
                        <a
                            key={social.id}
                            title={social.title}
                            href={social.link}
                            className="group transition-transform duration-300 hover:translate-y-[-3px] hover:scale-110"
                            target={social.isExternal ? "_blank" : "_self"}
                            rel={social.isExternal ? "noopener noreferrer" : ""}
                        >
                            {social.svg}
                        </a>
                    ))}
                </div>
                <div className="w-[3px] h-24 bg-marrsgreen dark:bg-carrigreen rounded-full"></div>
            </div>
        </>
    );
};

const socialLinks = [
    {
        id: 1,
        title: "Deepak Borana's Github Profile",
        link: "https://github.com/Deeeeeeepak/",
        isExternal: true,
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="dark:fill-bglight fill-gray-700 group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen transition-colors duration-300"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Deepak Borana's LinkedIn Profile",
        link: "https://www.linkedin.com/in/deepak-borana/",
        isExternal: true,
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="dark:fill-bglight fill-gray-700 group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen transition-colors duration-300"
            >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
            </svg>
        ),
    },
    {
        id: 3,
        title: "Email Deepak Borana",
        link: "mailto:deepakborana001@gmail.com",
        isExternal: false,
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dark:stroke-bglight stroke-gray-700 group-hover:stroke-marrsgreen dark:group-hover:stroke-carrigreen transition-colors duration-300"
            >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
        ),
    },
];

const navLinks = [
    { url: "#", text: "Welcome" },
    { url: "#whoami", text: "Who am i?" },
    { url: "#projects", text: "Projects" },
    { url: "#experience", text: "Experience" },
    { url: "#contact", text: "Contact" },
];

export default SocialLinks;
