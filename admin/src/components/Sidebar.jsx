import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  return (
    <aside className='min-h-screen w-[72px] md:w-64 bg-black/80 border-r border-cyan-500/30 backdrop-blur-md'>
      {aToken && (
        <ul className='text-cyan-400 mt-5'>
          <NavLink
            to='/admin-dashboard'
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-56 cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/10 border-r-4 border-cyan-400 text-cyan-200'
                  : 'hover:bg-cyan-500/5'
              }`
            }
          >
            <img
              className='min-w-5'
              style={{ filter: 'brightness(0) invert(1)' }}
              src={assets.home_icon}
              alt='Dashboard'
            />
            <p className='hidden md:block text-sm font-medium'>Dashboard</p>
          </NavLink>

          <NavLink
            to='/all-appointments'
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-56 cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/10 border-r-4 border-cyan-400 text-cyan-200'
                  : 'hover:bg-cyan-500/5'
              }`
            }
          >
            <img
              className='min-w-5'
              style={{ filter: 'brightness(0) invert(1)' }}
              src={assets.appointment_icon}
              alt='Appointments'
            />
            <p className='hidden md:block text-sm font-medium'>Appointments</p>
          </NavLink>

          <NavLink
            to='/add-doctor'
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-56 cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/10 border-r-4 border-cyan-400 text-cyan-200'
                  : 'hover:bg-cyan-500/5'
              }`
            }
          >
            <img
              className='min-w-5'
              style={{ filter: 'brightness(0) invert(1)' }}
              src={assets.add_icon}
              alt='Add Doctor'
            />
            <p className='hidden md:block text-sm font-medium'>Add Doctor</p>
          </NavLink>

          <NavLink
            to='/doctor-list'
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-56 cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/10 border-r-4 border-cyan-400 text-cyan-200'
                  : 'hover:bg-cyan-500/5'
              }`
            }
          >
            <img
              className='min-w-5'
              style={{ filter: 'brightness(0) invert(1)' }}
              src={assets.people_icon}
              alt='Doctors List'
            />
            <p className='hidden md:block text-sm font-medium'>Doctors List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className='text-cyan-400 mt-5'>
          <NavLink
            to='/doctor-dashboard'
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-56 cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/10 border-r-4 border-cyan-400 text-cyan-200'
                  : 'hover:bg-cyan-500/5'
              }`
            }
          >
            <img
              className='min-w-5'
              style={{ filter: 'brightness(0) invert(1)' }}
              src={assets.home_icon}
              alt='Dashboard'
            />
            <p className='hidden md:block text-sm font-medium'>Dashboard</p>
          </NavLink>

          <NavLink
            to='/doctor-appointments'
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-56 cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/10 border-r-4 border-cyan-400 text-cyan-200'
                  : 'hover:bg-cyan-500/5'
              }`
            }
          >
            <img
              className='min-w-5'
              style={{ filter: 'brightness(0) invert(1)' }}
              src={assets.appointment_icon}
              alt='Appointments'
            />
            <p className='hidden md:block text-sm font-medium'>Appointments</p>
          </NavLink>

          <NavLink
            to='/doctor-profile'
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-6 md:min-w-56 cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/10 border-r-4 border-cyan-400 text-cyan-200'
                  : 'hover:bg-cyan-500/5'
              }`
            }
          >
            <img
              className='min-w-5'
              style={{ filter: 'brightness(0) invert(1)' }}
              src={assets.people_icon}
              alt='Profile'
            />
            <p className='hidden md:block text-sm font-medium'>Profile</p>
          </NavLink>
        </ul>
      )}
    </aside>
  )
}

export default Sidebar