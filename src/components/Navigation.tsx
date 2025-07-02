import { orbitron, poppins } from "@/utils/fonts";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-screen lg:h-[10vh] bg-transparent flex justify-between px-[100px] items-center">
      <span
        className={`${orbitron.className} cursor-pointer opacity-50 hover:opacity-100 transition duration-300`}
      >
        <Link href="/">0xLabs-Org</Link>
      </span>
      <div className={`${poppins.className} flex gap-10`}>
        <span
          className={`cursor-pointer text-amber-50 opacity-50 hover:opacity-100 transition duration-300`}
        >
          <Link href="/about">About</Link>
        </span>

        <span
          className={`cursor-pointer text-amber-50 opacity-50 hover:opacity-100 transition duration-300`}
        >
          <Link href="/team">Team</Link>
        </span>
        <span
          className={`cursor-pointer text-amber-50 opacity-50 hover:opacity-100 transition duration-300`}
        >
          <Link href="/contact">Contact</Link>
        </span>
      </div>
    </nav>
  );
}
