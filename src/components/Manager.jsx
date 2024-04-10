import React from 'react'

const Manager = () => {
    return (
    <> 
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        </div>
        <div className="max-w-4xl mycontainer">
            <h1>PaSsLAST</h1>
            <div className='text-white flex flex-col p-4'>   
                <input className="rounded-full" type="text" name='' id='' />
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