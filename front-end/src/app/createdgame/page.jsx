'use client'

import Profile from "../icons/profile"
import Logout from "../icons/logout"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Home() {
    const [logData, setLogData] = useState([])

    async function test() {
        const { data } =axios.get("http://localhost:8800/quiz",  {
            type: logData.type,
            number: logData.number,
            question: logData.question,
            point: logData.point,
            answer: [{
                text: logData.text,
                isCorrect: logData.isCorrect
            }] 
        }) 
    console.log(logData);
    if(data?.quiz) {
        alert("nah i'd win")
    } else {
        alert("nah i'd lose")
    }

    }


  
  async function LeaveQuiz() {
    const text = "Are you sure about leaving?";
    if (confirm(text)) {
      router.push('/menu')
    }
  }
  async function testBoolean(index) {
    const answer = Questions[1].answer[index].isCorrect
    if (answer) {
      console.log('correct');
    } else {
      console.log('incorrect');
    }
    setTimeout(() => {
      setQuestionIndex((prev) => prev + 1)
    }, 100)
  } 
    return (
        <main className="flex w-screen h-screen bg-violet-500 justify-center items-center">


        <div className='w-[1000px] h-[1050px] bg-violet-700 rounded-2xl flex justify-center flex flex-col border-[5px] border-solid border-white'>
          <div className='h-[100px] flex flex-row gap-[450px] mb-[50px]'>
            <div className='flex flex-row gap-[10px] ml-[30px] pl-[10px] w-[350px] pt-[3px] h-[100px] border-[5px] border-solid border-white rounded-[50px]'>
              <Profile />
              <p className='text-[45px] font-sans font-medium text-start mt-[10px] ml-[5px] text-white'>Enhmunh</p>
  
            </div>
  
            <button className="w-[100px] h-[100px] rounded-full border-[5px] border-solid border-white pl-[10px]"
              onClick={LeaveQuiz}>
              <Logout />
  
            </button>
  
          </div>
  
  
          <div className="flex flex-row gap-[50px] ml-[100px]">
            {/* <p className="drop-shadow-xl font-sans text-[60px] text-center text-white font-sans font-medium border-[3px] border-solid border-white w-[100px] rounded-full h-[100px] text-center mt-[10px]">{Questions[questionIndex].number}</p> */}
            {/* <p className="drop-shadow-xl font-sans text-[80px] text-center text-white font-sans font-medium">{Questions[questionIndex].type} Quiz:</p> */}
          </div>
          <div className='w-[950px] h-[400px] rounded-[20px]  flex justify-center items-center' >
            <div className='w-[650px] h-[300px] rounded-[20px] flex  border-white border-[5px] border-solid pb-[30px]'>
              {/* <p className='w-[600px] text-[45px] text-clip font-sans font-medium text-start mt-[50px] ml-[20px] text-white'>What is the meaning of the word: "{Questions[questionIndex].question}"?</p> */}
            </div>
          </div>
          <button onClick={test}>test</button>
          <div className='flex flex-wrap ml-[50px]'>
            {/* {Questions[questionIndex].answer.map((answer, index) => {
              return (
                <div className={`w-[400px] h-[100px] rounded-[50px] m-[20px] border-white border-[5px] border-solid  flex flex-row gap-[10px] ${answer.isCorrect ? "active:bg-green-700" : "active:bg-red-700"} `}
                  onClick={() => testBoolean(index)}>
                  <p className='w-[70px] h-[70px] rounded-full text-white ml-[20px] text-[45px] font-nomo font-medium text-center mt-[10px]  border-white border-[3px] border-solid '>{index + 1}</p>
                  <p className='text-[45px] font-sans font-medium text-start mt-[10px] ml-[5px] text-white'>{answer.text}</p>
                </div>
                
              )
            })} */}


          </div>
        </div>
      </main>
    )
}
