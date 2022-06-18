import { Menu } from "@mui/material";
import React, { useState } from "react";
import { BsBell } from "react-icons/bs";
import Navbar from "../components/Navbar";

const Requeslist = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div className="h-[100vh] bg-black text-white flex">
      <Navbar />
      <div className=" w-full p-5">
        <div className="flex justify-end mb-3 cursor-pointer">
          <BsBell
            id="basic-button"
            aria-controls={anchorEl ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorEl ? "true" : undefined}
            onClick={handleClick}
            className="text-amber-300 font-medium text-2xl"
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={anchorEl}
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
          <table className="table table-auto w-full">
            <thead className=" bg-neutral-900">
              <tr className="">
                <th className="border-b">No</th>
                <th className="border-b">Name</th>
                <th className="border-b">Status</th>
                <th className="border-b">Type</th>
                <th className="border-b">Memory</th>
                <th className="border-b">Storage</th>
              </tr>
            </thead>
            <tbody className=" text-center">
              <tr className="border-b bg-zinc-800">
                <td className="border-b">1</td>
                <td className="border-b">1</td>
                <td className="border-b">1</td> <td className="border-b">1</td>
                <td className="border-b">1</td> <td className="border-b">1</td>
              </tr>
              <tr className="border-b bg-neutral-500">
                <td className="border-b">2</td>
                <td className="border-b">2</td>
                <td className="border-b">2</td> <td className="border-b">2</td>
                <td className="border-b">2</td> <td className="border-b">2</td>
              </tr>
              <tr className="border-b bg-zinc-800">
                <td className="border-b">1</td>
                <td className="border-b">1</td>
                <td className="border-b">1</td> <td className="border-b">1</td>
                <td className="border-b">1</td> <td className="border-b">1</td>
              </tr>
              <tr className="border-b bg-neutral-500">
                <td className="border-b">2</td>
                <td className="border-b">2</td>
                <td className="border-b">2</td> <td className="border-b">2</td>
                <td className="border-b">2</td> <td className="border-b">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Requeslist;
