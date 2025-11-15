import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full  backdrop-blur-md text-white py-6 px-2 md:px-12  border-gray-800 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6 w-full md:w-1/2">
          <div className="md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-blue-700 animate-pulse drop-shadow-sm">
            Teeland
          </div>

          <div className="hidden md:flex items-center flex-grow ml-8 relative">
            <input
              type="text"
              placeholder="Search items, collections, and creators..."
              className="w-96 pl-12 pr-4 py-2.5 rounded-full bg-[#1a1a21]/70 border border-gray-700 
               text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 
               focus:border-blue-500 outline-none backdrop-blur-sm transition-all duration-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.85-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="hidden md:flex items-center  font-extrabold text-gray-200 text-sm tracking-wide space-x-8">
          {["Home", "Explore", "Pages", "Activity"].map((item) => (
            <div
              key={item}
              className="flex items-center space-x-1 cursor-pointer hover:text-blue-400 transition-colors duration-300"
            >
              <span>{item}</span>
              <FaChevronDown size={12} />
            </div>
          ))}

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2 rounded-full transition duration-300 shadow-md hover:shadow-blue-500/30">
            Connect Wallet
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          {["Home", "Explore", "Pages", "Activity"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-gray-600 pb-2"
            >
              <span>{item}</span>
              <FaChevronDown size={12} />
            </div>
          ))}
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2 rounded-full transition duration-300 shadow-md hover:shadow-blue-500/30">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
