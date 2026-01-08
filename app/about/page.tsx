import {
  Heart,
  Users,
  Shield,
  Award,
  Clock,
  Target,
  CheckCircle,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "About Us | Carmentis Medical Centre",
  description:
    "Learn about Carmentis Medical Centre - your trusted healthcare partner in Borrowdale, committed to providing compassionate, quality medical care.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Every patient receives personalized attention and genuine care. We treat you as a person, not just a patient.",
      color: "primary",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards of medical practice, constantly updating our knowledge and skills.",
      color: "teal",
    },
    {
      icon: Users,
      title: "Family First",
      description:
        "Healthcare for the whole family. We understand that your family's health is your top priority.",
      color: "green",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Honest, transparent communication and ethical practice guide everything we do.",
      color: "primary",
    },
    {
      icon: Target,
      title: "Patient-Centered",
      description:
        "Your needs, concerns, and goals are at the heart of every decision we make.",
      color: "teal",
    },
    {
      icon: Clock,
      title: "Accessibility",
      description:
        "Extended hours and multiple contact options ensure you can reach us when you need us.",
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "from-primary-50 to-primary-100/50",
        iconBg: "bg-white",
        icon: "text-primary-600",
      },
      teal: {
        bg: "from-teal-50 to-teal-100/50",
        iconBg: "bg-white",
        icon: "text-teal-600",
      },
      green: {
        bg: "from-green-50 to-green-100/50",
        iconBg: "bg-white",
        icon: "text-green-600",
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
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Your Trusted Healthcare{" "}
            <span className="font-normal">Partner</span>
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            At Carmentis Medical Centre, we're dedicated to providing compassionate, 
            comprehensive healthcare for individuals and families in Borrowdale.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
                Healthcare That{" "}
                <span className="font-normal text-primary-600">Cares</span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700">
              <p className="text-xl leading-relaxed mb-6">
                Carmentis Medical Centre was founded with a simple yet powerful mission: 
                to provide accessible, high-quality healthcare that treats every patient 
                with dignity, compassion, and respect.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We believe that exceptional healthcare goes beyond treating symptoms. 
                It's about understanding you as a whole person - your concerns, your 
                lifestyle, your family, and your goals. This patient-centered philosophy 
                guides everything we do.
              </p>
              <p className="text-lg leading-relaxed">
                Located in the heart of Borrowdale, we serve families throughout the 
                community, offering comprehensive medical services in a warm, welcoming 
                environment. Our experienced team combines medical expertise with genuine 
                care, ensuring you feel heard, understood, and supported at every visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-teal-600 font-medium text-sm uppercase tracking-wide">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              What We{" "}
              <span className="font-normal text-primary-600">Stand For</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our core values shape every interaction and decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colors = getColorClasses(value.color);
              
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${colors.bg} rounded-3xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-1`}
                >
                  <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className={colors.icon} size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-green-600 font-medium text-sm uppercase tracking-wide">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8">
                The Carmentis{" "}
                <span className="font-normal text-primary-600">Difference</span>
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                We're not just another medical clinic. We're your healthcare partner, 
                committed to supporting your wellbeing every step of the way.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Experienced Team
                  </h3>
                  <p className="text-neutral-700">
                    Our qualified doctors bring years of expertise and continuous professional development.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Extended Hours
                  </h3>
                  <p className="text-neutral-700">
                    Open 7 days a week, including evenings and weekends, to fit your schedule.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Comprehensive Services
                  </h3>
                  <p className="text-neutral-700">
                    From preventative care to chronic disease management, we cover all your healthcare needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Convenient Location
                  </h3>
                  <p className="text-neutral-700">
                    Easily accessible in Borrowdale, with ample parking and a comfortable facility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-500 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Become Part of{" "}
            <span className="font-normal">Our Healthcare Family</span>
          </h2>
          <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
            Experience compassionate, comprehensive healthcare. Contact us today to schedule your visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-green-50 transition-all shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Message Us
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
