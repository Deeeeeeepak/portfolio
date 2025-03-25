import { JSX } from "react";

type Props = {
  index: number;
  project: {
    title: string;
    type: string;
    image: JSX.Element;
    desc: string;
    tags: string[];
    liveUrl: string;
    codeUrl?: string;
    bgColor: string;
  };
};

const ProjectCard: React.FC<Props> = ({ index, project }) => {
  return (
    <div className="md:basis-1/2 md:px-8 py-2 md:py-4">
      <div className={`project-card project-card-${index} shadow-lg rounded-xl border border-marrsgreen/30 dark:border-carrigreen/30 hover:border-marrsgreen dark:hover:border-carrigreen transition-colors duration-300 overflow-hidden h-full`}>
        <div className="overflow-hidden relative">
          <div className={`project-image ${project.bgColor} relative aspect-[16/9]`}>
            {project.image}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold tracking-wider px-4 text-center">
                {project.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="overflow-hidden p-4">
          <div className="project-text flex items-center justify-between">
            <h3 className="text-marrsgreen dark:text-carrigreen text-lg my-1 font-medium">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  title={`View code for ${project.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white dark:bg-gray-200 text-black dark:text-black p-1.5 rounded-full border border-marrsgreen/20 dark:border-carrigreen/20 hover:bg-marrsgreen hover:text-white dark:hover:bg-carrigreen dark:hover:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="font-bold">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              <a
                href={project.liveUrl}
                title={`View live demo of ${project.title}`}
                target="_blank"
                rel="noreferrer"
                className="bg-white dark:bg-gray-200 text-black dark:text-black p-1.5 rounded-full border border-marrsgreen/20 dark:border-carrigreen/20 hover:bg-marrsgreen hover:text-white dark:hover:bg-carrigreen dark:hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 512 512" className="font-bold">
                  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden mt-2 px-4">
          <p className="project-desc text-gray-600 dark:text-gray-300">{project.desc}</p>
        </div>
        <ul className="flex flex-wrap gap-2 mt-4 px-4 pb-4">
          {project.tags.map((tag) => (
            <li key={tag} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-marrsgreen/80 dark:text-carrigreen/80">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;