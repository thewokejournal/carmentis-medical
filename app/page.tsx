import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import DoctorCard from "@/components/DoctorCard";
import {
  Heart,
  Users,
  Clock,
  Shield,
  Stethoscope,
  Baby,
  Activity,
  Syringe,
  Phone,
  MapPin,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary-50 via-white to-primary-50/30">
      {/* Hero Section - Denty Inspired */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-neutral-700">
                  5.0 (4824 Reviews)
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 leading-tight">
                Quality Medical Care{" "}
                <span className="text-primary-600 font-normal">You Can Trust</span>
              </h1>

              <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
                Compassionate healthcare for individuals and families in Borrowdale. 
                Experience advanced medical solutions with a gentle touch, tailored for your comfort.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={20} />
                  Book Appointment
                </a>
                <a
                  href="tel:+263772859799"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-600 font-medium rounded-full hover:bg-primary-50 transition-all shadow-md border-2 border-primary-100"
                >
                  <Phone size={20} />
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <Image
                  src="/hero1.avif"
                  alt="Quality Healthcare"
                  fill
                  className="object-cover"
          priority
        />
              </div>
              
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Extended Hours</div>
                    <div className="text-sm text-neutral-600">Open 7 days a week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Minimal */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Experienced Care
              </h3>
              <p className="text-neutral-600">
                Qualified medical professionals dedicated to your health
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                <Users className="text-teal-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Family Focused
              </h3>
              <p className="text-neutral-600">
                Healthcare for every member of your family
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Extended Hours
              </h3>
              <p className="text-neutral-600">
                Open 7 days a week, including evenings and weekends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Card Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Comprehensive Healthcare{" "}
              <span className="font-normal text-primary-600">For Your Family</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              From routine check-ups to specialized care, we're here for you at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Stethoscope className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">General Consultations</h3>
              <p className="text-sm text-neutral-600">Expert diagnosis and treatment</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Users className="text-teal-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Family Medicine</h3>
              <p className="text-sm text-neutral-600">Care for all ages</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Baby className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Child Health</h3>
              <p className="text-sm text-neutral-600">Pediatric care & immunizations</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Heart className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Women's Health</h3>
              <p className="text-sm text-neutral-600">Specialized women's care</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Activity className="text-teal-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Men's Health</h3>
              <p className="text-sm text-neutral-600">Focused men's wellness</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Shield className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Chronic Disease</h3>
              <p className="text-sm text-neutral-600">Ongoing condition management</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Activity className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Health Screenings</h3>
              <p className="text-sm text-neutral-600">Preventative health checks</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Syringe className="text-teal-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Minor Procedures</h3>
              <p className="text-sm text-neutral-600">Safe in-clinic procedures</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Section - Denty Style */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-teal-600 font-medium text-sm uppercase tracking-wide">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Meet Our{" "}
              <span className="font-normal text-primary-600">Expert Doctors</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Compassionate professionals committed to your wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/doctor1.jpg"
                  alt="Dr. Tendai Moyo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    General Practitioner
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  Dr. Tendai Moyo
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Experienced GP focused on compassionate, patient-centered family care with years of dedicated service.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/doctor2.jpg"
                  alt="Dr. Ruvimbo Chikore"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    Family Medicine
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  Dr. Ruvimbo Chikore
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Specializes in preventative healthcare, women's health, and long-term wellness for all family members.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all shadow-md border-2 border-primary-100"
            >
              Meet Our Full Team
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Contact - Clean Design */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-green-600 font-medium text-sm uppercase tracking-wide">
                Visit Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Conveniently Located in{" "}
              <span className="font-normal text-primary-600">Borrowdale</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-600 font-medium">Monday – Friday</span>
                    <span className="text-neutral-900 font-semibold">07:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-600 font-medium">Saturday</span>
                    <span className="text-neutral-900 font-semibold">08:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-600 font-medium">Sun & Holidays</span>
                    <span className="text-neutral-900 font-semibold">08:00 – 13:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Contact Information
                  </h3>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:+263772859799"
                    className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <Phone size={20} className="text-primary-600" />
                    <span className="font-medium">+263 77 285 9799</span>
                  </a>
                  <a
                    href="https://wa.me/263772859799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-700 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle size={20} className="text-green-600" />
                    <span className="font-medium">WhatsApp Us</span>
                  </a>
                  <div className="flex items-start gap-3 text-neutral-700">
                    <MapPin size={20} className="text-primary-600 mt-1" />
                    <span>Corner Borrowdale Rd & Lark Rise Rd, Borrowdale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-neutral-100 rounded-3xl overflow-hidden shadow-lg h-[500px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={64} className="mx-auto text-neutral-400 mb-4" />
                <p className="text-neutral-600 font-medium text-lg mb-4">
                  Corner Borrowdale Road & Lark Rise Road
                </p>
                <a
                  href="https://maps.google.com/?q=Corner+Borrowdale+Road+and+Lark+Rise+Road+Borrowdale+Harare"
            target="_blank"
            rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                >
                  Open in Google Maps
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Modern Design */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Book Your{" "}
            <span className="font-normal">Appointment?</span>
          </h2>
          <p className="text-xl text-primary-50 mb-10 max-w-2xl mx-auto">
            Get in touch today and let us take care of your health and wellbeing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-green-50 transition-all shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </a>
            <a
              href="tel:+263772859799"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-full hover:bg-white/10 transition-all border-2 border-white"
            >
              <Phone size={20} />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
