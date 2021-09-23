import React from "react";
import CicadaLogo from "../images/cicada.png";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={CicadaLogo} alt="Cicada Logo" className="w-12 h-12" />
        <span className="font-semibold text-xl tracking-tight pl-6">
          นิทรรศการนพลักษณ์
        </span>
      </div>

      {/* Hidden menu for mobile */}
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Pages */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-glow">
          <a
            href="#"
            className="transition duration-300 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
          >
            ค้นหาตัวเอง
          </a>
          <a
            href="#"
            className="transition duration-300 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
          >
            นพลักษณ์
          </a>
          <a
            href="#"
            className="transition duration-300 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white"
          >
            แก้ไขปัญหาด้วยนพลักษณ์
          </a>
        </div>
      </div>
    </nav>
  );
}
