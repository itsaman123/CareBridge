import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [image, setImage] = useState(false)

    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {

        try {

            const formData = new FormData();

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    return userData ? (
        <div className='max-w-4xl mx-auto section-padding'>
            <div className='card p-8 md:p-10'>
                {/* Header Section */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pb-8 border-b border-neutral-200'>
                    {/* Profile Image */}
                    <div className='relative'>
                        {isEdit ? (
                            <label htmlFor='image' className='cursor-pointer group'>
                                <div className='relative'>
                                    <img 
                                        className='w-32 h-32 rounded-2xl object-cover border-4 border-primary-200 group-hover:border-primary-400 transition-colors' 
                                        src={image ? URL.createObjectURL(image) : userData.image} 
                                        alt="Profile" 
                                    />
                                    <div className='absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                        <img className='w-8 h-8' src={assets.upload_icon} alt="Upload" />
                                    </div>
                                </div>
                                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden accept="image/*" />
                            </label>
                        ) : (
                            <img className='w-32 h-32 rounded-2xl object-cover border-4 border-primary-200' src={userData.image} alt="Profile" />
                        )}
                    </div>

                    {/* Name Section */}
                    <div className='flex-1'>
                        {isEdit ? (
                            <input 
                                className='text-3xl font-bold text-cyan-300 bg-transparent border-b-2 border-cyan-500/50 focus:border-cyan-400 focus:outline-none w-full max-w-md' 
                                type="text" 
                                onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} 
                                value={userData.name} 
                            />
                        ) : (
                            <h1 className='text-3xl font-bold text-cyan-300 mb-2'>{userData.name}</h1>
                        )}
                        <p className='text-cyan-400/80'>{userData.email}</p>
                    </div>

                    {/* Edit Button */}
                    <div>
                        {isEdit ? (
                            <button 
                                onClick={updateUserProfileData} 
                                className='btn-primary px-6 py-2.5'
                            >
                                Save Changes
                            </button>
                        ) : (
                            <button 
                                onClick={() => setIsEdit(true)} 
                                className='btn-secondary px-6 py-2.5'
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>

                {/* Contact Information */}
                <div className='mb-8'>
                    <h2 className='text-xl font-bold text-cyan-300 mb-6 flex items-center gap-2'>
                        <div className='w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center'>
                            <span className='text-cyan-300'>📞</span>
                        </div>
                        Contact Information
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='text-sm font-medium text-cyan-400/80 mb-2 block'>Email</label>
                            <p className='text-cyan-300 font-medium'>{userData.email}</p>
                        </div>
                        <div>
                            <label className='text-sm font-medium text-cyan-400/80 mb-2 block'>Phone</label>
                            {isEdit ? (
                                <input 
                                    className='form-input w-full' 
                                    type="text" 
                                    onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                                    value={userData.phone} 
                                />
                            ) : (
                                <p className='text-cyan-300 font-medium'>{userData.phone}</p>
                            )}
                        </div>
                        <div className='md:col-span-2'>
                            <label className='text-sm font-medium text-cyan-400/80 mb-2 block'>Address</label>
                            {isEdit ? (
                                <div className='space-y-3'>
                                    <input 
                                        className='form-input w-full' 
                                        type="text" 
                                        placeholder="Address Line 1"
                                        onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                                        value={userData.address.line1} 
                                    />
                                    <input 
                                        className='form-input w-full' 
                                        type="text" 
                                        placeholder="Address Line 2"
                                        onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                                        value={userData.address.line2} 
                                    />
                                </div>
                            ) : (
                                <p className='text-cyan-300'>
                                    {userData.address.line1}<br />
                                    {userData.address.line2}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Basic Information */}
                <div>
                    <h2 className='text-xl font-bold text-cyan-300 mb-6 flex items-center gap-2'>
                        <div className='w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center'>
                            <span className='text-cyan-300'>👤</span>
                        </div>
                        Basic Information
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='text-sm font-medium text-cyan-400/80 mb-2 block'>Gender</label>
                            {isEdit ? (
                                <select 
                                    className='form-input w-full' 
                                    onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} 
                                    value={userData.gender}
                                >
                                    <option value="Not Selected">Not Selected</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            ) : (
                                <p className='text-cyan-300 font-medium'>{userData.gender}</p>
                            )}
                        </div>
                        <div>
                            <label className='text-sm font-medium text-cyan-400/80 mb-2 block'>Date of Birth</label>
                            {isEdit ? (
                                <input 
                                    className='form-input w-full' 
                                    type='date' 
                                    onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} 
                                    value={userData.dob} 
                                />
                            ) : (
                                <p className='text-cyan-300 font-medium'>{userData.dob || 'Not set'}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}

export default MyProfile