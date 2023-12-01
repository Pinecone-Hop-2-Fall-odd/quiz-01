'use client'

import { useRouter } from "next/navigation"
import Logout from "../icons/logout"

export default function Home() {

    const router = useRouter();
    function Leaveout() {
        const message = "Are you sure about leaving?"
        if(confirm(message)) {
            router.push('/menu')
        }
    }

    return (
        <main className="flex w-screen h-screen bg-violet-500 justify-center items-center">
        <div className=" w-[700px] h-[1100px] bg-violet-700 rounded-2xl border-[5px] border-solid border-white">
        <div className="flex flex-row gap-[100px] h-[100px] mt-[30px]">
      <p className="text-[70px] text-white font-sans font-medium  ml-[50px] ">Custom Quiz</p>
      <button className="w-[100px] h-[100px] rounded-full border-[5px] border-solid border-white pl-[10px]"
      onClick={Leaveout}
      ><Logout/>
      </button>

      </div>
        <div className="flex flx-wrap">
            <div className="w-[300px] h-[170px] border-white border-[3px] border-solid rounded-[20px] pl-[15px]">
                <p className="text-[25px] text-white font-sans font-medium">Type:</p>
                <p className="w-[100px] h-[30px] border-[2px] border-solid border-white text-[15px] text-white pl-[5px] text-start">Spanish</p>
                <div className="flex flex-row gap-[25px] ml-[10px]">
                    <image></image>
                    <p className="text-[25px] text-white font-sans font-medium ">aassddffgg</p>
                </div>
                    <button className="w-[140px] h-[35px] rounded-[10px] border-[3px] border-solid border-solid font-sans text-[20px] text-white font-medium border-[2px] border-solid border-white">Start</button>
            </div>

        </div>

        </div>
    </main>
    )
}