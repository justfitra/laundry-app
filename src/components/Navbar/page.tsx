"use client";
import { useHash } from "@/hooks/useHash";
import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSection, setIsSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(true);
  const hash = useHash();

  useEffect(() => {
    const section = hash.replace("#", "");
    setIsSection(section);
    console.log(section);

    if (section) scrollToSection(section);
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else if (window.scrollY < 50) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`w-full  ${
          isScrolled === true ? "bg-dark" : "bg-transparent"
        } fixed  text-white z-50 flex px-8 md:px-20 items-center justify-center transition-all ${
          isScrolled ? "py-8 " : "py-6"
        } ease-in-out duration-150`}
      >
        <div className="w-full max-w-7xl flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Laundry<span className="text-primary">App.</span>
            </h1>
          </div>
          <div>
            <ul className=" justify-between gap-9 font-medium text-lg hidden lg:flex">
              <button
                className={`${
                  isSection === "home"
                    ? "text-primary border-b-2 border-primary"
                    : ""
                } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
                onClick={() => scrollToSection("home")}
              >
                Beranda
              </button>
              <button
                className={`${
                  isSection === "services"
                    ? "text-primary border-b-2 border-primary"
                    : ""
                } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
                onClick={() => scrollToSection("services")}
              >
                Layanan
              </button>
              <button
                className={`${
                  isSection === "worksystem"
                    ? "text-primary border-b-2 border-primary"
                    : ""
                } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
                onClick={() => scrollToSection("worksystem")}
              >
                Cara Kerja
              </button>
              <button
                className={`${
                  isSection === "pircing"
                    ? "text-primary border-b-2 border-primary"
                    : ""
                } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
                onClick={() => scrollToSection("pircing")}
              >
                Harga
              </button>
              <button
                className={`${
                  isSection === "contact"
                    ? "text-primary border-b-2 border-primary"
                    : ""
                } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
                onClick={() => scrollToSection("contact")}
              >
                Hubungi Kami
              </button>
            </ul>
          </div>
          <div className="hidden lg:flex hover:text-primary duration-150 ease-in-out transition-all">
            <Link
              href={"https://wa.me/085945868265"}
              className="flex items-center gap-3 "
            >
              <IoLogoWhatsapp className="text-3xl " />
              <h2 className="font-semibold">WhatsApp</h2>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <div
              className={`flex lg:hidden ${
                isScrolled === true ? "text-light" : "text-dark"
              }`}
            >
              <button
                onClick={() => {
                  handleClick();
                }}
              >
                {isOpen ? <FaBars /> : <IoClose />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* hamburger */}
      <div
        className={`${
          isOpen ? " -translate-x-full" : " translate-x-0"
        } w-3/4 h-screen bg-light z-[60] fixed top-0 left-0 flex transition-all ease-in-out  shadow-2xl overflow-hidden`}
      >
        <button
          onClick={() => {
            handleClick();
          }}
          className="absolute right-7 top-7 text-2xl"
        >
          <IoClose className="text-dark" />
        </button>
        <div className="w-full flex justify-center">
          <ul className=" w-full gap-9 font-medium text-lg flex flex-col py-14 px-14  text-dark items-start">
            <button
              className={`${
                isSection === "home"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
              onClick={() => scrollToSection("home")}
            >
              Beranda
            </button>
            <button
              className={`${
                isSection === "services"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
              onClick={() => scrollToSection("services")}
            >
              Layanan
            </button>
            <button
              className={`${
                isSection === "worksystem"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
              onClick={() => scrollToSection("worksystem")}
            >
              Cara Kerja
            </button>
            <button
              className={`${
                isSection === "pircing"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
              onClick={() => scrollToSection("pircing")}
            >
              Harga
            </button>
            <button
              className={`${
                isSection === "contact"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              } font-semibold hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
              onClick={() => scrollToSection("contact")}
            >
              Hubungi Kami
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
