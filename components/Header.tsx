import Image from "next/image";
import Link from "next/link";
import CSILogo from "../public/CSI Logo.jpeg";
import { MenuIcon, SearchIcon, ShoppingBagIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="flex justify-between pt-4 max-w-7xl mx-auto text-zinc-700">
      <div className="flex space-x-5 items-center">
        <Link href="/">
          <div className="cursor-pointer hover:scale-105 transition-transform ease-in-out duration-200">
            <h1 className="font-serif font-bold text-xl text-zinc-700 px-5 border-x-2">Cast Stone International</h1>
          </div>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-1 cursor-pointer text-xl">
          <h3 className="hover:scale-105 transition-transform ease-in-out duration-200 px-2 py-1 rounded-md hover:text-white hover:bg-zinc-700">
            About
          </h3>
          <h3 className="hover:scale-105 transition-transform ease-in-out duration-200 px-2 py-1 rounded-md hover:text-white hover:bg-zinc-700">
            Contact
          </h3>
        </div>
      </div>
      <MenuIcon className="sm:hidden w-8 cursor-pointer mx-5" />
      <div className="hidden sm:inline-flex items-center space-x-5 relative right-0 px-5">
        <SearchIcon className="text-white bg-zinc-700 px-1 py-1 rounded-full hover:scale-105 h-8 w-20 transition-transform ease-in-out duration-200 cursor-pointer" />
        <div className="border px-2 py-1 rounded-full border-zinc-700 cursor-pointer flex space-x-1 justify-center items-center hover:scale-105 hover:bg-zinc-700 hover:text-white hover:transition-all transition-transform ease-in-out duration-200">
          <ShoppingBagIcon className="w-6" />
          <h3>Check Out</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
