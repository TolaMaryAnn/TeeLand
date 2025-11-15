import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaRss,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0e0e12] text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Marketplace</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-purple-400">
                All NFTs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Art
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Music
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Domain Names
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Virtual World
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Collectibles
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-purple-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Suggestions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Newsletter
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-purple-400">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Brand Assets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Forum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Mailing List
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Signup for our newsletter to get the latest news in your inbox.
          </p>
          <div className="flex bg-[#1a1a21] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="enter your email"
              className="flex-grow bg-transparent px-4 py-2 text-sm text-gray-300 focus:outline-none"
            />
            <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-r-full transition">
              ➜
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Your email is safe with us. We don’t spam.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© Copyright 2025 - Teeland by TolaMaryAnn</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="bg-[#1a1a21] p-2 rounded-full hover:bg-purple-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-[#1a1a21] p-2 rounded-full hover:bg-purple-600 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-[#1a1a21] p-2 rounded-full hover:bg-purple-600 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="bg-[#1a1a21] p-2 rounded-full hover:bg-purple-600 transition"
          >
            <FaPinterestP />
          </a>
          <a
            href="#"
            className="bg-[#1a1a21] p-2 rounded-full hover:bg-purple-600 transition"
          >
            <FaRss />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
