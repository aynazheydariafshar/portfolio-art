import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

const Navbar = ({ menuShow, handleToggle }) => {
  
  return (
    <nav className="w-100 flex justify-between items-center mx-11 mt-7">
      <div className="flex-col justify-center items-center space-y-2">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="w-full relative object-contain xs:h-[10px] xs:w-[10px]"
        />
        <h4 className="text-center text-xl">
          MEHR
        </h4>
      </div>
      {menuShow ?  <TfiClose onClick={handleToggle} className="text-3xl lg:text-4xl md-text-4xl hover:cursor-pointer hover:text-[#D4450E]" />
        : <FiMenu onClick={handleToggle} className="text-3xl lg:text-4xl md-text-4xl hover:cursor-pointer hover:text-[#D4450E]" />
      }
    </nav>
  );
};

export default Navbar;
