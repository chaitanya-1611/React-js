import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}= useParams()
  return (
    <div className='py-16 text-white text-3xl bg-slate-500 w-full'>
      User: {userid}

      <h1>Welcome {userid}</h1>
      <br />
      <p>Welcome {userid} how are you!
        hope you are well
      </p>

    </div>
  )
}

export default User
