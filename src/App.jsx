import './App.css'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <div className='bg-[#010214]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App