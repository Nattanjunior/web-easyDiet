'use client'

import TypingAnimation from "@/components/ui/typing-animation";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/stepOne')
  }

  return (
    <div className="w-full h-screen flex justify-center animate-opacity ">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <Image
          src={require("../../../assets/images/logo.png")}
          alt="Image-LogoDiet"
          width={200}
          className="animate-fade lg:w-[25rem]"
        />

        <h1 className="font-semibold text-[4.9rem] text-ColorGreen mt-[-1rem] lg:text-[6.9rem]">EasyDiet</h1>

         <TypingAnimation text="Sua dieta personalizada com inteligência artificial 🍴" className="lg:leading-[2.5rem]"/>


        <button
          onClick={handleNavigation}
          className="bg-ColorGreen text-[1.6rem] text-white font-semibold w-[29.7rem] h-[4.4rem] rounded-[0.8rem] my-[1rem] hover:cursor-pointer transition-all lg:w-[40rem] ">
          Avançar
        </button>
      </div>

    </div>
  );
}
