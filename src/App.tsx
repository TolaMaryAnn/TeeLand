import './index.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import NewItems from './Components/NewItems';
import CreateAndSell from './Components/CreateAndSell';
import Footer from './Components/Footer';
function App() {
  return (

    <div>
   
    <section
      className="bg-[url('/src/assets/galaxy-background-9060703_1280.jpg')] bg-cover bg-center bg-no-repeat min-h-screen"
    >
    <Navbar/>
    <Hero/>
    </section>

   
    <section className=''>
    <Categories/>
    <NewItems/>
    <CreateAndSell/>
    <Footer/>
    </section>
   
  </div>

  )
}

export default App
