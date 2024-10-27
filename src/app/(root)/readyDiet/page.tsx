'use client'

import { useDataStore } from "../../../../store/data"
import type { Data } from "../../../../types/data"
import { api } from "../../../../services/api"
import { useEffect, useState } from "react"
import { Clock3 } from 'lucide-react';

interface ResponseData {
  data: Data
}

export default function ReadyDiet() {
  const [ReturnApi, setReturnApi] = useState<ResponseData | null>(null)

  const user = useDataStore(state => state.user);

  useEffect(() => {
    try {
      const handleApi = async () => {
        const response = await api.post<ResponseData>("/create", {
          name: user.name,
          age: user.age,
          gender: user.gender,
          height: user.height,
          weight: user.weight,
          objective: user.objective,
          level: user.level
        },
          {
            headers: { 'Content-Type': 'application/json' }
          }
        );


        console.log(response.data);
        setReturnApi(response.data);

      };

      handleApi();
    } catch (error) {
      console.log(error);
    }

  }, []);

  if (!ReturnApi) {
    return (
      <div className="flex justify-center items-center gap-[2rem] h-screen ">
        <div className="balls animate-bounce transition-all delay-100"></div>
        <div className="balls animate-bounce transition-all delay-150"></div>
        <div className="balls animate-bounce transition-all delay-200 "></div>
      </div>
    )
  }


  return (
    <div className="md:w-[100%] md:flex md:flex-col md:items-center ">
      <div className="animate-opacity md:w-[60%]">
        <header className='bg-white p-10 rounded-bl-2xl rounded-br-2xl '>
          <h1 className='text-[3.5rem] font-semibold pt-[4.8rem]'>Minha Dieta</h1>
        </header>

        <div className="mt-[3rem] text-white pl-[1.6rem]">
          <h1 className="font-semibold text-[3rem]">{user.name}</h1>
          <h2 className=" text-[2rem]"> <span className="font-semibold">Foco:</span> {user.objective}</h2>
          <p className="font-semibold text-[2.5rem] mt-[2rem]">Refeições</p>
        </div>

        <main className=" bg-white p-[1.2rem] rounded-tl-3xl rounded-tr-2xl z-50">
          {ReturnApi && (
            ReturnApi.data.refeicoes.map((refeicao) => (
              <div key={refeicao.nome} className="flex flex-col mt-[1rem] bg-ColorApi rounded-2xl p-[.8rem] text-[1.8rem]">

                <div className="flex justify-between">
                  <p className="font-bold">{refeicao.nome}</p>
                  <p className="flex items-center gap-2"> <Clock3 size={14} /> Horário: {refeicao.horario}</p>
                </div>
                <p className="my-[1.2rem] font-semibold">Alimentos</p>

                {refeicao.alimentos && (
                  <ul>
                    {refeicao.alimentos.map((alimento, index) => (
                      <li key={index}>{alimento}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}

          <div className="flex flex-col mt-[1rem] bg-ColorApi rounded-lg p-[.8rem]">
            <h1 className="font-bold text-[1.8rem]">Suplementos</h1>
            {ReturnApi && (
              ReturnApi.data.suplementos.map((suplemento, index) => (
                <ul>
                  <li key={index}>{suplemento}</li>
                </ul>
              ))
            )}
          </div>

        </main>
      </div>
    </div>

  )
}

