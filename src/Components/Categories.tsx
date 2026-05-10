import metamaskIcon from "../assets/icons8-metamask-48.png";
import bitskiIcon from "../assets/optimization_2501760.png";
import walletConnectIcon from "../assets/digital-wallet_5802605.png";
import coinbaseIcon from "../assets/database_15163896.png";
import arkaneIcon from "../assets/ar_16861670.png";

function Categories() {
  return (
    <div className="py-16 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 max-w-7xl mx-auto">
        {[
          { icon: metamaskIcon, name: "Metamask" },
          { icon: bitskiIcon, name: "Bitski" },
          { icon: walletConnectIcon, name: "Wallet Connect" },
          { icon: coinbaseIcon, name: "Coinbase Wallet" },
          { icon: arkaneIcon, name: "Arkane" },
        ].map((item, index) => (
          <div
            key={index}
            className="glass-card hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] rounded-3xl overflow-hidden transition-all duration-300 p-8 flex flex-col items-center group cursor-pointer"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
            />
            <h3 className="text-lg mt-6 font-semibold text-white/90 text-center tracking-wide group-hover:text-blue-400 transition-colors">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
