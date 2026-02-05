import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='section-padding'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-cyan-300 mb-4'>
          Contact <span className='text-gradient'>Us</span>
        </h1>
        <p className='text-lg text-cyan-400/80 max-w-2xl mx-auto'>
          Get in touch with us. We're here to help with any questions or concerns.
        </p>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row gap-12 items-center mb-20'>
        <div className='lg:w-1/2'>
          <div className='card overflow-hidden p-2'>
            <img className='w-full h-auto rounded-xl' src={assets.contact_image} alt="Contact Us" />
          </div>
        </div>
        
        <div className='lg:w-1/2 space-y-8'>
          {/* Office Info */}
          <div className='card p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center'>
                <span className='text-white text-xl'>🏢</span>
              </div>
              <h2 className='text-2xl font-bold text-cyan-300'>Our Office</h2>
            </div>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <span className='text-cyan-400 mt-1'>📍</span>
                <div>
                  <p className='text-cyan-300 font-medium mb-1'>Address</p>
                  <p className='text-cyan-400/80'>
                    54709 Willms Station<br />
                    Suite 350, Washington, USA
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <span className='text-cyan-400 mt-1'>📞</span>
                <div>
                  <p className='text-cyan-300 font-medium mb-1'>Phone</p>
                  <p className='text-cyan-400/80'>(415) 555-0132</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <span className='text-cyan-400 mt-1'>✉️</span>
                <div>
                  <p className='text-cyan-300 font-medium mb-1'>Email</p>
                  <p className='text-cyan-300'>support@doctorhub.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Careers Section */}
          <div className='card p-8 bg-gradient-medical border-cyan-500/30'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center'>
                <span className='text-black text-xl'>💼</span>
              </div>
              <h2 className='text-2xl font-bold text-cyan-300'>Careers at DoctorHub</h2>
            </div>
            <p className='text-cyan-400/90 mb-6'>
              Learn more about our teams and job openings. Join us in revolutionizing healthcare technology.
            </p>
            <button className='btn-primary'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
