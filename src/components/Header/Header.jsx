import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: 'About Us', slug: "/aboutus", active: !authStatus },
    { name: 'Contact Us', slug: "/contactus", active: !authStatus },
    { name: 'Login', slug: "/login", active: !authStatus },
    { name: 'Signup', slug: "/signup", active: !authStatus },
    { name: 'All Posts', slug: "/all-posts", active: authStatus },
    { name: 'Add Post', slug: "/add-post", active: authStatus },
  ]

  const handleNavClick = (slug) => {
    setMobileMenuOpen(false) // close menu on click (for mobile)
    navigate(slug)
  }

  return (
    <header className='bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-lg shadow-black/5'>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <Container>
        <nav className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
          
          {/* Logo */}
          <div className='flex items-center space-x-3 group'>
            <div className="w-24 h-10 flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Link to='/'><Logo width='70px' /></Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.slug)}
                    className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'
                  >
                    {item.name}
                  </button>
                </li>
              )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='text-gray-700 hover:text-blue-600 focus:outline-none'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg animate-slide-down z-50">
              <ul className='flex flex-col px-4 py-4 space-y-3'>
                {navItems.map((item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavClick(item.slug)}
                        className='block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'
                      >
                        {item.name}
                      </button>
                    </li>
                  )
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </div>
          )}
        </nav>
      </Container>
    </header>
  )
}

export default Header
