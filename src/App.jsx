import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className='bg-[#010214]'>
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
