import { useRouter } from "next/navigation";

export default function Menu({ handleToggle }) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <button
        type="button"
        onClick={() => {
          router.push("/");
          handleToggle();
        }}
        className="focus:outline-none text-5xl md:text-6xl lg:text-7xl  font-bold hover:underline hover:text-[#FED013]"
      >
        Home
      </button>
      <button
        type="button"
        onClick={() => router.push("/")}
        className="focus:outline-none text-5xl md:text-6xl lg:text-7xl  font-bold hover:underline hover:text-[#FED013]"
      >
        Artworks
      </button>
    </div>
  );
}
