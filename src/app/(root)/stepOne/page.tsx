'use client'

import { Header } from "@/components/header/page";
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/input/page";
import { useDataStore } from "../../../../store/data";
import { useRouter } from 'next/navigation';


const schema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  weight: z.string().min(1, { message: "Peso é obrigatório" }),
  age: z.string().min(1, { message: "Idade é obrigatória" }),
  height: z.string().min(1, { message: "Altura é obrigatória" }),
})

type FormData = z.infer<typeof schema>

export default function StepOne() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const SetPageOne = useDataStore(state => state.setPageOne)

  const router = useRouter();

  const handleNavigation = (data: FormData) => {
    SetPageOne({
      name: data.name,
      age: data.age,
      height: data.height,
      weight: data.weight
    })
    router.push('/createDiet')
  }

  return (
    <div>
      <Header
        step="Passo 1"
        title="Vamos Começar"
      />

      <div className="p-[1.6rem] flex flex-col">
        <p className="text-white">Nome:</p>
        <Input
          name="name"
          control={control}
          placeholder="Digite seu nome..."
          error={errors.name?.message}
        />

        <p className="text-white">Seu peso atual:</p>
        <Input
          name="weight"
          control={control}
          placeholder="Ex: 75"
          error={errors.weight?.message}
        />

        <p className="text-white">Sua altura atual:</p>
        <Input
          name="height"
          control={control}
          placeholder="Ex: 1.80"
          error={errors.height?.message}
        />

        <p className="text-white">Sua idade atual:</p>
        <Input
          name="age"
          control={control}
          placeholder="Ex: 20"
          error={errors.age?.message}
        />

        <div className="flex justify-center">
          <button
            onClick={handleSubmit(handleNavigation)}
            className="bg-blueButton text-[1.6rem] text-white font-semibold w-[80%] h-[4.4rem] rounded-[0.8rem] mt-[2.6rem] hover:cursor-pointer hover:translate-y-[-1.0rem] transition-all">
            Avançar
          </button>
        </div>


      </div>


    </div>
  )
}