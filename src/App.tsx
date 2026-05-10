import './index.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import NewItems from './Components/NewItems';
import CreateAndSell from './Components/CreateAndSell';
import Footer from './Components/Footer';
function App() {
  return (

    <div className="relative min-h-screen bg-[#030305] text-white overflow-hidden">
      {/* Dynamic Glowing Orbs in Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[120px] animate-slow-shake pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/15 blur-[150px] animate-float pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-pink-500/10 blur-[100px] animate-pulse pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
      </div>

      <section className='relative z-10'>
        <Categories />
        <NewItems />
        <CreateAndSell />
        <Footer />
      </section>
    </div>

  )
}

export default App
