import React, { useState } from "react";

import {toast} from "react-toastify";
import { Link,useNavigate } from "react-router-dom";
import {signUpUser} from "../ApiServices/user.jsx";

function SignUp() {  
  // create a state variable to hold the form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const onBack = () => {
    //use back stack to go back to the previous page
    navigate(-1);
  }
   const onSignUp= async () =>{
    if (firstName.length == 0){
      toast.warn('please enter first name')
    } else if (lastName.length == 0 ){
      toast.warn('please enter last name')
    }
    else if (email.length == 0 ){
      toast.warn('please enter email')
    } else if (password.length == 0 ){
      toast.warn('please enter password')
    } else if (confirmPassword.length == 0 ){
      toast.warn('please enter confirm password')
    } 
    else if (dateOfBirth.length == 0 ){
      toast.warn('please enter date of birth')
    } else if (phoneNumber.length == 0 ){
      toast.warn('please enter phone number')
    }else if (password != confirmPassword) {
      toast.warn('password does not match')
    }
     else {
      // make API call to register user
      const result = await signUpUser(
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
        phoneNumber
      )
      if(!result){
        toast.error("Error While Signing Up")
      } else{
        // check if result is success or error
        if(result["success"] =="success"){
          toast.success("User Singed Up Successfully")
        }  else {
          toast.error('Error while registering the user')
        }
      }
    }
   }

  return(
  <div className='container'>
      <h2 className='page-header'>SignUp</h2>
      <div className='form'>

       <div className='mb-3'>
         <label htmlFor=''>First Name</label>
        <input onChange={ (e) => setFirstName(e.target.value)}
          type="text"
          className="form-control"
          value={firstName}
        />
       </div>

      <div className='mb-3'>
        <label htmlFor=''>Last Name</label>
        <input onChange={ (e) => setLastName(e.target.value)}
          type="text"
          className="form-control"
          value={lastName}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Email</label>
        <input onChange={ (e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          value={email}
        />
        </div>
      <div className='mb-3'>
        <label htmlFor=''>Password</label>  
        <input onChange={ (e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Confirm Password</label>
        <input onChange={ (e) => setConfirmPassword(e.target.value)}
          type="password"
          className="form-control"
          value={confirmPassword}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Date of Birth</label>
        <input onChange={ (e) => setDateOfBirth(e.target.value)}
          type="date"
          className="form-control"
          value={dateOfBirth}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Phone Number</label>
        <input onChange={ (e) => setPhoneNumber(e.target.value)}
          type="text"
          className="form-control"
          value={phoneNumber}
        />
      </div>

      <div className='mb-3'>
      <div className='mb-3'>
            Already have an account?{' '}
            <button
              onClick={onBack}
              className='btn btn-link'
            >
              Login here
            </button>
          </div>
        <button className='btn btn-success'
        onClick={onSignUp}
        >SignUp</button>
      </div>  
    </div>
  </div>
  )


}

export default SignUp;