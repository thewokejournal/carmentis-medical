import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <Image
                src="/logo.png"
                alt="Carmentis Medical Centre Logo"
                width={56}
                height={56}
                className="h-14 w-14 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-white">Carmentis</span>
                <span className="text-sm text-neutral-400 -mt-1">Medical Centre</span>
              </div>
            </Link>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6 max-w-md">
              Compassionate healthcare for individuals and families in Borrowdale. 
              Your health and wellbeing are our top priority.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+263772859799"
                  className="text-neutral-300 hover:text-white transition-colors flex items-start gap-3 group"
                >
                  <Phone size={20} className="text-primary-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>+263 77 285 9799</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@carmentismedical.co.zw"
                  className="text-neutral-300 hover:text-white transition-colors flex items-start gap-3 group"
                >
                  <Mail size={20} className="text-primary-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>info@carmentismedical.co.zw</span>
                </a>
              </li>
              <li>
                <div className="text-neutral-300 flex items-start gap-3">
                  <MapPin size={20} className="text-primary-500 mt-0.5" />
                  <span>
                    Corner Borrowdale Road & Lark Rise Road, Borrowdale, Harare
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Carmentis Medical Centre. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
