'use client'

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const router = useRouter();

  const handleNavigationBack = () => {
    router.back()
  }

  return (
    <header className='bg-white p-4 pb-9 rounded-bl-2xl rounded-br-2xl sm:bg-black sm:text-white md:bg-black md:text-white'>
      <div className='flex items-center gap-[.6rem] mb-[.8rem]'>
        <ArrowLeft size={30} onClick={handleNavigationBack} className='md:w-[4rem] md:h-[4rem]'/>
        <p className='md:text-[2.5rem] text-[2rem]' onClick={handleNavigationBack} >Voltar</p>
        
      </div>

      <h1 className='text-[2.78rem] font-semibold'>{title}</h1>
    </header>
  )

}