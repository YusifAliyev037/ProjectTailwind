import React from 'react'
import Header from '../Header'
import LeftSide from '../../LeftSide'
import Input from '../../Input'

function Home() {
  return (
    <div>
        <Header />

        <div className='flex-col flex lg:flex-row min-h-screen '>
            <LeftSide/>
            <div className='  w-full lg:w-4/5 p-6' >

              <h2 className=' text-2xl  text-bold uppercase'> To Do App</h2>
              <Input label="To Do Text" placeholder="Your Todo"/>
              <Input label="Label" placeholder="Your Todo"/>
              <Input label="Example" placeholder="Your Todo"/>
            </div>
        </div>
    </div>
  )
}

export default Home
