import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <nav className='sticky top-0 z-50 glass backdrop-blur-md border-b border-white/20 mb-8'>
      <div className='flex items-center justify-between text-sm py-4 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <div className='flex items-center gap-2 cursor-pointer group' onClick={() => navigate('/')}>
          <div className='w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow'>
            <span className='text-white font-bold text-lg'>D</span>
          </div>
          <h1 className='text-xl font-bold text-gradient'>DoctorHub</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className='md:flex items-center gap-8 font-medium hidden'>
          <NavLink to='/' className='group'>
            <li className='py-2 px-3 rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-gradient-primary w-0 group-hover:w-full transition-all duration-300 m-auto' />
          </NavLink>
          <NavLink to='/doctors' className='group'>
            <li className='py-2 px-3 rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-gradient-primary w-0 group-hover:w-full transition-all duration-300 m-auto' />
          </NavLink>
          <NavLink to='/about' className='group'>
            <li className='py-2 px-3 rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-gradient-primary w-0 group-hover:w-full transition-all duration-300 m-auto' />
          </NavLink>
          <NavLink to='/contact' className='group'>
            <li className='py-2 px-3 rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-gradient-primary w-0 group-hover:w-full transition-all duration-300 m-auto' />
          </NavLink>
        </ul>

        {/* User Actions */}
        <div className='flex items-center gap-4'>
          {
            token && userData
              ? <div className='flex items-center gap-3 cursor-pointer group relative'>
                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 hover:bg-white/20 transition-all duration-300 border border-white/20'>
                  <img className='w-8 h-8 rounded-full object-cover border-2 border-white/20' src={userData.image} alt="" />
                  <span className='text-sm font-medium text-neutral-700 hidden sm:block'>{userData.name}</span>
                  <img className='w-3 transition-transform duration-300 group-hover:rotate-180' src={assets.dropdown_icon} alt="" />
                </div>
                <div className='absolute top-full right-0 pt-2 text-base font-medium text-neutral-700 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                  <div className='glass rounded-xl shadow-large border border-white/20 min-w-48 p-2'>
                    <div onClick={() => navigate('/my-profile')} className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 cursor-pointer transition-all duration-200'>
                      <div className='w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center'>
                        <span className='text-white text-sm'>👤</span>
                      </div>
                      <span>My Profile</span>
                    </div>
                    <div onClick={() => navigate('/my-appointments')} className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary-50 cursor-pointer transition-all duration-200'>
                      <div className='w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center'>
                        <span className='text-white t '>📅</span>
                      </div>
                      <span>My Appointments</span>
                    </div>
                    <hr className='border-neutral-200 my-2' />
                    <div onClick={logout} className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-error/10 cursor-pointer transition-all duration-200 text-error'>
                      <div className='w-8 h-8 bg-error rounded-lg flex items-center justify-center'>
                        <span className='text-white text-sm'>🚪</span>
                      </div>
                      <span>Logout</span>
                    </div>
                  </div>
                </div>
              </div>
              : <button onClick={() => navigate('/login')} className='btn-primary hidden md:block'>
                Create account
              </button>
          }
          <button onClick={() => setShowMenu(true)} className='md:hidden p-2 rounded-lg hover:bg-primary-50 transition-all duration-300'>
            <img className='w-6' src={assets.menu_icon} alt="" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={() => setShowMenu(false)}></div>
          <div className={`absolute right-0 top-0 bottom-0 w-80 glass p-6 transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex items-center justify-between mb-8'>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow'>
                  <span className='text-white font-bold text-lg'>D</span>
                </div>
                <h1 className='text-xl font-bold text-gradient'>DoctorHub</h1>
              </div>
              <button onClick={() => setShowMenu(false)} className='p-2 rounded-lg hover:bg-white/10 transition-all duration-300'>
                <img src={assets.cross_icon} className='w-6' alt="" />
              </button>
            </div>
            <ul className='flex flex-col gap-2'>
              <NavLink onClick={() => setShowMenu(false)} to='/' className='block'>
                <div className='px-4 py-3 rounded-lg hover:bg-primary-50 transition-all duration-300 text-lg font-medium'>HOME</div>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/doctors' className='block'>
                <div className='px-4 py-3 rounded-lg hover:bg-primary-50 transition-all duration-300 text-lg font-medium'>ALL DOCTORS</div>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/about' className='block'>
                <div className='px-4 py-3 rounded-lg hover:bg-primary-50 transition-all duration-300 text-lg font-medium'>ABOUT</div>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/contact' className='block'>
                <div className='px-4 py-3 rounded-lg hover:bg-primary-50 transition-all duration-300 text-lg font-medium'>CONTACT</div>
              </NavLink>
            </ul>
            {!token && (
              <div className='mt-8'>
                <button onClick={() => { navigate('/login'); setShowMenu(false) }} className='btn-primary w-full'>
                  Create account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar