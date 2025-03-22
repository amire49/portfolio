import { BiLogoTypescript, BiLogoReact, BiLogoTailwindCss, BiLogoHtml5, BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

const Tech = () => {
  const technologies = [
    { icon: RiJavascriptFill, color: "text-yellow-400", name: "JavaScript" },
    { icon: BiLogoTypescript, color: "text-blue-500", name: "TypeScript" },
    { icon: BiLogoReact, color: "text-cyan-400", name: "React" },
    { icon: BiLogoTailwindCss, color: "text-cyan-500", name: "Tailwind CSS" },
    { icon: BiLogoHtml5, color: "text-orange-500", name: "HTML5" },
    { icon: BiLogoMongodb, color: "text-green-500", name: "MongoDB" },
    { icon: BiLogoNodejs, color: "text-green-600", name: "Node.js" },
    { icon: SiMysql, color: "text-blue-600", name: "MySQL" },
  ];

  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-4xl font-light text-white md:text-6xl">
        Technologies
      </h1>
      <div className="grid grid-cols-2 gap-10 p-5 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center gap-2"
          >
            <tech.icon
              className={`cursor-pointer text-[80px] ${tech.color} transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`}
            />
            <span className="text-sm text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
