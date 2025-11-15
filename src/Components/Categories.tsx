function Categories() {
  return (
    <div className="bg-[#0f0f14]">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
        <div className="shadow-md mt-20 ml-4 rounded-2xl bg-[#2a2a33] border  overflow-hidden hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center">
          <img
            src="src/assets/icons8-metamask-48.png"
            alt="Card 1"
            className="w-20 h-20 object-contain"
          />
          <h3 className="text-base mt-6 font-semibold text-white text-center">
            Metamask
          </h3>
        </div>

        <div className="bg-[#2a2a33] md:mt-20 border   shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center">
          <img
            src="src/assets/optimization_2501760.png"
            alt="Card 2"
            className="w-20 h-20 object-contain"
          />
          <h3 className="text-lg mt-6 font-semibold text-white text-center">
            Bitski
          </h3>
        </div>

        <div className="bg-[#2a2a33] border md:mt-20  shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center">
          <img
            src="src/assets/digital-wallet_5802605.png"
            alt="Card 3"
            className="w-20 h-20 object-contain"
          />
          <h3 className="text-base mt-6 font-semibold  text-white text-center">
            Wallet Connect
          </h3>
        </div>

        <div className="bg-[#2a2a33] border md:mt-20  shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center">
          <img
            src="src/assets/database_15163896.png"
            alt="Card 4"
            className="w-20 h-20 object-contain"
          />
          <h3 className="text-base mt-6 font-semibold text-white text-center">
            Coinbase Wallet
          </h3>
        </div>

        <div className="bg-[#2a2a33] border mr-4 md:mt-20  shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center">
          <img
            src="src/assets/ar_16861670.png"
            alt="Card 5"
            className="w-20 h-20 object-contain"
          />
          <h3 className="text-base mt-6 font-semibold text-white text-center">
            Arkane
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Categories;
