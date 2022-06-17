import { Menu } from "@mui/material";
import React from "react";
import { BsBell } from "react-icons/bs";
import Navbar from "../components/Navbar";
const Requeslist = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="h-[100vh] bg-black text-white flex">
      <Navbar />
      <div className=" w-full p-5">
        <div className="flex justify-end mb-3 cursor-pointer">
          <BsBell id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} className=" font-medium text-2xl" />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div className=" w-52">
              <p className="p-2">Hypervisor Available</p>
              <p className="p-2">Hypervisor Failed</p>
            </div>{" "}
          </Menu>
        </div>
        <div className="  text-white mt-16">
          <table className=" table table-auto  bg-[#454343] w-full">
            <thead className=" bg-[#454343] ">
              <tr className="">
                <th className="border-2">No</th>
                <th className="border-2">Name</th>
                <th className="border-2">Status</th>
                <th className="border-2">Type</th>
                <th className="border-2">Memory</th>
                <th className="border-2">Storage</th>
              </tr>
            </thead>
            <tbody className=" text-center">
              <tr className="border-2">
                <td className="border-2">1</td>
                <td className="border-2">1</td> <td className="border-2">1</td> <td className="border-2">1</td> <td className="border-2">1</td> <td className="border-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Requeslist;
