import { AiOutlineLinkedin } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row lg:flex-row justify-between items-center px-20 py-4 bg-[#68696B]">
      <div className="flex flex-col justify-between items-baseline">
        <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold">
          It's all about creativity!
        </h1>
        <div className="my-2 flex flex-col md:flex-row items-baseline lg:flex-row space-x-1 text-xl">
          <p>My Email :</p>
          <p>Mehrdesign99@gmail.com</p>
        </div>
        <div className="flex justify-center items-center space-x-2 my-4">
          <Link
            target="blank"
            href="https://www.linkedin.com/in/mehrafarin-ekhlaspour-b77a14177"
            className="hover:text-[#D4450E]"
          >
            <AiOutlineLinkedin className="text-3xl" />
          </Link>
          <Link
            target="blank"
            href="https://dribbble.com/Mehr1378afarin"
            className="hover:text-[#D4450E]"
          >
            <BsDribbble className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <img src="/images/logo.png" alt="logo" width={120} height={120} />
      </div>
    </footer>
  );
};

export default Footer;
