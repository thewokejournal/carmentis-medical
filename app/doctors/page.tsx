import DoctorCard from "@/components/DoctorCard";
import { Phone, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Our Doctors | Carmentis Medical Centre",
  description: "Meet our experienced and compassionate medical team dedicated to providing quality healthcare.",
};

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Tendai Moyo",
      role: "General Practitioner",
      bio: "Dr. Moyo brings years of experience in general practice with a focus on compassionate, patient-centered family care. He believes in building long-term relationships with patients to provide continuous, personalized healthcare.",
      imageUrl: "/doctor1.svg",
    },
    {
      name: "Dr. Ruvimbo Chikore",
      role: "Family Medicine Practitioner",
      bio: "Dr. Chikore specializes in preventative healthcare, women's health, and long-term wellness. She is passionate about empowering patients through education and holistic care approaches.",
      imageUrl: "/doctor2.svg",
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-teal-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Doctors
          </h1>
          <p className="text-xl md:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            Compassionate professionals dedicated to your health and wellbeing
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                name={doctor.name}
                role={doctor.role}
                bio={doctor.bio}
                imageUrl={doctor.imageUrl}
              />
            ))}
          </div>

          {/* About Our Team */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              At Carmentis Medical Centre, our doctors are more than healthcare
              providers—they are partners in your wellness journey. Each member of
              our medical team is committed to providing personalized, compassionate
              care that addresses your unique health needs.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We believe in taking the time to listen to our patients, understand
              their concerns, and work collaboratively to develop effective
              treatment plans. Our approach combines medical expertise with genuine
              care and respect for every individual we serve.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Whether you're visiting us for a routine check-up or managing a
              complex health condition, you can trust that you'll receive the
              highest standard of medical care in a warm, welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Ready to Meet Our Team?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Book an appointment today and experience personalized healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment."
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

