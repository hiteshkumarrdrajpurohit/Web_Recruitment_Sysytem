import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { signInUser } from '../ApiServices/user.jsx';

function SignIn() {
    
    // create state to get input from user
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

   // get navigate() function reference
  const navigate = useNavigate()

  // button click event handler
  const onSignIn = async () => {
    if (email.length == 0) {
      toast.warn('please enter email')
    } else if (password.length == 0) {
      toast.warn('please enter password')
    } else {
      // call the Login API
      const result = await signInUser(email, password)
      if (!result) {
        toast.error('Error while login')
      } else {
        if (result['status'] == 'success') {
          // persist the login information like token, username etc
          const { firstName, lastName, token } = result['data']

          // persist the information in session storage
          sessionStorage.setItem('firstName', firstName)
          sessionStorage.setItem('lastName', lastName)
          sessionStorage.setItem('token', token)

          // set the user details in AuthContext
          setUser({ firstName, lastName })

          console.log('result: ', result)
          toast.success('Welcome to application')

          // navigate to home screen
          navigate('/home')
        } else {
          toast.error('Invalid email or password')
        }
      }
    }
  }



  return (
   <div className='container'>
      <h2 className='page-header'>SignIn</h2>

      <div className='form'>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
            placeholder='username@test.com'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
            placeholder='#######'
          />
        </div>
        <div className='mb-3'>
          <div className='mb-3'>
            Don't have an account yet? <Link to='/signUp'>SignUp here</Link>
          </div>
          <button
            onClick={onSignIn}
            className='btn btn-success'
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn