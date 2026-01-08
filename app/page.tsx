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
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Quality Medical Care You Can Trust
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
              Compassionate healthcare for individuals and families in Borrowdale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20services%20at%20Carmentis%20Medical%20Centre."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <a
                href="tel:+263772859799"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
              >
                <Phone size={20} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-16 text-neutral-50" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="currentColor">
            <path d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,42.7C1120,43,1280,53,1360,58.7L1440,64L1440,74L1360,74C1280,74,1120,74,960,74C800,74,640,74,480,74C320,74,160,74,80,74L0,74Z"></path>
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Shield className="text-primary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                Experienced Care
              </h3>
              <p className="text-neutral-600">
                Qualified medical professionals dedicated to your health
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <Users className="text-teal-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                Family Focused
              </h3>
              <p className="text-neutral-600">
                Healthcare for every member of your family
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Clock className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                Extended Hours
              </h3>
              <p className="text-neutral-600">
                Open 7 days a week, including evenings and weekends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive healthcare services for you and your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <ServiceCard
              icon={<Stethoscope size={24} />}
              title="General Consultations"
              description="Expert diagnosis and treatment for common health concerns"
            />
            <ServiceCard
              icon={<Users size={24} />}
              title="Family Medicine"
              description="Comprehensive care for patients of all ages"
            />
            <ServiceCard
              icon={<Baby size={24} />}
              title="Child Health"
              description="Pediatric care and immunization services"
            />
            <ServiceCard
              icon={<Heart size={24} />}
              title="Women's Health"
              description="Specialized care for women's health needs"
            />
            <ServiceCard
              icon={<Activity size={24} />}
              title="Men's Health"
              description="Focused healthcare for men's wellness"
            />
            <ServiceCard
              icon={<Shield size={24} />}
              title="Chronic Disease"
              description="Ongoing management of chronic conditions"
            />
            <ServiceCard
              icon={<Activity size={24} />}
              title="Health Screenings"
              description="Preventative health checks and assessments"
            />
            <ServiceCard
              icon={<Syringe size={24} />}
              title="Minor Procedures"
              description="Safe in-clinic minor medical procedures"
            />
          </div>

          <div className="text-center">
            <Button href="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Compassionate professionals committed to your wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <DoctorCard
              name="Dr. Tendai Moyo"
              role="General Practitioner"
              bio="Experienced GP focused on compassionate, patient-centred family care."
              imageUrl="/doctor1.svg"
            />
            <DoctorCard
              name="Dr. Ruvimbo Chikore"
              role="Family Medicine Practitioner"
              bio="Focuses on preventative healthcare, women's health, and long-term wellness."
              imageUrl="/doctor2.svg"
            />
          </div>

          <div className="text-center">
            <Button href="/doctors" variant="outline" size="lg">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-neutral-600">
              Conveniently located in Borrowdale, Harare
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map placeholder */}
            <div className="bg-neutral-200 rounded-xl overflow-hidden h-80 lg:h-auto">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="mx-auto text-neutral-400 mb-4" />
                  <p className="text-neutral-600 font-medium">
                    Corner Borrowdale Road & Lark Rise Road
                    <br />
                    Borrowdale, Harare
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                <h3 className="font-semibold text-lg text-neutral-800 mb-4">
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Monday – Friday</span>
                    <span className="font-medium text-neutral-800">07:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Saturday</span>
                    <span className="font-medium text-neutral-800">08:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Sun & Holidays</span>
                    <span className="font-medium text-neutral-800">08:00 – 13:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <h3 className="font-semibold text-lg text-neutral-800 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary-600" size={20} />
                    <a
                      href="tel:+263772859799"
                      className="text-neutral-700 hover:text-primary-600 transition-colors"
                    >
                      +263 77 285 9799
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="text-green-600" size={20} />
                    <a
                      href="https://wa.me/263772859799"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700 hover:text-green-600 transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary-600" size={20} />
                    <span className="text-neutral-700">
                      Corner Borrowdale Rd & Lark Rise Rd
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Get in touch today and let us take care of your health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-medium rounded-lg hover:bg-neutral-50 transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </a>
            <a
              href="tel:+263772859799"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-medium rounded-lg hover:bg-neutral-50 transition-all shadow-lg"
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
