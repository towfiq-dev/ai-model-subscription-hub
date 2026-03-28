import React from 'react';
import logo from '../../assets/logo.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'; // আইকন ব্যবহারের জন্য

const Navbar = ({ cartsCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-8">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1">
              <HiOutlineMenuAlt3 size={28} />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border">
              <li><a>Home</a></li>
              <li><a>AI Models</a></li>
              <li><a>Pricing</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          {/* Logo */}
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter cursor-pointer group">
            <img className="w-9 group-hover:rotate-12 transition-transform" src={logo} alt="Logo" />
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">AI Hub</span>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-[15px] font-medium text-gray-600">
            <li><a className="hover:text-red-500 transition-colors">Home</a></li>
            <li><a className="hover:text-red-500 transition-colors">AI Models</a></li>
            <li><a className="hover:text-red-500 transition-colors">Pricing</a></li>
            <li><a className="hover:text-red-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {/* Cart Indicator (Optional Logic) */}
          <div className="hidden sm:flex items-center px-4 py-2 bg-gray-100 rounded-full font-bold text-sm text-gray-700">
            Items: <span className="ml-1 text-red-500">{cartsCount || 0}</span>
          </div>
          <button className="btn btn-error rounded-full text-white px-6 shadow-lg shadow-red-200 border-none hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;