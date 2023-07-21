import React from 'react'
import './Spinner.css'
const Spinner = () => {
  return (
    <div>
        <div className='spinner'></div>
        {/* css loader generator website */}
        <p className="text-bgDark text-lg font-semibold">Loading...</p>
    </div>
  )
}

export default Spinner