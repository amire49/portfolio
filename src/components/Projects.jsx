import { motion } from "framer-motion"

const Projects = () => {


  const projectData = [
    {
    image: "/photo2.png",
    title: "Project 1",
    description: "This is a project description",
    technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
  },
  {
    image: "/2.png",
    title: "Project 2",
    description: "This is a project description",
    technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
  },
  {
    image: "/3.png",
    title: "Project 3",
    description: "This is a project description",
    technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
  },
  {
    image: "/4.png",
    title: "Project 4",
    description: "This is a project description",
    technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
  },
  {
    image: "/5.png",
    title: "Project 5",
    description: "This is a project description",
    technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
  },

]

const ProjectCard = ({project}) => {
  return(
    <di> 
    
    <Img src= {project.image} alt=""/>
    <div className="">
      <div>
      <div>{projectData.title}</div>
      <p>{projectData.description}</p>
      </div>
      
    </div>
    </di>
    
  )
}
  return (
    <div id="projects flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
    <h1 className="text-4xl font-light text-white md:6xl">My Projects</h1>
    <div className="fllex w-full-max[1000px] flex-col gap-16 text-white"></div>
      {/* <img src="/photo2.png" alt="Project 1" />
      <img src="/2.png" alt="Project 2" />
      <img src="/3.png" alt="Project 3" /> 
      <img src="/4.png" alt="Project 4" /> 
      <img src="/5.png" alt="Project 5" />  */}

    </div>
  )
}

export default Projects
