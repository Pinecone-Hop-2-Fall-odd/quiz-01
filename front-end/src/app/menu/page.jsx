'use client'
import axios from "axios";
import Play from "../icons/play";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import Settings from "../icons/settings";
import { useRouter } from "next/navigation";
import Custom from "../icons/edit";
import Profile from "../icons/profile";
import { useState, useEffect } from "react";

export default function Menu() {

  const [ name, setName] = useState("");
  const [user, setUser] = useState([]);
  const router = useRouter();

  const data = axios.get(`http://localhost:8800/${_id}`);


  return (
    <main className="flex w-screen h-screen bg-violet-500 justify-center items-center">
     

    <div className=" w-[700px] h-[1100px] bg-violet-700 rounded-2xl border-[5px] border-solid border-white">
      <div className=" h-[200px] flex flex-row">
        <button className="w-[100px] h-[100px] rounded-full border-[5px] border-solid border-white text-center text-[30px] text-white font-medium m-[20px] pl-[5px] active:opacity-70" 
        onClick={() => router.push('/type')}><Profile/></button>
            <p className="text-white text-[60px] mt-[20px] font-medium">ssshhshs</p>

            <button className="w-[150px] h-[70px] rounded-[50px] border-[5px] border-solid border-white text-center text-[30px] pt-[5px] text-white font-medium mt-[25px] active:opacity-70 ml-[100px]" 
            onClick={() => router.push('/sign')} >Login</button>

          
      </div>


      <div className=" h-[350px] drop-shadow-xl font-sans text-[100px] text-center text-white font-sans font-medium "
        href="./MainQuiz">
        Quiz
      </div>

      <div className="flex flex-col gap-[50px] justify-center items-center text-center ">
       
          <button className="w-[550px] h-[100px] rounded-[50px] items-center flex gap-[10px] border-[5px] border-solid border-white flex gap-[30px] active:opacity-70 "
          onClick={() => router.push('/type')} >
            <Play className='w-[70px] h-[70px] rounded-full  ml-[10px] fill-white' />
            <p className="text-white text-[40px] font-medium ">Play</p>
          </button>

        
       
          
          <button className="w-[550px] h-[100px] rounded-[50px] flex gap-[20px] border-[5px] border-solid border-white items-center flex gap-[30px] active:opacity-70"
          onClick={()=> router.push('/createdquiz')}
           >
            <Custom className=" ml-[10px] font-small "/>
            <p className="text-white text-[40px] font-medium ">Qustom quiz</p>
          </button>
      </div>



      <div className="flex flex-row gap-[100px] h-[260px] justify-center items-end ml-[10px]">
        <Link href="https://www.youtube.com/watch?v=BbeeuzU5Qc8">
        <button className="flex gap-[15px] decoration-white font-sans text-[40px] font-medium "
       >
          <Settings className='mt-[10px]' />
          <p className="text-white text-[40px] font-medium ">
            Settings
          </p>
        </button>
        </Link>
        
        <Link href="/CustomQuiz">

        <button className="flex gap-[15px] decoration-white font-sans text-[40px] font-medium active:opacity-70 mb-[3px]"
       >
            <FaPlus className='mt-[10px] fill-white' />
            <p className="text-white text-[40px] font-medium active:opacity-70 ">Add quiz</p>

          </button>

        </Link>
    
      </div>

    </div>
    </main>

  )


}