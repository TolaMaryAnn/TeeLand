import metamaskIcon from "../assets/icons8-metamask-48.png";
import bitskiIcon from "../assets/optimization_2501760.png";
import walletConnectIcon from "../assets/digital-wallet_5802605.png";
import coinbaseIcon from "../assets/database_15163896.png";
import arkaneIcon from "../assets/ar_16861670.png";

function Categories() {
  return (
    <div className="bg-[#0f0f14]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
        {[
          { icon: metamaskIcon, name: "Metamask" },
          { icon: bitskiIcon, name: "Bitski" },
          { icon: walletConnectIcon, name: "Wallet Connect" },
          { icon: coinbaseIcon, name: "Coinbase Wallet" },
          { icon: arkaneIcon, name: "Arkane" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#2a2a33] border shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center
        md:mt-20"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />
            <h3 className="text-base mt-6 font-semibold text-white text-center">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
