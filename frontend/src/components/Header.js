import React, { useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scrollSpy,
} from "react-scroll/modules";

import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { GrInstagram } from "react-icons/gr";

import { AiFillTwitterCircle } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <header className="flex w-full top-0 sticky justify-between items-center h-20 px-4  bg-slate-300 z-10 text-black">
      {/* logo */}
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          <span className=""> Wander</span>{" "}
          <span className="text-primary">Vista</span>{" "}
        </h1>
      </div>
      {/* Links here are used as sroll */}
      <ul className="hidden  md:flex space-x-4 text-md font-normal">
        <li className="hover:text-orange-500">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="bus-search"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            className="pt-2"
          >
            Bus Search
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="view-ticket"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            View Ticket
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="about-us"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="contact-us"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex space-x-2">
        <BiSearch className=" hover:text-primary cursor-pointer" size={20} />
        <BsPerson className=" hover:text-primary cursor-pointer" size={20} />
      </div>
      {/* hamburgermenu */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* small device navbar */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-300 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <h1 className="text-2xl">
          <span className=""> Wander</span>{" "}
          <span className="text-primary">Vista</span>{" "}
        </h1>{" "}
        <ul className="p-4 py-3 ">
          <li className="border-b p-2">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              Home
            </Link>
          </li>
          <li className="border-b p-2">
            {" "}
            <Link
              activeClass="active"
              to="bus-search"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
              className="pt-2"
            >
              Bus Search
            </Link>{" "}
          </li>
          <li className="border-b p-2">
            {" "}
            <Link
              activeClass="active"
              to="view-ticket"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              View Ticket
            </Link>
          </li>
          <li className="border-b p-2">
            {" "}
            <Link
              activeClass="active"
              to="about-us"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              About Us
            </Link>
          </li>
          <li className=" p-2">
            {" "}
            <Link
              activeClass="active"
              to="contact-us"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              Contact Us
            </Link>
          </li>
          <div className="flex flex-col">
            <button className="pt-2 mt-4 rounded-full bg-primary px-8 py-2 text-md font-normal text-black shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Search
            </button>
            <button className="rounded-full bg-primary px-8 mt-2 py-2 text-md font-normal text-black shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Account
            </button>
          </div>
          <div className="flex justify-center space-x-4 items-center my-6">
            <FaFacebook size={25} />
            <AiFillTwitterCircle size={25} />
            <GrInstagram size={25} />
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
