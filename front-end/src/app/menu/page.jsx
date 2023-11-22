import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import Question from "../icons/question";
import Settings from "../icons/settings";

export default function Menu() {
  return (
    <main className="flex w-screen h-screen bg-amber-100 justify-center items-center">
     

    <div className=" w-[700px] h-[1100px] bg-stone-400 rounded-2xl">
      <div className=" h-[200px] flex flex-row gap-[150px]">
        <button className="w-[100px] h-[100px] rounded-full bg-stone-500 text-center text-[30px] text-white font-medium m-[20px]">a</button>
        <div className="flex gap-[20px] m-[20px]">

          <Link href="/sign">
            <button className="w-[150px] h-[50px] rounded-[50px] bg-stone-500 text-center text-[25px] pt-[5px] text-white font-medium"  >Login</button>

          </Link>

          <p className="decoration-black text-[30px] font-sans my-[10px]">or</p>
          <Link href="/login">
            <button className="w-[150px] h-[50px] rounded-[50px] bg-stone-500 text-center text-[25px] pt-[5px] text-white font-medium" >Sign Up</button>
          </Link>

        </div>
      </div>


      <div className=" h-[350px]  decoration-white drop-shadow-xl font-sans text-[100px] text-center text-white font-sans font-medium"
        href="./MainQuiz">
        Quiz
      </div>

      <div className="flex flex-col gap-[50px] justify-center items-center text-center ">
        <Link href="/mainquiz">
          <button className="w-[550px] h-[100px] rounded-[50px] items-center flex gap-[20px] bg-white flex gap-[50px]  " >
            <FaPlay className='w-[80px] h-[80px] rounded-full bg-cyan-900 ml-[15px] size-{50px}' />
            <p className="text-black text-[40px] font-medium">Play</p>
          </button>

        </Link>
        <Link href="/tutorial">
          <button className="w-[550px] h-[100px] rounded-[50px] flex gap-[20px] bg-white  items-center flex gap-[50px] ">
            <Question />
            <p className="text-black text-[40px] font-medium">How to play</p>
          </button>

        </Link>
      </div>



      <div className="flex flex-row gap-[100px] h-[260px] justify-center items-end ml-[10px]">
        <button className="flex gap-[15px] decoration-white font-sans text-[40px] font-medium ">
          <Settings className='mt-[10px]' />
          <p>
            Settings
          </p>
        </button>

        <Link href="/CustomQuiz">
          <button className="flex gap-[15px] decoration-white font-sans text-[40px] font-medium">
            <FaPlus className='mt-[10px]' />
            <p>Add quiz</p>

          </button>
        </Link>
      </div>

    </div>
    </main>

  )


}