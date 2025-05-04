import { orbitron, poppins } from "@/utils/fonts";

export default function Navigation() {
  return (
    <div className="w-screen lg:h-[10vh] bg-transparent flex justify-between px-[100px] items-center">
      <span
        className={`${orbitron.className} cursor-pointer opacity-50 hover:opacity-100 transition duration-300`}
      >
        0xLabs
      </span>
      <div className={`${poppins.className} flex gap-10`}>
        <span
          className={`cursor-pointer text-amber-50 opacity-50 hover:opacity-100 transition duration-300`}
        >
          Services
        </span>

        <span
          className={`cursor-pointer text-amber-50 opacity-50 hover:opacity-100 transition duration-300`}
        >
          Team
        </span>
        <span
          className={`cursor-pointer text-amber-50 opacity-50 hover:opacity-100 transition duration-300`}
        >
          Contact
        </span>
      </div>
    </div>
  );
}
