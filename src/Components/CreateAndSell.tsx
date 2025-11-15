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
    <div className="bg-[#0f0f14] text-white px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">Create and Sell Now</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-[#1a1a21] rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-md relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 opacity-10 text-[8rem] text-blue-800 select-none pointer-events-none">
              {step.icon}
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-[#2a2a33] w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
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
