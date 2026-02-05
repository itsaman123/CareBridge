import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyAppointments = () => {

    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([])
    const [payment, setPayment] = useState('')

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Getting User Appointments Data Using API
    const getUserAppointments = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
            setAppointments(data.appointments.reverse())

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to cancel appointment Using API
    const cancelAppointment = async (appointmentId) => {

        try {

            const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {

                console.log(response)

                try {
                    const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { token } });
                    if (data.success) {
                        navigate('/my-appointments')
                        getUserAppointments()
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    // Function to make payment using razorpay
    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
            if (data.success) {
                initPay(data.order)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to make payment using stripe
    const appointmentStripe = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { appointmentId }, { headers: { token } })
            if (data.success) {
                const { session_url } = data
                window.location.replace(session_url)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }



    useEffect(() => {
        if (token) {
            getUserAppointments()
        }
    }, [token])

    return (
        <div className='section-padding'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-cyan-300 mb-2'>My Appointments</h1>
                <p className='text-cyan-400/80'>Manage and track all your scheduled appointments</p>
            </div>

            {appointments.length === 0 ? (
                <div className='card p-12 text-center'>
                    <div className='w-24 h-24 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-6'>
                        <span className='text-4xl'>📅</span>
                    </div>
                    <h3 className='text-xl font-semibold text-cyan-300 mb-2'>No Appointments Yet</h3>
                    <p className='text-cyan-400/80 mb-6'>You haven't booked any appointments. Start by browsing our doctors.</p>
                    <button onClick={() => navigate('/doctors')} className='btn-primary'>
                        Browse Doctors
                    </button>
                </div>
            ) : (
                <div className='space-y-6'>
                    {appointments.map((item, index) => (
                        <div key={index} className='card p-6 hover:shadow-medium transition-all duration-300'>
                            <div className='flex flex-col lg:flex-row gap-6'>
                                {/* Doctor Image */}
                                <div className='flex-shrink-0'>
                                    <img className='w-32 h-32 rounded-xl object-cover border-2 border-primary-100' src={item.docData.image} alt={item.docData.name} />
                                </div>

                                {/* Doctor Info */}
                                <div className='flex-1'>
                                    <h3 className='text-xl font-bold text-cyan-300 mb-1'>{item.docData.name}</h3>
                                    <p className='text-cyan-400/80 mb-4'>{item.docData.speciality}</p>
                                    
                                    <div className='space-y-2 mb-4'>
                                        <div className='flex items-start gap-2'>
                                            <span className='text-cyan-400 mt-0.5'>📍</span>
                                            <div>
                                                <p className='text-sm font-medium text-cyan-300'>Address</p>
                                                <p className='text-sm text-cyan-400/80'>{item.docData.address.line1}</p>
                                                <p className='text-sm text-cyan-400/80'>{item.docData.address.line2}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-start gap-2'>
                                            <span className='text-cyan-400 mt-0.5'>🕐</span>
                                            <div>
                                                <p className='text-sm font-medium text-cyan-300'>Date & Time</p>
                                                <p className='text-sm text-cyan-400/80'>{slotDateFormat(item.slotDate)} at {item.slotTime}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Badge */}
                                    <div className='flex items-center gap-2 mb-4'>
                                        {item.isCompleted && (
                                            <span className='badge badge-success'>Completed</span>
                                        )}
                                        {item.cancelled && (
                                            <span className='badge badge-error'>Cancelled</span>
                                        )}
                                        {!item.cancelled && item.payment && !item.isCompleted && (
                                            <span className='badge badge-secondary'>Paid</span>
                                        )}
                                        {!item.cancelled && !item.payment && !item.isCompleted && (
                                            <span className='badge badge-warning'>Pending Payment</span>
                                        )}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className='flex flex-col gap-3 lg:min-w-[200px]'>
                                    {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
                                        <button 
                                            onClick={() => setPayment(item._id)} 
                                            className='btn-primary w-full'
                                        >
                                            Pay Online
                                        </button>
                                    )}
                                    
                                    {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                                        <>
                                            <button 
                                                onClick={() => appointmentStripe(item._id)} 
                                                className='btn-secondary w-full flex items-center justify-center gap-2'
                                            >
                                                <img className='h-5' src={assets.stripe_logo} alt="Stripe" />
                                                Pay with Stripe
                                            </button>
                                            <button 
                                                onClick={() => appointmentRazorpay(item._id)} 
                                                className='btn-secondary w-full flex items-center justify-center gap-2'
                                            >
                                                <img className='h-5' src={assets.razorpay_logo} alt="Razorpay" />
                                                Pay with Razorpay
                                            </button>
                                        </>
                                    )}

                                    {!item.cancelled && !item.isCompleted && (
                                        <button 
                                            onClick={() => cancelAppointment(item._id)} 
                                            className='px-4 py-2 border-2 border-error text-error rounded-xl font-medium hover:bg-error hover:text-white transition-all duration-300'
                                        >
                                            Cancel Appointment
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyAppointments