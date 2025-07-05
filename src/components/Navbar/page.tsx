"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(isScrolled);
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

  return (
    <>
      <nav
        className={`w-full  ${
          isScrolled === true ? "bg-dark" : "bg-transparent"
        } fixed  text-white z-50 flex px-20 items-center justify-center transition-all ${
          isScrolled ? "py-8 " : "py-6"
        } ease-in-out duration-150`}
      >
        <div className="w-full max-w-7xl flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold">
              Laundry<span className="text-primary">App.</span>
            </h1>
          </div>
          <div>
            <ul className="flex justify-between gap-9 font-medium text-lg">
              <li>
                <Link href={"/"}>Beranda</Link>
              </li>
              <li>
                <Link href={"/about"}>Layanan</Link>
              </li>
              <li>
                <Link href={"/about"}>Harga</Link>
              </li>
              <li>
                <Link href={"/contact"}>Hubungi Kami</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
