'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/stepOne')
  }

  return (
    <div className="w-full h-screen flex justify-center animate-opacity ">
      <div className="w-full text-center flex flex-col justify-center items-center max-sm:w-[]    md:bg-red-600 md:w-[80%] ">
        <Image
          src={require("../../../assets/images/logo.png")}
          alt="Image-LogoDiet"
          width={300}
          height={300}
          className="animate-fade sm:w-[15rem] md:w-[20rem]"
        />

        <h1 className="font-semibold text-[4.9rem] text-ColorGreen md:text-[2.8rem]">EasyDiet</h1>

        <p className="w-[25.1rem] font-medium text-[1.8rem] text-white">Sua dieta personalizada com inteligência artificial 🍴 </p>


        <button
          onClick={handleNavigation}
          className="bg-ColorGreen text-[1.6rem] text-white font-semibold w-[80%] h-[4.4rem] rounded-[0.8rem] mt-[2.6rem] hover:cursor-pointer hover:translate-y-[-1.0rem] transition-all sm:w-[60%]">
          Avançar
        </button>
      </div>

    </div>
  );
}
