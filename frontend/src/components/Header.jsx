import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative overflow-hidden bg-gradient-hero rounded-3xl shadow-large mb-16 border border-cyan-500/30'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-20'>
                <div className='absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl'></div>
                <div className='absolute bottom-10 right-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-400 rounded-full blur-3xl'></div>
            </div>

            <div className='relative flex flex-col md:flex-row items-center px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20'>

                {/* --------- Header Left --------- */}
                <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 text-cyan-300 z-10'>
                    <div className='space-y-4'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                            Book Appointment <br />
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300'>
                                With Trusted Doctors
                            </span>
                        </h1>
                        <p className='text-lg md:text-xl text-cyan-400/80 max-w-md leading-relaxed'>
                            Connect with experienced healthcare professionals and schedule your appointments with ease and confidence.
                        </p>
                    </div>

                    <div className='flex items-center gap-4 bg-cyan-500/10 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30'>
                        <img className='w-16 h-16 rounded-full object-cover' src={assets.group_profiles} alt="" />
                        <div>
                            <p className='text-sm font-medium text-cyan-300'>Trusted by 10,000+ patients</p>
                            <p className='text-xs text-cyan-400/70'>Verified healthcare professionals</p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4'>
                        <a href='#speciality' className='btn-primary group'>
                            <span>Book appointment</span>
                            <img className='w-4 transition-transform duration-300 group-hover:translate-x-1' src={assets.arrow_icon} alt="" />
                        </a>
                        <button className='btn-secondary'>
                            Learn more
                        </button>
                    </div>
                </div>

                {/* --------- Header Right --------- */}
                <div className='md:w-1/2 relative mt-8 md:mt-0'>
                    <div className='relative'>
                        {/* Floating Elements */}
                        <div className='absolute -top-4 -right-4 w-16 h-16 bg-cyan-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30 animate-bounce-gentle'></div>
                        <div className='absolute -bottom-4 -left-4 w-12 h-12 bg-teal-500/20 rounded-xl backdrop-blur-sm border border-teal-500/30 animate-pulse-gentle'></div>

                        <img
                            className='w-full max-w-md mx-auto md:ml-auto rounded-2xl shadow-2xl border-4 border-cyan-500/30'
                            src={assets.header_img}
                            alt="Healthcare professionals"
                        />

                        {/* Stats Card */}
                        <div className='absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-large border border-cyan-500/30'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center'>
                                    <span className='text-black text-xl'>👨‍⚕️</span>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold text-cyan-300'>100+</p>
                                    <p className='text-xs text-cyan-400/70'>Expert Doctors</p>
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