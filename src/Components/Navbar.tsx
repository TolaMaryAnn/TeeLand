import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full glass-panel border-b-0 sticky top-0 z-50 text-white py-4 px-4 md:px-12 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6 w-full md:w-1/2">
          <div className="md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-blue-400 text-glow cursor-pointer tracking-tight">
            Teeland
          </div>

          <div className="hidden md:flex items-center flex-grow ml-8 relative">
            <input
              type="text"
              placeholder="Search items, collections, and creators..."
              className="w-96 pl-12 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 
               text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 
               focus:border-blue-500/50 outline-none backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.85-5.4a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="hidden md:flex items-center font-extrabold text-gray-200 text-sm tracking-wide space-x-8">
          {["Home", "Explore", "Pages", "Activity"].map((item) => (
            <div key={item} className="flex items-center space-x-1 cursor-pointer hover:text-blue-400 transition-colors duration-300">
              <span>{item}</span>
              <FaChevronDown size={12} />
            </div>
          ))}
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] font-semibold text-sm">
            Connect Wallet
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* ✅ No longer absolute — flows inside the nav, pushes content down */}
      {menuOpen && (
        <div className="mt-4 border-t border-white/10 flex flex-col space-y-4 md:hidden px-2 py-4">
          {["Home", "Explore", "Pages", "Activity"].map((item) => (
            <div key={item} className="flex items-center justify-between border-b border-white/10 pb-3 hover:text-blue-400 transition-colors cursor-pointer">
              <span className="font-medium">{item}</span>
              <FaChevronDown size={12} className="opacity-70" />
            </div>
          ))}
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-xl font-semibold transition duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;