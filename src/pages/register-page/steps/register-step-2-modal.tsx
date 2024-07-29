import axios from "axios";
import { ChevronDown, ChevronLeft } from "lucide-react"
import { useState } from "react";

import { UserInput } from "../../../components/user-input";


interface Adress{
    cep: string,
    bairro: string,
    localidade: string,
    logradouro: string,
    uf: string,
}

interface RegisterStep2Props{
    FilledRegisterStep2: () => void,
    BackRegisterStep1: () => void,
}

export function RegisterStep2({
    FilledRegisterStep2,
    BackRegisterStep1,
}:RegisterStep2Props){


    const [ inputValue, setInputValue ] = useState('');
    const [ adress, setAdress ] = useState<Adress | undefined>();

    const handleBlur = () => {
        axios.get(`https://viacep.com.br/ws/${inputValue}/json/`).then(
            response => {setAdress(response.data)}
        )
    };

    return(
        <form className='w-full flex justify-center items-center'>
                 <div className='flex flex-col space-y-10 bg-white rounded-2xl w-[640px] px-9 py-14'>

                     <div className="space-y-6"> 
                         <button onClick={BackRegisterStep1} className='size-12 bg-red-700 rounded-full justify-start'>
                             <div className='flex justify-center'>
                                <ChevronLeft className='size-8 text-zinc-50'/>
                             </div>
                         </button>
                         <div>
                             <h3 className='text-3xl font-bold font-sans'>Cadastre-se</h3>
                             <p className='font-medium text-zinc-600'>Todos os campos são obrigatórios.</p>
                         </div>
                     </div>

                     <div className='space-y-3'>
                         
                             <div className='flex flex-col space-y-2'>
                                 <h2 className='font-bold text-lg font-sans'>CEP</h2>
                                 <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                    type="text"
                                    placeholder='Insira seu CEP'
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onBlur={handleBlur}
                                 />
                             </div>

                            <div className="flex items-center gap-5 ">

                                <div className='flex flex-col space-y-2 flex-1'>
                                    <h2 className='font-bold text-lg font-sans'>Cidade</h2>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                        value={adress?.localidade}
                                        type="text"
                                        placeholder='dd/mm/aaaa'    
                                    />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>UF</h2>
                                    <div className="flex items-center justify-between border-2 border-zinc-400 w-40 h-11 rounded-md py-6 px-5">
                                        
                                        <input className=' p-3 w-auto'
                                            value={adress?.uf}
                                            type="text"
                                        />

                                        <ChevronDown className="size-14 text-zinc-600"/>
                                    </div>
                                </div>

                            </div>

                             <div className='flex flex-col space-y-2'>
                                 <h2 className='font-bold text-lg font-sans'>Logradouro</h2>
                                 <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                     type="text"
                                     placeholder='Insira seu logradouro'
                                     value={`${adress?.logradouro}, ${adress?.bairro}`}    
                                 />
                             </div>


                     </div>

                     <div className='flex justify-center'>
                         <button onClick={FilledRegisterStep2} className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                             <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                         </button>
                     </div>

                 </div>
             </form>
    )
}