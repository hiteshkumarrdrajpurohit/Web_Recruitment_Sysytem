import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate= useNavigate();
    return (
    <div>
       <h2 className='page-header'>Welcome to the Recruitment System </h2>
      <div div className='container'>
      
        <p className='lead'>This is a simple application to manage recruitment process.</p>

        <div>
        <p> SignIn as a User </p>
            <button className='btn btn-primary'
             onClick={() => navigate('/signIn')}>
             Sign In
             </button>
        </div>

     </div>
    </div>
  )
}

export default Home
