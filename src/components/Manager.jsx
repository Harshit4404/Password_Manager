import React from 'react'

const Manager = () => {
    return (
    <> 
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#22c55e_100%)]"></div>
        </div>
        <div className="max-w-4xl mycontainer">
            <h1 className='text-4xl font-bold text-zinc-800 text-center'><span >&lt;</span>
                <span className='text-green-500'>
                    P
                </span>
                a
                <span className='text-green-500'>
                    S
                </span>
                s
                <span className='text-green-500'>
                    L
                </span>
                a
                <span className='text-green-500'>
                    S
                </span>
                t
                <span className='text-green-500'>/</span>
                <span>&gt;</span></h1>
            <p className='text-green-900 text-lg text-center'>Your Own Passsord Manager
            </p>
            <div className='text-white flex flex-col p-4'>   
                <input className="rounded-full border border-fuchsia" type="text" name='' id='' />
                <div className="flex">
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Manager