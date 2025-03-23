import { useState } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsMenuButton,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { MdClear } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Menu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl opacity-80 font-semibold transition-all duration-300 hover:opacity-100"
      >
        Amire
      </a>
      <ul className="hidden items-center gap-8 md:flex">
        <li>
          <a
            href="#home"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
          >
            Contact
          </a>
        </li>
      </ul>
      <ul className="hidden items-center gap-6 md:flex">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
        </li>
      </ul>
      <button 
        className="block text-4xl transition-all duration-300 hover:text-sky-500 md:hidden" 
        onClick={Menu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <MdClear /> : <IoMdMenu />}
      </button>

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex w-[250px] flex-col items-start justify-start gap-6 rounded-bl-2xl border-b border-l border-gray-800/50 bg-black/95 backdrop-blur-sm ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex w-full flex-col gap-4 px-8 py-5">
            <li>
              <a
                href="#home"
                className="flex items-center gap-2 opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
                onClick={Menu}
              >
                <span className="text-sky-500">•</span> Home
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="flex items-center gap-2 opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
                onClick={Menu}
              >
                <span className="text-sky-500">•</span> Tech
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="flex items-center gap-2 opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
                onClick={Menu}
              >
                <span className="text-sky-500">•</span> Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center gap-2 opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
                onClick={Menu}
              >
                <span className="text-sky-500">•</span> Contact
              </a>
            </li>
          </ul>
          
          {/* Social Icons for Mobile */}
          <div className="w-full border-t border-gray-800/50 px-8 py-4">
            <p className="mb-3 text-sm text-gray-400">Connect with me</p>
            <ul className="flex items-center justify-start gap-6">
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin />
                </a>
              </li>
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <BsGithub />
                </a>
              </li>
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <BsTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
