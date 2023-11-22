'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter();

     useEffect(() => {
        const uid =localStorage.getItem("uid");
        if(uid === null) {
          router.push('/login');
        }

    }, []);

  return (
    <main className="flex w-screen h-screen bg-amber-100 justify-center items-center">
     

    </main>
  )
}
