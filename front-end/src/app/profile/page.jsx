'use client'

import Logout from "../icons/logout"
import axios from "axios"
import {useRouter} from "next/navigation"

export default function home() {

   const router = useRouter();

    const Leaveout = () => {
        const message = "Are you sure about leaving?"
        if (confirm(message)) {
          router.push('/menu');
    }

    }

    return (
        <main className="flex w-screen h-screen bg-violet-500 justify-center items-center">
        <div className='w-[500px] h-[500px] bg-violet-700 border-[5px] border-solid border-white rounded-2xl flex justify-center '>

            <div className='w-[400px] flex gap-[10px] flex-col'>
            <div className="flex flex-row gap-[230px] h-[100px] mt-[30px]">
          <p className="text-[40px] text-white font-sans font-medium ">Profile:</p>
          <button className="w-[50px] h-[50px] rounded-full border-[5px] border-solid border-white pl-[10px]"
            onClick={Leaveout}
          >
          </button>

        </div>
                <div className='h-[100px] flex flex-col gap-[5px]'>
                    <p className='text-[20px] font-medium  text-white family-sans'>Username:</p>
                    <p className="text-[25px] underline-[1px] font-medium  text-white underline family-sans">Username</p>
                </div>

                <div className='h-[120px] flex flex-col gap-[5px]'>
                    <p className='text-[20px] font-medium  text-white family-sans'>Email:</p>
                    <p className="text-[25px] underline-[1px] font-medium underline-offset-[1px] underline text-white family-sans">NIggerman@gmail.com</p>
                </div>

                <div className='h-[100px] flex flex-col gap-[5px]'>
                    <p className='text-[20px] font-medium  text-white family-sans'>Password:</p>
                    <p className="text-[25px] underline-[1px] font-medium  text-white family-sans underline">Username</p>
                </div>
             
                
                   
             
             
            </div>
        </div>

    </main>
    )
}