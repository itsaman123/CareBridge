import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className='mt-32 pt-16 pb-8 border-t border-neutral-200/50'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
        {/* Brand Section */}
        <div className='lg:col-span-2'>
          <div className='flex items-center gap-2 cursor-pointer group mb-4' onClick={() => navigate('/')}>
            <div className='w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform'>
              <span className='text-white font-bold text-xl'>D</span>
            </div>
            <h1 className='text-2xl font-bold text-gradient'>DoctorHub</h1>
          </div>
          <p className='text-cyan-400/80 leading-relaxed max-w-md mb-6'>
            Your trusted healthcare partner. Connect with experienced medical professionals and manage your health appointments with ease and confidence.
          </p>
          <div className='flex items-center gap-3 bg-gradient-medical rounded-xl p-4 border border-cyan-500/30 max-w-fit'>
            <div className='w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center'>
              <span className='text-black text-xl'>👨‍⚕️</span>
            </div>
            <div>
              <p className='text-sm font-semibold text-cyan-300'>100+ Expert Doctors</p>
              <p className='text-xs text-cyan-400/80'>Verified professionals</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-bold text-cyan-300 mb-6'>Quick Links</h3>
          <ul className='flex flex-col gap-3'>
            <li>
              <button onClick={() => navigate('/')} className='text-cyan-400/80 hover:text-cyan-300 transition-colors text-left'>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/doctors')} className='text-cyan-400/80 hover:text-cyan-300 transition-colors text-left'>
                All Doctors
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/about')} className='text-cyan-400/80 hover:text-cyan-300 transition-colors text-left'>
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/contact')} className='text-cyan-400/80 hover:text-cyan-300 transition-colors text-left'>
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-bold text-cyan-300 mb-6'>Get In Touch</h3>
          <ul className='flex flex-col gap-4'>
            <li className='flex items-start gap-3'>
              <div className='w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5'>
                <span className='text-cyan-300 text-sm'>📞</span>
              </div>
              <div>
                <p className='text-sm font-medium text-cyan-300'>Phone</p>
                <p className='text-sm text-cyan-400/80'>+1-212-456-7890</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <div className='w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5'>
                <span className='text-cyan-300 text-sm'>✉️</span>
              </div>
              <div>
                <p className='text-sm font-medium text-cyan-300'>Email</p>
                <p className='text-sm text-cyan-400/80'>support@doctorhub.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='pt-8 border-t border-cyan-500/20'>
        <p className='text-sm text-center text-cyan-500/70'>
          © {new Date().getFullYear()} DoctorHub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
