"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import Menu from "@/components/menu";

const Navbar = ({ children }) => {
  const [menuShow, setMenuShow] = useState(false);
  const handleToggle = () => {
    setMenuShow((prev) => !prev);
  };
  return (
    <>
      <header>
        <nav className="w-100 flex justify-between items-center mx-11 mt-7">
          <div className="flex-col justify-center items-center space-y-2">
            <img
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="relative"
            />
            <h4 className="text-center text-xl">MEHR</h4>
          </div>
          {menuShow ? (
            <TfiClose
              onClick={handleToggle}
              className="text-3xl lg:text-4xl md-text-4xl hover:cursor-pointer hover:text-[#D4450E]"
            />
          ) : (
            <FiMenu
              onClick={handleToggle}
              className="text-3xl lg:text-4xl md-text-4xl hover:cursor-pointer hover:text-[#D4450E]"
            />
          )}
        </nav>
      </header>
      {menuShow ? (
        <section className="mt-5 flex justify-center items-center h-[70vh] menu-animation">
          <Menu handleToggle={handleToggle} />
        </section>
      ) : (
        <main className="animate-fade">{children}</main>
      )}
    </>
  );
};

export default Navbar;
