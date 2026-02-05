import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='section-padding'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-cyan-300 mb-4'>
          About <span className='text-gradient'>Us</span>
        </h1>
        <p className='text-lg text-cyan-400/80 max-w-2xl mx-auto'>
          Your trusted partner in managing healthcare needs conveniently and efficiently
        </p>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row gap-12 mb-20'>
        <div className='lg:w-1/2'>
          <div className='card overflow-hidden p-2'>
            <img className='w-full h-auto rounded-xl' src={assets.about_image} alt="About Us" />
          </div>
        </div>
        <div className='lg:w-1/2 flex flex-col justify-center gap-6'>
          <p className='text-cyan-400/80 leading-relaxed text-base'>
            Welcome to DoctorHub, your trusted partner in managing your healthcare needs conveniently and efficiently. 
            At DoctorHub, we understand the challenges individuals face when it comes to scheduling doctor appointments 
            and managing their health records.
          </p>
          <p className='text-cyan-400/80 leading-relaxed text-base'>
            DoctorHub is committed to excellence in healthcare technology. We continuously strive to enhance our platform, 
            integrating the latest advancements to improve user experience and deliver superior service. Whether you're 
            booking your first appointment or managing ongoing care, DoctorHub is here to support you every step of the way.
          </p>
          <div className='bg-gradient-medical rounded-xl p-6 border border-cyan-500/30'>
            <h3 className='text-xl font-bold text-cyan-300 mb-3'>Our Vision</h3>
            <p className='text-cyan-400/90 leading-relaxed'>
              Our vision at DoctorHub is to create a seamless healthcare experience for every user. We aim to bridge the 
              gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='mb-12'>
        <h2 className='text-3xl font-bold text-cyan-300 mb-12 text-center'>
          Why <span className='text-gradient'>Choose Us</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='card p-8 hover:shadow-medium transition-all duration-300 group cursor-pointer'>
            <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <span className='text-black text-2xl'>⚡</span>
            </div>
            <h3 className='text-xl font-bold text-cyan-300 mb-3'>Efficiency</h3>
            <p className='text-cyan-400/80 leading-relaxed'>
              Streamlined appointment scheduling that fits into your busy lifestyle.
            </p>
          </div>
          <div className='card p-8 hover:shadow-medium transition-all duration-300 group cursor-pointer'>
            <div className='w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <span className='text-black text-2xl'>🎯</span>
            </div>
            <h3 className='text-xl font-bold text-cyan-300 mb-3'>Convenience</h3>
            <p className='text-cyan-400/80 leading-relaxed'>
              Access to a network of trusted healthcare professionals in your area.
            </p>
          </div>
          <div className='card p-8 hover:shadow-medium transition-all duration-300 group cursor-pointer'>
            <div className='w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
              <span className='text-black text-2xl'>✨</span>
            </div>
            <h3 className='text-xl font-bold text-cyan-300 mb-3'>Personalization</h3>
            <p className='text-cyan-400/80 leading-relaxed'>
              Tailored recommendations and reminders to help you stay on top of your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
