import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative overflow-hidden bg-gradient-hero rounded-3xl shadow-large mb-16'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl'></div>
                <div className='absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl'></div>
            </div>

            <div className='relative flex flex-col md:flex-row items-center px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20'>

                {/* --------- Header Left --------- */}
                <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 text-white z-10'>
                    <div className='space-y-4'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                            Book Appointment <br />
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-100'>
                                With Trusted Doctors
                            </span>
                        </h1>
                        <p className='text-lg md:text-xl text-indigo-50 max-w-md leading-relaxed'>
                            Connect with experienced healthcare professionals and schedule your appointments with ease and confidence.
                        </p>
                    </div>

                    <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20'>
                        <img className='w-16 h-16 rounded-full object-cover' src={assets.group_profiles} alt="" />
                        <div>
                            <p className='text-sm font-medium'>Trusted by 10,000+ patients</p>
                            <p className='text-xs text-indigo-100'>Verified healthcare professionals</p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4'>
                        <a href='#speciality' className='btn-primary bg-white text-primary-600 hover:shadow-glow-lg group'>
                            <span>Book appointment</span>
                            <img className='w-4 transition-transform duration-300 group-hover:translate-x-1' src={assets.arrow_icon} alt="" />
                        </a>
                        <button className='btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20'>
                            Learn more
                        </button>
                    </div>
                </div>

                {/* --------- Header Right --------- */}
                <div className='md:w-1/2 relative mt-8 md:mt-0'>
                    <div className='relative'>
                        {/* Floating Elements */}
                        <div className='absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 animate-bounce-gentle'></div>
                        <div className='absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-xl backdrop-blur-sm border border-secondary/30 animate-pulse-gentle'></div>

                        <img
                            className='w-full max-w-md mx-auto md:ml-auto rounded-2xl shadow-2xl border-4 border-white/20'
                            src={assets.header_img}
                            alt="Healthcare professionals"
                        />

                        {/* Stats Card */}
                        <div className='absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-large border border-white/20'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center'>
                                    <span className='text-white text-xl'>👨‍⚕️</span>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold text-white'>100+</p>
                                    <p className='text-xs text-indigo-100'>Expert Doctors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header