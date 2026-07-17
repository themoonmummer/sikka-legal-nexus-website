import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  Share2,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold tracking-tight uppercase">Sterling</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing exceptional legal counsel with a focus on integrity, excellence, and results. Our firm is dedicated to protecting your rights and securing your future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors">
               <span className="text-xs font-semibold">Twitter</span>
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors">
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors">
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-amber-500 transition-colors">About Our Firm</Link></li>
              <li><Link to="/practice" className="text-slate-400 hover:text-amber-500 transition-colors">Practice Areas</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2">Expertise</h3>
            <ul className="space-y-4">
              <li className="text-slate-400">Criminal Defense</li>
              <li className="text-slate-400">Corporate Advisory</li>
              <li className="text-slate-400">Family Law</li>
              <li className="text-slate-400">Property Disputes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2">Office Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                <p className="text-slate-600">
                   Sikka Legal Nexus<br/>
                  1/59,hastsal rd,WZ Block, block A 1, Uttam nagar<br/>
                  Delhi, India
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <p className="text-slate-600">
                 +919540528836, 7053497969
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-slate-400">contact@sikkalegalnexus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Sterling Legal Associates. All Rights Reserved. Professional Attorney Advertising.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;