import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact Us | Carmentis Medical Centre",
  description: "Get in touch with Carmentis Medical Centre. Visit us in Borrowdale or contact us by phone, WhatsApp, or email.",
};

export default function ContactPage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-teal-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            We're here to help. Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Whether you need to book an appointment, have questions about our
                  services, or just want to learn more about how we can help, we'd
                  love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+263772859799"
                        className="text-primary-600 hover:text-primary-700 transition-colors text-lg font-medium"
                      >
                        +263 77 285 9799
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">
                        Call us during opening hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-2">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20services%20at%20Carmentis%20Medical%20Centre."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors text-lg font-medium"
                      >
                        +263 77 285 9799
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">
                        Message us anytime
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-teal-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:info@carmentismedical.co.zw"
                        className="text-teal-600 hover:text-teal-700 transition-colors font-medium break-all"
                      >
                        info@carmentismedical.co.zw
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-800 mb-2">
                        Address
                      </h3>
                      <p className="text-neutral-700 leading-relaxed">
                        Corner Borrowdale Road & Lark Rise Road
                        <br />
                        Borrowdale, Harare
                        <br />
                        Zimbabwe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Hours */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100">
                <div className="bg-neutral-200 h-80 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin size={48} className="mx-auto text-neutral-400 mb-4" />
                    <p className="text-neutral-600 font-medium">
                      Corner Borrowdale Road & Lark Rise Road
                      <br />
                      Borrowdale, Harare
                    </p>
                    <a
                      href="https://maps.google.com/?q=Corner+Borrowdale+Road+and+Lark+Rise+Road+Borrowdale+Harare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary-600" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-neutral-700 font-medium">
                      Monday – Friday
                    </span>
                    <span className="text-neutral-900 font-semibold">
                      07:00 – 20:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-neutral-700 font-medium">
                      Saturday
                    </span>
                    <span className="text-neutral-900 font-semibold">
                      08:00 – 16:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-700 font-medium">
                      Sunday & Holidays
                    </span>
                    <span className="text-neutral-900 font-semibold">
                      08:00 – 13:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-xl p-8 text-center border border-primary-100">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Book an Appointment?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Contact us now to schedule your visit. We're here to provide the
              healthcare you and your family deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/263772859799?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle size={20} />
                WhatsApp Now
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
      </section>
    </div>
  );
}


