import { Instagram, Linkedin, XIcon } from 'lucide-react'
import { Link } from 'react-router-dom' // Import Link from react-router-dom

const Footer = () => {
    return (
        <footer className="bg-[#010214] text-gray-400 py-6 mt-10">
            <div className='p-5 flex justify-between items-center'>
                <div>
                    <Link to="/">
                        <img src="/logo.png" alt="Logo" className='w-10 md:w-14' />
                    </Link>
                </div>
                <div className='flex space-x-4 items-center'>
                    <a href="#" className="hover:underline">
                        <Linkedin />
                    </a>
                    <div className='h-6 border-l border-white'></div>
                    <a href="#" className="hover:underline">
                        <Instagram />
                    </a>
                    <div className='h-6 border-l border-white'></div>
                    <a href='#' className="hover:underline">
                        <XIcon />
                    </a>
                </div>
            </div>
            <div className='text-center mt-4 space-x-6'>
                <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                </Link>
                <Link to="/terms-conditions" className="hover:underline">
                    Terms & Conditions
                </Link>
            </div>
        </footer>
    )
}

export default Footer
