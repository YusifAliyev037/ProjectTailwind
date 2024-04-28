import React, { useId } from 'react'

function Input({label, ...props}) {

    const id = useId()

  return (
    <div className=' mt-4'>
        {label && <label htmlFor={id} className='text-base text-gray-600'> {label} </label>}
        <input id={id} className='px-2 py-1.5 placeholder:text-gray-400 rounded-lg w-full focus:outline-red-800 mb-1 border border-gray-400 text-gray-800' {...props}/>
    </div>
  )
}

export default Input