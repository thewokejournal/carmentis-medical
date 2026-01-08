import { Heart, Users, Shield, Clock, Phone, MessageCircle } from "lucide-react";

export const metadata = {
  title: "About Us | Carmentis Medical Centre",
  description: "Learn about our mission, values, and commitment to providing quality healthcare for families in Borrowdale.",
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-teal-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Carmentis Medical Centre
          </h1>
          <p className="text-xl md:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in family healthcare
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100 mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Welcome to Carmentis Medical Centre
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Located in the heart of Borrowdale, Harare, Carmentis Medical Centre
              is dedicated to providing exceptional healthcare services to
              individuals and families throughout the community. We understand that
              your health and the health of your loved ones is your top priority—
              and it's ours too.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our clinic combines medical expertise with genuine compassion to
              create a healthcare experience that is both professional and deeply
              personal. We believe that quality healthcare is built on trust,
              communication, and a commitment to treating each patient as an
              individual with unique needs and concerns.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Compassionate Care
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  We treat every patient with kindness, respect, and empathy,
                  ensuring you feel heard, understood, and cared for.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-teal-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Quality Excellence
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  We maintain the highest standards of medical care through
                  continuous learning and adherence to best practices.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Family Focus
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  We provide comprehensive care for every family member, building
                  lasting relationships across generations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  Accessible Healthcare
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  With extended hours and convenient location, we make quality
                  healthcare accessible when you need it most.
                </p>
              </div>
            </div>
          </div>

          {/* Patient-First Philosophy */}
          <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-xl p-8 border border-primary-100">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Our Patient-First Philosophy
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              At Carmentis Medical Centre, you are more than just a patient number.
              From the moment you walk through our doors, you become part of our
              extended family. We take the time to listen to your concerns,
              understand your health goals, and develop personalized care plans
              that work for you.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Our approach to healthcare is holistic and preventative. We don't
              just treat illnesses—we work with you to maintain optimal health,
              prevent future problems, and empower you to make informed decisions
              about your wellbeing.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              We believe that the best healthcare happens when patients and doctors
              work together as partners. That's why we prioritize clear
              communication, patient education, and collaborative decision-making
              in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Experience Healthcare That Cares
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Join our family of patients who trust us with their healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20learn%20more%20about%20Carmentis%20Medical%20Centre."
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


