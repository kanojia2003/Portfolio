import React from "react";
import SkillText from "./SkillText";
import AllSkill from "./AllSkill";
import AllSkillsSM from "./AllSkillSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrammerMotion/Varient.js";
const SkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[400px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          {" "}
          <SkillText />
        </motion.div>
      </div>
      <div className=" sm:hidden  lg:block">
        <AllSkill />
      </div>

      <div className="sm:block lg:hidden">
        <AllSkillsSM />
      </div>
    </div>
  );
};

export default SkillMain;
