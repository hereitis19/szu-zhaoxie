"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "首页", href: "#hero" },
  { label: "协会简介", href: "#about" },
  { label: "部门介绍", href: "#departments" },
  { label: "往年活动", href: "#activities" },
  { label: "活动风采", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // 高亮当前区域
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => handleNavClick("#hero")}
        >
          <span className="text-[#A6192E]">深大招协</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`hover:text-[#A6192E] transition-colors ${
                activeSection === item.href.replace("#", "")
                  ? "text-[#A6192E] font-semibold"
                  : "text-[#222222]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#apply")}
            className="bg-[#A6192E] text-white px-5 py-2 rounded-full text-sm hover:bg-[#8C1326] transition-colors"
          >
            立即报名
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#222222]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-5 px-5 flex flex-col space-y-4 text-center">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-[#222222] hover:text-[#A6192E] py-2 border-b border-gray-100"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#apply")}
            className="bg-[#A6192E] text-white px-6 py-2 rounded-full hover:bg-[#8C1326] transition-colors"
          >
            立即报名
          </button>
        </div>
      )}
    </nav>
  );
}