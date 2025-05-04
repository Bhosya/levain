
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-levain-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl mb-4">Levain Cafe</h3>
            <p className="text-white/70 mb-6">
              Artisan sourdough and specialty coffee in a warm, welcoming environment.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-white transition-colors">Menu</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#feedback" className="text-white/70 hover:text-white transition-colors">Feedback</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to receive updates on seasonal menus, events, and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:border-white/50"
              />
              <button
                type="submit"
                className="bg-levain-brown hover:bg-levain-mid-brown px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/50 text-sm">
          <p>© {currentYear} Levain Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
