import Image from "next/image";
import {
  GraduationCap,
  Award,
  Heart,
  Users,
  MessageCircle,
  Phone,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Our Doctors | Carmentis Medical Centre",
  description:
    "Meet our experienced medical professionals dedicated to providing compassionate, patient-centered care.",
};

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Tendai Moyo",
      role: "General Practitioner",
      image: "/doctor1.jpg",
      bio: "Dr. Moyo is an experienced General Practitioner with a passion for compassionate, patient-centered family care. With years of dedicated service, Dr. Moyo brings expertise in managing a wide range of health conditions while maintaining a warm, approachable demeanor.",
      philosophy: "Every patient deserves to be heard, understood, and treated with dignity.",
      specialties: [
        "Family Medicine",
        "Chronic Disease Management",
        "Preventative Care",
        "General Consultations",
      ],
      color: "green",
    },
    {
      name: "Dr. Ruvimbo Chikore",
      role: "Family Medicine Practitioner",
      image: "/doctor2.jpg",
      bio: "Dr. Chikore specializes in preventative healthcare, women's health, and long-term wellness. Her holistic approach ensures that every family member receives comprehensive care tailored to their unique needs and life stage.",
      philosophy: "Prevention is the best medicine—I'm here to help you stay healthy.",
      specialties: [
        "Women's Health",
        "Preventative Medicine",
        "Family Wellness",
        "Child Health",
      ],
      color: "primary",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-primary-50 via-white to-primary-50/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-primary-200 font-medium text-sm uppercase tracking-wide">
              Our Team
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Meet Our{" "}
            <span className="font-normal">Expert Doctors</span>
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            Compassionate professionals dedicated to providing exceptional healthcare 
            for you and your family.
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Doctor Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group">
                    <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Floating Badge */}
                    <div
                      className={`absolute top-6 right-6 px-6 py-3 rounded-full font-semibold shadow-xl text-white ${
                        doctor.color === "green"
                          ? "bg-green-500"
                          : "bg-primary-500"
                      }`}
                    >
                      {doctor.role}
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
                    {doctor.name}
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    {doctor.bio}
                  </p>

                  {/* Care Philosophy */}
                  <div className="bg-gradient-to-r from-primary-50 to-teal-50 rounded-2xl p-6 mb-8 border-l-4 border-primary-500">
                    <p className="text-base italic text-neutral-700">
                      "{doctor.philosophy}"
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                      <Award className="text-primary-600" size={24} />
                      Specialties
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {doctor.specialties.map((specialty, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-neutral-700"
                        >
                          <CheckCircle
                            className={
                              doctor.color === "green"
                                ? "text-green-500"
                                : "text-primary-500"
                            }
                            size={20}
                          />
                          <span>{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all shadow-lg"
                    >
                      <MessageCircle size={20} />
                      Book Appointment
                    </a>
                    <a
                      href="tel:+263772859799"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all shadow-md border-2 border-primary-100"
                    >
                      <Phone size={20} />
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                Our Approach
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              What Sets Us{" "}
              <span className="font-normal text-primary-600">Apart</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Compassionate Care
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We treat every patient with empathy, respect, and genuine concern for their wellbeing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="text-teal-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Expert Knowledge
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Years of experience and continuous learning ensure you receive the best possible care.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Family-Centered
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We understand the importance of family and provide care that considers your whole family's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Experience{" "}
            <span className="font-normal">Expert Care?</span>
          </h2>
          <p className="text-xl text-primary-50 mb-10 max-w-2xl mx-auto">
            Schedule your appointment today and meet our dedicated healthcare team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-green-50 transition-all shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Book on WhatsApp
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
