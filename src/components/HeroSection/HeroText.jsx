import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient";

const typingText = "A Full Stack Web Developer";
const typingSpeed = 70; // Faster typing
const pauseAfter = 1200; // Pause after full text
const pauseBefore = 400; // Pause before typing again

const HeroText = () => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && index < typingText.length) {
      timeout = setTimeout(() => {
        setDisplayed(typingText.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed + Math.random() * 60); // Randomize speed for more natural effect
    } else if (!deleting && index === typingText.length) {
      timeout = setTimeout(() => setDeleting(true), pauseAfter);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(typingText.slice(0, index - 1));
        setIndex(index - 1);
      }, typingSpeed / 2);
    } else if (deleting && index === 0) {
      timeout = setTimeout(() => setDeleting(false), pauseBefore);
    }
    return () => clearTimeout(timeout);
  }, [index, deleting]);

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey font-mono tracking-wide"
        // Add a fixed width to prevent layout shifts
        // You might need to adjust this width based on your font and screen sizes
        // A good way to determine this is to inspect the element when the full text is displayed
   style={{
    minWidth: "350px", // Reserve space for the full text
    display: "inline-block",
    whiteSpace: "nowrap",
    height: "2.5rem", // Adjust to match your font size for vertical stability
    overflow: "hidden",
  }}// Example: Adjust minWidth as needed
      >
        <span
          style={{
            background: "linear-gradient(90deg, #94a3b8, #e4e4e7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            letterSpacing: "0.08em",
            transition: "background 0.5s"
          }}
        >
          {displayed}
        </span>
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Neeraj Kanojia
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg mt-4  sm:p-4 text-justify text-lightGrey font-light max-w-2xl leading-relaxed "
      >
       
       I'm a passionate Full Stack Web Developer with a strong foundation in both frontend and backend technologies.  
I specialize in building responsive, scalable, and user-friendly web applications using modern stacks like React, Node.js, and MongoDB.  
With a focus on clean code and intuitive design, I enjoy transforming ideas into real-world, impactful digital solutions.  
I’m constantly learning new tools and technologies to stay ahead in the fast-paced world of web development.  
My goal is to create experiences that are not just functional but also seamless, accessible, and engaging.

      </motion.p>

      <motion.a
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        href="/resume.pdf"
        download
        className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-8 hover:bg-orange hover:text-black transition-all duration-500 cursor-pointer md:self-start sm:self-center"
      >
        Download Resume
      </motion.a>
    </div>
  );
};

export default HeroText;
