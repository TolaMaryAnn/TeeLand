import vrImage from "../assets/vr-6770800_1280.png";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-8 text-white overflow-hidden">
      <div className="md:w-1/2 space-y-8 md:ml-12 ml-4">
        <div className="space-y-3">
          <h3 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold">
            Teeland Market
          </h3>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-gray-200 to-blue-600 bg-clip-text text-transparent">
            Create, sell or collect digital items
          </h1>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent rounded-xl md:hidden"></div>

            <p className="relative text-gray-200 md:text-gray-300 tracking-wide text-base md:text-xl leading-relaxed max-w-xl z-10">
              Blockchain is the trust layer of the digital world — it transforms
              how we exchange value, just as the internet transformed how we
              exchange information.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button className="bg-blue-700 hover:bg-blue-800 transition-all duration-300 shadow-lg shadow-blue-800/30 hover:shadow-blue-700/50 text-white px-10 py-3 rounded-full font-semibold text-lg tracking-wide">
            Explore
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-10">
          {[
            { number: "98K+", label: "Collectibles" },
            { number: "12K+", label: "Auctions" },
            { number: "15K+", label: "NFT Artists" },
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-white">
                {item.number}
              </h2>
              <p className="text-gray-400 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
        <span className="absolute w-3 h-3 bg-blue-400 rounded-full animate-ping top-10 left-10"></span>
        <span className="absolute w-2 h-2 bg-pink-400 rounded-full animate-ping bottom-12 right-16"></span>
        <span className="absolute w-4 h-4 bg-purple-500 rounded-full animate-pulse top-1/2 left-1/4"></span>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-transparent blur-3xl rounded-full"></div>

        <img
          src={vrImage}
          alt="VR Image"
          className="w-10/12 h-auto animate-float drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        />
      </div>
    </section>
  );
}

export default Hero;
