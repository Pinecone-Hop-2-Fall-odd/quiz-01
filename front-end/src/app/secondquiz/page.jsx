'use client'


import Profile from "../icons/profile"
import Logout from "../icons/logout"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
export default function home() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const router = useRouter();
  const Questions = [{
    type: "Spanish",
    point: "8",
    question: "https://shorturl.at/rKR56",
    number: 1,
    answer: [{ text: "Libro", isCorrect: false, isChosen: false },
    { text: "Bolígrafo", isCorrect: true, isChosen: false },
    { text: "Taza", isCorrect: false, isChosen: false },
    { text: "Teléfono", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "6",
    question: "https://shorturl.at/sCEFU",
    number: 2,
    answer: [{ text: "Primo", isCorrect: false, isChosen: false },
    { text: "Amigo", isCorrect: false, isChosen: false },
    { text: "Auto", isCorrect: false, isChosen: false },
    { text: "Casa", isCorrect: true, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "2",
    question: "https://shorturl.at/rKLR6",
    number: 3,
    answer: [{ text: "Conservarse", isCorrect: false, isChosen: false },
    { text: "Banco", isCorrect: true, isChosen: false },
    { text: "Baño", isCorrect: false, isChosen: false },
    { text: "Apartamento", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "4",
    question: "https://shorturl.at/xzY29",
    number: 4,
    answer: [{ text: "Carne", isCorrect: false, isChosen: false },
    { text: "Té", isCorrect: false, isChosen: false },
    { text: "Pan", isCorrect: true, isChosen: false },
    { text: "Queso", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "5",
    question: "https://shorturl.at/cjDG7",
    number: 5,
    answer: [{ text: "Estado", isCorrect: false, isChosen: false },
    { text: "Aquí", isCorrect: true, isChosen: false },
    { text: "Voluntad", isCorrect: false, isChosen: false },
    { text: "No", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "7",
    question: "https://shorturl.at/cHN19",
    number: 6,
    answer: [{ text: "Aquí", isCorrect: false, isChosen: false },
    { text: "Montaña", isCorrect: false, isChosen: false },
    { text: "Ciudad", isCorrect: false, isChosen: false },
    { text: "Calle", isCorrect: true, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "5",
    question: "https://rb.gy/gmkpo3",
    number: 7,
    answer: [{ text: "Por que?", isCorrect: false, isChosen: false },
    { text: "Cuando?", isCorrect: false, isChosen: false },
    { text: "Dónde?", isCorrect: true, isChosen: false },
    { text: "OMS?", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "8",
    question: "https://rb.gy/jpk7px",
    number: 8,
    answer: [{ text: "Siete", isCorrect: false, isChosen: false },
    { text: "Cinco", isCorrect: true, isChosen: false },
    { text: "Uno", isCorrect: false, isChosen: false },
    { text: "Diez", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "2",
    question: "https://rb.gy/hn1j8g",
    number: 9,
    answer: [{ text: "Ver", isCorrect: false, isChosen: false },
    { text: "Caminar", isCorrect: false, isChosen: false },
    { text: "Decir", isCorrect: true, isChosen: false },
    { text: "Pensar", isCorrect: false, isChosen: false }
    ]
  },
  {
    type: "Spanish",
    point: "3",
    question: "https://rb.gy/momh82",
    number: 10,
    answer: [{ text: "Carne", isCorrect: true, isChosen: false },
    { text: "Papa", isCorrect: false, isChosen: false },
    { text: "Chile", isCorrect: false, isChosen: false },
    { text: "Pimienta", isCorrect: false, isChosen: false }
    ]
  }
  ];

  useEffect(() => {
    nextPage()
},[])

  function nextPage() {
    if(Questions[questionIndex].answer === 10) {
      router.push("/congrats");
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
    if(questionIndex >= 9) {
      router.push('/congrats')
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
          <div className='w-[650px] h-[330px] flex  border-white border-[5px] border-solid items-center  '>
            <img src={Questions[questionIndex].question} className="bg-cover"  />
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