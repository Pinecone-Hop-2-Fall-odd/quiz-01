'use client'

import { useRouter } from "next/navigation"
import Logout from "../icons/logout"


export default function Home() {

  const router = useRouter();
  function Leaveout() {
      const message = "Are you sure about leaving?"
      if(confirm(message)) {
        router.push('/menu');

      }
  }
    return (
        <main className="flex w-screen h-[120vh] bg-violet-500 justify-center items-center">
     
     <div className='w-[700px] h-[1250px] bg-violet-700 border-[5px] border-solid border-white rounded-2xl flex flex-col  '>
      <div className="flex flex-row gap-[100px] h-[100px] mt-[30px]">
      <p className="text-[70px] text-white font-sans font-medium  ml-[50px] ">Custom Quiz</p>
      <button className="w-[100px] h-[100px] rounded-full border-[5px] border-solid border-white pl-[10px]"
      onClick={Leaveout}
      ><Logout/>
      </button>

      </div>
        <div className='h-[400px] flex flex-col gap-[20px] mb-[50px] flex flex-col  gap-[30px] mt-[50px] ml-[50px]'>
        <div className="  flex flex-col gap-[10px]" >
            <p className="text-[30px] font-medium text-white family-sans">Type of Question:</p>
            <input className="h-[70px] w-[500px] rounded-[10px] outline-0 text-[25px] family-sans text-gray border-[5px] border-solid bg-violet-700 text-white"
            placeholder="Required"/>
            <p className="text-[50px] text-white font-sa"></p>
            </div>
          <div className="  flex flex-col gap-[10px]" >
            <p className="text-[30px] font-medium text-white family-sans">Question:</p>
            <input className="h-[70px] w-[500px] rounded-[10px] outline-0 text-[25px] family-sans text-gray border-[5px] border-solid bg-violet-700 text-white"
            placeholder="Required"/>
            <p className="text-[50px] text-white font-sa"></p>
            </div>
          <div className=" ">
          <div className="  flex flex-col gap-[10px]" >
            <p className="text-[30px] font-medium text-white family-sans">Correct Answer:</p>
            <input className="h-[70px] w-[500px] rounded-[10px] outline-0 text-[25px] family-sans text-gray border-[5px] border-solid bg-violet-700 text-white"
            placeholder="Required"/>
            <p className="text-[50px] text-white font-sa"></p>
            </div>
            <div className="  flex flex-col gap-[10px] mt-[50px]" >
            <p className="text-[30px] font-medium text-white family-sans">False Answers:</p>
            <input className="h-[70px] w-[500px] rounded-[10px] outline-0 text-[25px] family-sans text-gray border-[3px] border-solid bg-violet-700 text-white"
            placeholder="Required"/>
             <input className="h-[70px] w-[500px] rounded-[10px] outline-0 text-[25px] family-sans text-gray border-[3px] border-solid bg-violet-700 text-white"
            placeholder="Required"/>
             <input className="h-[70px] w-[500px] rounded-[10px] outline-0 text-[25px] family-sans text-gray border-[3px] border-solid bg-violet-700 text-white"
            placeholder="Required"/>
             <input className="h-[70px] w-[500px] rounded-[10px] outline-0 text-[25px] family-sans text-gray border-[3px] border-solid bg-violet-700 text-white"
            placeholder="Required"/>
            </div>
            <button className="h-[60px] rounded-[10px] bg-violet-700 border-[3px] border-solid border-white font-medium text-[25px] text-white font-sans w-[400px] mt-[50px] active:opacity-70">Submit</button>
            </div>

        </div>

      </div>
    </main>
    )
}