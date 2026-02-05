import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {

      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className='min-h-[80vh] flex items-center justify-center py-12'>
      <div className='w-full max-w-md'>
        <form onSubmit={onSubmitHandler} className='card p-8 md:p-10 space-y-6'>
          {/* Header */}
          <div className='text-center mb-8'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-glow'>
              <span className='text-black text-2xl font-bold'>D</span>
            </div>
            <h2 className='text-3xl font-bold text-cyan-300 mb-2'>
              {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className='text-cyan-400/80'>
              {state === 'Sign Up' 
                ? 'Join us to book your appointments easily' 
                : 'Sign in to continue to your account'}
            </p>
          </div>

          {/* Form Fields */}
          <div className='space-y-5'>
            {state === 'Sign Up' && (
              <div className='space-y-2'>
                <label className='text-sm font-medium text-cyan-300'>Full Name</label>
                <input 
                  onChange={(e) => setName(e.target.value)} 
                  value={name} 
                  className='form-input focus:border-cyan-400' 
                  type="text" 
                  placeholder="Enter your full name"
                  required 
                />
              </div>
            )}
            
            <div className='space-y-2'>
              <label className='text-sm font-medium text-cyan-300'>Email Address</label>
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                className='form-input focus:border-cyan-400' 
                type="email" 
                placeholder="Enter your email"
                required 
              />
            </div>
            
            <div className='space-y-2'>
              <label className='text-sm font-medium text-cyan-300'>Password</label>
              <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                className='form-input focus:border-cyan-400' 
                type="password" 
                placeholder="Enter your password"
                required 
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className='btn-primary w-full text-base font-semibold py-3.5'
          >
            {state === 'Sign Up' ? 'Create Account' : 'Sign In'}
          </button>

          {/* Toggle State */}
          <div className='text-center pt-4 border-t border-cyan-500/20'>
            <p className='text-sm text-cyan-400/80'>
              {state === 'Sign Up' ? (
                <>Already have an account?{' '}
                  <span 
                    onClick={() => setState('Login')} 
                    className='text-cyan-300 font-semibold cursor-pointer hover:text-cyan-200 transition-colors'
                  >
                    Sign In
                  </span>
                </>
              ) : (
                <>Don't have an account?{' '}
                  <span 
                    onClick={() => setState('Sign Up')} 
                    className='text-cyan-300 font-semibold cursor-pointer hover:text-cyan-200 transition-colors'
                  >
                    Create Account
                  </span>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login