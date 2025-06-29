import React from "react";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient.js";

const experienceData = [
  {
    role: "Frontend Developer Intern",
    company: "Bharat Intern",
    period: "1-June-2024 to 30-June-2024",
    icon: <FaLaptopCode className="text-cyan text-3xl" />,
    description:
      "As a front-end intern at Bharat Intern, I was assigned real-world mini projects that involved building responsive websites using HTML, CSS, and JavaScript. The internship helped enhance my skills in layout design, styling, and DOM manipulation.",
    certificate: "View certificate",
    certificateLink:
      "https://drive.google.com/file/d/1DQZV08HdbMTo5D3oQjlhzJNirXN3oujt/view?usp=sharing",
  },
  {
    role: "Technical Support Engineer",
    company: "HeartCounts",
    period: "1-Dec-2023 to 31-Dec-2023",
    icon: <MdWork className="text-orange text-3xl" />,
    description:
      "Worked as a Technical Support Engineer intern at HeartCounts for 1 month. My responsibilities included data entry, maintaining accurate records.",
    certificate: "View certificate",
    certificateLink:
      "https://drive.google.com/file/d/1aO1gM9xmt2BBYhN3sy3YaSR2id3h8125/view?usp=sharing",
  },
  // {
  //   role: "Web Developer (Freelance)",
  //   company: "Freelance",
  //   period: "2023",
  //   icon: <FaBriefcase className="text-cyan text-3xl" />,
  //   description:
  //     "Built and deployed websites for small businesses, focusing on clean design, SEO, and mobile responsiveness. Managed client communication and project timelines.",
  // },
];

/* ────────────────────────────────
   Component
──────────────────────────────────*/
const ExperienceMain = () => {
  return (
    <motion.section
      id="experience"
      className="py-5 px-4"
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div
        className="max-w-[900px] mx-auto"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ——— Section Heading ——— */}
        <motion.h2
          className="text-6xl text-cyan mb-20 text-center font-normal"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Experience
        </motion.h2>

        {/* ——— Timeline ——— */}
        <div className="relative flex flex-col gap-12">
          {/* Vertical gradient line (md+) */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
              absolute left-1/2 -translate-x-1/2   /* perfect centre */
              top-0 bottom-0 w-[2px]
              bg-gradient-to-b from-cyan to-orange opacity-30
              rounded-full hidden md:block
            "
          />

          {/* Timeline items */}
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", 0.3 + idx * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative md:grid md:grid-cols-[60px_1fr] md:gap-x-8"
            >
              {/* Icon */}
              <div
                className="
                  flex items-center justify-center
                  w-12 h-12 bg-[#232323] rounded-full shadow-lg border-4 border-cyan z-10
                  mx-auto -mt-8 mb-4
                  md:static md:mx-0 md:mb-0 md:mt-0 md:self-center md:justify-self-center
                  absolute left-1/2 -translate-x-1/2 top-0
                  md:relative md:left-auto md:translate-x-0 md:top-auto
                "
              >
                {exp.icon}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                }}
                className="
                  bg-[#232323] rounded-xl shadow-lg p-6
                  transition-transform transition-colors duration-300
                  hover:bg-[#262e38] hover:border-l-8 hover:border-cyan cursor-pointer
                  flex flex-col
                "
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl text-cyan font-semibold">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-orange">{exp.company}</p>
                  </div>
                  <span className="text-lightGrey text-md md:text-right mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lightGrey mt-4">{exp.description}</p>
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:text-orange underline mt-4 transition-colors duration-200 w-fit"
                >
                  {exp.certificate}
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceMain;
