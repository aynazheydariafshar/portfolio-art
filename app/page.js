'use client'
import Navbar from "@/components/layout/navbar";
import Menu from "@/components/menu";
import Image from "next/image";
import { useEffect, useState } from "react";

function Home() {
  const [menuShow, setMenuShow] = useState(false)
  const handleToggle = () => {
    setMenuShow((prev) => !prev);
  };
  useEffect(() => { setMenuShow(false) }, [])
  return (
    <>
      <header>
        <Navbar menuShow={menuShow} handleToggle={handleToggle} />
      </header>
      {menuShow ?
        (<main className="mt-5 flex justify-center items-center h-[70vh]">
          <Menu />
        </main>) :
        (<main className="relative flex justify-center items-center h-[70vh]">
          <div>
            <Image
              src="/images/homeImage.png"
              alt="art_home_page"
              width={550}
              height={550}
              className="w-full relative top-1/2 object-contain transform transition duration-1000"
            />
            <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
              <h1 className="text-5xl md:text-8xl lg:text-8xl  font-bold">Mehr Ekhlaspour</h1>
            </div>
            <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full mt-5">
              <button className="text-sm sm:text-base md:text-xl lg:text-xl text-black bg-white p-2 rounded-sm hover:underline hover:shadow-white">MY Artworks</button>
            </div>
          </div>
        </main>)
      }
    </>
  );
}

export default Home;
