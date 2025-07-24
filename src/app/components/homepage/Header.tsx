"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Set current path for active nav highlighting
    setCurrentPath(window.location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Нүүр", href: "/", icon: "🏠" },
    { name: "Бидний тухай", href: "/aboutus", icon: "👥" },
    { name: "Мэдээлэл", href: "/news", icon: "📰" },
    { name: "Бараа", href: "/product", icon: "🛍️" },
    { name: "Skin", href: "/skin", icon: "🎨" },
    { name: "Map", href: "/map", icon: "🗺️" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-gradient-to-r from-slate-900/95 via-orange-900/95 to-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-orange-500/30"
          : "bg-gradient-to-r from-slate-900/85 via-orange-900/85 to-slate-900/85 backdrop-blur-lg"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between h-20 lg:h-24 max-w-[1200px] mx-auto"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-4"
          >
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: 360,
                    boxShadow: [
                      "0 0 20px rgba(249, 115, 22, 0.5)",
                      "0 0 40px rgba(251, 191, 36, 0.8)",
                      "0 0 20px rgba(249, 115, 22, 0.5)",
                    ],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl shadow-xl flex items-center justify-center border-2 border-yellow-400/30"
                >
                  <span className="text-white font-black text-xl lg:text-2xl tracking-wider drop-shadow-lg">
                    CS
                  </span>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full border-2 border-white shadow-lg"
                />
              </div>
              <div className="hidden sm:block space-y-1">
                <motion.h1
                  variants={itemVariants}
                  className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-orange-300 tracking-wide"
                  style={{ fontFamily: "'Orbitron', 'Inter', sans-serif" }}
                >
                  CS2{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                    Mongolia
                  </span>
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-sm lg:text-base text-orange-200/90 font-medium tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  ⚡ Counter-Strike 2 Hub ⚡
                </motion.p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={containerVariants}
            className="hidden lg:flex items-center space-x-2 xl:space-x-4"
          >
            {navItems.map((item, index) => {
              const isActive = currentPath === item.href;
              return (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.08,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  whileTap={{ scale: 0.92 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`relative px-2 xl:px-4 py-3 text-white font-bold rounded-xl transition-all duration-300 group border-2 backdrop-blur-sm whitespace-nowrap flex items-center space-x-1 xl:space-x-2 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500/40 to-yellow-500/40 border-orange-400/60 shadow-lg shadow-orange-500/40"
                        : "border-transparent hover:bg-gradient-to-r hover:from-orange-500/25 hover:to-yellow-500/25 hover:shadow-lg hover:shadow-orange-500/30 hover:border-orange-400/40"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="text-sm xl:text-base">{item.icon}</span>
                    <span className="relative z-10 tracking-wide text-xs xl:text-sm font-semibold">
                      {item.name}
                    </span>
                    {!isActive && (
                      <>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{
                            scale: 1.05,
                            background:
                              "linear-gradient(90deg, rgba(251, 191, 36, 0.2), rgba(249, 115, 22, 0.2))",
                          }}
                        />
                        <motion.div
                          className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-4/5 transition-all duration-300 rounded-full"
                          style={{ transform: "translateX(-50%)" }}
                        />
                      </>
                    )}
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                        style={{ transform: "translateX(-50%)" }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center space-y-1.5 focus:outline-none bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg border border-orange-400/30 backdrop-blur-sm"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-white rounded-full shadow-sm"
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                scale: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-white rounded-full shadow-sm"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-white rounded-full shadow-sm"
            />
          </motion.button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden py-8 border-t border-orange-400/20 backdrop-blur-sm"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => {
                  const isActive = currentPath === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 px-6 py-4 text-white font-bold rounded-2xl transition-all duration-300 border-2 backdrop-blur-sm ${
                          isActive
                            ? "bg-gradient-to-r from-orange-500/40 to-yellow-500/40 border-orange-400/60 shadow-xl shadow-orange-500/40"
                            : "border-transparent hover:bg-gradient-to-r hover:from-orange-500/25 hover:to-yellow-500/25 hover:border-orange-400/40 hover:shadow-xl hover:shadow-orange-500/25"
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="tracking-wide text-lg font-semibold">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, 100, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-400/8 to-orange-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, -80, 0],
            rotate: [360, 180, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/8 to-red-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/6 to-orange-500/6 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-yellow-300/5 to-orange-400/5 rounded-full blur-3xl"
        />
      </div>
    </motion.header>
  );
};

export default Header;
