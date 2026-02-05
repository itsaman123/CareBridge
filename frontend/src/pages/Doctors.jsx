import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  const specialities = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ]

  return (
    <div className='section-padding'>
      <div className='container-padding'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-cyan-300 mb-4'>
            Browse <span className='text-gradient'>Doctors</span>
          </h1>
          <p className='text-lg text-cyan-400/80 max-w-2xl mx-auto'>
            Find and book appointments with our trusted healthcare professionals.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-8'>
          {/* Filters Sidebar */}
          <div className='lg:w-80 flex-shrink-0'>
            <div className='sticky top-24'>
              <div className='card p-6'>
                <h3 className='text-xl font-semibold text-cyan-300 mb-4'>Specialities</h3>
                <div className='space-y-2'>
                  <button
                    onClick={() => navigate('/doctors')}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${!speciality
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                        : 'hover:bg-cyan-500/10 text-cyan-400'
                      }`}
                  >
                    All Specialities
                  </button>
                  {specialities.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => navigate(`/doctors/${spec}`)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${speciality === spec
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                          : 'hover:bg-cyan-500/10 text-cyan-400'
                        }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className='flex-1'>
            {speciality && (
              <div className='mb-6'>
                <h2 className='text-2xl font-semibold text-cyan-300 mb-2'>
                  {speciality} Specialists
                </h2>
                <p className='text-cyan-400/80'>
                  {filterDoc.length} doctor{filterDoc.length !== 1 ? 's' : ''} found
                </p>
              </div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {filterDoc.map((item, index) => (
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
                      <h3 className='text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors duration-300'>
                        Dr. {item.name}
                      </h3>
                      <p className='text-cyan-400/80 mb-3'>{item.speciality}</p>

                      <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center gap-2 text-sm text-cyan-500/70'>
                          <span>📍</span>
                          <span>Online Consultation</span>
                        </div>
                        <div className='text-cyan-300 font-semibold'>
                          ₹{Math.floor(Math.random() * 500) + 500}
                        </div>
                      </div>

                      {/* Book Button */}
                      <button className='w-full btn-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filterDoc.length === 0 && (
              <div className='text-center py-12'>
                <div className='w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-4xl'>👨‍⚕️</span>
                </div>
                <h3 className='text-xl font-semibold text-cyan-300 mb-2'>No doctors found</h3>
                <p className='text-cyan-400/80 mb-6'>
                  {speciality ? `No ${speciality.toLowerCase()} specialists available at the moment.` : 'No doctors available at the moment.'}
                </p>
                <button
                  onClick={() => navigate('/doctors')}
                  className='btn-primary'
                >
                  View All Doctors
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors