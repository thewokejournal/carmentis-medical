import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Calendar,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Carmentis Medical Centre",
  description:
    "Get in touch with Carmentis Medical Centre. Call, WhatsApp, or visit us at our Borrowdale location.",
};

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 via-white to-primary-50/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-primary-200 font-medium text-sm uppercase tracking-wide">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            We're Here to{" "}
            <span className="font-normal">Help</span>
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            Have questions or ready to book an appointment? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods - Quick Actions */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <ChevronRight className="text-white/70 group-hover:translate-x-1 transition-transform" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">WhatsApp Us</h3>
              <p className="text-green-50 mb-4">Get instant responses to your questions</p>
              <p className="text-white font-medium">+263 77 285 9799</p>
            </a>

            <a
              href="tel:+263772859799"
              className="group bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-3xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={32} />
                </div>
                <ChevronRight className="text-white/70 group-hover:translate-x-1 transition-transform" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
              <p className="text-primary-50 mb-4">Speak directly with our team</p>
              <p className="text-white font-medium">+263 77 285 9799</p>
            </a>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Our Location
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Corner Borrowdale Road & Lark Rise Road<br />
                Borrowdale, Harare
              </p>
              <a
                href="https://maps.google.com/?q=Corner+Borrowdale+Road+and+Lark+Rise+Road+Borrowdale+Harare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
              >
                <Navigation size={20} />
                Get Directions
              </a>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-teal-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                  <span className="text-neutral-600 font-medium">Mon – Fri</span>
                  <span className="text-neutral-900 font-semibold">07:00 – 20:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                  <span className="text-neutral-600 font-medium">Saturday</span>
                  <span className="text-neutral-900 font-semibold">08:00 – 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600 font-medium">Sun & Holidays</span>
                  <span className="text-neutral-900 font-semibold">08:00 – 13:00</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Phone</p>
                  <a
                    href="tel:+263772859799"
                    className="text-neutral-900 font-medium hover:text-primary-600 transition-colors"
                  >
                    +263 77 285 9799
                  </a>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Email</p>
                  <a
                    href="mailto:info@carmentismedical.co.zw"
                    className="text-neutral-900 font-medium hover:text-primary-600 transition-colors break-all"
                  >
                    info@carmentismedical.co.zw
                  </a>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/263772859799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 font-medium hover:text-green-600 transition-colors"
                  >
                    +263 77 285 9799
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                Find Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Visit Our{" "}
              <span className="font-normal text-primary-600">Clinic</span>
            </h2>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl overflow-hidden shadow-xl h-[500px] flex flex-col items-center justify-center p-8">
            <MapPin size={80} className="text-primary-400 mb-6" />
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Corner Borrowdale Road & Lark Rise Road
            </h3>
            <p className="text-neutral-600 mb-6 text-center max-w-md">
              Conveniently located in Borrowdale with ample parking
            </p>
            <a
              href="https://maps.google.com/?q=Corner+Borrowdale+Road+and+Lark+Rise+Road+Borrowdale+Harare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all shadow-lg"
            >
              <Navigation size={20} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-teal-600 font-medium text-sm uppercase tracking-wide">
                Need to Know
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Before You{" "}
              <span className="font-normal text-primary-600">Visit</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="text-primary-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Appointments
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Walk-ins are welcome, but we recommend booking ahead via WhatsApp or phone to minimize wait times.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageCircle className="text-teal-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Emergency Care
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    For urgent medical concerns during business hours, please call us immediately for priority assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Parking
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Ample free parking is available on-site for all patients and visitors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="text-primary-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Accessibility
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Our facility is fully accessible with wheelchair-friendly entrances and facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Book{" "}
            <span className="font-normal">Your Visit?</span>
          </h2>
          <p className="text-xl text-primary-50 mb-10 max-w-2xl mx-auto">
            Contact us now and take the first step toward better health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment."
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
