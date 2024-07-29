import { ChevronLeft } from "lucide-react";

interface RegisterStep1Props{
    FilledRegisterStep1: () => void,
}

export function RegisterStep1({
    FilledRegisterStep1,
}:RegisterStep1Props){
    return(
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
                                <button onClick={FilledRegisterStep1} className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                                    <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                                </button>
                            </div>

                        </div>
                    </form>
    )
}