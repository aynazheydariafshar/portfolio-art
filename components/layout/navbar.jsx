import Image from "next/image";
import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-100 flex justify-between items-center mx-11 mt-7">
      <div className="flex-col justify-center items-center space-y-2">
        <Image
          sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
          src="/images/logo.png"
          alt="logo"
          width={70}
          height={70}
        />
        <h4 className="font-bold text-center text-xl">
          MEHR
        </h4>
      </div>
      <FiMenu className="text-3xl" />
    </nav>
  );
};

export default Navbar;
