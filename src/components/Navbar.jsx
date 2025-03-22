import { useState } from "react";
import { BsGithub, BsLinkedin, BsMenuButton, BsTwitter, BsYoutube,} from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { MdClear } from "react-icons/md";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const Menu = () => {
     setIsOpen(!isOpen)
  }
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl opacity-80 font-semibold transition-all duration-300 hover:opacity-100"
      >
        Amire
      </a>
      <ul className="hidden md:flex gap-10">
        <li>
          <a
            href="#home"
            className="cursor-pointer opacity-70 transition all duraation-300 hover:opacity-100"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tech"
            className="cursor-pointer opacity-70 transition all duraation-300 hover:opacity-100"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition all duraation-300 hover:opacity-100"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition all duraation-300 hover:opacity-100"
          >
            Contact
          </a>
        </li>
      </ul>
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube />
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <BsLinkedin />
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white hover:opacity-100">
          <BsGithub />
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <BsTwitter />
        </li>
      </ul>
      {isOpen ? <MdClear className="block md:hidden text-4xl" onClick = {Menu} /> : <IoMdMenu className="block md:hidden text-4xl"  onClick = {Menu}/>}
      
      {isOpen &&
      (
        <div className={`fixed right-0 top-[84px] flex w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black ${isOpen ? "block" :"hidden"}`}>
           
           <ul className="flex flex-col gap-4 px-8 py-5">
           <li>
          <a
            href="#home"
            className="cursor-pointer opacity-70 transition all duraation-300 hover:opacity-100"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tech"
            className="cursor-pointer opacity-70 transition all duraation-300 hover:opacity-100"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition all duraation-300 hover:opacity-100"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition all duraation-300 hover:opacity-100"
          >
            Contact
          </a>
        </li>
           </ul>

           <ul className="flex flex-wrap gap-5 px-15 my-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube />
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <BsLinkedin />
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white hover:opacity-100">
          <BsGithub />
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <BsTwitter />
        </li>
      </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
