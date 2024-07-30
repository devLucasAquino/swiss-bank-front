import axios from "axios";
import { ChevronDown, ChevronLeft } from "lucide-react"
import { useState } from "react";

import { UserInput } from "../../../components/user-input";
import { BackButton } from "../../../components/back-button";
import { PrimaryButton } from "../../../components/primary-button";


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
                        <BackButton onClick={BackRegisterStep1} />
                        <div>
                            <h3 className='text-3xl font-bold font-sans'>Cadastre-se</h3>
                            <p className='font-medium text-zinc-600'>Todos os campos são obrigatórios.</p>
                        </div>
                    </div>

                    <div className='space-y-3'>
                         

                            <UserInput 
                                title="CEP"
                                subtitle="Insira seu CEP"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onBlur={handleBlur}

                            />

                            <div className="flex items-center gap-5 ">

                                <div className='flex flex-col space-y-2 flex-1'>
                                
                                    <h2 className='font-bold text-lg font-sans'>Cidade</h2>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto focus:outline-red-600 focus:border-white'
                                        value={adress?.localidade}
                                        type="text"
                                        placeholder='dd/mm/aaaa'    
                                    />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>UF</h2>
                                    <div className="flex items-center justify-between border-2 border-zinc-400 w-40 h-11 rounded-md py-6 px-5 focus:outline-red-600 focus:border-white">
                                        
                                        <input className=' p-3 w-auto'
                                            value={adress?.uf}
                                            type="text"
                                        />

                                        <ChevronDown className="size-14 text-zinc-600"/>
                                    </div>
                                </div>

                            </div>

                            <UserInput
                                title="Logradouro"
                                subtitle="Insira seu logradouro"
                                value={`${adress?.logradouro}, ${adress?.bairro}`}
                            />



                    </div>

                    <PrimaryButton onClick={FilledRegisterStep2} >Avançar</PrimaryButton>

                 </div>
             </form>
    )
}