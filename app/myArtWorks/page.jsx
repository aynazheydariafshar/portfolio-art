import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import Link from "next/link";

const MyArtWorks = () => {
  return (
    <Navbar bgColor="bg-[#68696B]" textColor="text-white">
      <section className="h-[77.5vh]">
        <div className="text-center mt-11 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            As a Visual Designer I DO
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center space-x-44 items-center">
          <div className="flex flex-col justify-center items-center space-y-3">
            <Image
              src="/images/artWorksIcon/diceCircle.png"
              width={150}
              height={150}
              alt="logo"
            />
            <Link
              href="/"
              className="text-lg md:text-xl lg:text-2xl hover:underline hover:text-[#FED013]"
            >
              UX/UI Design{" "}
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <Image
              src="/images/artWorksIcon/geometric.png"
              width={150}
              height={150}
              alt="logo"
            />
            <Link href="/" className="text-lg md:text-xl lg:text-2xl">
              Industrial Design
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <Image
              src="/images/artWorksIcon/d20.png"
              width={150}
              height={150}
              alt="logo"
            />
            <Link href="/" className="text-lg md:text-xl lg:text-2xl">
              Graphic Design{" "}
            </Link>
          </div>
        </div>
      </section>
    </Navbar>
  );
};

export default MyArtWorks;
