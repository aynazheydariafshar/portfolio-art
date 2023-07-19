import Navbar from "@/components/layout/navbar";
import Image from "next/image";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative flex mt-5 justify-center items-center m-4">
        <div>
          <Image
            src="/images/homeImage.png"
            alt="art_home_page"
            width={550}
            height={550}
            className="w-full relative top-1/2 object-contain"
          />
        </div>
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h1 class="text-5xl md:text-8xl lg:text-8xl  font-bold">Mehr Ekhlaspour</h1>
        </div>
        <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full mt-5">
          <button className="text-sm sm:text-base md:text-xl lg:text-xl text-black bg-white p-2 rounded-sm hover:underline hover:shadow-white">MY Artworks</button>
        </div>
      </main>
    </>
  );
}

export default Home;
