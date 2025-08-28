import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <section id='speciality' className='py-20'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold text-neutral-800 mb-4'>
                    Find by <span className='text-gradient'>Speciality</span>
                </h2>
                <p className='text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed'>
                    Choose from our comprehensive range of medical specialties and connect with expert healthcare professionals.
                </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4'>
                {specialityData.map((item, index) => (
                    <Link
                        to={`/doctors/${item.speciality}`}
                        onClick={() => scrollTo(0, 0)}
                        className='group block'
                        key={index}
                    >
                        <div className='card card-hover p-6 text-center transition-all duration-500 group-hover:shadow-glow'>
                            <div className='relative mb-4'>
                                <div className='w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft'>
                                    <img className='w-12 h-12 object-contain' src={item.image} alt={item.speciality} />
                                </div>
                                <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow-secondary'>
                                    <span className='text-white text-xs'>→</span>
                                </div>
                            </div>
                            <h3 className='font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors duration-300'>
                                {item.speciality}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Decorative Elements */}
            <div className='relative mt-20'>
                <div className='absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl'></div>
                <div className='absolute top-1/2 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl'></div>
            </div>
        </section>
    )
}

export default SpecialityMenu