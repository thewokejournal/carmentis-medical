import {
  Stethoscope,
  Users,
  Baby,
  Heart,
  Activity,
  Shield,
  ClipboardCheck,
  Syringe,
  MessageCircle,
  Phone,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Medical Services | Carmentis Medical Centre",
  description:
    "Comprehensive healthcare services including general consultations, family medicine, child health, women's health, and more.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Stethoscope,
      title: "General Medical Consultations",
      description:
        "Comprehensive medical assessments and treatment for acute and chronic conditions. Expert diagnosis and personalized care plans.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Family Medicine",
      description:
        "Complete healthcare for the whole family. From infants to seniors, we provide continuous, comprehensive care for all ages.",
      color: "teal",
    },
    {
      icon: Baby,
      title: "Child Health & Immunisations",
      description:
        "Pediatric care including developmental monitoring, immunizations, and treatment of childhood illnesses. Keeping your children healthy.",
      color: "green",
    },
    {
      icon: Heart,
      title: "Women's Health",
      description:
        "Specialized care for women including reproductive health, prenatal care, and wellness screenings tailored to women's needs.",
      color: "primary",
    },
    {
      icon: Activity,
      title: "Men's Health",
      description:
        "Focused healthcare addressing men's specific health concerns, preventative care, and wellness optimization.",
      color: "teal",
    },
    {
      icon: Shield,
      title: "Chronic Disease Management",
      description:
        "Ongoing support and treatment for chronic conditions including diabetes, hypertension, asthma, and heart disease.",
      color: "green",
    },
    {
      icon: ClipboardCheck,
      title: "Preventative Health Screenings",
      description:
        "Regular health checks, early detection screenings, and wellness assessments to keep you healthy and catch issues early.",
      color: "primary",
    },
    {
      icon: Syringe,
      title: "Minor Procedures",
      description:
        "Safe, in-clinic minor procedures including wound care, suturing, and other outpatient treatments in a comfortable setting.",
      color: "teal",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "from-primary-50 to-primary-100/50",
        iconBg: "bg-white",
        icon: "text-primary-600",
        border: "border-primary-200",
      },
      teal: {
        bg: "from-teal-50 to-teal-100/50",
        iconBg: "bg-white",
        icon: "text-teal-600",
        border: "border-teal-200",
      },
      green: {
        bg: "from-green-50 to-green-100/50",
        iconBg: "bg-white",
        icon: "text-green-600",
        border: "border-green-200",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 via-white to-primary-50/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-primary-200 font-medium text-sm uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Comprehensive Healthcare{" "}
            <span className="font-normal">For Your Family</span>
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            From routine check-ups to specialized care, we offer a full range of medical services 
            to keep you and your family healthy and thriving.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = getColorClasses(service.color);
              
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${colors.bg} rounded-3xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 border ${colors.border}`}
                >
                  <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className={colors.icon} size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Your Health is{" "}
              <span className="font-normal text-primary-600">Our Priority</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Experienced Professionals
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Our qualified medical team brings years of expertise and compassionate care.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Patient-Centered Approach
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We treat you as a whole person, not just a set of symptoms.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Modern Facilities
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                State-of-the-art equipment in a comfortable, welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-500 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Schedule{" "}
            <span className="font-normal">Your Appointment?</span>
          </h2>
          <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
            Contact us today to book a consultation or learn more about our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-green-50 transition-all shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
            <a
              href="tel:+263772859799"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-full hover:bg-white/10 transition-all border-2 border-white"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
