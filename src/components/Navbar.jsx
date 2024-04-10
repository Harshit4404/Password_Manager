import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-violet-950 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

            <div className="logo font-bold text-2xl">
                <span >&lt;</span>
                <span className='text-fuchsia-400'>
                    P
                </span>
                a
                <span className='text-fuchsia-400'>
                    S
                </span>
                s
                <span className='text-fuchsia-400'>
                    L
                </span>
                a
                <span className='text-fuchsia-400'>
                    S
                </span>
                t
                <span className='text-fuchsia-400'>/</span>
                <span>&gt;</span>
                
            </div>
            <ul>
                <li className='flex gap-4'>
                    <a className="hover:font-bold" href="/">Home</a>
                    <a className="hover:font-bold" href="#">About</a>
                    <a className="hover:font-bold" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar