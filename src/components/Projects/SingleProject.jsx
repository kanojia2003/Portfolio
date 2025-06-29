import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient.js";
const SingleProject = ({
  projectName,
  description,
  image,
  align,
  date,
  link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2
          className={`md:text-3xl sm:text-2xl sm:text-center mb-4 text-orange ${
            align === "left" ? "md:text-right" : "md:text-left"
          }  `}
        >
          {projectName}
        </h2>
        <p
          className={`text-xl font-thin text-white font-special sm:text-center mb-2 ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {description}
        </p>
        <p
          className={`text-xl font-thin text-white font-special sm:text-center mb-1 ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {date}
        </p>
        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View Project <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
