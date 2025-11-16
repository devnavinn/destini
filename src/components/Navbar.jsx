import React from 'react'
import { Link } from 'react-router-dom'  // Import Link

const Navbar = () => {
    return (
        <header className='px-6'>
            <nav className='flex justify-between items-center'>
                <Link to="/">  {/* Link wraps the logo */}
                    <img src="/logo.png" alt="Logo" className='w-12' />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
