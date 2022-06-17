import React from "react";
// icon
import { BiMenu } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

// image
import Logo from "./assets/logo.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="bg-[#1F1616] w-[221px] h-screen">
        {/* logo */}
        <div className="flex py-4 items-center justify-center">
          <img src={Logo} alt="Logo" />
          <h1 className="text-white font-bold text-xl ml-2">Khayangan</h1>
          <BiMenu className="text-white text-2xl ml-4 cursor-pointer" />
        </div>
        {/* menu */}
        <div className="ml-14 mt-8">
          <div className="flex justify-between mr-6 cursor-pointer hover:opacity-80">
            <p className="text-white font-semibold">OpenStack</p>
            <MdKeyboardArrowRight className="text-white text-2xl mb-8" />
          </div>
          <div className="flex justify-between mr-6 cursor-pointer hover:opacity-80">
            <p className="text-white font-semibold">Vm Ware</p>
            <MdKeyboardArrowRight className="text-white text-2xl mb-8" />
          </div>
          <div className="flex justify-between mr-6 cursor-pointer hover:opacity-80" onClick={() => setNavbarOpen(!navbarOpen)}>
            <p className={`text-white ${navbarOpen ? "font-extrabold" : "font-semibold"}`}>Data Center</p>
            {navbarOpen ? <MdKeyboardArrowDown className="text-white text-2xl mb-4" /> : <MdKeyboardArrowRight className="text-white text-2xl mb-8" />}
          </div>
          {/* dropdown datacenter */}
          <div className={`ml-6 ${navbarOpen ? "flex flex-col" : "hidden"}`}>
            <a href="#" className="text-white font-semibold text-sm cu hover:opacity-80">
              HyperVisor
            </a>
            <a href="#" className="text-white font-semibold text-sm my-3 hover:opacity-80">
              OpenStack
            </a>
            <a href="#" className="text-white font-semibold text-sm hover:opacity-80">
              VMware
            </a>
          </div>

          {/* setting */}
          <div className="flex justify-between mr-6 mt-12 cursor-pointer">
            <p className="text-white font-semibold">Setting</p>
            <AiOutlineSetting className="text-white text-lg mb-8" />
          </div>

          <h1></h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
