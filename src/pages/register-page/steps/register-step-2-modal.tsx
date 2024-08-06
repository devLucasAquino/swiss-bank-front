import axios from "axios";
import { ChevronDown } from "lucide-react"
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
    setCep: (cep: string) => void,
    setCity: (city: string) => void,
    setUf: (uf: string) => void,
    setLogradouro: (logradouro: string) => void,
    setBairro: (bairro: string) => void,
}

export function RegisterStep2({
    FilledRegisterStep2,
    BackRegisterStep1,
    setCep,
    setCity,
    setUf,
    setLogradouro,
    setBairro,
}:RegisterStep2Props){


    const [ inputValue, setInputValue ] = useState('');
    const [ adress, setAdress ] = useState<Adress | undefined>();

    const handleBlur = () => {
        axios.get(`https://viacep.com.br/ws/${inputValue}/json/`)
        .then(
            response => {
                if(response.data){
                    setAdress(response.data);
                    setCep(response.data.cep);
                    setCity(response.data.localidade);
                    setUf(response.data.uf);
                    setBairro(response.data.bairro);
                    setLogradouro(response.data.logradouro);
                }
            }
        )
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        FilledRegisterStep2(); // Chama a função passada como prop
    };

    

    return(
        <form onSubmit={handleSubmit} className='w-full flex justify-center items-center'>
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
                                        value={adress?.localidade || ''}
                                        readOnly
                                        type="text"
                                        placeholder='Insira sua cidade'    
                                    />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>UF</h2>
                                    <div className="flex items-center justify-between border-2 border-zinc-400 w-40 h-11 rounded-md py-6 px-5 focus:outline-red-600 focus:border-white">
                                        
                                        <input className=' p-3 w-auto'
                                            value={`${adress?.uf || ''}`}
                                            readOnly
                                            type="text"
                                            
                                        />

                                        <ChevronDown className="size-14 text-zinc-600"/>
                                    </div>
                                </div>

                            </div>

                            <UserInput
                                title="Logradouro"
                                subtitle="Insira seu logradouro"
                                value={`${adress?.logradouro || ''} ${adress?.bairro || ''}`}
                                readOnly
                            />



                    </div>

                    <PrimaryButton type="submit" >Avançar</PrimaryButton>

                 </div>
             </form>
    )
}