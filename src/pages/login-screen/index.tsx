import { useState } from 'react'

import {  User, CircleHelp, ChevronLeft } from 'lucide-react'

export function LoginScreen(){

    const [ openRegister, setOpenRegister ] = useState(false);


    function openRegisterModal(){
        setOpenRegister(true);
    }

    return(
        <div className="h-screen flex justify-center flex-col bg-gradient-to-t from-red-700 to-red-800 gap-24 bg-no-repeat bg-center">

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

            <div className='w-full flex justify-center items-center flex-1'>
                <div className='flex justify-center bg-white items-center p-9 rounded-2xl w-[640px]'>
                    <div className='flex flex-col space-y-10 w-full h-full'>
                        <div className='space-y-4'>
                            <h3 className='text-3xl font-bold font-sans'>Login</h3>
                            <p className='font-medium text-zinc-600'>Bem-vindo(a) ao portal SwissWallet.</p>
                        </div>

                        <form className='flex gap-10 flex-col'>
                            <div className='flex flex-col space-y-4'>
                                <h2 className='font-bold text-lg font-sans'>Usuário</h2>
                                <div className='flex flex-col'>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                        type="text"
                                        placeholder='Insira seu e-mail ou CPF'    
                                    />
                                    <button onClick={openRegisterModal}>
                                        <span className='text-zinc-500 font-sans font-medium'>
                                            não tenho conta
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <button className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                                    <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                                </button>
                            </div>
                        </form>

                        
                    </div>
                </div>
            </div>

            <div className='flex w-full justify-center'>
                <p className='text-zinc-50 font-semibold'>© SwissWallet - 2024</p>
            </div>


            {openRegister && (
                <form className='w-full flex justify-center items-center p-9'>
                    <div className='flex flex-col space-y-10'>

                        <div>
                            <button className='size-12 bg-red-700 rounded-full justify-start'>
                                <div className='flex justify-center'>
                                    <ChevronLeft className='size-8 text-zinc-50'/>
                                </div>
                            </button>
                            <h3 className='text-3xl font-bold font-sans'>Cadastre-se</h3>
                            <p className='font-medium text-zinc-600'>Todos os campos são obrigatórios.</p>
                        </div>

                        <div className='space-y-3'>
                            

                           
                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>Nome completo</h2>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                        type="text"
                                        placeholder='Insira seu nome completo'    
                                    />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>Data de nascimento</h2>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                        type="text"
                                        placeholder='dd/mm/aaaa'    
                                    />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>E-mail</h2>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                        type="text"
                                        placeholder='Insira seu e-mail'    
                                    />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>CPF</h2>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                        type="text"
                                        placeholder='Insira seu CPF'    
                                    />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>Telefone</h2>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                        type="text"
                                        placeholder='Insira seu telefone'    
                                    />
                                </div>



                            
                        </div>

                        <div className='flex justify-center'>
                            <button className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                                <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                            </button>
                        </div>

                    </div>
                </form>
            )}
            
        </div>
    )
}