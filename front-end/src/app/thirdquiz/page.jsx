'use client'

import Profile from "../icons/profile"
import Logout from "../icons/logout"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function home() {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [logData, setLogData] = useState({})
    const router = useRouter();
    const Questions = [{
        type: "Spanish",
        point: "8",
        question: "Leo",
        number: 1,
        answer: "Read",
        iscorrect: false
    },
    {
      type: "Spanish",
      point: "8",
      question: "Libra",
      number: 2,
      answer: "Book",
      iscorrect: false
  },
  {
    type: "Spanish",
    point: "8",
    question: "Quiero",
    number: 3,
    answer: "Want",
    iscorrect: false
},
{
  type: "Spanish",
  point: "8",
  question: "Ingles",
  number: 4,
  answer: "English",
  iscorrect: false
},
{
  type: "Spanish",
  point: "8",
  question: "Comprendo",
  number: 5,
  answer: "Question",
  iscorrect: false
},
{
  type: "Spanish",
  point: "8",
  question: "Leche",
  number: 6,
  answer: "Milk",
  iscorrect: false
},
{
  type: "Spanish",
  point: "8",
  question: "Mujer",
  number: 7,
  answer: "Woman",
  iscorrect: false
},
{
  type: "Spanish",
  point: "8",
  question: "Maestro",
  number: 8,
  answer: "Teacher",
  iscorrect: false
},
{
  type: "Spanish",
  point: "8",
  question: "Mayo",
  number: 9,
  answer: "May",
  iscorrect: false
},
{
  type: "Spanish",
  point: "8",
  question: "Pan",
  number: 10,
  answer: "Bread",
  iscorrect: false
},
  ] 
    
    async function LeaveQuiz() {
      const text = "Are you sure about leaving?";
      if (confirm(text)) {
        router.push('/menu')
      }
    }
    async function HandleAnswers() {
      const Answer = logData ;
      if(Answer ===  null) {
        alert("PLease Put your answer")
      } if(Questions[questionIndex].answer == Answer) {
          console.log('correct')
          Questions[questionIndex].iscorrect = true
        } else {
          console.log('incorrect')

        }
        if(questionIndex >= 9) {
          router.push("/congrats")
        }
        setTimeout(() => {
          setQuestionIndex((prev) => prev + 1)
        }, 900)
      
      }
      console.log(logData)

    return (
        <main className="flex w-screen h-screen bg-violet-500 justify-center items-center">


        <div className='w-[1000px] h-[1050px] bg-violet-700 rounded-2xl flex  flex flex-col border-[5px] border-solid border-white pt-[50px]'>
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
            <p className="drop-shadow-xl font-sans text-[60px] text-center text-white font-sans font-medium border-[3px] border-solid border-white w-[100px] rounded-full h-[100px] text-center mt-[10px]">{Questions[questionIndex].number}</p>
            <p className="drop-shadow-xl font-sans text-[80px] text-center text-white font-sans font-medium">{Questions[questionIndex].type} Quiz:</p>
          </div>
          <div className='w-[1000px] h-[400px] rounded-[20px]  flex justify-center items-center flex flex-col gap-[100px] mt-[100px]' >
            <div className='w-[650px] h-[300px] rounded-[20px] flex  border-white border-[5px] border-solid pb-[30px]'>
              <p className='w-[600px] text-[45px] text-clip font-sans font-medium text-start mt-[50px] ml-[20px] text-white'>What is the meaning of the word: "{Questions[questionIndex].question}"?</p>


            </div>
            <div className="flex flex-row gap-[45px]">

            <input className={` w-[550px] text-white h-[80px] rounded-2xl border-white border-solid border-[5px] bg-violet-700  text-[30px] font-sans font-medium px-3`}
            placeholder="Write your answers here"
            onChange={(e) =>setLogData(() =>(e.target.value))}/>

            <button className={`h-[80px] rounded-[10px] bg-violet-700 border-[3px] border-solid border-white font-medium text-[25px] text-white ${ Questions[questionIndex].iscorrect ? "active:bg-red-700": "active:bg-green-700"} font-sans w-[120px]`}
            onClick={HandleAnswers}
           >Submit</button>

            </div>
            

          </div>
         
          </div>
      </main>
  
    )
}
    
