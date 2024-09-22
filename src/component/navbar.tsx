"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(menu == true ? false : true);
  };

  return (
    <>
      <nav className="p-5 flex items-center md:justify-evenly gap-16 justify-between w-[100%] mx-auto border-b-2">
        <Link href="/" className="font-bold text-xl">
          blogs
        </Link>
        <div className="hidden md:flex items-center gap-14">
          <Link href="/" className="hover:text-gray-500">
            blog
          </Link>
          <Link href="/" className="hover:text-gray-500">
            content
          </Link>
          <Link href="/" className="hover:text-gray-500">
            About Us
          </Link>
          <Link href="/" className="hover:text-gray-500">
            All blogs
          </Link>
          <input
            type="search"
            placeholder="What are you looking for?"
            className="w-80"
          />
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <Image src="/app.png" alt="Menu" width={30} height={30} />
        </button>
      </nav>
      {/*mobile navbar*/}
      {menu && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-8 p-5 md:hidden">
          <button className="self-end mb-5" onClick={toggleMenu}>
            <Image src="/close.png" alt="Close Menu" width={50} height={50} />
          </button>
          <Link
            href="/"
            className="text-xl hover:text-gray-500"
            onClick={toggleMenu}
          >
            blogs
          </Link>
          <Link
            href="/"
            className="text-xl hover:text-gray-500"
            onClick={toggleMenu}
          >
            content
          </Link>
          <Link
            href="/"
            className="text-xl hover:text-gray-500"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-xl hover:text-gray-500"
            onClick={toggleMenu}
          >
            All blogs
          </Link>
          <input
            type="search"
            placeholder="What are you looking for?"
            className="w-72"
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
