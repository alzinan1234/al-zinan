"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[#fff] transition ease transform duration-300`;

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight / 6) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        setActiveSection(section.getAttribute("id"));
      }
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId); // Set the active section on click
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full z-[10000000]">
        <nav
          className={`${
            isFixed ? "fixed scrolled" : ""
          } w-full z-[10000000] fixed top-0 flex justify-between items-center bg-transparent py-2`}
        >
          <div className="maxWidth mx-auto w-full flex justify-between items-center px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="logo-bg flex items-center font-bold text-3xl text-amber-500 hover:text-green-500 transition-all duration-300">
                AL-ZINAN
              </div>
            </Link>

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex space-x-6">
              {[
                "Home",
                "About",
                "Experience",
                "Education",
                "Expertise",
                "Project",
                "Blog",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover-menu text-[15px] font-[600] uppercase text-white hover:text-amber-500 duration-200 ${
                    activeSection === item.toLowerCase() ? "text-amber-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Hamburger Icon (Mobile and Tablet) */}
            <div className="lg:hidden">
              <button
                className="flex flex-col justify-center items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-3/4 bg-[#020312] p-6 transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-white text-[18px] font-[600]">Al-Zinan</h1>
              <button onClick={() => setIsOpen(false)}>
                <FaWindowClose className="text-white text-2xl" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-6">
              {[
                "Home",
                "Experience",
                "Project",
                "About",
                "Blog",
                "Education",
                "Expertise",
              ].map((item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  <button
                    className={`text-white text-[15px] font-[600] uppercase hover:text-amber-500 duration-200 ${
                      activeSection === item.toLowerCase()
                        ? "text-amber-500"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
