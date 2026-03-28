import React from 'react';
import logo from '../../assets/logo.png';
import { toast } from 'react-toastify';
import { FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa'; // React Icons ব্যবহার করলে কোড ক্লিন থাকে

const Footer = () => {
  const congrats = (e) => {
    e.preventDefault();
    toast.success('Thanks for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-[#09090b] text-zinc-400 pt-20 pb-10 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AI Hub" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white tracking-tight">AI Hub</span>
            </div>
            <p className="text-lg leading-relaxed max-w-sm">
              Unlock the power of next-generation AI. One platform, all the models you'll ever need.
            </p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-red-500 transition-colors bg-zinc-900 p-3 rounded-full"><FaTwitter size={18}/></a>
              <a href="#" className="hover:text-red-500 transition-colors bg-zinc-900 p-3 rounded-full"><FaYoutube size={18}/></a>
              <a href="#" className="hover:text-red-500 transition-colors bg-zinc-900 p-3 rounded-full"><FaFacebookF size={18}/></a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">API Access</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Stay Updated</h4>
            <form onSubmit={congrats} className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-red-500 transition"
                  required
                />
              </div>
              <button type="submit" className="btn btn-error btn-block rounded-xl text-white font-bold border-none shadow-lg shadow-red-900/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} AI Hub Inc. Built for the future.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;