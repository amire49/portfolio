import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projectData = [
    {
      image: "/photo2.png",
      title: "Project 1",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
    },
    {
      image: "/2.png",
      title: "Project 2",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
    },
    {
      image: "/3.png",
      title: "Project 3",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
    },
    {
      image: "/4.png",
      title: "Project 4",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com",
    },
    {
      image: "/5.png",
      title: "Project 5",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/yourusername/project5",
      demo: "https://project5-demo.com",
    },
  ];

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-lg bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute right-2 top-2 flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-purple-600"
              title="View GitHub Repository"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-purple-600"
              title="View Live Demo"
            >
              <FiExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="min-h-screen w-full py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-light text-white md:text-6xl"
        >
          My Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
