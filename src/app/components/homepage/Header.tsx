"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl sticky top-0 z-50 backdrop-blur-sm transition-all duration-500 ${
        scrolled ? "py-2 bg-opacity-95 shadow-3xl" : "py-4 bg-opacity-90"
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"
          style={{
            top: "20%",
            left: "10%",
            animationDelay: "0s",
            animationDuration: "3s",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-40"
          style={{
            top: "60%",
            left: "80%",
            animationDelay: "1s",
            animationDuration: "4s",
          }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50"
          style={{
            top: "40%",
            left: "90%",
            animationDelay: "2s",
            animationDuration: "2.5s",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-all duration-500 relative group flex items-center space-x-3"
          >
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">C</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">2</span>
              </div>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="relative z-10 text-2xl leading-none">
                Counter-Strike
              </span>
              <span className="relative z-10 text-lg text-orange-300 leading-none">
                Gaming Hub
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 blur-lg scale-0 group-hover:scale-100 transition-all duration-500 rounded-lg"></div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="relative text-white hover:text-orange-400 font-medium transition-all duration-500 group transform hover:-translate-y-1"
            >
              <span className="relative z-10">Нүүр хуудас</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-500"></span>
              <div className="absolute inset-0 bg-orange-400/10 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg blur-sm"></div>
            </Link>
            <Link
              href="/aboutus"
              className="relative text-white hover:text-orange-400 font-medium transition-all duration-500 group transform hover:-translate-y-1"
            >
              <span className="relative z-10">Бидний тухай</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-500"></span>
              <div className="absolute inset-0 bg-orange-400/10 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg blur-sm"></div>
            </Link>
            <Link
              href="/news"
              className="relative text-white hover:text-orange-400 font-medium transition-all duration-500 group transform hover:-translate-y-1"
            >
              <span className="relative z-10">Мэдээ мэдээлэл</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-500"></span>
              <div className="absolute inset-0 bg-orange-400/10 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg blur-sm"></div>
            </Link>
            <Link
              href="/product"
              className="relative text-white hover:text-orange-400 font-medium transition-all duration-500 group transform hover:-translate-y-1"
            >
              <span className="relative z-10">Бараа</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-500"></span>
              <div className="absolute inset-0 bg-orange-400/10 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg blur-sm"></div>
            </Link>
            <Link
              href="/skin"
              className="relative text-white hover:text-orange-400 font-medium transition-all duration-500 group transform hover:-translate-y-1"
            >
              <span className="relative z-10">Skin</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-500"></span>
              <div className="absolute inset-0 bg-orange-400/10 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg blur-sm"></div>
            </Link>
            <Link
              href="/map"
              className="relative text-white hover:text-orange-400 font-medium transition-all duration-500 group transform hover:-translate-y-1"
            >
              <span className="relative z-10">Map</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-500"></span>
              <div className="absolute inset-0 bg-orange-400/10 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg blur-sm"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-orange-400 focus:outline-none transition-all duration-500 relative group p-2 rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg blur-sm"></div>
            <div className="w-6 h-6 flex flex-col justify-center items-center relative z-10">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-500 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-500 ${
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-500 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            {[
              { href: "/", label: "Нүүр хуудас" },
              { href: "/aboutus", label: "Бидний тухай" },
              { href: "/news", label: "Мэдээ мэдээлэл" },
              { href: "/product", label: "Бараа" },
              { href: "/skin", label: "Skin" },
              { href: "/map", label: "Map" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-gradient-to-r hover:from-white/10 hover:to-orange-500/10 rounded-lg transition-all duration-500 transform hover:scale-105 hover:translate-x-2 relative group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-red-500 scale-y-0 group-hover:scale-y-100 transition-all duration-300 rounded-r"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60"></div>
    </header>
  );
};

export default Header;
