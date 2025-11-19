import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DeleteAccount from './components/DeleteAccount';

function App() {
  return (
    <Router>
      <div className='bg-[#010214]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsConditions />} />
          <Route path='/delete-account' element={<DeleteAccount />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
