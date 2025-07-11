import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient.js";
const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "St. John College of Engineering and Management",
    year: "2022 - 2026",
    details:
      "Relevant Courses: Data Structures, Algorithms, Web Development, Machine Learning. CGPA: 8.23/10",
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Pancham Jr. College of Arts Commerce and Science",
    year: "2022",
    details: "PCMB with Information Technology. Percentage: 80.30%",
  },
  {
    degree: "Secondary (X)",
    institution: "Pancham English High School",
    year: "2020",
    details: "Percentage: 87.20%",
  },
];

const EducationMain = () => {
  return (
    <section id="education" className="py-12 px-4 mt-40 sm:[mt-]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-6xl text-cyan mb-10 text-center font-normal">
          Education
        </h2>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={idx}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0, ease: "easeInOut" },
              }}
              className="bg-[#232323] rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between transition-all duration-300 hover:bg-[#262e38] hover:shadow-2xl hover:border-l-8 hover:border-cyan cursor-pointer"
            >
              <div>
                <h3 className="text-2xl text-orange font-semibold">
                  {edu.degree}
                </h3>
                <p className="text-lg text-white">{edu.institution}</p>
                <p className="text-lightGrey">{edu.details}</p>
              </div>
              <div className="text-cyan text-lg md:text-right mt-2 md:mt-0">
                {edu.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationMain;
