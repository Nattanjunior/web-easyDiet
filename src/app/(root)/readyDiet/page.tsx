'use client'

import { useDataStore } from "../../../../store/data"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import type { Data } from "../../../../types/data"
import { api } from "../../../../services/api"
import { useEffect, useState } from "react"

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
        setReturnApi(response.data)

      };

      handleApi();
    } catch (error) {
      console.log(error);
    }

  }, []);


  return (
    <div>
      <header className='bg-white p-10  rounded-bl-2xl rounded-br-2xl '>
        <h1 className='text-[3.5rem] font-semibold pt-[4.8rem]'>Minha Dieta</h1>
      </header>

      <div className="my-[3rem] text-white pl-[1.6rem]">
        <h1 className="font-semibold text-[2rem]">{user.name}</h1>
        <h2 className="font-semibold text-[1.6rem]">Foco: {user.objective}</h2>
        <p className="font-semibold text-[1.6rem]">refeições</p>
      </div>

      <main>

      </main>
    </div>
  )
}

