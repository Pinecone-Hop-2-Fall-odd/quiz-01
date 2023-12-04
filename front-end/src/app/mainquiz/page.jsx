'use client'

import Profile from "../icons/profile"
import Logout from "../icons/logout"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function mainQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const router = useRouter();
  const Questions = [{
    type: "Spanish",
    point: "8",
    question: "Enero",
    number: 1,
    answer: [{ text: "March", isCorrect: false, isChosen: false },
    { text: "January", isCorrect: true, isChosen: false },
    { text: "July", isCorrect: false, isChosen: false },
    { text: "November", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "6",
    question: "Casa",
    number: 2,
    answer: [{ text: "Cousin", isCorrect: false, isChosen: false },
    { text: "Friend", isCorrect: false, isChosen: false },
    { text: "Car", isCorrect: false, isChosen: false },
    { text: "House", isCorrect: true, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "2",
    question: "Banco",
    number: 3,
    answer: [{ text: "Store", isCorrect: false, isChosen: false },
    { text: "Bank", isCorrect: true, isChosen: false },
    { text: "Bathroom", isCorrect: false, isChosen: false },
    { text: "Apartment", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "4",
    question: "Pan",
    number: 4,
    answer: [{ text: "Meat", isCorrect: false, isChosen: false },
    { text: "Tea", isCorrect: false, isChosen: false },
    { text: "Bread", isCorrect: true, isChosen: false },
    { text: "Cheese", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "5",
    question: "Esta",
    number: 5,
    answer: [{ text: "Been", isCorrect: false, isChosen: false },
    { text: "Here", isCorrect: true, isChosen: false },
    { text: "Will", isCorrect: false, isChosen: false },
    { text: "Doesn't", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "7",
    question: "Calle",
    number: 6,
    answer: [{ text: "Lamp", isCorrect: false, isChosen: false },
    { text: "Mountain", isCorrect: false, isChosen: false },
    { text: "Town", isCorrect: false, isChosen: false },
    { text: "Street", isCorrect: true, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "5",
    question: "¿Donde?",
    number: 7,
    answer: [{ text: "Why?", isCorrect: false, isChosen: false },
    { text: "When?", isCorrect: false, isChosen: false },
    { text: "Where?", isCorrect: true, isChosen: false },
    { text: "Who?", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "8",
    question: "Cinco",
    number: 8,
    answer: [{ text: "Seven", isCorrect: false, isChosen: false },
    { text: "Five", isCorrect: true, isChosen: false },
    { text: "One", isCorrect: false, isChosen: false },
    { text: "Ten", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "2",
    question: "Decir",
    number: 9,
    answer: [{ text: "See", isCorrect: false, isChosen: false },
    { text: "Walk", isCorrect: false, isChosen: false },
    { text: "Say", isCorrect: true, isChosen: false },
    { text: "Think", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "3",
    question: "Carne",
    number: 10,
    answer: [{ text: "Meat", isCorrect: true, isChosen: false },
    { text: "Potato", isCorrect: false, isChosen: false },
    { text: "Chilli", isCorrect: false, isChosen: false },
    { text: "Pepper", isCorrect: false, isChosen: false }
    ]
  }
  ];
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
          <p className="drop-shadow-xl font-sans text-[60px] text-center text-white font-sans font-medium border-[3px] border-solid border-white w-[100px] rounded-full h-[100px] text-center mt-[10px]">{Questions[questionIndex].number}</p>
          <p className="drop-shadow-xl font-sans text-[80px] text-center text-white font-sans font-medium">{Questions[questionIndex].type} Quiz:</p>
        </div>
        <div className='w-[950px] h-[400px] rounded-[20px]  flex justify-center items-center' >
          <div className='w-[650px] h-[300px] rounded-[20px] flex  border-white border-[5px] border-solid pb-[30px]'>
            <p className='w-[600px] text-[45px] text-clip font-sans font-medium text-start mt-[50px] ml-[20px] text-white'>What is the meaning of the word: "{Questions[questionIndex].question}"?</p>
          </div>
        </div>
        <div className='flex flex-wrap ml-[50px]'>
          {Questions[questionIndex].answer.map((answer, index) => {
            return (
              <div className={`w-[400px] h-[100px] rounded-[50px] m-[20px] border-white border-[5px] border-solid  flex flex-row gap-[10px] ${answer.isCorrect ? "active:bg-green-700" : "active:bg-red-700"} `}
                onClick={() => testBoolean(index)}>
                <p className='w-[70px] h-[70px] rounded-full text-white ml-[20px] text-[45px] font-nomo font-medium text-center mt-[10px]  border-white border-[3px] border-solid '>{index + 1}</p>
                <p className='text-[45px] font-sans font-medium text-start mt-[10px] ml-[5px] text-white'>{answer.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </main>

  )
}