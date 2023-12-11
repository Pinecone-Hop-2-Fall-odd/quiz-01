'use client'

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Sign() {

    const [ logData, setLogData] = useState({});
  const router = useRouter();

    async function handleLogin() {
      const data = await axios.post('http://localhost:8800/SignIn', {
        email: logData.email,
        password: logData.password
      }
      
      );
      console.log(logData);
      router.push('/menu')
      console.log(data);
    }
   
    return (
        <main className="flex w-screen h-screen bg-violet-500 justify-center items-center">
            <div className='w-[500px] h-[500px] bg-violet-700 border-[5px] border-solid border-white rounded-2xl flex justify-center '>

                <div className='w-[400px] flex gap-[20px] flex-col'>
                    <p className='text-[40px] family-sans text-white font-medium mt-[30px] '>Login</p>

                    <div className='h-[120px] flex flex-col gap-[5px]'>
                        <p className='text-[20px] font-medium  text-white family-sans'>Email:</p>
                        <input className='h-[50px] w-[400px] rounded-[10px] outline-0 text-[15px] family-sans text-gray '
                        value={logData.email}
                            onChange={(e) => setLogData((a) => ({ ...a, email: e.target.value }))}
                            placeholder="Type your email here!"

                        />
                    </div>

                    <div className='h-[120px] flex flex-col gap-[5px]'>
                        <p className='text-[20px] font-medium  text-white family-sans'>Password:</p>
                        <div>
                            <input className='h-[50px] w-[400px]  rounded-[10px] outline-0 text-[15px] family-sans text-gray '
                                placeholder="Type your password here!"
                                value={logData.password}
                                onChange={(e) => setLogData((a) => ({ ...a, password: e.target.value }))} />
                        </div>
                    </div>
                    
                        <button className='h-[60px] rounded-[10px] bg-violet-700 border-[3px] border-solid border-white font-medium text-[25px] text-white font-sans w-[400px] active:opacity-70'
                        onClick={handleLogin} >Login</button>
                 
                 
                </div>
            </div>

        </main>
    )
}