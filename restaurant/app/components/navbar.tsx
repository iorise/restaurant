import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import Menu from "./menu";
import React, { useState } from "react";
import About from "./about";
import HomePage from "./home";

const myFont = localFont({
  src: "../assets/fonts/pizzahut-font.ttf",
  display: "swap",
});

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [activePage, setActivePage] = useState("home");

  const handleLinkClick =
    (page: string) =>
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      setActivePage(page);
    };

  return (
    <div className={myFont.className}>
      <nav className="navbar w-full pr-16 pl-12 absolute mt-16 flex justify-between text-7xl text-main-fourth" style={{ zIndex: 999 }}>
        <a href="#"
            onClick={handleLinkClick("home")}
            className={activePage === "home" ? "active" : ""}>
              <Image
          className="logo animation-none hover:animate-pulse bg-contain cursor-pointer"
          src="/images/logo.png"
          alt="logo"
          width={400}
          height={80}
        />
            </a>
        
        <div className="menu my-auto">
          <a
            href="#"
            onClick={handleLinkClick("menu")}
            className={activePage === "menu" ? "active" : ""}
          >
            <h1 className="tracking-wider cursor-pointer">Menu</h1>
          </a>
        </div>
        <div className="about my-auto">
          <a
            href="#"
            onClick={handleLinkClick("about")}
            className={activePage === "about" ? "active" : ""}
          >
            <h1 className="tracking-wider cursor-pointer">About</h1>
          </a>
        </div>
      </nav>
      {activePage === "home" && <HomePage />}
      {activePage === "menu" && <Menu />}
      {activePage === "about" && <About />}
      <div></div>
    </div>
  );
};

export default Navbar;
