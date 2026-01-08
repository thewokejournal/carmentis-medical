import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Carmentis Medical Centre"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-semibold text-white text-lg leading-tight">
                  Carmentis
                </span>
                <span className="text-xs text-neutral-300 leading-tight">
                  Medical Centre
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Quality medical care you can trust. Compassionate healthcare for
              individuals and families in Borrowdale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Corner Borrowdale Road & Lark Rise Road, Borrowdale, Harare
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+263772859799"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  +263 77 285 9799
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@carmentismedical.co.zw"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  info@carmentismedical.co.zw
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-white">Mon – Fri</div>
                  <div>07:00 – 20:00</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-white">Saturday</div>
                  <div>08:00 – 16:00</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-white">Sun & Holidays</div>
                  <div>08:00 – 13:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Carmentis Medical Centre. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


