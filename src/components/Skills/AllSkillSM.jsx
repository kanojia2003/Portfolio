import React from "react";
import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiC } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient.js";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },

  {
    skill: "ReactJS",
    icon: FaReact,
  },

  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },

   {
    skill: "Express.JS",
    icon: SiExpress,
  },

   {
    skill: "MongoDB",
    icon: SiMongodb,
  },

  {
    skill: "C Programming",
    icon: SiC,
  },   
  
  {
    skill: "Python",
    icon: FaPython,
  },
];

const AllSkillSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col items-center"
            key={index}
          >
            <item.icon className="text-6xl text-white mx-auto mb-4" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillSM;
