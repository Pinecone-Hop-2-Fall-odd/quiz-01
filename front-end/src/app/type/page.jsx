'use client'
import Type from "../icons/type";
import Photos from "../icons/photos";
import Mouse from "../icons/mouse";
import Color from "../icons/color";

import { useRouter } from "next/navigation"

export default function home() {
    const router = useRouter();
    return (
        <main className="flex w-screen h-screen bg-violet-500 justify-center items-center">
            <div className='w-[1000px] h-[1050px] bg-violet-700 rounded-2xl flex flex-col border-[5px] border-solid border-white pl-[50px]'>
                <p className="text-[70px] text-white font-sans font-medium mt-[30px]">Types of games:</p>
                <div className="flex flex-wrap gap-[30px] mt-[100px]">
                    <button className="border-[3px] border-solid bordder-white w-[400px] h-[300px] flex flex-col gap-[20px] active:opacity-70 rounded-[20px] "
                    onClick={() => router.push('/mainquiz')}>
                        <Mouse/>
                        <p className="text-[50px] font-sans font-medium text-white">Words</p> </button>
                    <button className="border-[3px] border-solid bordder-white w-[400px] h-[300px] flex flex-col gap-[20px] active:opacity-70 rounded-[20px]"
                    onClick={() => router.push('/secondquiz')}>
                        <Photos/>
                        <p className="text-[50px] font-sans font-medium text-white">Images</p> </button>  
                         <button className="border-[3px] border-solid bordder-white w-[400px] h-[300px] flex flex-col gap-[20px] active:opacity-70 rounded-[20px]"
                         onClick={() => router.push('/thirdquiz')}>
                    <Type/>
                        <p className="text-[50px] font-sans font-medium text-white">Typing</p> </button> 
                          <button className="border-[3px] border-solid bordder-white w-[400px] h-[300px] flex flex-col gap-[20px] active:opacity-70 rounded-[20px]"
                          onClick={() => router.push('/fourthquiz')}>
                            <Color/>
                        <p className="text-[50px] font-sans font-medium text-white">Reverse images</p> </button>
                </div>
            </div>
        </main>

    )
}