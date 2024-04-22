import { useState } from "react";
import portfolio_img from "../assets/portfolio_img.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="lg:w-[1400px] w-[600px] md:mb-14 mb-10 bg-gradient-to-r  from-purple-800 to-blue-800 p-2  shadow-lg shadow-sky-700 lg:ml-20 ml-1 lg:rounded-md  ">
      <div className="flex lg:justify-center  items-center">
        <img src={portfolio_img} alt="image" height={40} width={45} />
        <h1 className="lg:text-lg text-2xl  font-semibold pl-2 ">
          <Link to="/">My Portfolio</Link>
        </h1>

        <ul className="hidden lg:flex justify-center items-center pl-10 gap-10 ml-[300px] text-lg font-semibold">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/15o-ZbIP8aecxbqvXEOEsvlnUTi0UpJxG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden lg:block py-2 px-3 rounded-full text-lg font-semibold ml-[120px]">
            My Resume
          </button>
        </a>

        <div className="lg:hidden block absolute right-5 text-center ">
          {isOpen ? (
            <ImCross
              onClick={handleToggleMenu}
              className="text-2xl  text-purple-400"
            />
          ) : (
            <FaBars
              onClick={handleToggleMenu}
              className="text-2xl text-purple-400"
            />
          )}
        </div>

        {isOpen ? (
          <ul className="bg-gradient-to-r from-purple-600 to-blue-800  font-semibold fixed top-0 left-0 bottom-0 w-[40%] px-2 pt-6  duration-400 text-xl">
            <li className="my-4">
              <a href="#about">About</a>
            </li>
            <li className="my-4">
              <a href="#skills">Skills</a>
            </li>
            <li className="my-4">
              <a href="#projects">Projects</a>
            </li>
            <li className="my-4">
              <a href="#education">Education</a>
            </li>
            <li className="my-4">
              <a href="#contact">Contact</a>
            </li>
            <li className="mt-10 py-2 pl-2 text-center bg-gradient-to-r from-pink-600 to-purple-500 rounded-xl hover:text-slate-50 w-[80%]">
              <a
                href="https://drive.google.com/file/d/15o-ZbIP8aecxbqvXEOEsvlnUTi0UpJxG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                alt="Resume"
              >
                My Resume
              </a>
            </li>
          </ul>
        ) : (
          " "
        )}
      </div>
    </nav>
  );
};

export default Navbar;
