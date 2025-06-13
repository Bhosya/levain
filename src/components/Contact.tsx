import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const weekdays = [
    { day: "Monday", hours: "7:00 AM - 10:30 PM" },
    { day: "Tuesday", hours: "7:00 AM - 10:30 PM" },
    { day: "Wednesday", hours: "7:00 AM - 10:30 PM" },
    { day: "Thursday", hours: "7:00 AM - 10:30 PM" },
    { day: "Friday", hours: "7:00 AM - 10:30 PM" },
    { day: "Saturday", hours: "7:00 AM - 10:30 PM" },
    { day: "Sunday", hours: "7:00 AM - 10:30 PM" },
  ];

  return (
    <section id="contact" className="cafe-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="handwritten-accent">Get In Touch</span>
          <h2 className="section-title mt-2">Contact Us</h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Visit us to experience our artisanal sourdough and specialty coffee
            in a cozy atmosphere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.948796143621!2d110.41745887510223!3d-7.015304692986228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b8fba53de9f%3A0x3ade917c74d01a37!2sLevain%20Cafe%20-%20Artisan%20Sourdough%20%26%20Coffee!5e0!3m2!1sid!2sid!4v1746332458432!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Levain Cafe Location"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md border border-levain-brown/20">
              <h3 className="font-optima text-2xl mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-levain-brown mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-levain-black/70">
                      Jl. Sisingamangaraja No.31, Wonotingal, Kec. Candisari,
                      <br />
                      Kota Semarang, Jawa Tengah 50252
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-levain-brown mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-levain-black/70">08112999690</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-levain-brown mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-levain-black/70">levain.id@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-levain-brown/20">
                  <a
                    href="https://www.instagram.com/levain.id/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-levain-brown hover:text-levain-mid-brown"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/levain.id"
                    target="_blank"
                    rel="noreferrer"
                    className="text-levain-brown hover:text-levain-mid-brown"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md border border-levain-brown/20">
              <div className="flex items-center mb-6">
                <Clock className="text-levain-brown mr-2" />
                <h3 className="font-optima text-2xl">Opening Hours</h3>
              </div>

              <div className="space-y-2">
                {weekdays.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b last:border-b-0 border-dashed border-levain-brown/30"
                  >
                    <span className="font-medium">{item.day}</span>
                    <span className="text-levain-black/70">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
