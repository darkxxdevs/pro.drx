"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav flex items-center px-10 py-5 justify-between">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            alt="icon"
            width={24}
            height={24}
          />

          <p className="nav-logo font-bold">
            Price <span className="text-red-800 font-bold">Drx</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icons) => (
            <Image
              src={icons.src}
              alt={icons.alt}
              height={28}
              width={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
