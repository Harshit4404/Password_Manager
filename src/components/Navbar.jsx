import React from 'react'

const Navbar = () => {

  return (
    <nav className='bg-zinc-800 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

            <div className="logo font-bold text-2xl">
                <span >&lt;</span>
                <span className='text-green-400'>
                    P
                </span>
                a
                <span className='text-green-400'>
                    S
                </span>
                s
                <span className='text-green-400'>
                    L
                </span>
                a
                <span className='text-green-400'>
                    S
                </span>
                t
                <span className='text-green-400'>/</span>
                <span>&gt;</span>
                
            </div>
            <button className='w-10'><a href="https://github.com/Harshit4404" target='_blank'><img src="icons/github.png" alt="github"/></a></button>
        </div>
    </nav>
  )
}

export default Navbar