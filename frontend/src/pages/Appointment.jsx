import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'

const Appointment = () => {

    const { docId } = useParams()
    const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(false)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const navigate = useNavigate()

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId)
        setDocInfo(docInfo)
    }

    const getAvailableSolts = async () => {

        setDocSlots([])

        // getting current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {

            // getting date with index 
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            // setting hours 
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = [];


            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

                if (isSlotAvailable) {

                    // Add slot to array
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }

                // Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDocSlots(prev => ([...prev, timeSlots]))

        }

    }

    const bookAppointment = async () => {

        if (!token) {
            toast.warning('Login to book appointment')
            return navigate('/login')
        }

        const date = docSlots[slotIndex][0].datetime

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const slotDate = day + "_" + month + "_" + year

        try {

            const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                getDoctosData()
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo()
        }
    }, [doctors, docId])

    useEffect(() => {
        if (docInfo) {
            getAvailableSolts()
        }
    }, [docInfo])

    return docInfo ? (
        <div className='section-padding'>
            {/* ---------- Doctor Details ----------- */}
            <div className='flex flex-col lg:flex-row gap-8 mb-12'>
                {/* Doctor Image */}
                <div className='lg:w-80 flex-shrink-0'>
                    <div className='card overflow-hidden p-2'>
                        <img className='w-full h-auto rounded-xl object-cover' src={docInfo.image} alt={docInfo.name} />
                    </div>
                </div>

                {/* Doctor Info Card */}
                <div className='flex-1 card p-8'>
                    {/* Header */}
                    <div className='flex items-start justify-between mb-6'>
                        <div>
                            <div className='flex items-center gap-3 mb-2'>
                                <h1 className='text-3xl font-bold text-cyan-300'>{docInfo.name}</h1>
                                <img className='w-6 h-6' src={assets.verified_icon} alt="Verified" />
                            </div>
                            <div className='flex items-center gap-3 flex-wrap'>
                                <p className='text-cyan-400/80'>{docInfo.degree}</p>
                                <span className='text-cyan-500/50'>•</span>
                                <p className='text-cyan-400/80'>{docInfo.speciality}</p>
                                <span className='badge badge-primary'>{docInfo.experience}</span>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-3'>
                            <div className='w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center'>
                                <img className='w-4 h-4' src={assets.info_icon} alt="" />
                            </div>
                            <h3 className='text-lg font-semibold text-cyan-300'>About Doctor</h3>
                        </div>
                        <p className='text-cyan-400/80 leading-relaxed'>{docInfo.about}</p>
                    </div>

                    {/* Fee Section */}
                    <div className='flex items-center gap-4 p-4 bg-gradient-medical rounded-xl border border-cyan-500/30'>
                        <div className='w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center'>
                            <span className='text-black text-xl'>💰</span>
                        </div>
                        <div>
                            <p className='text-sm text-cyan-400/80'>Appointment Fee</p>
                            <p className='text-2xl font-bold text-cyan-300'>{currencySymbol}{docInfo.fees}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Section */}
            <div className='card p-8 mb-12'>
                <h2 className='text-2xl font-bold text-cyan-300 mb-6'>Select Date & Time</h2>
                
                {/* Date Selection */}
                <div className='mb-8'>
                    <p className='text-sm font-medium text-cyan-400/80 mb-4'>Choose Date</p>
                    <div className='flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-transparent'>
                        {docSlots.length && docSlots.map((item, index) => (
                            <button
                                onClick={() => setSlotIndex(index)}
                                key={index}
                                className={`flex-shrink-0 text-center py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                                    slotIndex === index
                                        ? 'bg-gradient-primary text-black shadow-glow scale-105'
                                        : 'bg-black/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10'
                                }`}
                            >
                                <p className='text-xs opacity-80'>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p className='text-xl font-bold mt-1'>{item[0] && item[0].datetime.getDate()}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Time Slots */}
                <div className='mb-8'>
                    <p className='text-sm font-medium text-cyan-400/80 mb-4'>Available Time Slots</p>
                    <div className='flex flex-wrap gap-3'>
                        {docSlots.length && docSlots[slotIndex].map((item, index) => (
                            <button
                                onClick={() => setSlotTime(item.time)}
                                key={index}
                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    item.time === slotTime
                                        ? 'bg-gradient-primary text-black shadow-glow scale-105'
                                        : 'bg-black/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10'
                                }`}
                            >
                                {item.time.toLowerCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Book Button */}
                <button
                    onClick={bookAppointment}
                    disabled={!slotTime}
                    className={`w-full btn-primary text-base font-semibold py-4 ${
                        !slotTime ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    {slotTime ? 'Book Appointment' : 'Select a time slot to continue'}
                </button>
            </div>

            {/* Related Doctors */}
            <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
        </div>
    ) : null
}

export default Appointment