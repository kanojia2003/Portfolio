import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Education", section: "education" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kanojia2003",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/neeraj-kanojia-198a69291/",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/__mr.n__kanojia99?igsh=MWVmNnZncTR2cmx3Mg==",
      icon: FaInstagram,
    },
  ];

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24" />

      {/* Footer for Large Screens */}
      <div className="hidden sm:flex justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-xl text-lightGrey sm:hidden md:block">Neeraj Kanojia</p>
        <ul className="hidden sm:flex gap-4 text-lightGrey text-sm text-md:xl ">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer for All Screens: Socials + Copyright */}
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 mb-4">
        {/* Social Icons */}
        <div className="flex gap-6 text-lightGrey text-xl mb-6 sm:mb-0 sm:order-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="hover:text-cyan transition-colors duration-300"
            >
              <social.icon />
            </a>
          ))}
        </div>

    
        {/* Copyright */}
        <p className="text-sm text-lightBrown text-center sm:text-right sm:order-3">
          © 2025 Neeraj | All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterMain;
