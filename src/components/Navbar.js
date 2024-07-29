import React from "react";
import { NavLink } from "react-router-dom";
// import {
//   WrenchScrewdriverIcon,
//   EnvelopeIcon,
//   PhoneIcon,
// } from "@heroicons/react/24/solid";
import facebook from "../logo/facebook.jpg";
import twitter from "../logo/twitter.png";
import google from "../logo/google.jpg";
import linkedin from "../logo/linkedin.png";
import customer from "../functions/customer";

const Navbar = () => {
  return (
    <header>
      <div className="flex bg-paleBlue">
        <div className="w-1/2 p-3 flex items-center px-5">
          <span className="text-white font-bold text-[13px] md:text-[18px] company">
            {customer[0].name}
          </span>
        </div>
        {/* <div className="w-1/3 p-3 flex justify-center items-center px-5">
          <div className="flex md:space-x-20 space-x-5">
            <div className="flex space-x-3 items-center">
              <span className="border border-blue-400 p-2">
                <EnvelopeIcon className="h-6 w-6 text-blue-400" />
              </span>
              <div className="flex flex-col justify-center items-baseline">
                <p className="text-white font-bold">Email us</p>
                <a
                  href="mailto:drdrainrooterandhydrojett@gmail.com@gmail.com"
                  className="text-sm grey"
                >
                  @drdrainrooterandhydrojett@gmail.com
                </a>
              </div>
            </div>
            <div className="hidden md:flex space-x-3 items-center">
              <span className="border border-blue-400 p-2">
                <PhoneIcon className="h-6 w-6 text-blue-400" />
              </span>
              <div className="flex flex-col justify-center items-baseline">
                <p className="text-white font-bold">Call Us</p>
                <a href="tel:+6615053277" className="text-sm grey">
                  (661) 505-3277
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-1/2 p-3 flex justify-end items-center px-5">
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=100063736860822"
              target="_blank"
              rel="noreferrer"
            >
              <img className="circle" src={facebook} alt="facebook logo" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="circle" src={twitter} alt="twitter logo" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="circle" src={google} alt="google logo" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="circle" src={linkedin} alt="linkedin logo" />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center md:justify-between items-center py-2 px-3 md:px-10 bg-white">
        <div className="md:flex md:flex-col items-baseline hidden ">
          <NavLink to="/" className="link flex items-center">
            <WrenchScrewdriverIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
            <span className="md:text-2xl mx-2 text-blue-900 font-bold">
              Kasbass
            </span>
          </NavLink>
          <p className="text-sm">Professional Plumber</p>
        </div>
        <div className="flex md:space-x-20 space-x-5">
          <div className="flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
              <EnvelopeIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-baseline">
              <p className="font-bold">Email us</p>
              <a
                href="mailto:kasbassnigenterprises@gmail.com"
                className="text-sm grey"
              >
                @kasbassnigenterprises@gmail.com
              </a>
            </div>
          </div>
          <div className="hidden md:flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
              <PhoneIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-baseline">
              <p className="font-bold">Call us on</p>
              <a href="tel:+2348147603570" className="text-sm grey">
                (+234) 814 760 3570
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <nav
        className="flex justify-center md:center md:container items-center
        px-3  md:pr-0
       text-black mx-auto text-[12px] md:text-[15px] font-bold"
      >
        <ul className="flex space-x-4 md:space-x-10  md:mx-3 py-6">
          <NavLink className="link font-bold" to="/">
            HOME
          </NavLink>
          <li>
            <NavLink className="link font-bold" to="/about">
              ABOUT US
            </NavLink>
          </li>
          <li data-to-scrollspy-id="services">
            <NavLink className="link font-bold" to="/result">
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink className="link font-bold " to="/projects">
              PROJECTS
            </NavLink>
          </li>
        </ul>
        {/* <li
          className="hidden md:block hover:opacity-90 
        active:bg-blue-700 bg-blue-500 px-5 py-6 font-bold"
        >
          BLOG
        </li> */}
      </nav>
    </header>
  );
};

export default Navbar;
