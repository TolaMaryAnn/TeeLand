import vrImage from "../assets/vr-6770800_1280.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-8 text-white overflow-hidden py-10 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 space-y-8 md:ml-12 ml-4"
      >
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold text-glow">
            Teeland Market
          </h3>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
            Create, sell or collect digital items
          </h1>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent rounded-xl md:hidden"></div>

            <p className="relative text-gray-300 tracking-wide text-base md:text-xl leading-relaxed max-w-xl z-10 font-light">
              Blockchain is the trust layer of the digital world — it transforms
              how we exchange value, just as the internet transformed how we
              exchange information.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white px-10 py-3.5 rounded-full font-semibold text-lg tracking-wide"
          >
            Explore Now
          </motion.button>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 mt-6">
          {[
            { number: "98K+", label: "Collectibles" },
            { number: "12K+", label: "Auctions" },
            { number: "15K+", label: "NFT Artists" },
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                {item.number}
              </h2>
              <p className="text-blue-300 text-sm mt-1 uppercase tracking-wider font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
      >
        <span className="absolute w-3 h-3 bg-blue-400 rounded-full animate-ping top-10 left-10"></span>
        <span className="absolute w-2 h-2 bg-pink-400 rounded-full animate-ping bottom-12 right-16"></span>
        <span className="absolute w-4 h-4 bg-purple-500 rounded-full animate-pulse top-1/2 left-1/4"></span>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-transparent blur-3xl rounded-full"></div>

        <img
          src={vrImage}
          alt="VR Image"
          className="w-10/12 h-auto animate-float drop-shadow-[0_0_40px_rgba(147,51,234,0.4)]"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
