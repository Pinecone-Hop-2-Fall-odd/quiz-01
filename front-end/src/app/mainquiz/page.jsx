'use client'

import Question from "../icons/question"
import Profile from "../icons/profile"
import  Link from "next/link"

export default function mainQuiz() {
    return (
      <main className="flex w-screen h-screen bg-amber-100 justify-center items-center">
     

        <div className='w-[1000px] h-[850px] bg-stone-400 rounded-2xl flex justify-center flex flex-col '>
        <div className='h-[100px] flex flex-row gap-[560px] mb-[50px]'>
          <div className='flex flex-row gap-[10px] ml-[30px]'>
            <Profile/>
          <p className='text-[40px] text-white family-sans mt-[10px]'>Enhmunh</p>

          </div>
          <Link href="https://www.youtube.com/watch?v=-ThRhdlD9jo">
          <button className="w-[80px] h-[80px] rounded-full border-[3px] border-solid border-white">
          <Question/>

          </button>
          
          </Link>
        </div>
        <div className='w-[1000px] h-[400px] rounded-[20px]   flex justify-center items-center' >
          <div className='w-[600px] h-[300px] rounded-[20px]  border-white border-[5px] border-solid'>
            <p className=''></p>
          </div>
        </div>
        <div className='flex flex-wrap '>
          
          <div className='w-[450px] h-[100px] rounded-[50px] m-[20px] border-white border-[5px] border-solid  flex flex-row gap-[10px]'>
            <p className='w-[70px] h-[70px] rounded-full  ml-[20px] text-[45px] font-nomo font-medium text-center mt-[10px]  border-white border-[3px] border-solid '>1</p>
            <p className='text-[50px] font-mono font-medium text-start mt-[5px]'>aa</p>
            </div>
        </div>

      </div>
    </main>

    )
}