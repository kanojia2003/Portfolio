import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient.js";
import projectop from "../../../public/images/projectop.png";

const Projects = [
  {
    projectName: "Chat App",
    description:
      "A responsive chat platform enabling live conversations with instant messages updates and image sharing.",
    image: projectop,
    align: "right",
    date: "June 2025",
    link: "https://realtimechatapp-3-j211.onrender.com/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {Projects.map((project, index) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleProject
                key={index}
                projectName={project.projectName}
                description={project.description}
                image={project.image}
                align={project.align}
                date={project.date}
                link={project.link}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
