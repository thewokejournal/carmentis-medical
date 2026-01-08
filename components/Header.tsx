"use client";

import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Carmentis Medical Centre Logo"
            width={48}
            height={48}
            className="h-12 w-12 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-neutral-900">Carmentis</span>
            <span className="text-xs text-neutral-500 -mt-1">Medical Centre</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              isActive("/")
                ? "bg-primary-50 text-primary-700"
                : "text-neutral-600 hover:text-primary-600 hover:bg-primary-50/50"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              isActive("/services")
                ? "bg-primary-50 text-primary-700"
                : "text-neutral-600 hover:text-primary-600 hover:bg-primary-50/50"
            }`}
          >
            Services
          </Link>
          <Link
            href="/doctors"
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              isActive("/doctors")
                ? "bg-primary-50 text-primary-700"
                : "text-neutral-600 hover:text-primary-600 hover:bg-primary-50/50"
            }`}
          >
            Doctors
          </Link>
          <Link
            href="/about"
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              isActive("/about")
                ? "bg-primary-50 text-primary-700"
                : "text-neutral-600 hover:text-primary-600 hover:bg-primary-50/50"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              isActive("/contact")
                ? "bg-primary-50 text-primary-700"
                : "text-neutral-600 hover:text-primary-600 hover:bg-primary-50/50"
            }`}
          >
            Contact
          </Link>
          
          <a
            href="tel:+263772859799"
            className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
          >
            <Phone size={18} />
            <span className="hidden lg:inline">Call Us</span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-neutral-600 focus:outline-none p-2 hover:bg-primary-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 shadow-lg">
          <div className="flex flex-col px-4 py-6 space-y-2">
            <Link
              href="/"
              className={`px-4 py-3 rounded-xl font-medium transition-all ${
                isActive("/")
                  ? "bg-primary-50 text-primary-700"
                  : "text-neutral-700 hover:bg-neutral-50"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`px-4 py-3 rounded-xl font-medium transition-all ${
                isActive("/services")
                  ? "bg-primary-50 text-primary-700"
                  : "text-neutral-700 hover:bg-neutral-50"
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/doctors"
              className={`px-4 py-3 rounded-xl font-medium transition-all ${
                isActive("/doctors")
                  ? "bg-primary-50 text-primary-700"
                  : "text-neutral-700 hover:bg-neutral-50"
              }`}
              onClick={toggleMenu}
            >
              Doctors
            </Link>
            <Link
              href="/about"
              className={`px-4 py-3 rounded-xl font-medium transition-all ${
                isActive("/about")
                  ? "bg-primary-50 text-primary-700"
                  : "text-neutral-700 hover:bg-neutral-50"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-3 rounded-xl font-medium transition-all ${
                isActive("/contact")
                  ? "bg-primary-50 text-primary-700"
                  : "text-neutral-700 hover:bg-neutral-50"
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <a
              href="tel:+263772859799"
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-all"
              onClick={toggleMenu}
            >
              <Phone size={20} />
              Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
