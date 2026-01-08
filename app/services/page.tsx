import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import {
  Stethoscope,
  Users,
  Baby,
  Heart,
  Activity,
  Shield,
  Microscope,
  Syringe,
  Phone,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Our Services | Carmentis Medical Centre",
  description: "Comprehensive healthcare services including general consultations, family medicine, child health, women's health, and more.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Stethoscope size={28} />,
      title: "General Medical Consultations",
      description:
        "Expert diagnosis and treatment for a wide range of health concerns. Our experienced doctors provide thorough examinations and personalized care plans.",
    },
    {
      icon: <Users size={28} />,
      title: "Family Medicine",
      description:
        "Comprehensive healthcare for every family member, from children to seniors. We build long-term relationships with families to provide continuous care.",
    },
    {
      icon: <Baby size={28} />,
      title: "Child Health & Immunisations",
      description:
        "Complete pediatric care including routine check-ups, growth monitoring, and up-to-date immunization schedules to keep your children healthy.",
    },
    {
      icon: <Heart size={28} />,
      title: "Women's Health",
      description:
        "Specialized care addressing women's unique health needs, including reproductive health, wellness screenings, and preventative care.",
    },
    {
      icon: <Activity size={28} />,
      title: "Men's Health",
      description:
        "Focused healthcare services for men, addressing common concerns and promoting long-term wellness through preventative measures.",
    },
    {
      icon: <Shield size={28} />,
      title: "Chronic Disease Management",
      description:
        "Ongoing support and management for chronic conditions such as diabetes, hypertension, and asthma to help you live your best life.",
    },
    {
      icon: <Microscope size={28} />,
      title: "Preventative Health Screenings",
      description:
        "Regular health assessments and screenings to detect potential issues early and maintain optimal health through prevention.",
    },
    {
      icon: <Syringe size={28} />,
      title: "Minor Procedures",
      description:
        "Safe and professional minor medical procedures performed in our clinic, including wound care, suturing, and other treatments.",
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-teal-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services tailored to meet the needs of you
            and your family
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Personalized Care for Every Patient
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              At Carmentis Medical Centre, we believe that quality healthcare goes
              beyond treating symptoms. We take the time to understand your unique
              health needs, medical history, and lifestyle to provide personalized
              care that truly makes a difference.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Our approach is centered on building lasting relationships with our
              patients and their families. We focus on preventative care, early
              detection, and ongoing support to help you maintain optimal health
              throughout every stage of life.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Whether you need a routine check-up, treatment for an acute illness,
              or ongoing management of a chronic condition, our experienced medical
              team is here to provide compassionate, professional care in a warm
              and welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Have Questions About Our Services?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Our friendly team is here to help. Contact us today to learn more or
            book an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20your%20services."
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
      </section>
    </div>
  );
}


