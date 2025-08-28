import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <section className='py-20'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold text-neutral-800 mb-4'>
                    Top <span className='text-gradient'>Doctors</span> to Book
                </h2>
                <p className='text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed'>
                    Connect with our most trusted and highly-rated healthcare professionals.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4'>
                {doctors.slice(0, 8).map((item, index) => (
                    <div
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                        className='group cursor-pointer'
                        key={index}
                    >
                        <div className='card card-hover overflow-hidden'>
                            {/* Doctor Image */}
                            <div className='relative h-48 bg-gradient-to-br from-primary-50 to-indigo-100 overflow-hidden'>
                                <img
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>

                                {/* Availability Badge */}
                                <div className='absolute top-4 right-4'>
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${item.available
                                            ? 'bg-gradient-secondary text-white shadow-lg'
                                            : 'bg-neutral-500 text-white'
                                        }`}>
                                        <div className={`w-2 h-2 rounded-full ${item.available ? 'bg-white' : 'bg-neutral-300'
                                            }`}></div>
                                        <span>{item.available ? 'Available' : "Not Available"}</span>
                                    </div>
                                </div>

                                {/* Rating Badge */}
                                <div className='absolute bottom-4 left-4'>
                                    <div className='flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-soft'>
                                        <span className='text-accent text-sm'>⭐</span>
                                        <span className='text-sm font-medium text-neutral-700'>4.8</span>
                                    </div>
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className='p-6'>
                                <h3 className='text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors duration-300'>
                                    Dr. {item.name}
                                </h3>
                                <p className='text-neutral-600 mb-3'>{item.speciality}</p>

                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2 text-sm text-neutral-500'>
                                        <span>📍</span>
                                        <span>Online Consultation</span>
                                    </div>
                                    <div className='text-primary-600 font-semibold'>
                                        ₹{Math.floor(Math.random() * 500) + 500}
                                    </div>
                                </div>

                                {/* Book Button */}
                                <button className='w-full mt-4 btn-primary bg-gradient-primary text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center mt-12'>
                <button
                    onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
                    className='btn-secondary bg-gradient-primary text-white hover:shadow-glow-lg'
                >
                    View All Doctors
                </button>
            </div>
        </section>
    )
}

export default TopDoctors