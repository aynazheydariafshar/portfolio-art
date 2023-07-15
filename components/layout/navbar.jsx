import Image from "next/image";
import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-100 flex justify-between items-center p-11">
      <div className="flex-col justify-center items-center">
        <img
          className="m-1"
          src="/images/logo.png"
          alt="logo"
          width={70}
          height={70}
        />
        <h4 className="font-bold m-1 text-center">MEHR</h4>
      </div>
      <FiMenu className="text-[35px]" />
    </nav>
  );
};

export default Navbar;
