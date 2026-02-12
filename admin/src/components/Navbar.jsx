import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    3 && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <nav className='sticky top-0 z-40 glass border-b border-cyan-500/30 shadow-soft'>
      <div className='flex justify-between items-center px-4 sm:px-10 py-3'>
        <div className='flex items-center gap-3 text-xs'>
          <img
            onClick={() => navigate('/')}
            className='w-32 sm:w-40 cursor-pointer'
            src={assets.admin_logo}
            alt="DoctorHub Admin"
          />
          <p className='px-3 py-1 rounded-full border border-cyan-500/60 text-cyan-300 text-xs font-medium bg-black/60'>
            {aToken ? 'Admin' : 'Doctor'}
          </p>
        </div>
        <button
          onClick={logout}
          className='btn-primary text-sm px-8 py-2'
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar