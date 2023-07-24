"use client";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  return (
    <Navbar bgColor="bg-[#141512]" textColor="text-white">
      <section className="relative flex justify-center items-center animate-fade">
        <div>
          <Image
            src="/images/homeImage.png"
            alt="art_home_page"
            width={550}
            height={550}
            className="animate-slidein w-full relative top-1/2 object-contain transform transition duration-1000"
          />
          <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <h1 className="text-5xl md:text-8xl lg:text-8xl  font-bold">
              Mehr Ekhlaspour
            </h1>
          </div>
          <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full mt-5">
            <button
              onClick={() => router.push("/myArtWorks")}
              className="text-sm sm:text-base md:text-xl lg:text-xl text-black bg-white p-2 rounded-sm hover:underline hover:shadow-white"
            >
              MY Artworks
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full h-[60vh] p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold">
          About Mehr
        </h1>
        <p className="text-center my-11 text-sm md:text-lg lg:text-xl">
          I recently got my bachelor's degree in{" "}
          <span className="text-[#e84606]">design</span> from Tehran University
          of Art.
          <br /> I enjoy designing user-centric products inspired by fine arts.
          <br /> I am also interested in designing products to help people with
          illnesses or natural disasters.
        </p>
      </section>
      <Footer />
    </Navbar>
  );
}

export default Home;
