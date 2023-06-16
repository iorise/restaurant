import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import Menu from "./menu";
import React, { useState } from "react";
import Contact from "./contact";
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
          className="logo cursor-pointer"
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
            <h1 className="menu tracking-wider cursor-pointer">Menu</h1>
          </a>
        </div>
        <div className="about my-auto">
          <a
            href="#"
            onClick={handleLinkClick("contact")}
            className={activePage === "contact" ? "active" : ""}
          >
            <h1 className="about tracking-wider cursor-pointer">Contact</h1>
          </a>
        </div>
      </nav>
      {activePage === "home" && <HomePage />}
      {activePage === "menu" && <Menu />}
      {activePage === "contact" && <Contact />}
      <div></div>
    </div>
  );
};

export default Navbar;
