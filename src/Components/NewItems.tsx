import { FaHeart, FaCheckCircle } from "react-icons/fa";

import eagleImg from "../assets/golden-eagle-1884538_1280.jpg";
import creatorBlackImg from "../assets/black_15675894.png";

import liveArtImg from "../assets/ai-generated-8899561_1280.jpg";
import workerImg from "../assets/worker.png";

import redOceanImg from "../assets/mandelbrot-293453_1280.jpg";
import peopleImg from "../assets/people_15996950.png";

import lavaImg from "../assets/lava-9924745_1280.jpg";
import taxInspectorImg from "../assets/tax-inspector.png";

function NewItems() {
  const items = [
    {
      id: 1,
      title: "I Believe I Can Fly",
      image: eagleImg,
      eth: "0.08",
      edition: "1/20",
      likes: 50,
      creatorImg: creatorBlackImg,
      timeLeft: "00d 00h 00m 00s",
    },
    {
      id: 2,
      title: "Live Arts",
      image: liveArtImg,
      eth: "3.99",
      edition: "/",
      likes: 286,
      creatorImg: workerImg,
      timeLeft: null,
    },
    {
      id: 3,
      title: "Red Ocean",
      image: redOceanImg,
      eth: "0.45",
      edition: "/",
      likes: 588,
      creatorImg: peopleImg,
      timeLeft: null,
    },
    {
      id: 4,
      title: "Hot Lava",
      image: lavaImg,
      eth: "0.07",
      edition: "/",
      likes: 700,
      creatorImg: taxInspectorImg,
      timeLeft: null,
    },
  ];

  return (
    <div className="bg-[#0f0f14] text-white px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">New Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1a21] rounded-2xl p-4 hover:scale-105 transition-transform duration-300 relative"
          >
            <div className="absolute top-4 left-4 flex items-center space-x-1">
              <img
                src={item.creatorImg}
                alt="creator"
                className="w-8 h-8 rounded-full border-2 border-blue-800"
              />
              <FaCheckCircle className="text-blue-400 text-sm" />
            </div>

            {item.timeLeft && (
              <div className="absolute top-4 right-4 bg-[#2a2a33] px-2 py-1 rounded-full text-xs">
                {item.timeLeft}
              </div>
            )}

            <div className="flex justify-center mt-10">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl w-52 h-52 object-cover"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="flex justify-center space-x-2 text-sm text-gray-400 mt-1">
                <span>{item.eth} ETH</span>
                <span>{item.edition}</span>
              </div>
              <a
                href="#"
                className="text-sm text-blue-800 hover:underline mt-1 inline-block"
              >
                Place a bid
              </a>
            </div>

            <div className="flex justify-end items-center mt-3 text-gray-400">
              <FaHeart className="mr-1 text-pink-500" /> {item.likes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewItems;
