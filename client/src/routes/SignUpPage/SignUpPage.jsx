import React from 'react'
import './signupPage.css'
import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <div className='signUpPage'><SignUp path="/sign-up" signInUrl='/sign-in' /></div>
  )
}

export default SignUpPage