import { FaWallet, FaCloudUploadAlt, FaPenNib } from "react-icons/fa";

function CreateAndSell() {
  const steps = [
    {
      id: 1,
      icon: <FaWallet className="text-3xl text-blue-500" />,
      title: "Set up your wallet",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    },
    {
      id: 2,
      icon: <FaCloudUploadAlt className="text-3xl text-blue-500" />,
      title: "Add your NFTs",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    },
    {
      id: 3,
      icon: <FaPenNib className="text-3xl text-blue-500" />,
      title: "Sell your NFTs",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    },
  ];

  return (
    <div className="py-20 relative z-10 px-6 font-outfit max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Create and Sell Now</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="glass-card rounded-3xl p-8 text-center group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 opacity-5 text-[10rem] text-blue-500 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-500 select-none pointer-events-none">
              {step.icon}
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white/5 border border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white/90">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateAndSell;
