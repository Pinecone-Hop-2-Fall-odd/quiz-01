'use client'
import Profile from "../icons/profile";
import { useRouter } from "next/navigation"
import Logout from "../icons/logout"
import { useState } from "react";
import Search from "../icons/search";

export default function Home() {
    const Tests = [{
        type: "Spanish",
        Creater: "Peanut butta",
    },
    {
        type: "Spanish",
        Creater: "Peanut butta",
    },
    {
        type: "Spanish",
        Creater: "Peanut butta",
    },
    {
        type: "Spanish",
        Creater: "Peanut butta",
    },
    {
        type: "Spanish",
        Creater: "Peanut butta",
    },{
        type: "Spanish",
        Creater: "Peanut butta",
    },
    {
        type: "Spanish",
        Creater: "Peanut butta",
    },
    {
        type: "Spanish",
        Creater: "Peanut butta",
    }];
    const [defIndex, setDefIndex] = useState(0);
    const [search, setSearch] = useState({});
    const router = useRouter();
    function Leaveout() {
        const message = "Are you sure about leaving?"
        if(confirm(message)) {
            router.push('/menu')
        }
    }
     const SearchQuiz = async(e) => {
        const data = await axios.get("http://localhost:8800/quiz", {
        });
    }
    return (
        <main className="flex w-screen h-screen bg-violet-500 justify-center items-center">
        <div className=" w-[700px] h-[1100px] bg-violet-700 flex flex-col gap-[30px] rounded-2xl border-[5px] border-solid border-white pl-[30px]">
        <div className="flex flex-row gap-[120px] h-[100px] mt-[45px]" >
      <p className="text-[70px] text-white font-sans font-medium  ">Custom Quiz</p>
      <button className= "w-[100px] h-[100px] rounded-full border-[5px] border-solid border-white pl-[10px]"
      onClick={Leaveout}
      ><Logout/>
      </button>

      </div>
      <div className="  flex flex-col gap-[15px] " >
            <p className="text-[45px] font-medium text-white family-sans">Type of Quiz:</p>
            <div className="flex flex-row gap-[30px]">
            <input className="h-[70px] w-[500px] rounded-[10px] outline-0 text-[25px] family-sans text-gray border-[5px] border-solid bg-violet-700 text-white px-3"
            placeholder="What kinds of quiz?"
            value={search.type}
            onChange={(e) => setSearch((a) => ({...a, type: e.target.value}))}/>
            <button className="border-white border-solid border-[5px] w-[70px] h-[70px] rounded-[10px] active:opacity-70"
            onClick={SearchQuiz}>
            <Search/>
            </button>
            </div>
            </div> 
            <p className="text-[45px] font-medium text-white family-sans">Results:</p>
        <div className="flex flex-wrap gap-[20px] overflow-y-scroll">
            {Tests.map((Tests, index) => {
                return (
                <div className="w-[300px] h-[170px] border-white border-[3px] border-solid rounded-[20px] pl-[15px] pt-[10px] gap-[10px]">
                     <p className="text-[22px] text-white font-sans font-medium">Type:{Tests.type}</p>
                <div className="flex flex-row gap-[25px] ">
                     <p className="text-[20px] text-white font-sans font-medium ">Created by:{Tests.Creater}</p>
                    </div>
                    <p className="border-[3px] border-solid border-white text-[18px] text-center font-sans font-medium  h-[30px] w-[200px] text-white mt-[5px] mb-[10px] rounded-[10px]">1 question</p>
                        <button className="w-[140px] h-[38px] rounded-[10px] border-[3px] border-solid border-solid font-sans text-[20px] text-white font-medium border-[2px] border-solid border-white active:opacity-70"
                        onClick={() => router.push('/mainquiz')}>Start</button>
                </div>
                )})}
        </div>
        </div>
    </main>
    )
}