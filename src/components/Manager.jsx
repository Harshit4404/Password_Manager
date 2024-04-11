import React from 'react'

const Manager = () => {
    return (
    <> 
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#22c55e_100%)]"></div>
        </div>
        <div className="mycontainer">
            <h1 className='text-4xl font-bold text-zinc-700 text-center'><span >&lt;</span>
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
            <div className='text-black flex flex-col p-4 gap-8 items-center'>   
                <input className="rounded-full border border-green-700 w-full py-1 px-4" type="text" name='' id='' />
                <div className="flex w-full gap-4">
                    <input className="rounded-full border border-green-700 w-full py-1 px-4" type="text" name='' id='' />
                    <input className="rounded-full border border-green-700 w-full py-1 px-4" type="text" name='' id='' />
                </div>
                
                <button className='flex justify-center items-center bg-green-600 hover:bg-green-400 w-fit gap-3 rounded-full py-1 px-5 border-2 hover:border border-green-800'><lord-icon className="text-white" 
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="hover">
                </lord-icon>Add Password</button>
            </div>

        </div>
        
    </>
  )
}

export default Manager