import React, { useState } from "react";

// icon
import { AiOutlineSetting } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

// image
import Logo from "../assets/logo.svg";
import openstack from "../assets/openstack.svg";
import server from "../assets/server.svg";
import vm from "../assets/vm.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1F1616] w-1/5 h-screen">
        {/* logo */}
        <div className="flex mt-4 pl-3 pb-3 items-center border-b border-orange-500">
          <img
            src={Logo}
            alt="Logo"
            className="xxl:w-8 xl:w-7 lg:w-7 md:w-5 sm:w-5"
          />
          <h1 className="text-white font-bold text-xl ml-3 lg:text-xl md:text-sm sm:text-sm">
            Khayangan
          </h1>
        </div>
        {/* menu */}
        <div className="ml-14 mt-6 xl:ml-5 lg:ml-5 md:ml-3 sm:ml-2 translate-y-4 duration-500 ease-linear">
          <div className="flex justify-between mr-3 mb-8 cursor-pointer items-center hover:opacity-80">
            <div className="flex items-center">
              <img src={openstack} alt={openstack} className="w-4 mr-2" />
              <p className="text-white font-semibold">OpenStack</p>
            </div>
            <MdKeyboardArrowRight className="text-white text-xl" />
          </div>

          <div className="flex justify-between mr-3 mb-8 cursor-pointer items-center hover:opacity-80">
            <div className="flex items-center">
              <img src={vm} alt={vm} className="w-4 mr-2" />
              <p className="text-white font-semibold">VM Ware</p>
            </div>
            <MdKeyboardArrowRight className="text-white text-xl" />
          </div>

          <div
            className="flex justify-between mr-3 mb-2 cursor-pointer items-center hover:opacity-80"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div className="flex items-center">
              <img src={server} alt={server} className="w-4 mr-2" />
              <p
                className={` ${
                  navbarOpen
                    ? "text-amber-400 font-semibold raota duration-300"
                    : "text-white font-semibold"
                }`}
              >
                Data Center
              </p>
            </div>
              <MdKeyboardArrowRight className={`text-white text-2xl ${navbarOpen ? "rotate-90 duration-300 ease-linear" : "ease-in-out duration-300"}`} />
          </div>

          {/* dropdown datacenter */}
          <div className={`ml-6 ${navbarOpen ? "animate-wiggle flex flex-col" : "opacity-0"}`}>
            <a href="#" className="text-white text-sm cu hover:opacity-80">
              HyperVisor
            </a>
            <a href="#" className="text-white text-sm my-3 hover:opacity-80">
              OpenStack
            </a>
            <a href="#" className="text-white text-sm hover:opacity-80">
              VMware
            </a>
          </div>

          {/* setting */}
          <div className="flex mt-8 mr-3 mb-8 cursor-pointer items-center hover:opacity-80">
            <AiOutlineSetting className="text-amber-300 ml-0 text-lg mr-2" />
            <p className="text-white font-semibold">Setting</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
