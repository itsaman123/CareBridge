import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <section className='py-20'>
            <div className='relative overflow-hidden bg-gradient-hero rounded-3xl shadow-large'>
                {/* Background Pattern */}
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl'></div>
                    <div className='absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl'></div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl'></div>
                </div>

                <div className='relative flex flex-col lg:flex-row items-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20'>

                    {/* ------- Left Side ------- */}
                    <div className='lg:w-1/2 text-white z-10 mb-8 lg:mb-0'>
                        <div className='space-y-6'>
                            <div className='space-y-4'>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                                    Book Appointment <br />
                                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-100'>
                                        With 100+ Trusted Doctors
                                    </span>
                                </h2>
                                <p className='text-lg md:text-xl text-indigo-50 max-w-lg leading-relaxed'>
                                    Experience seamless healthcare booking with our verified network of medical professionals.
                                </p>
                            </div>

                            {/* Features */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20'>
                                    <div className='w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center'>
                                        <span className='text-white text-lg'>⚡</span>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-sm'>Instant Booking</p>
                                        <p className='text-xs text-indigo-100'>Quick & Easy</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20'>
                                    <div className='w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center'>
                                        <span className='text-white text-lg'>🛡️</span>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-sm'>Verified Doctors</p>
                                        <p className='text-xs text-indigo-100'>100% Trusted</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row gap-4'>
                                <button
                                    onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                                    className='btn-primary bg-white text-primary-600 hover:shadow-glow-lg group'
                                >
                                    <span>Create Account</span>
                                    <span className='transition-transform duration-300 group-hover:translate-x-1'>→</span>
                                </button>
                                <button className='btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ------- Right Side ------- */}
                    <div className='lg:w-1/2 relative'>
                        <div className='relative'>
                            {/* Floating Elements */}
                            <div className='absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 animate-bounce-gentle'></div>
                            <div className='absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-xl backdrop-blur-sm border border-secondary/30 animate-pulse-gentle'></div>

                            <img
                                className='w-full max-w-md mx-auto lg:ml-auto rounded-2xl shadow-2xl border-4 border-white/20'
                                src={assets.appointment_img}
                                alt="Healthcare appointment"
                            />

                            {/* Stats Card */}
                            <div className='absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-large border border-white/20'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center'>
                                        <span className='text-white text-xl'>📈</span>
                                    </div>
                                    <div>
                                        <p className='text-2xl font-bold text-white'>10K+</p>
                                        <p className='text-xs text-indigo-100'>Happy Patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner