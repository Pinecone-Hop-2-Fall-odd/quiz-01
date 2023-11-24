'use client'

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Sign() {

    const [ logData, setLogData] = useState({});
  const router = useRouter();

    async function handleLogin() {
      const { data } = axios.post("http://localhost:8800/login",{
        email: logData.email,
        username: logData.username,
        password: logData.password,
      });
      if(data?.user) {
        localStorage.setItem("uid", data.user.id);
        router.push('/');
      }
    }
    return (
        <main className="flex w-screen h-screen bg-amber-100 justify-center items-center">
            <div className='w-[500px] h-[550px] bg-stone-400 rounded-2xl flex justify-center '>

                <div className='w-[400px] flex gap-[20px] flex-col'>
                    <p className='text-[40px] family-sans font-medium mt-[30px] '>Login</p>

                    <div className='h-[120px] flex flex-col gap-[5px]'>
                        <p className='text-[20px] family-sans'>Email:</p>
                        <input className='h-[50px] w-[400px] rounded-[10px] outline-0 text-[15px] family-sans text-gray '
                            onChange={(e) => setLogData((a) => ({ ...a, email: e.target.value }))}
                            placeholder="Type your email here!"

                        />
                    </div>

                    <div className='h-[120px] flex flex-col gap-[5px]'>
                        <p className='text-[20px] family-sans'>Password:</p>
                        <div>
                            <input className='h-[50px] w-[400px]  rounded-[10px] outline-0 text-[15px] family-sans text-gray '
                                placeholder="Type your password here!"
                                onChange={(e) => setLogData((a) => ({ ...a, password: e.target.value }))} />

                        </div>
                    </div>
                    <Link href="/menu">
                        <button className='h-[60px] rounded-[10px] bg-cyan-400 text-[20px] text-white font-sans w-[400px]' >Sign Up</button>

                    </Link>
                    <div className=' w-[400px] flex flex-row gap-[15px] justify-center'>
                        <p className='text-white'>Don't Have a Account?</p>
                        <Link href="/login">
                            <button className='family-sans text-sky-600'
                                onClick={handleLogin}> Sign Up</button>

                        </Link>

                    </div>


                </div>
            </div>

        </main>
    )
}