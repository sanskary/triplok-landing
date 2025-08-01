import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
function Footer({
  handleCTAClick
}) {
  return <footer className="bg-teal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://horizons-cdn.hostinger.com/2f21c06e-f4b8-4c0a-a1b2-a9dc7925820f/2deeb08672019f140be55f2f1d50a456.png" alt="Triplok.in Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">Triplok.in</span>
            </div>
            <p className="text-gray-200 mb-4 max-w-md">
              Your travel partner for unforgettable group adventures. Creating memories, building friendships, and exploring incredible destinations across India.
            </p>
            <div className="flex space-x-4">
              <button onClick={() => handleCTAClick('social-instagram')} className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors">
                <Instagram size={20} />
              </button>
              <button onClick={() => handleCTAClick('social-facebook')} className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors">
                <Facebook size={20} />
              </button>
              <button onClick={() => handleCTAClick('social-twitter')} className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors">
                <Twitter size={20} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#trips" className="text-gray-200 hover:text-white transition-colors">Trips</a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-200">info@triplok.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-200">+91 8448334063</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram size={16} />
                <span className="text-gray-200">@triplok.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-gray-200">
            © 2024 Triplok.in. All rights reserved. | 
            <span className="ml-2">Your travel partner for life!</span>
          </p>
        </div>
      </div>
    </footer>;
}
export default Footer;