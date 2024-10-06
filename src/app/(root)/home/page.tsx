'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/stepOne')
  }

  return (
    <main className="w-full h-screen flex justify-center ">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <Image
          src={require("../../../assets/images/logo.svg")}
          alt="Image-LogoDiet"
        />

        <h1 className="text-white font-semibold text-[4.9rem]">Easy<span className="text-greenDiet">Diet</span></h1>

        <p className="w-[25.1rem] font-medium text-[1.8rem] text-white">Sua dieta personalizada com inteligência artificial 🍴 </p>


        <button
          onClick={handleNavigation}
          className="bg-blueButton text-[1.6rem] text-white font-semibold w-[80%] h-[4.4rem] rounded-[0.8rem] mt-[2.6rem] hover:cursor-pointer hover:translate-y-[-1.0rem] transition-all">
          Gerar Dieta
        </button>




      </div>

    </main>
  );
}
