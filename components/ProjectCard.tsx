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
    codeUrl: string;
    bgColor: string;
  };
};

const ProjectCard: React.FC<Props> = ({ index, project }) => {
  return (
    <div className="md:basis-1/2 md:px-8 py-2 md:py-4">
      <div className={`project-card project-card-${index}`}>
        <div className="overflow-hidden">
          <div className={`project-image ${project.bgColor} relative aspect-[16/9]`}>
            {project.image}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="project-text flex items-center justify-between">
            <h3 className="text-marrsgreen dark:text-carrigreen text-lg my-1 font-medium">
              {project.title}
            </h3>
            <div className="flex items-center space-x-5 sm:space-x-3 my-2 sm:my-0">
              <a
                href={project.codeUrl}
                title={`View code for ${project.title}`}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href={project.liveUrl}
                title={`View live demo of ${project.title}`}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden mt-2">
          <p className="project-desc text-gray-600 dark:text-gray-300">{project.desc}</p>
        </div>
        <ul className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <li key={tag} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;