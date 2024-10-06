'use client'

import { ArrowLeft } from 'lucide-react';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  step: string;
  title: string;
}

export function Header({ step, title }: HeaderProps) {
  const router = useRouter();

  const handleNavigationBack = () => {
    router.back()
  }

  return (
    <div className='bg-white p-4 pb-9 rounded-bl-2xl rounded-br-2xl '>
      <div className='flex items-center gap-[.6rem] mb-[.8rem]'>
        <ArrowLeft size={30} onClick={handleNavigationBack} />
        <p>{step}</p>
        <LoaderCircle />
      </div>

      <h1 className='text-[2.78rem] font-semibold'>{title}</h1>
    </div>
  )

}