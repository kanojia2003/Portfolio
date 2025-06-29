import React from "react";
import { ImArrowDownRight2 } from "react-icons/im";
const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-300 hover:shadow-cyanShadow ">
      Hire Me
      <div className="sm:hidden md:block">
        <ImArrowDownRight2 />
      </div>
    </button>
  );
};

export default NavbarBtn;
