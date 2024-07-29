import { useState } from "react";

import { ChevronLeft, CircleHelp, User } from "lucide-react";

import { RegisterStep1 } from "./register-step1-modal";
import { RegisterStep2 } from "./register-step-2-modal";



export function RegisterPage(){

    const [ registerStep1, setRegisterStep1 ] = useState(true);
    const [ filledRegisterStep1, setFilledRegisterStep1 ] = useState(false);
    const [ filledRegisterStep2, setFilledRegisterStep2 ] = useState(false);


    function FilledRegisterStep1(){
        setRegisterStep1(false);
        setFilledRegisterStep1(true);
    }

    function FilledRegisterStep2(){
        setFilledRegisterStep2(true);
    }



    return(
        <div className="h-auto flex justify-center flex-col bg-gradient-to-t from-red-700 to-red-800 gap-24 bg-no-repeat bg-center">

            <div className='w-full flex justify-between mt-11 px-28'>
                <div className='flex space-x-4'>
                    <User className='size-14 text-zinc-50'/>
                    <div className='w-px h-14 bg-zinc-100'/>
                    <h3 className='text-zinc-50 font-bold text-2xl'>Swiss <br /> Wallet</h3>
                </div>

                <div>
                    <button>
                        <CircleHelp className='size-10 text-zinc-300'/>
                    </button>
                </div>
            </div>



            {registerStep1 && (
                <RegisterStep1 FilledRegisterStep1={FilledRegisterStep1} />
            )}

            {filledRegisterStep1 && (
                <RegisterStep2
                    FilledRegisterStep2={FilledRegisterStep2}
                />
            )}

            {filledRegisterStep2 && (
                <form className='w-full flex justify-center items-center'>
                    <div className='flex flex-col space-y-10 bg-white rounded-2xl w-[640px] px-9 py-14'>

                        <div className="space-y-6"> 
                            <button className='size-12 bg-red-700 rounded-full justify-start'>
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
                                    />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>Logradouro</h2>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                        type="text"
                                        placeholder='Insira seu logradouro'    
                                    />
                                </div>


                        </div>

                        <div className='flex justify-center'>
                            <button onClick={FilledRegisterStep2} className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                                <span className='text-zinc-50 font-bold text-lg'>Cadastrar</span>
                            </button>
                        </div>

                    </div>
                </form>
            )}




















            <div className='flex w-full justify-center'>
                <p className='text-zinc-50 font-semibold'>© SwissWallet - 2024</p>
            </div>
        </div>
    )
}