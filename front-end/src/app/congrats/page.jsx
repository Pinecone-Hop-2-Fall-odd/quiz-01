'use client'

import Logout from "../icons/logout"
import Profile from "../icons/profile"
import { useRouter } from "next/navigation"
import Custom from "../icons/edit"
import Question from "../icons/question"
export default function Home() {
    const router = useRouter();
    return (
        <main className="flex w-screen h-screen bg-violet-500 justify-center items-center">
            <div className=" w-[700px] h-[1000px] bg-violet-700 flex flex-col rounded-2xl border-[5px] border-solid border-white items-center gap-[100px]">
                <div className='h-[100px] flex flex-row gap-[160px] mt-[50px] '>
                    <div className='flex flex-row gap-[10px] ml-[-30px] pl-[10px] w-[350px] pt-[3px] h-[100px] border-[5px] border-solid border-white rounded-[50px]'>
                        <Profile/>
                        <p className='text-[45px] font-sans font-medium text-start mt-[10px] ml-[5px] text-white'>Enhmunh</p>
                    </div>
                    <button className="w-[100px] h-[100px] rounded-full border-[5px] border-solid border-white pl-[10px]"
                    onClick={() => router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>
                        <Question/>
                    </button>
                </div>
                <div className='w-[550px] h-[300px] rounded-[20px] flex border-white border-[5px] border-solid pb-[30px]'>
                    <p className='w-[600px] text-[45px] text-clip font-sans font-medium text-start mt-[50px] ml-[20px] text-white'>Congrats! You made 10/10 correct answers</p>
                </div>
                <div className="flex flex-col gap-[50px] justify-center items-center text-center ">
                    <button className="w-[550px] h-[100px] rounded-[50px] flex gap-[20px] border-[5px] border-solid border-white items-center flex gap-[20px] active:opacity-70 pl-[20px]"
                        onClick={() => router.push('/createdquiz')}>
                        <Custom className="  font-small " />
                        <p className="text-white text-[40px] font-medium ">Qustom quiz</p>
                    </button>
                    <button className="w-[550px] h-[100px] rounded-[50px] flex gap-[20px] border-[5px] border-solid border-white items-center flex gap-[20px] active:opacity-70 pl-[20px]"
                        onClick={() => router.push('/menu')}>
                        <Logout className=" ml-[10px] font-small " />
                        <p className="text-white text-[40px] font-medium ">Leave</p>
                    </button>
                </div>
            </div>
        </main>

    )
}