'use client'

import { Header } from "@/components/header/page";
import { Select } from "@/components/input/select";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { useRouter } from 'next/navigation';
import { useDataStore } from "../../../../store/data";

const schema = z.object({
  gender: z.string().min(1, { message: "O sexo é obrigatório" }),
  objective: z.string().min(1, { message: "O Objetivo é obrigatório" }),
  level: z.string().min(1, { message: "Selecione seu level" }),
})

type FormData = z.infer<typeof schema>;

export default function CreateDiet() {

  const { control, handleSubmit, formState: { errors} } = useForm<FormData>({
    resolver: zodResolver(schema)
  })



  const genderOptions = [
    { label: "Masculino", value: "Masculino" },
    { label: "Feminino", value: "Feminino" },
  ]

  const levelOptions = [
    { label: 'Sedentário (pouco ou nenhuma atividade física)', value: 'Sedentário' },
    { label: 'Levemente ativo (exercícios 1 a 3 vezes na semana)', value: 'Levemente ativo (exercícios 1 a 3 vezes na semana)' },
    { label: 'Moderadamente ativo (exercícios 3 a 5 vezes na semana)', value: 'Moderadamente ativo (exercícios 3 a 5 vezes na semana)' },
    { label: 'Altamente ativo (exercícios 5 a 7 dia por semana)', value: 'Altamente ativo (exercícios 5 a 7 dia por semana)' },
  ]

  const objectiveOptions = [
    { label: 'Emagrecer', value: 'Emagrecer' },
    { label: 'Hipertrofia', value: 'Hipertrofia' },
    { label: 'Hipertrofia + Definição', value: 'Hipertrofia e Definição' },
    { label: 'Definição', value: 'Definição' },
  ]

  const setPageTwo = useDataStore(state => state.setPageTwo)
  const router = useRouter();


  const handleCreateDiet = (data: FormData) => {
    setPageTwo({
      gender: data.gender,
      level: data.level,
      objective: data.objective
    });
    router.push("/readyDiet")
  }


  return (
    <div className=" sm:w-[60%] md:w-[60%] md:flex flex-col m-auto">
      <Header
        title="Finalizando Dieta"
      />

      <div className="p-3">
        <Select
          name="gender"
          control={control}
          error={errors.gender?.message}
          options={genderOptions}
          title="Sexo"
          placeholder="Selecione seu sexo..."
        />

        <Select
          name="level"
          control={control}
          error={errors.gender?.message}
          options={levelOptions}
          title="Selecione nível de atividade física"
          placeholder="Selecione seu nível..."
        />

        <Select
          name="objective"
          control={control}
          error={errors.gender?.message}
          options={objectiveOptions}
          title="Selecione seu objetivo"
          placeholder="Selecione seu objetivo..."
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit(handleCreateDiet)}
          className="bg-ColorGreen text-[1.6rem] text-white font-semibold w-[93%] h-[4.4rem] rounded-[0.8rem] my-[1.6rem] hover:cursor-pointer transition-all sm:w-[95%] lg:w-[97%]">
          Gerar Dieta
        </button>
      </div>


    </div>
  )
}