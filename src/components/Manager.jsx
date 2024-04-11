import React from 'react'

import { useRef  , useState , useEffect} from 'react';

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({site: "" , username : "" , password: ""})
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
      
        let passwords = localStorage.getItem("passwords");
        if(passwords){
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])
    
    
    const showPassword = ()=>{
        if(ref.current.src.includes("icons/eye.png")){
            ref.current.src = "icons/eyecross.png"
        }
        else{ref.current.src = "icons/eye.png"}
    }

    const savePassword = () => {   
        setpasswordArray([...passwordArray,form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
 

    }
    const handleChange =(e) => {
        setform({...form, [e.target.name]: e.target.value})
    }

    return (
    <> 
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#22c55e_100%)]"></div>
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

                <input value={form.site} onChange={handleChange} placeholder="Enter website's URL" className="rounded-full border border-green-700 w-full py-1 p-4" type="text" name='site' id='' />


                <div className="flex w-full justify-between gap-8">

                    <input value={form.username} onChange={handleChange} placeholder="Enter Username" className="rounded-full border border-green-700 w-full py-1 px-4" type="text" name='username' id='' />
                    <div className="relative">
                        <input value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border border-green-700 w-full py-1 px-4" type="text" name='password' id='' />
                        <span className='absolute right-[4px] top-[7px] cursor-pointer' onClick={showPassword}><img ref = {ref} src="icons/eyecross.png" alt="eye" width={28} className='p-1'/></span>
                    </div>
                </div>
                
                <button className='flex justify-center items-center font-bold bg-green-600 hover:bg-green-400 w-fit gap-3 rounded-full py-1 px-5 border-4 hover:border-2 border-green-800' onClick={savePassword}><lord-icon className="text-white" 
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="hover">
                </lord-icon>Add Password</button>
            </div>

        </div>
        
    </>
  )
}

export default Manager