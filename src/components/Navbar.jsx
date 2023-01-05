import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/champflix-logo.jpg";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl shadow-gray-200 z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a href="/">
          <div className="flex justify-center items-center text-3xl">
            <img src={logo} alt="Champflix Logo" height="50px" width="50px" />
            <p className="font-semibold text-sky-500 ml-2">Champflix</p>
          </div>
        </a>
        <div className="flex justify-center items-center">
          <ul className="hidden md:flex justify-center items-center">
            <a href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-gray-400">
                Home
              </li>
            </a>
            <a href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-gray-400">
                Favorites
              </li>
            </a>
            <a href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-gray-400">
                About
              </li>
            </a>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <img src={logo} width="70" height="70" alt="Nav Logo" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let`s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="/">
                <li className="py-4 text-sm">Home</li>
              </a>
              <a href="/">
                <li className="py-4 text-sm">Favorites</li>
              </a>
              <a href="/">
                <li className="py-4 text-sm">About</li>
              </a>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let`s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
