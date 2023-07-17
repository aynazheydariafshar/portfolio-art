import Navbar from "@/components/layout/navbar";
import Image from "next/image";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative flex justify-center">
        <div>
          <Image
            src="/images/homeImage.png"
            alt="art_home_page"
            width={550}
            height={550}
            className="w-full relative object-contain"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full p-4 sm:text-lg md:text-xl lg:text-2xl">
          <h1 className="text-[100px]">Mehr Ekhlaspour</h1>
        </div>
      </main>
    </>
  );
}

export default Home;
